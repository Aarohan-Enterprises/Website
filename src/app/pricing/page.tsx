import { pageMetadata } from '@/lib/metadata';
import { MainLayout } from '@/components/layouts';
import { BackToTop, FAQAccordion } from '@/components/ui';
import { Block, SectionHead, ModelsAndVariables, ProcessSteps, CtaBand } from '@/components/sections';
import { pricingFAQs } from '@/data/faq';

export const metadata = pageMetadata('/pricing/', {
  title: 'Pricing - Every Project Is Quoted',
  description:
    'How Aarohan Enterprises prices software: fixed scope, team on retainer or licence a product. Five factors set the quote, paid by milestone. Free consultation.',
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pricingFAQs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function PricingPage() {
  return (
    <MainLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Block>
        <SectionHead
          as="h1"
          title="Every project is quoted, not tariffed"
          lead="Two projects with the same name can differ tenfold in effort. We scope first, then put the price in writing."
        />
        <ModelsAndVariables />
      </Block>

      <Block tone="band">
        <SectionHead title="From idea to live in three steps" />
        <ProcessSteps />
      </Block>

      <Block>
        <div className="max-w-3xl">
          <SectionHead title="Common questions" />
          <div className="mt-8">
            <FAQAccordion items={pricingFAQs} />
          </div>
        </div>
      </Block>

      <CtaBand title="Ready for a quote?" lead="A short discovery call is free. Tell us what you need and we will reply within 2–4 hours." />
      <BackToTop />
    </MainLayout>
  );
}
