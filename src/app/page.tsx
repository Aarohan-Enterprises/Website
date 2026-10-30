import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';
import { MainLayout } from '@/components/layouts';
import { BackToTop } from '@/components/ui';
import {
  Block, SectionHead, DimensionLine, HeroFigure, ProductGrid, Pillars, ProcessSteps, CtaBand,
} from '@/components/sections';
import { featuredProducts } from '@/data/products';

// Home keeps the root layout's default title/description; this adds the canonical + og:url.
export const metadata = pageMetadata('/');

const strip: [string, string][] = [
  ['8', 'Products we run'],
  ['In writing', 'Ownership terms'],
  ['2–4 hrs', 'Reply time, Mon–Sat'],
  ['Nagpur', 'Based in India'],
];

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="border-b border-ink px-4 py-14 sm:px-8 lg:px-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="animate-fade-up">
            <h1 className="max-w-[14ch] text-5xl font-extrabold leading-[1.02] tracking-tight text-ink md:text-6xl lg:text-7xl">
              Built once. Run every day.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Software we ship, host and look after, whether it is ours or yours. Operations
              systems, analytics and everyday tools, quoted to fit your project.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary group">
                Start your project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/products" className="btn-ghost">
                See our products
              </Link>
            </div>
            <div className="mt-10">
              <DimensionLine labels={['BRIEF', 'QUOTE', 'BUILD', 'LAUNCH']} />
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.12s' }}>
            <HeroFigure />
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="border-b border-ink bg-surface">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {strip.map(([value, label]) => (
            <div key={label} className="border-ink px-3 py-6 text-center even:border-l md:border-l md:first:border-l-0">
              <dt className="text-2xl font-extrabold text-ink md:text-3xl">{value}</dt>
              <dd className="eyebrow mt-1 !text-ink-faint">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Pillars */}
      <Block>
        <SectionHead
          title="Three jobs software should do for a business"
          lead="We build for the work that keeps your company running, the answers hidden in your records, and the people who use it every day."
        />
        <Pillars />
      </Block>

      {/* Products */}
      <Block tone="band">
        <SectionHead
          title="Software from our desk, ready to use"
          lead="Tools we first built for our own work, opened up for yours. Each one does a single job properly."
        />
        <ProductGrid items={featuredProducts} />
        <div className="mt-8">
          <Link href="/products" className="link-underline inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider">
            See all eight products <ArrowRight size={15} />
          </Link>
        </div>
      </Block>

      {/* Process */}
      <Block>
        <SectionHead title="From idea to live in three steps" />
        <ProcessSteps />
        <div className="mt-10">
          <Link href="/pricing" className="link-underline inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider">
            How we price projects <ArrowRight size={15} />
          </Link>
        </div>
      </Block>

      <CtaBand />
      <BackToTop />
    </MainLayout>
  );
}
