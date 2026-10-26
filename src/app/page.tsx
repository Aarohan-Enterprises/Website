import Link from 'next/link';
import { MainLayout } from '@/components/layouts';
import { BackToTop, LiveTerminal, ProductCard, SectionLink } from '@/components/ui';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';
import {
  ArrowRight, ArrowUpRight, Globe, Puzzle, Cloud, Check,
  Webhook, BarChart3, Users, FileText, Scale, Clock, SlidersVertical, Gamepad2,
} from 'lucide-react';

const services = [
  {
    kicker: 'Web',
    icon: Globe,
    title: 'Web & Product Engineering',
    description:
      'Full-stack web apps and SaaS platforms — Next.js and React up front, Go and Postgres underneath, real-time where it counts.',
    features: ['Next.js & React', 'Go / Node APIs', 'Postgres & real-time'],
  },
  {
    kicker: 'Apps',
    icon: Puzzle,
    title: 'Apps & Extensions',
    description:
      'Desktop software and browser extensions that ship to real stores — the Microsoft Store, Chrome Web Store, and beyond.',
    features: ['Windows & cross-platform', 'Chrome / Edge extensions', 'Store-ready builds'],
  },
  {
    kicker: 'Cloud & AI',
    icon: Cloud,
    title: 'Cloud, APIs & AI',
    description:
      'Serverless backends on AWS, payment integrations, and AI features wired into products people actually use every day.',
    features: ['AWS Lambda & serverless', 'Razorpay & payments', 'LLM / AI integration'],
  },
];

const work = [
  {
    icon: BarChart3,
    name: 'Volatility Screener',
    tag: 'Free',
    href: 'https://vbc.pinecoder.in',
    description: 'A real-time market data dashboard built on live WebSocket feeds and statistical indicators.',
    features: ['Live WebSocket data', 'Multi-timeframe scans', 'Custom alerts'],
  },
  {
    icon: Users,
    name: 'GroupSync',
    tag: 'Free scan · ₹50',
    href: 'https://groupsync.pinecoder.in',
    description:
      "Chrome extension that exports any WhatsApp group's member list to CSV, Excel, or vCard.",
    features: ['CSV, Excel & vCard', 'Unsaved numbers included', 'Nothing leaves your browser'],
  },
  {
    icon: FileText,
    name: 'PDF Editor',
    tag: 'Free · no signup',
    href: 'https://pdf2.in',
    description: 'Browser-based PDF tools — merge, split, rotate, compress, convert, and edit.',
    features: ['Merge, split & rotate', 'Compress & watermark', 'PDF & DOCX conversion'],
  },
  {
    icon: Scale,
    name: 'Section63',
    tag: 'From ₹250 · no signup',
    href: 'https://section63.in',
    description:
      'Turns a WhatsApp chat export into a Section 63 (BSA 2023) certified exhibit for Indian courts.',
    features: ['s.63(4) certificate + SHA-256', 'Media hashed & reproduced', 'Read every page before you pay'],
  },
  {
    icon: Clock,
    name: 'Meridian',
    tag: 'Free · Microsoft Store',
    href: 'https://meridian.pinecoder.in',
    description:
      'A world clock for the Windows desktop — every timezone you work across in one quiet window.',
    features: ['DST-aware IANA database', 'Internet time-drift sync', 'Always-on-top overlay'],
  },
  {
    icon: SlidersVertical,
    name: 'Loadout',
    internationalOnly: true,
    tag: 'Free · paid plans · international only',
    href: 'https://loadout.pinecoder.in',
    description:
      "Chrome extension that saves a chart indicator's settings as a named preset and restores them in one click.",
    features: ['Every indicator, one line each', 'Drift detection on live charts', 'No account, nothing auto-renews'],
  },
  {
    icon: Gamepad2,
    name: 'PlayDesk',
    tag: 'SaaS · for cafes',
    href: 'https://playdesk.pinecoder.in',
    description:
      'Gaming-café management platform — a Go + Postgres backend, a Flutter console, and a Windows lock client.',
    features: ['Prepaid & postpaid wallets', 'Session & seat control', 'Multi-cafe tenancy'],
  },
  {
    icon: Webhook,
    name: 'AlertSync',
    internationalOnly: true,
    tag: 'Free & paid · international only',
    href: 'https://alertsync.in',
    description: 'A webhook relay that forwards TradingView (or any) alerts to Telegram in under 100ms.',
    features: ['Sub-100ms delivery', 'Zero-config webhooks', 'Full audit trail'],
  },
];

const steps = [
  {
    title: 'Scope & shape',
    description:
      'Tell us the idea. We scope it, map the build, and send back a clear plan and a fixed quote.',
    meta: ['Free consultation', 'NDA on request', '24-hour response'],
  },
  {
    title: 'Design & build',
    description:
      'We design and engineer in tight iterations you can watch — clean, documented, and yours.',
    meta: ['Weekly build updates', 'Documented code', 'You own the source'],
  },
  {
    title: 'Ship & support',
    description:
      'We deploy to production, hand over the keys, and keep the thing running after launch.',
    meta: ['Cloud deployment', 'Handover & docs', 'Ongoing support'],
  },
];

