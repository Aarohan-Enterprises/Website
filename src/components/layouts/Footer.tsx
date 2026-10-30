import Link from 'next/link';
import { footerLegalLinks } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t-2 border-ink bg-surface px-4 py-4 sm:px-6">
      <div className="flex items-center gap-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-mark.png" alt="" className="h-6 w-6" />
        <span className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} Aarohan Enterprises · pinecoder.in
        </span>
      </div>
      <nav className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs uppercase tracking-wider" aria-label="Legal">
        {footerLegalLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-ink-faint transition-colors hover:text-ink">
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
