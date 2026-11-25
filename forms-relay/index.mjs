// pinecoder-forms: relays pinecoder.in form submissions to Telegram (@AarohanEnt_ClientReg_Bot).
// Runs as a Lambda Function URL so the bot token never reaches the browser.
// Env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID. Node 20+, no dependencies.
//
// POST JSON:
//   { kind: 'contact', name, email, phone, service, model?, message? }
//   { kind: 'application', website, code?, resume: { name, type, data /* base64 */ } }
// Both accept `company` as a honeypot: humans leave it empty.

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT = process.env.TELEGRAM_CHAT_ID;
const TG = `https://api.telegram.org/bot${TOKEN}`;

export const MAX_RESUME_BYTES = 4 * 1024 * 1024;

// Per-container throttle: a light brake on scripted floods, not real auth.
const hits = new Map();
function throttled(ip, now = Date.now()) {
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 6;
}

const clip = (v, n) => String(v ?? '').trim().slice(0, n);

export function cleanUrl(v) {
  const s = clip(v, 300);
  if (!s) return '';
  try {
    const u = new URL(/^https?:\/\//i.test(s) ? s : `https://${s}`);
    if (!/^https?:$/.test(u.protocol) || !u.hostname.includes('.')) return null;
    return u.toString();
  } catch {
    return null;
  }
}

/** Identify the resume by its bytes, not its claimed name or type. */
export function resumeKind(buf) {
  if (buf.length >= 5 && buf.subarray(0, 5).toString('latin1') === '%PDF-') return { ext: 'pdf', type: 'application/pdf' };
  if (buf.length >= 4 && buf[0] === 0x50 && buf[1] === 0x4b && buf[2] === 0x03 && buf[3] === 0x04)
    return { ext: 'docx', type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' };
  if (buf.length >= 8 && buf.subarray(0, 8).equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1])))
    return { ext: 'doc', type: 'application/msword' };
  return null;
}

export function safeFilename(name, ext) {
  const base = clip(name, 120).replace(/\.[^.]*$/, '').replace(/[^\w ()-]+/g, '').trim() || 'resume';
  return `${base.slice(0, 80)}.${ext}`;
}

async function tg(method, body) {
  const r = await fetch(`${TG}/${method}`, { method: 'POST', body });
  const j = await r.json().catch(() => ({}));
  if (!j.ok) throw new Error(`telegram ${method}: ${r.status} ${j.description || ''}`);
}

function sendText(text) {
  const fd = new FormData();
  fd.append('chat_id', CHAT);
  fd.append('text', text.slice(0, 4000));
  fd.append('disable_web_page_preview', 'true');
  return tg('sendMessage', fd);
}

export function validate(body) {
  if (!body || typeof body !== 'object') return { error: 'Bad request.' };
  if (clip(body.company, 200)) return { spam: true };

  if (body.kind === 'contact') {
    const f = {
      name: clip(body.name, 120), email: clip(body.email, 200), phone: clip(body.phone, 20),
      service: clip(body.service, 120), model: clip(body.model, 120), message: clip(body.message, 3000),
    };
    if (!f.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) || !/^\d{10}$/.test(f.phone) || !f.service)
      return { error: 'Please fill in name, a valid email, a 10-digit phone number and what you need.' };
    return { kind: 'contact', f };
  }

  if (body.kind === 'application') {
    const website = cleanUrl(body.website);
    const code = cleanUrl(body.code);
    if (!website) return { error: 'Please enter the full link to your website.' };
    if (code === null) return { error: 'The source code link does not look like a web address.' };
    const r = body.resume || {};
    const buf = Buffer.from(String(r.data || ''), 'base64');
    if (!buf.length) return { error: 'Please attach your resume.' };
    if (buf.length > MAX_RESUME_BYTES) return { error: 'Your resume is over 4 MB. Please send a smaller PDF.' };
    const k = resumeKind(buf);
    if (!k) return { error: 'Your resume must be a PDF or Word file.' };
    return { kind: 'application', website, code, buf, k, filename: safeFilename(r.name, k.ext) };
  }
  return { error: 'Bad request.' };
}

const res = (statusCode, obj) => ({
  statusCode,
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(obj),
});

export async function handler(event) {
  if (event.requestContext?.http?.method !== 'POST') return res(405, { ok: false, error: 'POST only.' });
  const ip = event.requestContext?.http?.sourceIp || '?';
  if (throttled(ip)) return res(429, { ok: false, error: 'Too many submissions. Please try again in a few minutes.' });

  let body;
  try {
    const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : event.body || '';
    body = JSON.parse(raw);
  } catch {
    return res(400, { ok: false, error: 'Bad request.' });
  }

  const v = validate(body);
  if (v.spam) return res(200, { ok: true });
  if (v.error) return res(400, { ok: false, error: v.error });

  try {
    if (v.kind === 'contact') {
      const f = v.f;
      await sendText(
        `📩 New contact form submission\n\n👤 ${f.name}\n📧 ${f.email}\n📱 ${f.phone}\n🛠 ${f.service}\n📦 ${f.model || 'Not specified'}\n\n💬 ${f.message || 'No message'}\n\n— pinecoder.in/contact/`,
      );
    } else {
      const caption =
        `🧑‍💻 SDE intern application\n\n🌐 Website: ${v.website}\n💻 Code: ${v.code || 'not given'}\n📄 Resume: ${v.filename}\n\n— pinecoder.in/careers/`;
      const fd = new FormData();
      fd.append('chat_id', CHAT);
      fd.append('caption', caption.slice(0, 1024));
      fd.append('document', new Blob([v.buf], { type: v.k.type }), v.filename);
      await tg('sendDocument', fd);
    }
    console.log(JSON.stringify({ kind: v.kind, ip }));
    return res(200, { ok: true });
  } catch (e) {
    console.error(e.message);
    return res(502, { ok: false, error: 'We could not deliver your submission. Please email contact@pinecoder.in.' });
  }
}
