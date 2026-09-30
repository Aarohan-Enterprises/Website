import type { Metadata } from 'next';
import { MainLayout } from '@/components/layouts';
import { Users, Cloud, Code, Layers, Shield, Rocket, Handshake, Lightbulb, Check, ArrowRight } from 'lucide-react';
import { LinkedInIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
import { stats, certifications, coreValues, whyChooseUs, founder } from '@/data/about';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us — Software Development Studio',
  description: "Aarohan Enterprises is a software development studio in Nagpur, India. Meet the engineers who design, build, and ship web apps, browser extensions, desktop apps, and cloud systems.",
  alternates: { canonical: 'https://pinecoder.in/about/' },
  openGraph: {
    title: 'About Us — Aarohan Enterprises | Software Development Studio',
    description: "The software studio behind a dozen shipped products — web apps, extensions, desktop tools, and cloud systems.",
    images: ['https://pinecoder.in/og-image.jpg'],
  },
};

const iconMap: Record<string, React.ElementType> = {
  Shield, Rocket, Handshake, Lightbulb, Cloud, Code, Layers,
};

export default function AboutPage() {
  return (
    <MainLayout simpleFooter>
      {/* Hero */}
      <section className="border-b border-ink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 max-w-3xl">
          <p className="eyebrow mb-4 flex items-center gap-2"><Users size={13} /> The studio behind Aarohan Enterprises</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink">
            We build the software. <span className="accent-ink">You run with it.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-soft">
            Aarohan Enterprises is a software development studio in Nagpur, India. We turn ideas
            and rough sketches into web apps, tools, and cloud systems that ship — and keep running.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-ink bg-band">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-rule text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="py-7 px-2">
                <dt className="font-display text-3xl text-ink">{stat.value}</dt>
                <dd className="eyebrow text-ink-faint mt-2">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl">
          <div>
            <p className="eyebrow mb-4">Our story</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">
              Built by engineers who ship.
            </h2>
            <div className="space-y-4 text-ink-soft leading-relaxed">
              <p>Aarohan Enterprises started with a simple habit: when we needed a tool, we built it — and shipped it. That habit grew into a studio.</p>
              <p>We&apos;re software engineers who care about the parts that make software last: clean code, real deployments, monitoring, and a proper handover. We&apos;ve shipped web platforms, SaaS products, Chrome extensions, and desktop apps across India and beyond.</p>
              <p>Today we build for founders and teams who need something real in production — not a slide, not a throwaway prototype, but working software their customers can actually use.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {certifications.map((cert) => {
                const IconComp = iconMap[cert.icon] || Code;
                return (
                  <span key={cert.label} className="inline-flex items-center gap-2 border border-rule px-3 py-2 font-mono text-xs text-ink-soft">
                    <IconComp size={14} className="text-pine" /> {cert.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Deploy log tear sheet */}
          <div className="card">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-rule">
              <span className="w-2.5 h-2.5 rounded-full border border-rule-strong" />
              <span className="w-2.5 h-2.5 rounded-full border border-rule-strong" />
              <span className="w-2.5 h-2.5 rounded-full border border-rule-strong" />
              <span className="eyebrow text-ink-faint ml-2">deploy.log</span>
            </div>
            <pre className="p-5 font-mono text-xs leading-relaxed text-ink-soft overflow-x-auto">
              <code>
                <span className="text-pine">$</span> git push origin main{'\n'}
                <span className="text-ink-faint">→ install ✓  typecheck ✓  build ✓</span>{'\n'}
                <span className="text-ink-faint">→ 48 tests passed</span>{'\n'}
                <span className="text-pine">✓</span> deployed to production{'\n'}
                <span className="text-ink">  live · yourapp.com · 14.2s</span>{'\n'}
              </code>
            </pre>
            <div className="border-t border-rule px-5 py-3 flex items-center justify-between">
              <span className="eyebrow text-ink-faint">In production</span>
              <span className="font-mono text-sm text-pine">12+ products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-ink bg-band">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule max-w-4xl">
            <div className="bg-surface p-8">
              <p className="eyebrow mb-4">Mission</p>
              <p className="font-display text-xl text-ink leading-snug">
                Turn good ideas into software that actually ships — well-built, well-documented,
                and owned entirely by the people we build it for.
              </p>
            </div>
            <div className="bg-surface p-8">
              <p className="eyebrow mb-4">Vision</p>
              <p className="font-display text-xl text-ink leading-snug">
                Be the studio teams trust to take an idea from sketch to production — and to keep
                it running long after launch day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="eyebrow mb-4">Meet the founder</p>
        <div className="card max-w-3xl">
          <div className="md:flex">
            <div className="md:w-1/3 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-rule">
              <Image src={founder.image} alt={founder.name} width={160} height={160} className="w-40 h-40 object-cover border border-rule-strong" />
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-display text-2xl text-ink">{founder.name}</h3>
                <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-pine text-paper px-2 py-0.5">{founder.badge}</span>
              </div>
              <p className="eyebrow text-ink-faint mb-4">{founder.title}</p>
              <p className="text-ink-soft text-sm mb-6 leading-relaxed">{founder.bio}</p>
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider">
                <LinkedInIcon size={16} /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-y border-ink bg-band">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="eyebrow mb-8">What guides us</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-ink">
            {coreValues.map((value) => {
              const IconComp = iconMap[value.icon] || Shield;
              return (
                <div key={value.title} className="border-b border-rule lg:border-b-0 lg:border-r lg:last:border-r-0 border-ink/10 p-6">
                  <IconComp size={20} className="text-pine mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg text-ink mb-2">{value.title}</h3>
                  <p className="text-sm text-ink-soft">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
        <p className="eyebrow mb-8">Why teams choose us</p>
        <div className="grid md:grid-cols-2 border-t border-rule">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="flex items-start gap-4 py-6 border-b border-rule md:odd:border-r md:odd:pr-8 md:even:pl-8 border-ink/10">
              <Check size={18} className="text-pine flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-ink mb-1">{item.title}</h3>
                <p className="text-sm text-ink-soft">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink bg-band">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">Ready to build something?</h2>
          <p className="mt-4 text-ink-soft">Join the teams who trust Aarohan Enterprises to design, build, and ship their software.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-pine text-paper font-mono text-sm uppercase tracking-wider px-7 py-4 hover:bg-pine-dark transition-colors">
              Start a project <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/917499462967" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-rule-strong text-ink font-mono text-sm uppercase tracking-wider px-7 py-4 hover:border-ink hover:text-pine transition-colors">
              <WhatsAppIcon size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
