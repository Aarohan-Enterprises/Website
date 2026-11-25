'use client';

import { useRef, useState } from 'react';
import { ArrowRight, Check, Loader2, Paperclip } from 'lucide-react';
import { postForm, fileToBase64 } from '@/lib/forms';

const MAX_BYTES = 4 * 1024 * 1024;
const ACCEPT = '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

export function ApplyForm() {
  const [website, setWebsite] = useState('');
  const [code, setCode] = useState('');
  const [company, setCompany] = useState(''); // honeypot: hidden from people
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const pick = (f: File | null) => {
    setError('');
    if (f && f.size > MAX_BYTES) {
      setFile(null);
      if (fileRef.current) fileRef.current.value = '';
      setError('Your resume is over 4 MB. Please choose a smaller PDF.');
      return;
    }
    setFile(f);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!file) {
      setError('Please attach your resume.');
      return;
    }
    setBusy(true);
    const data = await fileToBase64(file).catch(() => '');
    const r = await postForm({ kind: 'application', website, code, company, resume: { name: file.name, type: file.type, data } });
    setBusy(false);
    if (r.ok) setSent(true);
    else setError(r.error || 'Something went wrong.');
  };

  if (sent) {
    return (
      <div className="py-10 text-center" role="status">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center border-2 border-ink">
          <Check size={26} className="text-gold" />
        </div>
        <h3 className="mb-2 text-2xl font-extrabold text-ink">Application sent</h3>
        <p className="mx-auto max-w-md text-ink-soft">
          We will open your site, watch the video and read your note. If you are shortlisted, we
          will contact you using the details on your resume.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="apply-website" className="eyebrow mb-2 block !text-ink-soft">Your website link *</label>
        <input
          id="apply-website"
          type="url"
          inputMode="url"
          required
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="field"
          placeholder="https://yourname.github.io"
          autoComplete="url"
        />
      </div>
      <div>
        <label htmlFor="apply-code" className="eyebrow mb-2 block !text-ink-soft">Source code link (optional)</label>
        <input
          id="apply-code"
          type="url"
          inputMode="url"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="field"
          placeholder="https://github.com/yourname/site"
        />
      </div>
      <div>
        <label htmlFor="apply-resume" className="eyebrow mb-2 block !text-ink-soft">Resume * (PDF or Word, up to 4 MB)</label>
        <label
          htmlFor="apply-resume"
          className="field flex cursor-pointer items-center gap-3 hover:bg-paper"
        >
          <Paperclip size={16} className="shrink-0 text-gold" />
          <span className={`min-w-0 truncate ${file ? 'text-ink' : 'text-ink-faint'}`}>
            {file ? file.name : 'Choose your resume'}
          </span>
        </label>
        <input
          ref={fileRef}
          id="apply-resume"
          type="file"
          accept={ACCEPT}
          onChange={(e) => pick(e.target.files?.[0] || null)}
          className="sr-only"
        />
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="apply-company">Company</label>
        <input id="apply-company" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>

      {error && (
        <p role="alert" className="border border-ink bg-gold-tint px-3 py-2 text-sm text-ink">
          {error}
        </p>
      )}

      <button type="submit" disabled={busy || !website.trim()} className="btn-primary w-full disabled:opacity-50">
        {busy ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Submit application <ArrowRight size={15} />
          </>
        )}
      </button>
      <p className="text-xs text-ink-faint">
        No other details needed; we take your name and contact from your resume.
      </p>
    </form>
  );
}
