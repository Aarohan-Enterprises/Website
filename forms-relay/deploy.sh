#!/usr/bin/env bash
# Deploy/update the pinecoder-forms relay Lambda + public Function URL.
# Account 576847308300 (profile cmroot), ap-south-1. The bot token and chat id are read from
# the repo's GitHub Actions variables (gh) and written straight into the Lambda env: never echoed.
# Usage: bash forms-relay/deploy.sh      (from the Website repo root)
set -euo pipefail
export MSYS_NO_PATHCONV=1 AWS_PROFILE=cmroot AWS_REGION=ap-south-1 AWS_PAGER=""
FN=pinecoder-forms
ROLE=pinecoder-forms-lambda
BUCKET=pinecoder-form-submissions-576847308300   # private archive of every submission (resumes = personal data)
KEEP_DAYS=365                                     # lifecycle: objects auto-delete after this many days
# Windows paths for native tools (MSYS path conversion is off above).
winpath() { if command -v cygpath >/dev/null; then cygpath -m "$1"; else echo "$1"; fi; }
HERE="$(winpath "$(cd "$(dirname "$0")" && pwd)")"
TMP="$(winpath "$(mktemp -d)")"; trap 'rm -rf "$TMP"' EXIT

(cd "$HERE" && node test.mjs)

if ! aws iam get-role --role-name "$ROLE" >/dev/null 2>&1; then
  aws iam create-role --role-name "$ROLE" --assume-role-policy-document \
    '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}' >/dev/null
  aws iam attach-role-policy --role-name "$ROLE" --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
  sleep 10   # let IAM propagate before Lambda assumes the role
fi
ROLE_ARN=$(aws iam get-role --role-name "$ROLE" --query Role.Arn --output text)

# Private archive bucket: no public access, encrypted, auto-expiring.
if ! aws s3api head-bucket --bucket "$BUCKET" >/dev/null 2>&1; then
  aws s3api create-bucket --bucket "$BUCKET" --create-bucket-configuration LocationConstraint="$AWS_REGION" >/dev/null
fi
aws s3api put-public-access-block --bucket "$BUCKET" --public-access-block-configuration   BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
aws s3api put-bucket-encryption --bucket "$BUCKET" --server-side-encryption-configuration   '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'
aws s3api put-bucket-lifecycle-configuration --bucket "$BUCKET" --lifecycle-configuration   "{\"Rules\":[{\"ID\":\"expire\",\"Status\":\"Enabled\",\"Filter\":{\"Prefix\":\"\"},\"Expiration\":{\"Days\":$KEEP_DAYS}}]}"
aws iam put-role-policy --role-name "$ROLE" --policy-name archive-write --policy-document   "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Action\":\"s3:PutObject\",\"Resource\":\"arn:aws:s3:::$BUCKET/*\"}]}"

# TURNSTILE_SECRET: from $TURNSTILE_SECRET_FILE (the JSON Cloudflare returned when the widget was made) when given,
# otherwise carried over from the live function, so a plain redeploy never drops the captcha.
BUCKET="$BUCKET" FN="$FN" python - "$TMP/env.json" <<'PY'
import json, os, subprocess, sys
get = lambda n: subprocess.check_output(["gh", "variable", "get", n], text=True).strip()
secret = ""
if os.environ.get("TURNSTILE_SECRET_FILE"):
    secret = json.load(open(os.environ["TURNSTILE_SECRET_FILE"]))["result"]["secret"]
else:
    try:
        cur = json.loads(subprocess.check_output(["aws", "lambda", "get-function-configuration", "--function-name", os.environ["FN"],
                                                  "--query", "Environment.Variables", "--output", "json"], text=True)) or {}
        secret = cur.get("TURNSTILE_SECRET", "")
    except subprocess.CalledProcessError:
        pass
if not secret:
    sys.exit("No TURNSTILE_SECRET: pass TURNSTILE_SECRET_FILE=<widget json> on the first deploy.")
json.dump({"Variables": {"TELEGRAM_BOT_TOKEN": get("NEXT_PUBLIC_TELEGRAM_BOT_TOKEN"),
                         "TELEGRAM_CHAT_ID": get("NEXT_PUBLIC_TELEGRAM_CHAT_ID"),
                         "ARCHIVE_BUCKET": os.environ["BUCKET"],
                         "TURNSTILE_SECRET": secret}}, open(sys.argv[1], "w"))
PY

(cd "$HERE" && python -c "import zipfile; z=zipfile.ZipFile(r'$TMP/fn.zip','w',zipfile.ZIP_DEFLATED); z.write('index.mjs'); z.close()")

if aws lambda get-function --function-name "$FN" >/dev/null 2>&1; then
  aws lambda update-function-code --function-name "$FN" --zip-file "fileb://$TMP/fn.zip" >/dev/null
  aws lambda wait function-updated --function-name "$FN"
  aws lambda update-function-configuration --function-name "$FN" --environment "file://$TMP/env.json" >/dev/null
else
  aws lambda create-function --function-name "$FN" --runtime nodejs20.x --handler index.handler \
    --role "$ROLE_ARN" --zip-file "fileb://$TMP/fn.zip" --timeout 20 --memory-size 256 \
    --environment "file://$TMP/env.json" --description "pinecoder.in forms -> Telegram" >/dev/null
fi
aws lambda wait function-updated --function-name "$FN"

CORS='{"AllowOrigins":["https://pinecoder.in","http://localhost:3000","http://localhost:8765"],"AllowMethods":["POST"],"AllowHeaders":["content-type"],"MaxAge":86400}'
if aws lambda get-function-url-config --function-name "$FN" >/dev/null 2>&1; then
  aws lambda update-function-url-config --function-name "$FN" --auth-type NONE --cors "$CORS" >/dev/null
else
  aws lambda create-function-url-config --function-name "$FN" --auth-type NONE --cors "$CORS" >/dev/null
  # Public Function URLs need BOTH statements since Oct 2025, or every request 403s.
  aws lambda add-permission --function-name "$FN" --statement-id url-public --action lambda:InvokeFunctionUrl \
    --principal '*' --function-url-auth-type NONE >/dev/null
  aws lambda add-permission --function-name "$FN" --statement-id url-invoke --action lambda:InvokeFunction \
    --principal '*' >/dev/null
fi
aws lambda get-function-url-config --function-name "$FN" --query FunctionUrl --output text
