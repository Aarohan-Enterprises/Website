'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CreditCard, X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';

interface PayNowButtonProps {
  planName: string;
  planSlug: string;
}

export function PayNowButton({ planName, planSlug }: PayNowButtonProps) {
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
            <h3 id="paynow-title" className="font-display text-2xl text-ink mb-3">Coming soon</h3>
            <p className="text-sm text-ink-soft">
              We&apos;re building a seamless online payment experience and it isn&apos;t live yet.
              To get started with <strong className="text-ink">{planName}</strong>, tell us about your
              scope and we&apos;ll send you a quote and payment details directly.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/contact?plan=${planSlug}`}
                className="flex-1 text-center bg-pine text-paper font-mono text-sm uppercase tracking-wider py-3 hover:bg-pine-dark transition-colors"
              >
                Contact us
              </Link>
              <a
                href="https://wa.me/917499462967"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-ink text-ink font-mono text-sm uppercase tracking-wider py-3 hover:bg-ink hover:text-paper transition-colors"
              >
                <WhatsAppIcon size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
