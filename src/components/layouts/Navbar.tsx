'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navigation';

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Aarohan Enterprises home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.png" alt="" className="h-9 w-9" />
          <span className="text-xl font-extrabold tracking-tight text-ink">
            Aarohan <span className="font-normal text-ink-soft">Enterprises</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`font-mono text-xs uppercase tracking-wider transition-colors ${
                isActive(link.href) ? 'text-gold underline underline-offset-8' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !px-4 !py-2 font-mono text-xs uppercase tracking-wider">
            Get started
          </Link>
        </nav>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="animate-slide-down border-t border-ink bg-paper md:hidden">
          <div className="space-y-1 px-4 py-4">
            {[...navLinks, { label: 'Contact', href: '/contact' }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`block py-2 font-mono text-sm uppercase tracking-wider ${
                  isActive(link.href) ? 'text-gold' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
