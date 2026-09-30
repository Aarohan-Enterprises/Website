import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms and conditions for using the Aarohan Enterprises website and software development services.',
  alternates: { canonical: 'https://pinecoder.in/terms-of-service/' },
};

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service">
      <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">Last updated · 30 September 2026</p>

      <p>
        By accessing this website at https://pinecoder.in, you agree to be bound by these terms of
        service, all applicable laws and regulations, and you accept responsibility for compliance
        with any applicable local laws. If you do not agree with any of these terms, you are
        prohibited from using or accessing this site.
      </p>

      <h2>Our services</h2>
      <p>
        Aarohan Enterprises is a software development studio. We design, build, and deliver custom
        software — web apps, SaaS platforms, browser extensions, desktop applications, and cloud
        systems. The specific scope, deliverables, timeline, and price of any engagement are agreed
        in writing before work begins.
      </p>

      <h2>Ownership of work</h2>
      <p>
        Unless agreed otherwise in writing, you own 100% of the source code, repositories, and
        deliverables we produce specifically for you, upon full payment. Pre-existing tools,
        libraries, and internal components we bring to a project remain ours and are licensed to you
        for use within the delivered work.
      </p>

      <h2>Website content</h2>
      <p>
        The materials on this website are provided on an &quot;as is&quot; basis. The names,
        descriptions, and links to third-party products shown as our work are provided for reference.
        This website and its content are protected by applicable copyright and trademark law.
      </p>
    </LegalPageLayout>
  );
}
