'use client';

import { useState } from 'react';
import { CreditCard, X } from 'lucide-react';

export function PayNowButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-center gap-2 font-mono text-sm uppercase tracking-wider py-3.5 bg-ink text-paper hover:bg-pine transition-colors"
      >
        <CreditCard size={15} /> Pay now
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="paynow-title"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-md bg-surface border border-ink p-8" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-ink-soft hover:text-ink"
            >
              <X size={18} />
            </button>
            <p className="eyebrow mb-3">Online payments</p>
            <h3 id="paynow-title" className="font-display text-2xl text-ink">Payment gateway coming soon</h3>
          </div>
        </div>
      )}
    </>
  );
}
