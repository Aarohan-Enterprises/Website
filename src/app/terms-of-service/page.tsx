import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = pageMetadata('/terms-of-service/', {
  title: 'Terms of Service',
  description: 'Read the terms of service for Aarohan Enterprises. Terms and conditions for using our automated algorithmic trading services.',
});

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service">
      <p>
        By accessing the website at https://pinecoder.in, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
      </p>
    </LegalPageLayout>
  );
}
