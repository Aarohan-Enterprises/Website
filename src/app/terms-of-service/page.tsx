import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = pageMetadata('/terms-of-service/', {
  title: 'Terms of Service',
  description: 'Terms and conditions for using the Aarohan Enterprises website and our trading automation and Pine Script development services.',
});

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service">
      <p><strong>Last updated:</strong> 26 October 2026</p>
      <h2>Acceptance of terms</h2>
      <p>
        By accessing the website at https://pinecoder.in or engaging Aarohan Enterprises (&quot;we&quot;, &quot;us&quot;) for any service, you agree to be bound by these terms, all applicable laws and regulations, and you are responsible for compliance with any applicable local laws. If you do not agree, please do not use the site or our services.
      </p>
      <h2>Our services</h2>
      <p>
        We provide trading-automation services including Pine Script indicator and strategy development, TradingView-to-broker integration through third-party bridge platforms, and custom trading systems. The scope, deliverables, timeline and price of each engagement are those set out in the quotation or written confirmation we agree with you.
      </p>
      <h2>Quotations and pricing</h2>
      <p>
        Prices shown on the website are starting estimates, not final quotes. The final price depends on the scope of work and is confirmed in writing before work begins. Changes to scope after approval may change the price and timeline. Unless stated otherwise, prices are in Indian Rupees and exclusive of applicable taxes.
      </p>
      <h2>Payments</h2>
      <p>
        Work is paid for in milestones as agreed in the quotation. We may pause work while a milestone payment is overdue. Payments may be made through the methods we provide or by direct transfer as communicated to you. See our <a href="/refund-policy/">Refund Policy</a> for cancellations and refunds.
      </p>
      <h2>Client responsibilities</h2>
      <ul>
        <li>provide accurate, complete and timely information and feedback;</li>
        <li>hold the right to any material, logic or data you supply to us;</li>
        <li>maintain your own broker, TradingView and bridge-platform accounts, and keep your credentials secret. We will never need your passwords;</li>
        <li>test deliverables, and review settings such as position size and risk limits, before going live.</li>
      </ul>
      <h2>Intellectual property</h2>
      <p>
        On full payment, the custom source code we write specifically for you is licensed or assigned to you as stated in your quotation, and you may use it for your own purposes. We retain ownership of our pre-existing tools, libraries, templates and know-how, and may reuse general techniques that do not include your confidential strategy logic. Content on this website, including text, design and logos, belongs to Aarohan Enterprises and may not be copied without permission.
      </p>
      <h2>Confidentiality</h2>
      <p>
        We treat your strategy logic and business information as confidential and will not disclose it to third parties except as needed to deliver the service or as required by law.
      </p>
      <h2>Third-party platforms</h2>
      <p>
        Our work depends on platforms we do not control, including TradingView, brokers, exchanges, bridge platforms and hosting providers. Their outages, API or rule changes, fees and restrictions may affect how a solution performs, and we are not responsible for them. You must follow their terms of use.
      </p>
      <h2>Trading risk</h2>
      <p>
        Trading in financial markets carries substantial risk of loss. We build tools to your specification; we do not provide investment advice, and we do not guarantee profits or any trading result. Backtests are not predictions of future performance. See our <a href="/disclaimer/">Disclaimer</a>.
      </p>
      <h2>Support period</h2>
      <p>
        Support included with a service covers fixing defects in what we delivered, for the period stated in the plan (for example 15 or 30 days from delivery). It does not cover new features, changes in third-party platforms or losses arising from your trading decisions.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Aarohan Enterprises is not liable for any trading losses, lost profits, missed or rejected orders, or indirect or consequential damages arising from use of our services or website. Our total liability for any claim is limited to the amount you paid us for the service giving rise to the claim.
      </p>
      <h2>Website use and termination</h2>
      <p>
        You agree not to misuse the site, attempt to disrupt it or access it without authorisation. The materials on the site are provided as-is and may be changed at any time. Either party may end an engagement as described in the Refund Policy, and we may refuse or suspend service where these terms are breached.
      </p>
      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India. Courts at Nagpur, Maharashtra have exclusive jurisdiction over any dispute, subject to any mandatory rights you have under law.
      </p>
      <h2>Changes to these terms</h2>
      <p>
        We may revise these terms at any time by updating this page. Continued use of the site or services after a change means you accept the revised terms.
      </p>
      <h2>Contact us</h2>
      <p>
        Aarohan Enterprises, Nagpur, Maharashtra, India. Email: <a href="mailto:contact@pinecoder.in">contact@pinecoder.in</a>. Phone / WhatsApp: +91 74994 62967. You can also use our <a href="/contact/">contact page</a>.
      </p>
    </LegalPageLayout>
  );
}
