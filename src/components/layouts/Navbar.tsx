'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SectionLink } from '@/components/ui/SectionLink';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { Ticker } from '@/components/ui';

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    const base = href.split('#')[0];
    if (base === '/') return pathname === '/';
    return pathname.startsWith(base);
  };

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm">
      {/* Masthead */}
      <div className="border-b border-ink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="group flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-mark.png" alt="Aarohan Enterprises" className="h-9 w-9" />
              <span className="font-display text-2xl font-semibold tracking-tight text-ink">
                Aarohan
              </span>
              <span className="hidden sm:inline font-display text-2xl text-ink-soft">Enterprises</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <SectionLink
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                    isActive(link.href)
                      ? 'text-pine'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {link.label}
                </SectionLink>
              ))}
              <Link href="/contact" className="btn-primary !py-2.5 !px-5">
                Start a project
              </Link>
            </nav>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden text-ink"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Signature ticker tape */}
      <Ticker />

      {isMobileOpen && (
        <div className="md:hidden border-b border-ink bg-paper animate-slide-down">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <SectionLink
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`block py-2 font-mono text-sm uppercase tracking-widest ${
                  isActive(link.href) ? 'text-pine' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {link.label}
              </SectionLink>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="btn-primary w-full mt-3"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
