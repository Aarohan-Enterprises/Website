import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = pageMetadata('/refund-policy/', {
  title: 'Refund Policy',
  description: 'Refund and cancellation policy for Aarohan Enterprises: milestone-based payments, what is refundable, and how to request a refund.',
});

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout title="Refund Policy">
      <p><strong>Last updated:</strong> 26 October 2026</p>
      <h2>Our approach</h2>
      <p>
        At Aarohan Enterprises we follow a milestone-based payment approach to ensure transparency and mutual satisfaction. Payments are collected at defined project milestones, and you review and approve each phase before we proceed to the next.
      </p>
      <h2>How payments work</h2>
      <ul>
        <li>The milestones and amounts are set out in your written quotation before work starts.</li>
        <li>An initial payment may be required to begin work and reserve development time.</li>
        <li>You review each milestone deliverable and either approve it or send us revision requests within the revision rounds included in your plan.</li>
      </ul>
      <h2>Cancellation and refunds</h2>
      <ul>
        <li><strong>Before work begins:</strong> if you cancel before we have started, you are entitled to a full refund of any amount paid.</li>
        <li><strong>During the project:</strong> if you cancel mid-project, we refund the unused portion, calculated on the work completed up to the date of cancellation. Work already completed and any approved milestones are charged.</li>
        <li><strong>After approval and delivery:</strong> once a milestone is approved and delivered, that portion is non-refundable.</li>
        <li><strong>If we cannot deliver:</strong> if we are unable to deliver what was agreed in the quotation, for reasons within our control, you will receive a refund for the milestones not delivered.</li>
      </ul>
      <h2>What is not refundable</h2>
      <ul>
        <li>milestones you have approved or that have been delivered and put to use;</li>
        <li>third-party costs we paid on your behalf, such as VPS hosting or platform subscriptions, where already incurred;</li>
        <li>dissatisfaction caused by trading results or market conditions, since we build to your specification and do not guarantee returns;</li>
        <li>issues caused by changes made by third-party platforms, brokers or by you after delivery.</li>
      </ul>
      <h2>Support period</h2>
      <p>
        Included support (15 days, 30 days or as stated in your plan) covers fixing defects in the delivered work. Support is not refundable once the period has started.
      </p>
      <h2>How to request a refund</h2>
      <p>
        Email <a href="mailto:contact@pinecoder.in">contact@pinecoder.in</a> from the address you used when ordering, with your name, the service and the reason for the request. We review requests promptly and will tell you the outcome. Approved refunds are returned to the original payment method or account where possible, normally within 7–10 working days, subject to your bank or payment provider.
      </p>
      <h2>Disputes</h2>
      <p>
        If you are unhappy with a deliverable, please talk to us first — most issues are resolved through a revision. Disputes that cannot be resolved are subject to the governing law and jurisdiction in our <a href="/terms-of-service/">Terms of Service</a>.
      </p>
      <h2>Contact us</h2>
      <p>
        Aarohan Enterprises, Nagpur, Maharashtra, India. Email: <a href="mailto:contact@pinecoder.in">contact@pinecoder.in</a>. Phone / WhatsApp: +91 74994 62967. You can also use our <a href="/contact/">contact page</a>.
      </p>
    </LegalPageLayout>
  );
}
