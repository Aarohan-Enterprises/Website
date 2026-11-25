#!/usr/bin/env bash
# Deploy/update the pinecoder-forms relay Lambda + public Function URL.
# Account 576847308300 (profile cmroot), ap-south-1. The bot token and chat id are read from
# the repo's GitHub Actions variables (gh) and written straight into the Lambda env: never echoed.
# Usage: bash forms-relay/deploy.sh      (from the Website repo root)
set -euo pipefail
export MSYS_NO_PATHCONV=1 AWS_PROFILE=cmroot AWS_REGION=ap-south-1 AWS_PAGER=""
FN=pinecoder-forms
ROLE=pinecoder-forms-lambda
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

python - "$TMP/env.json" <<'PY'
import json, subprocess, sys
get = lambda n: subprocess.check_output(["gh", "variable", "get", n], text=True).strip()
json.dump({"Variables": {"TELEGRAM_BOT_TOKEN": get("NEXT_PUBLIC_TELEGRAM_BOT_TOKEN"),
                         "TELEGRAM_CHAT_ID": get("NEXT_PUBLIC_TELEGRAM_CHAT_ID")}}, open(sys.argv[1], "w"))
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
