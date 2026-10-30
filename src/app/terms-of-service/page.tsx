import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = pageMetadata('/terms-of-service/', {
  title: 'Terms of Service',
  description: 'Terms and conditions for using the Aarohan Enterprises website and our custom software, analytics and automation services.',
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
        We provide custom software services, including business operations systems, data and analytics dashboards, workflow automation and integrations, SaaS and desktop or browser-extension development, cloud setup and support, and trading systems. We also operate software products, which are governed by the terms published on each product&apos;s own website. The scope, deliverables, timeline and price of each custom engagement are those set out in the quotation or written confirmation we agree with you.
      </p>
      <h2>Quotations and pricing</h2>
      <p>
        We do not publish fixed prices for custom work. Every project is quoted in writing before work begins, based on its scope, integrations, timeline, data and compliance needs, and after-launch support. Changes to scope after approval may change the price and timeline. Unless stated otherwise, prices are in Indian Rupees and exclusive of applicable taxes.
      </p>
      <h2>Payments</h2>
      <p>
        Work is paid for in milestones as agreed in the quotation. We may pause work while a milestone payment is overdue. Payments may be made through the methods we provide or by direct transfer as communicated to you. See our <a href="/refund-policy/">Refund Policy</a> for cancellations and refunds.
      </p>
      <h2>Client responsibilities</h2>
      <ul>
        <li>provide accurate, complete and timely information and feedback;</li>
        <li>hold the right to any material, logic or data you supply to us;</li>
        <li>maintain your own accounts with any third-party platforms involved (for example payment, messaging, cloud or broker accounts), and keep your credentials secret. We will never need your passwords;</li>
        <li>test deliverables, and review settings and data before going live.</li>
      </ul>
      <h2>Intellectual property</h2>
      <p>
        Who owns what is stated in your quotation. Where the quotation provides for it, on full payment the custom source code we write specifically for you is assigned or licensed to you for your own purposes. Where you use or white-label one of our products, or build on our platforms, we keep the code and grant you a licence, and your data remains yours. We retain ownership of our pre-existing tools, libraries, templates and know-how, and may reuse general techniques that do not include your confidential strategy logic. Content on this website, including text, design and logos, belongs to Aarohan Enterprises and may not be copied without permission.
      </p>
      <h2>Confidentiality</h2>
      <p>
        We treat your business information, project material and any proprietary logic you share as confidential and will not disclose it to third parties except as needed to deliver the service or as required by law.
      </p>
      <h2>Third-party platforms</h2>
      <p>
        Our work depends on platforms we do not control, including payment gateways, messaging platforms, cloud and hosting providers, and, for trading systems, TradingView, brokers and exchanges. Their outages, API or rule changes, fees and restrictions may affect how a solution performs, and we are not responsible for them. You must follow their terms of use.
      </p>
      <h2>Results and trading risk</h2>
      <p>
        We build software to your specification and do not guarantee business outcomes. Where we build trading systems, trading in financial markets carries substantial risk of loss; we do not provide investment advice and do not guarantee profits or any trading result, and backtests are not predictions of future performance.
      </p>
      <h2>Support period</h2>
      <p>
        Support included with a service covers fixing defects in what we delivered, for the period stated in your quotation. It does not cover new features, changes in third-party platforms or losses arising from your own business or trading decisions.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Aarohan Enterprises is not liable for any lost profits, lost business, trading losses, missed or rejected orders, or indirect or consequential damages arising from use of our services or website. Our total liability for any claim is limited to the amount you paid us for the service giving rise to the claim.
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
