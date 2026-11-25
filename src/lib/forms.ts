/**
 * Site forms post to the `pinecoder-forms` Lambda (source in forms-relay/), which relays them
 * to Telegram (@AarohanEnt_ClientReg_Bot). The bot token lives only in the Lambda's env, never
 * in this bundle. This URL is public by design; CORS on it allows https://pinecoder.in.
 */
export const FORMS_URL = 'https://cx3geulnndnx3vnyhi227pbu6i0xship.lambda-url.ap-south-1.on.aws/';

export const FALLBACK_ERROR = 'We could not send this. Please email contact@pinecoder.in or message us on WhatsApp.';

export async function postForm(payload: Record<string, unknown>): Promise<{ ok: boolean; error?: string }> {
  try {
    const r = await fetch(FORMS_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const j = await r.json().catch(() => ({}));
    if (r.ok && j.ok) return { ok: true };
    return { ok: false, error: j.error || FALLBACK_ERROR };
  } catch {
    return { ok: false, error: FALLBACK_ERROR };
  }
}

/** File -> base64 (no data: prefix). */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(String(fr.result).split(',')[1] || '');
    fr.onerror = () => reject(fr.error);
    fr.readAsDataURL(file);
  });
}
