import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';
import { products } from '@/data/products';
import type { Product } from '@/data/products';
import { clientWork } from '@/data/work';
import { services, pillars } from '@/data/services';
import { engagementModels, priceVariables, processSteps } from '@/data/pricing';

export const WA_LINK = 'https://wa.me/917499462967';

/** Standard sheet section: a bordered band with a consistent gutter. */
export function Block({
  id,
  children,
  tone = 'paper',
  className = '',
}: {
  id?: string;
  children: React.ReactNode;
  tone?: 'paper' | 'band';
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-b border-ink px-4 py-14 sm:px-8 md:py-20 lg:px-14 ${
        tone === 'band' ? 'bg-band' : ''
      } ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHead({
  title,
  lead,
  as: Tag = 'h2',
}: {
  title: string;
  lead?: string;
  as?: 'h1' | 'h2';
}) {
  return (
    <header className="max-w-3xl">
      <Tag className="text-3xl font-extrabold leading-tight text-ink md:text-4xl">{title}</Tag>
      {lead && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{lead}</p>}
    </header>
  );
}

export function DimensionLine({ labels }: { labels: string[] }) {
  return (
    <div className="dim-line" aria-hidden="true">
      {labels.map((l, i) => (
        <span key={l} className="contents">
          <span>{l}</span>
          {i < labels.length - 1 && <i />}
        </span>
      ))}
    </div>
  );
}

/** Photo in a blueprint frame: grayscale + gold tint, corner marks, two labels. */
export function HeroFigure() {
  return (
    <figure className="min-w-0 border-2 border-ink bg-surface shadow-[6px_6px_0_0_#0F2A52]">
      <div className="relative overflow-hidden">
        <Image
          src="/images/dashboard.jpg"
          alt="An operations dashboard with charts and totals open on a laptop"
          width={1200}
          height={855}
          priority
          className="block aspect-[4/3.3] w-full object-cover grayscale contrast-105"
        />
        <span className="pointer-events-none absolute inset-0 bg-gold mix-blend-color opacity-55" />
        <span className="absolute left-[8%] top-[10%] max-w-[70%] border-[1.5px] border-ink bg-paper px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-ink">
          Live status
        </span>
        <span className="absolute left-[40%] top-[76%] max-w-[70%] border-[1.5px] border-ink bg-paper px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-ink">
          Reports that send themselves
        </span>
        {['left-2 top-2 border-l-2 border-t-2', 'right-2 top-2 border-r-2 border-t-2', 'bottom-2 left-2 border-b-2 border-l-2', 'bottom-2 right-2 border-b-2 border-r-2'].map(
          (c) => (
            <b key={c} className={`absolute h-4 w-4 border-paper ${c}`} aria-hidden="true" />
          ),
        )}
      </div>
      <figcaption className="border-t-2 border-ink px-4 py-2.5 font-mono text-xs text-ink-soft">
        Operations and analytics on one screen
      </figcaption>
    </figure>
  );
}

export function ProductGrid({ items = products }: { items?: Product[] }) {
  return (
    <div className="parts mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((p) => {
        const Icon = p.icon;
        return (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="part group"
          >
            <div className="mb-5 flex items-center justify-between">
              <Icon size={22} className="text-gold" strokeWidth={1.5} />
              <ArrowUpRight size={18} className="text-ink-faint transition-colors group-hover:text-gold" />
            </div>
            <h3 className="text-xl font-extrabold text-ink">{p.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.description}</p>
            <div className="mt-auto pt-5">
              <span className="inline-block border border-ink px-2 py-0.5 font-mono text-[11px]">{p.tag}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export function ClientWorkGrid() {
  return (
    <div className="parts mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {clientWork.map((w) => (
        <div key={w.title} className="part">
          <p className="eyebrow mb-2">Private client</p>
          <h3 className="text-xl font-extrabold text-ink">{w.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.description}</p>
          <ul className="mt-auto space-y-1 pt-4 font-mono text-xs text-ink-soft">
            {w.points.map((pt) => (
              <li key={pt}>→ {pt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ServiceGrid() {
  return (
    <div className="parts mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <div key={s.title} className="part">
          <h3 className="text-xl font-extrabold text-ink">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
          <ul className="mt-auto space-y-1 pt-4 font-mono text-xs text-ink-soft">
            {s.features.map((f) => (
              <li key={f}>→ {f}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Pillars() {
  return (
    <div className="parts mt-10 grid-cols-1 md:grid-cols-3">
      {pillars.map((p, i) => (
        <div key={p.title} className="part">
          <p className="eyebrow mb-2">
            {String(i + 1).padStart(2, '0')}
            {p.kicker ? ` · ${p.kicker}` : ''}
          </p>
          <h3 className="text-xl font-extrabold text-ink">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.description}</p>
          <ul className="mt-auto space-y-1 pt-4 font-mono text-xs text-ink-soft">
            {p.points.map((pt) => (
              <li key={pt}>→ {pt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ProcessSteps() {
  return (
    <ol className="mt-10 grid gap-x-6 gap-y-8 md:grid-cols-3">
      {processSteps.map((s, i) => (
        <li key={s.title} className="relative border-t-[3px] border-ink pt-5">
          <span className="absolute -top-2 left-0 h-3 w-3 rounded-full bg-gold-bright" aria-hidden="true" />
          <span className="font-mono text-xs text-gold">
            {String(i + 1).padStart(2, '0')} / {String(processSteps.length).padStart(2, '0')}
          </span>
          <h3 className="mt-1 text-xl font-extrabold text-ink">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
          <ul className="mt-3 space-y-1 font-mono text-xs text-ink-soft">
            {s.meta.map((m) => (
              <li key={m}>→ {m}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export function ModelsAndVariables() {
  return (
    <>
      <div className="parts mt-10 grid-cols-1 md:grid-cols-3">
        {engagementModels.map((m) => (
          <div key={m.title} className="part">
            <h3 className="text-xl font-extrabold text-ink">{m.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.description}</p>
          </div>
        ))}
      </div>
      <h3 className="eyebrow mb-3 mt-14">Five things set the price</h3>
      <dl className="border border-ink">
        {priceVariables.map((v) => (
          <div key={v.name} className="grid gap-1 border-b border-ink px-4 py-3.5 last:border-b-0 md:grid-cols-[1fr_2.2fr] md:gap-5">
            <dt className="font-mono text-sm font-medium text-ink">{v.name}</dt>
            <dd className="text-sm text-ink-soft">{v.description}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}

export function CtaBand({
  title = "Bring us the problem. We'll bring the code.",
  lead = 'Free consultation, no obligations. Most projects start within a week.',
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-ink px-4 py-16 text-center text-paper sm:px-8">
      <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-paper md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-paper/70">{lead}</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-paper px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-gold-bright"
        >
          Start your project <ArrowRight size={16} />
        </Link>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border-2 border-paper/40 px-7 py-3.5 font-semibold text-paper transition-colors hover:border-paper"
        >
          <WhatsAppIcon size={16} /> WhatsApp
        </a>
      </div>
    </section>
  );
}
