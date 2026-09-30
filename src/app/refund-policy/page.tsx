import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'How refunds work at Aarohan Enterprises — a milestone-based approach that keeps every project transparent.',
  alternates: { canonical: 'https://pinecoder.in/refund-policy/' },
};

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout title="Refund Policy">
      <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">Last updated · 30 September 2026</p>

      <p>
        At Aarohan Enterprises, we follow a milestone-based payment approach to keep every
        engagement transparent and low-risk. Projects are split into defined phases; payment is
        collected at each milestone, and you review and approve each phase before we move to the next.
      </p>

      <h2>How refunds work</h2>
      <p>
        Refunds are assessed based on the work completed up to the point of cancellation. Once a
        milestone has been approved and delivered, that portion is considered complete and is
        non-refundable. If a milestone does not meet the agreed scope, we revise it at no extra cost
        until it does.
      </p>

      <h2>Paid products & tools</h2>
      <p>
        For our own paid products and tools, refund terms shown on that product&apos;s page or at
        checkout apply. Because most are delivered instantly and used immediately, they are generally
        non-refundable once purchased, unless the product did not work as described.
      </p>

      <p>
        Have a question about a payment? Write to{' '}
        <a href="mailto:contact@pinecoder.in">contact@pinecoder.in</a> and we&apos;ll sort it out.
      </p>
    </LegalPageLayout>
  );
}
