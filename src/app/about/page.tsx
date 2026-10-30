import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { MainLayout } from '@/components/layouts';
import { BackToTop } from '@/components/ui';
import { LinkedInIcon } from '@/components/ui/BrandIcons';
import { Block, SectionHead, CtaBand } from '@/components/sections';
import { credentials, stages, coreValues, whyChooseUs, founder } from '@/data/about';

export const metadata: Metadata = pageMetadata('/about/', {
  title: 'About Us - A Software Company Built by Engineers',
  description:
    'Aarohan Enterprises began by automating trading strategies and now builds business operations systems, analytics and SaaS products. Meet the team and founder Chaitanya Murarka.',
});

export default function AboutPage() {
  return (
    <MainLayout>
      <Block>
        <SectionHead as="h1" title="Built by engineers, used by us first." />

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div className="max-w-prose space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Aarohan Enterprises began by turning trading strategies into running code: Pine Script
              indicators, Python execution stacks and screeners for traders who knew their edge but
              not how to automate it.
            </p>
            <p>
              The tools we wrote for our own desk, an alert relay, indicator presets and a
              volatility screener, turned out to be useful to other people. We opened them up, and
              they became our first products.
            </p>
            <p>
              Today we build software for businesses whose daily operations are stuck in
              spreadsheets, chat threads and manual steps: operations systems first, then the
              analytics and conveniences that make them pleasant to use. We run eight products of
              our own, which is why we know what it takes to keep software working long after
              launch.
            </p>
            <ul className="flex flex-wrap gap-2 pt-2">
              {credentials.map((c) => (
                <li key={c} className="border border-ink px-3 py-1.5 font-mono text-xs text-ink">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid border-2 border-ink bg-surface sm:grid-cols-[110px_1fr]">
            <div className="flex min-h-[110px] items-center justify-center border-b-2 border-ink bg-paper text-4xl font-extrabold text-ink sm:border-b-0 sm:border-r-2" aria-hidden="true">
              CM
            </div>
            <div className="p-5">
              <h3 className="inline text-xl font-extrabold text-ink">{founder.name}</h3>
              <span className="ml-2 inline-block bg-ink px-2 py-0.5 align-middle font-mono text-[10.5px] uppercase tracking-widest text-paper">
                {founder.badge}
              </span>
              <p className="eyebrow mb-3 mt-1 !text-ink-faint">{founder.title}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{founder.bio}</p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider"
              >
                <LinkedInIcon size={15} /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Block>

      <Block tone="band">
        <SectionHead title="How we got here" />
        <ol className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <li key={s.title} className="relative border-t-[3px] border-ink pt-5">
              <span className="absolute -top-2 left-0 h-3 w-3 rounded-full bg-gold-bright" aria-hidden="true" />
              <span className="font-mono text-xs text-gold">STAGE {i + 1}</span>
              <h3 className="mt-1 text-lg font-extrabold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
            </li>
          ))}
        </ol>
      </Block>

      <Block>
        <div className="parts grid-cols-1 md:grid-cols-2">
          <div className="part">
            <p className="eyebrow mb-3">Mission</p>
            <p className="text-xl leading-snug text-ink">
              Make dependable software affordable for Indian businesses and professionals, with
              tools that remove manual work instead of adding to it.
            </p>
          </div>
          <div className="part">
            <p className="eyebrow mb-3">Vision</p>
            <p className="text-xl leading-snug text-ink">
              Be the software company people in India call first when a process needs to become a
              product.
            </p>
          </div>
        </div>

        <h2 className="eyebrow mb-4 mt-16">What guides us</h2>
        <div className="parts grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((v) => (
            <div key={v.title} className="part">
              <h3 className="text-lg font-extrabold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{v.description}</p>
            </div>
          ))}
        </div>

        <h2 className="eyebrow mb-4 mt-16">Why clients choose us</h2>
        <div className="parts grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((v) => (
            <div key={v.title} className="part">
              <h3 className="text-lg font-extrabold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{v.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-soft">
          Curious about the details? Read <Link href="/pricing" className="link-underline">how we price and who owns what</Link>.
        </p>
      </Block>

      <CtaBand />
      <BackToTop />
    </MainLayout>
  );
}
