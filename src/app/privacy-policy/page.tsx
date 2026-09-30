import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Aarohan Enterprises collects, uses, and protects your data.',
  alternates: { canonical: 'https://pinecoder.in/privacy-policy/' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">Last updated · 30 September 2026</p>

      <p>
        Your privacy matters to us. It is Aarohan Enterprises&apos; policy to respect your privacy
        regarding any information we may collect from you across this website and the products we
        operate. We only ask for personal information when we truly need it to provide a service to
        you, and we collect it by fair and lawful means, with your knowledge and consent.
      </p>

      <h2>What we collect</h2>
      <p>
        When you use our contact form, we collect the name, email, phone number, project type, and
        any details you choose to share so we can respond to your enquiry. We also collect basic,
        anonymised usage analytics (via Google Analytics) to understand how the site is used.
      </p>

      <h2>How we use it</h2>
      <p>
        We use the information you provide only to respond to your enquiry, scope and deliver work
        you engage us for, and keep you updated about your project. We do not sell your data, and we
        do not share it with third parties except the tools we use to operate (for example, the
        messaging service that delivers contact-form submissions to us).
      </p>

      <h2>Data retention & your rights</h2>
      <p>
        We keep enquiry details only as long as needed to serve you. You can ask us to access,
        correct, or delete your personal information at any time by writing to{' '}
        <a href="mailto:contact@pinecoder.in">contact@pinecoder.in</a>.
      </p>
    </LegalPageLayout>
  );
}
