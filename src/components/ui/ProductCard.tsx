'use client';

import { useState, type ReactNode } from 'react';

const INDIA_ZONES = ['Asia/Kolkata', 'Asia/Calcutta'];

function inIndia(): boolean {
  try {
    return INDIA_ZONES.includes(Intl.DateTimeFormat().resolvedOptions().timeZone);
  } catch {
    return false;
  }
}

interface ProductCardProps {
  href: string;
  name: string;
  internationalOnly?: boolean;
  className?: string;
  children: ReactNode;
}

export function ProductCard({ href, name, internationalOnly, className, children }: ProductCardProps) {
  const [open, setOpen] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    if (internationalOnly && inIndia()) {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <>
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
        {children}
      </a>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="intl-only-title"
          onClick={() => setOpen(false)}
        >
          <div className="bg-surface border border-rule max-w-md w-full p-8" onClick={(e) => e.stopPropagation()}>
            <p className="eyebrow mb-3">International only</p>
            <h3 id="intl-only-title" className="font-display text-2xl text-ink mb-3">
              {name} is an international product
            </h3>
            <p className="text-sm text-ink-soft mb-6">
              Payments from India aren&apos;t supported for {name} — paid plans are billed in USD through PayPal
              for customers outside India.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-pine text-white text-sm"
              >
                Continue anyway
              </a>
              <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 border border-rule text-sm text-ink">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