export default function HomePage() {
  return (
    <MainLayout simpleFooter>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="border-b border-ink hero-dotgrid">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 py-14 lg:py-20 items-center">
            {/* Headline */}
            <div className="lg:col-span-7 animate-fade-up">
              <p className="eyebrow mb-6">Software studio · Built to ship</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.02] tracking-tight text-ink">
                Software,
                <br />
                built to <span className="accent-ink">ship.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg text-ink-soft leading-relaxed">
                Aarohan Enterprises is a software development studio. We design, build, and
                ship web apps, mobile &amp; desktop software, browser extensions, and cloud
                systems — from the first sketch to production.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary group">
                  Start a project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <SectionLink href="/#work" className="btn-ghost">
                  See our work
                </SectionLink>
              </div>
            </div>

            {/* Signature instrument — a live build console */}
            <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '0.12s' }}>
              <LiveTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ────────────────────────────────────────── */}
      <section className="border-b border-ink bg-band">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-rule text-center">
            {[
              ['12+', 'Products shipped'],
              ['2+ yrs', 'In production'],
              ['100%', 'Code is yours'],
              ['AWS', 'Cloud native'],
            ].map(([value, label]) => (
              <div key={label} className="py-7 px-2">
                <dt className="font-display text-3xl text-ink">{value}</dt>
                <dd className="eyebrow text-ink-faint mt-2">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── What We Build ──────────────────────────────────────── */}
      <section id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="max-w-3xl mb-12">
          <p className="eyebrow mb-4">What we build</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink">
            Full-stack, end to end.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            No off-the-shelf templates — every product is designed, built, and shipped for
            one team&apos;s problem.
          </p>
        </header>

        <div className="grid md:grid-cols-3 border-t border-ink">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group border-b border-rule md:border-b-0 md:border-r md:last:border-r-0 border-ink/10 p-7 md:px-7 md:py-9 hover:bg-band/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="eyebrow">{s.kicker}</span>
                  <Icon size={20} className="text-pine" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-ink mb-3">{s.title}</h3>
                <p className="text-ink-soft mb-6">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-mono text-xs text-ink-soft">
                      <Check size={13} className="text-pine" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <SectionLink href="/#work" className="link-underline font-mono text-sm uppercase tracking-wider inline-flex items-center gap-2">
            See what we&apos;ve shipped <ArrowRight size={15} />
          </SectionLink>
        </div>
      </section>

      {/* ── Our Work ───────────────────────────────────────────── */}
      <section id="work" className="border-y border-ink bg-band">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <header className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">Our work</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink">
              Products we&apos;ve shipped.
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Software we built for our own workflow and for clients — live, in production, opened up for you.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-px bg-rule border border-rule">
            {work.map((t) => {
              const Icon = t.icon;
              return (
                <ProductCard
                  key={t.name}
                  href={t.href}
                  name={t.name}
                  internationalOnly={'internationalOnly' in t}
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
                </ProductCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────────── */}
      <section id="how-it-works" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="max-w-3xl mb-12">
          <p className="eyebrow mb-4">The process</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink">
            From idea to production in three steps.
          </h2>
        </header>

        <ol className="grid md:grid-cols-3 border-t border-ink">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="border-b border-rule md:border-b-0 md:border-r md:last:border-r-0 border-ink/10 p-7 md:px-7 md:py-9"
            >
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-display text-5xl text-pine leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-xs text-ink-faint">/ 03</span>
              </div>
              <h3 className="font-display text-2xl text-ink mb-3">{step.title}</h3>
              <p className="text-ink-soft mb-6">{step.description}</p>
              <ul className="space-y-2">
                {step.meta.map((m) => (
                  <li key={m} className="flex items-center gap-2 font-mono text-xs text-ink-soft">
                    <ArrowRight size={12} className="text-pine" /> {m}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Closing CTA ────────────────────────────────────────── */}
      <section className="border-t border-ink bg-band">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="eyebrow mb-5">Start the conversation</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink max-w-2xl mx-auto">
            Have something to build? Let&apos;s ship it.
          </h2>
          <p className="mt-5 text-ink-soft max-w-xl mx-auto">
            Free consultation, no obligations. Most projects start within a week.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-pine text-paper font-mono text-sm uppercase tracking-wider px-7 py-4 hover:bg-pine-dark transition-colors"
            >
              Start your project <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/917499462967"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-rule-strong text-ink font-mono text-sm uppercase tracking-wider px-7 py-4 hover:border-ink hover:text-pine transition-colors"
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
