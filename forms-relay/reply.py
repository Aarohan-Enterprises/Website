"""Reply to careers applicants by email (Zoho SMTP as contact@pinecoder.in) and mark them replied in S3.

  python forms-relay/reply.py list                      # every application: when, site, video, email on resume, replied?
  python forms-relay/reply.py send <drafts.json>        # dry run: prints each email
  python forms-relay/reply.py send <drafts.json> --really

drafts.json = [{"prefix": "applications/<ts>-<id>", "to": "...", "subject": "...", "body": "..."}, ...]
Keep drafts OUT of this repo (they hold candidates' emails): Aarohan/hiring/ is the place.
SMTP settings are read at send time from the groupsync-payments Lambda's environment (same Zoho
mailbox) and never printed. A `reply.json` written next to the application stops a second send.
Zoho keeps a copy of each sent mail in Sent; the tool moves those copies into the "Intern Hiring" folder.
"""
import imaplib, io, json, re, smtplib, ssl, sys, time, zipfile
from datetime import datetime, timezone
from email.message import EmailMessage
from email.utils import make_msgid, formataddr, parseaddr
import boto3

BUCKET = "pinecoder-form-submissions-576847308300"
HIRING_FOLDER = "Intern Hiring"   # mailbox folder for everything hiring (owner's rule, 2026-11-25)
session = boto3.Session(profile_name="cmroot", region_name="ap-south-1")
s3 = session.client("s3")


def applications():
    keys = []
    for page in s3.get_paginator("list_objects_v2").paginate(Bucket=BUCKET, Prefix="applications/"):
        keys += [o["Key"] for o in page.get("Contents", [])]
    out = {}
    for k in keys:
        prefix, name = k.rsplit("/", 1)
        out.setdefault(prefix, []).append(name)
    return out


def resume_text(key):
    data = s3.get_object(Bucket=BUCKET, Key=key)["Body"].read()
    if data[:5] == b"%PDF-":
        from pypdf import PdfReader
        return " ".join((p.extract_text() or "") for p in PdfReader(io.BytesIO(data)).pages)
    if data[:4] == b"PK\x03\x04":
        xml = zipfile.ZipFile(io.BytesIO(data)).read("word/document.xml").decode("utf8", "ignore")
        return re.sub(r"<[^>]+>", " ", xml)
    return ""


def cmd_list():
    for prefix, files in sorted(applications().items()):
        sub = json.loads(s3.get_object(Bucket=BUCKET, Key=f"{prefix}/submission.json")["Body"].read())
        resume = next((f for f in files if f not in ("submission.json", "reply.json")), None)
        emails = sorted(set(re.findall(r"[\w.+-]+@[\w-]+\.[\w.]+", resume_text(f"{prefix}/{resume}")))) if resume else []
        print(f"{prefix}\n  {sub['receivedAt']}  site={sub.get('website')}  video={sub.get('video', '-')}  code={sub.get('code')}\n"
              f"  resume={resume}  emails={emails}  replied={'reply.json' in files}")


def smtp_settings():
    env = session.client("lambda").get_function_configuration(FunctionName="groupsync-payments")["Environment"]["Variables"]
    # SMTP_FROM there is "GroupSync <contact@...>": keep only the address, or Zoho refuses the From (550 relay).
    sender = parseaddr(env.get("SMTP_FROM") or "")[1] or env["SMTP_USER"]
    return env["SMTP_HOST"], int(env.get("SMTP_PORT", 465)), env["SMTP_USER"], env["SMTP_PASSWORD"], sender


def cmd_send(path, really):
    drafts = json.load(open(path, encoding="utf8"))
    apps = applications()
    conn = None
    for d in drafts:
        if d["prefix"] not in apps:
            print("SKIP (no such application):", d["prefix"]); continue
        if "reply.json" in apps[d["prefix"]]:
            print("SKIP (already replied):", d["prefix"], d["to"]); continue
        print(f"--- {d['prefix']}\nTo: {d['to']}\nSubject: {d['subject']}\n\n{d['body']}\n")
        if not really: continue
        if conn is None:
            host, port, user, pw, sender = smtp_settings()
            conn = smtplib.SMTP_SSL(host, port, context=ssl.create_default_context(), timeout=30)
            conn.login(user, pw)
        m = EmailMessage()
        m["From"] = formataddr(("Aarohan Enterprises", sender))
        m["To"] = d["to"]
        m["Reply-To"] = "contact@pinecoder.in"
        m["Subject"] = d["subject"]
        m["Message-ID"] = make_msgid(domain="pinecoder.in")
        m.set_content(d["body"])
        conn.send_message(m, from_addr=user)
        d["_mid"] = m["Message-ID"]
        s3.put_object(Bucket=BUCKET, Key=f"{d['prefix']}/reply.json", ContentType="application/json",
                      Body=json.dumps({"sentAt": datetime.now(timezone.utc).isoformat(), "to": d["to"],
                                       "subject": d["subject"], "messageId": m["Message-ID"]}, indent=1))
        print("SENT", d["to"])
    if conn:
        conn.quit()
        file_sent([d.get("_mid") for d in drafts if d.get("_mid")])
    if not really: print("(dry run: add --really to send)")


def file_sent(message_ids):
    """Move Zoho's Sent copies of these messages into the hiring folder (Zoho files them a moment after sending)."""
    host, _, user, pw, _ = smtp_settings()
    M = imaplib.IMAP4_SSL(host.replace("smtp", "imap"), 993, ssl_context=ssl.create_default_context())
    M.login(user, pw)
    M.select('"Sent"')
    for mid in message_ids:
        for _ in range(10):
            typ, ids = M.uid("SEARCH", None, "HEADER", "Message-ID", mid)
            if ids[0]: break
            time.sleep(2)
        if ids[0]:
            M.uid("MOVE", ids[0].replace(b" ", b","), f'"{HIRING_FOLDER}"')
            print("filed in", HIRING_FOLDER, mid)
        else:
            print("not found in Sent (left as is):", mid)
    M.logout()


if __name__ == "__main__":
    if len(sys.argv) >= 2 and sys.argv[1] == "list": cmd_list()
    elif len(sys.argv) >= 3 and sys.argv[1] == "send": cmd_send(sys.argv[2], "--really" in sys.argv)
    else: print(__doc__)
