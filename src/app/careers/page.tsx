import { ArrowRight, Mail } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';
import { MainLayout } from '@/components/layouts';
import { BackToTop, FAQAccordion } from '@/components/ui';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';
import { Block, SectionHead } from '@/components/sections';
import { siteConfig } from '@/data/seo';
import {
  APPLY_EMAIL,
  APPLY_SUBJECT,
  DATE_POSTED,
  role,
  work,
  lookingFor,
  taskSteps,
  sendList,
  processSteps,
  careersFAQs,
} from '@/data/careers';

export const metadata = pageMetadata('/careers/', {
  title: 'Careers - SDE Intern (Hybrid, Nagpur)',
  description:
    'Aarohan Enterprises is hiring a full-time SDE intern in Nagpur, hybrid. Final-semester students preferred. Apply by publishing your own website with an AI-generated video of yourself.',
});

const mailto = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(APPLY_SUBJECT)}`;
const waLink = `${siteConfig.whatsapp}?text=${encodeURIComponent('Hi, I have a question about the SDE intern role')}`;

const jobSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: role.title,
  description: [
    '<p>Aarohan Enterprises is hiring a full-time Software Development Engineer (SDE) intern. Hybrid: office days in Nagpur plus remote days. Nagpur-based candidates only. Final-semester students who can do this as their final-semester internship are preferred.</p>',
    `<p><strong>What you will do:</strong></p><ul>${work.map((w) => `<li>${w.title}: ${w.description}</li>`).join('')}</ul>`,
    `<p><strong>Who we are looking for:</strong></p><ul>${lookingFor.map((l) => `<li>${l}</li>`).join('')}</ul>`,
    `<p><strong>How to apply:</strong> build and publish your own website with a short AI-generated video of yourself, run Lighthouse and PageSpeed Insights on it, and email the link, scores and your resume to ${APPLY_EMAIL}.</p>`,
  ].join(''),
  datePosted: DATE_POSTED,
  employmentType: ['INTERN', 'FULL_TIME'],
  hiringOrganization: {
    '@type': 'Organization',
    name: siteConfig.name,
    sameAs: siteConfig.url,
    logo: `${siteConfig.url}/logo-square-dark-theme.png`,
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nagpur',
      addressRegion: 'Maharashtra',
      postalCode: '440001',
      addressCountry: 'IN',
    },
  },
  directApply: false,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: careersFAQs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function CareersPage() {
  return (
    <MainLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Block>
        <p className="eyebrow mb-3">We are hiring · Nagpur · Hybrid</p>
        <SectionHead
          as="h1"
          title="SDE Intern: ship real software in your final semester."
          lead="A full-time internship on a small team that builds and runs its own products. Final-semester students preferred; Nagpur-based candidates only."
        />
        <dl className="parts mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {role.facts.map((f) => (
            <div key={f.label} className="part">
              <dt className="eyebrow mb-2">{f.label}</dt>
              <dd className="font-semibold leading-snug text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#task" className="btn-primary">
            See the task <ArrowRight size={16} />
          </a>
          <a href={mailto} className="btn-ghost">
            <Mail size={16} /> {APPLY_EMAIL}
          </a>
        </div>
      </Block>

      <Block tone="band">
        <SectionHead title="What you will do" />
        <div className="parts mt-10 grid-cols-1 md:grid-cols-3">
          {work.map((w) => (
            <div key={w.title} className="part">
              <h3 className="text-xl font-extrabold text-ink">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.description}</p>
            </div>
          ))}
        </div>

        <h2 className="eyebrow mb-4 mt-16">Who we are looking for</h2>
        <ul className="max-w-3xl space-y-2 text-ink-soft">
          {lookingFor.map((l) => (
            <li key={l} className="flex gap-3">
              <span className="font-mono text-gold" aria-hidden="true">→</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="task">
        <SectionHead
          title="The task: your own corner of the internet"
          lead="Instead of a coding quiz, show us something you made and put your name on. It is easy on purpose: it is about you, not puzzles."
        />
        <ol className="mt-10 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {taskSteps.map((s, i) => (
            <li key={s.title} className="relative border-t-[3px] border-ink pt-5">
              <span className="absolute -top-2 left-0 h-3 w-3 rounded-full bg-gold-bright" aria-hidden="true" />
              <span className="font-mono text-xs text-gold">
                STEP {i + 1} / {taskSteps.length}
              </span>
              <h3 className="mt-1 text-lg font-extrabold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-px border border-ink bg-ink lg:grid-cols-2">
          <div className="bg-surface p-6 md:p-8">
            <h3 className="eyebrow mb-4">Send us</h3>
            <ul className="space-y-2 text-sm text-ink-soft">
              {sendList.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="font-mono text-gold" aria-hidden="true">→</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink-soft">
              Email <a href={mailto} className="link-underline">{APPLY_EMAIL}</a> with the subject{' '}
              <span className="font-mono text-ink">&ldquo;{APPLY_SUBJECT}&rdquo;</span>.
            </p>
          </div>
          <div className="bg-band p-6 md:p-8">
            <h3 className="eyebrow mb-4">AI tools?</h3>
            <p className="text-sm leading-relaxed text-ink-soft">
              Yes: the video is meant to be made with AI, and you can use it for the code too. But
              in the walkthrough you will explain your own code and how you made the video, and
              change your site live in front of us. A site you cannot explain does not count,
              however good it looks.
            </p>
          </div>
        </div>
      </Block>

      <Block tone="band">
        <SectionHead title="What happens after you send it" />
        <ol className="mt-10 grid gap-x-6 gap-y-8 md:grid-cols-3">
          {processSteps.map((s, i) => (
            <li key={s.title} className="relative border-t-[3px] border-ink pt-5">
              <span className="absolute -top-2 left-0 h-3 w-3 rounded-full bg-gold-bright" aria-hidden="true" />
              <span className="font-mono text-xs text-gold">
                {String(i + 1).padStart(2, '0')} / {String(processSteps.length).padStart(2, '0')}
              </span>
              <h3 className="mt-1 text-xl font-extrabold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
            </li>
          ))}
        </ol>
      </Block>

      <section id="faq" className="border-b border-ink px-4 py-16 sm:px-8 lg:px-14">
        <div className="max-w-3xl">
          <h2 className="mb-8 text-3xl font-extrabold text-ink md:text-4xl">Questions</h2>
          <FAQAccordion items={careersFAQs} />
        </div>
      </section>

      <section className="bg-ink px-4 py-16 text-center text-paper sm:px-8">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-paper md:text-4xl">Build the site. Make the video. Send it.</h2>
        <p className="mx-auto mt-4 max-w-xl text-paper/70">One website, one short video, two scores. That is the whole application.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={mailto}
            className="inline-flex items-center justify-center gap-2 bg-paper px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-gold-bright"
          >
            <Mail size={16} /> Send your application
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-paper/40 px-7 py-3.5 font-semibold text-paper transition-colors hover:border-paper"
          >
            <WhatsAppIcon size={16} /> Ask a question
          </a>
        </div>
      </section>
      <BackToTop />
    </MainLayout>
  );
}
