import type { Metadata } from 'next';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts';
import { BackToTop } from '@/components/ui';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';
import { tools } from '@/data/tools';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tools - Software We Built for Our Own Desk',
  description:
    'Our tools: AlertSync, Loadout, Volatility Screener, GroupSync, PDF Editor, Section63, and Meridian. Software we built for our own workflow, opened up for yours.',
  alternates: { canonical: 'https://pinecoder.in/tools/' },
};

export default function ToolsPage() {
  return (
    <MainLayout simpleFooter>
      {/* Hero */}
      <section className="border-b border-ink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 max-w-3xl">
          <p className="eyebrow mb-4">Our tools</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-ink">
            Tools from <span className="accent-ink">our desk.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-soft">
            Software we built for our own workflow, opened up for yours. Each one does a
            single job properly — most are free, none get in your way.
          </p>
        </div>
      </section>

      {/* Tools grid */}
      <section id="tools" className="bg-band border-b border-ink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-px bg-rule border border-rule">
            {tools.map((t) => {
              const Icon = t.icon;
              return (
                <a
                  key={t.name}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-surface p-7 flex flex-col hover:bg-pine-tint transition-colors"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon size={22} className="text-pine" strokeWidth={1.5} />
                    <ArrowUpRight size={18} className="text-ink-faint group-hover:text-pine transition-colors" />
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 mb-2">
                    <h3 className="font-display text-xl text-ink">{t.name}</h3>
                    <span className="eyebrow text-ink-faint whitespace-nowrap">{t.tag}</span>
                  </div>
                  <p className="text-sm text-ink-soft mb-5">{t.description}</p>
                  <ul className="mt-auto space-y-2">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 font-mono text-xs text-ink-soft">
                        <Check size={13} className="text-pine" /> {f}
                      </li>
                    ))}
                  </ul>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-ink bg-ink text-paper">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="eyebrow text-paper/60 mb-5">Need something custom?</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-paper max-w-2xl mx-auto">
            Bring us your strategy. We&apos;ll bring the code.
          </h2>
          <p className="mt-5 text-paper/70 max-w-xl mx-auto">
            Free consultation, no obligations. Most projects start within a week.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-paper text-ink font-mono text-sm uppercase tracking-wider px-7 py-4 hover:bg-pine hover:text-paper transition-colors"
            >
              Start your project <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/917499462967"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-paper/40 text-paper font-mono text-sm uppercase tracking-wider px-7 py-4 hover:border-paper transition-colors"
            >
              <WhatsAppIcon size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <BackToTop />
    </MainLayout>
  );
}
