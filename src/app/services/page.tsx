import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';
import { MainLayout } from '@/components/layouts';
import { BackToTop } from '@/components/ui';
import { Block, SectionHead, Pillars, ServiceGrid, CtaBand } from '@/components/sections';

export const metadata = pageMetadata('/services/', {
  title: 'Services - Operations Systems, Analytics and Custom Software',
  description:
    'Custom business operations systems, analytics dashboards, workflow automation, SaaS builds, desktop apps and cloud setup from Aarohan Enterprises in Nagpur. Quoted per project.',
});

export default function ServicesPage() {
  return (
    <MainLayout>
      <Block>
        <SectionHead
          as="h1"
          title="Built to order, built properly"
          lead="No off-the-shelf templates. Every system is written around one business's rules, with operations first, then analytics, then convenience."
        />
        <Pillars />
      </Block>

      <Block tone="band">
        <SectionHead title="What we build" lead="Seven service lines, all quoted per project." />
        <ServiceGrid />
        <div className="mt-8">
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
