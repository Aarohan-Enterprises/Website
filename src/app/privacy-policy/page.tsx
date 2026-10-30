import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = pageMetadata('/privacy-policy/', {
  title: 'Privacy Policy',
  description: 'How Aarohan Enterprises collects, uses, shares and protects your personal information, and the choices and rights you have.',
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p><strong>Last updated:</strong> 26 October 2026</p>
      <h2>Who we are</h2>
      <p>
        Aarohan Enterprises (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website at https://pinecoder.in and provides custom software, analytics and automation services and operates software products. This policy explains what personal information we collect, why, and the choices you have. By using our website or services you agree to this policy.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li><strong>Information you give us:</strong> your name, email address, phone or WhatsApp number, and the details you share about your project or requirements when you fill in our contact form, email us or message us.</li>
        <li><strong>Billing information:</strong> when you pay for a service, details needed to issue an invoice, such as your name, billing address and, where applicable, tax details. Card, UPI or bank details are handled by our payment processors and are not stored by us.</li>
        <li><strong>Technical information:</strong> basic data sent by your browser, such as IP address, device and browser type, pages visited and referring page, collected through server logs and analytics tools.</li>
        <li><strong>Project material:</strong> documents, data samples, workflows, scripts or screenshots you share so we can scope and build your solution. We never ask for your passwords, PINs or one-time codes. Please do not send them to us.</li>
      </ul>
      <h2>How we use your information</h2>
      <ul>
        <li>to respond to enquiries and prepare quotations;</li>
        <li>to deliver, support and maintain the services you request;</li>
        <li>to issue invoices, process payments and meet accounting and tax obligations;</li>
        <li>to communicate about your project, including updates and support;</li>
        <li>to understand how the site is used and improve it;</li>
        <li>to prevent fraud and abuse and to comply with the law.</li>
      </ul>
      <h2>Legal basis and consent</h2>
      <p>
        We collect personal information by fair and lawful means and with your knowledge and consent, and we process it in line with the Digital Personal Data Protection Act, 2023 and other applicable Indian law. You may withdraw consent at any time by contacting us, though this may mean we can no longer provide some services.
      </p>
      <h2>Sharing your information</h2>
      <p>
        We do not sell your personal information. We share it only with service providers who help us run the business, and only as needed for them to do so, for example payment processors, email and messaging providers, hosting and analytics providers. We may also disclose information where required by law or to protect our rights. These providers may use the information only for the purposes we engage them for.
      </p>
      <h2>Cookies and analytics</h2>
      <p>
        Our website may use cookies or similar technologies for basic functionality and to measure traffic. You can block or delete cookies in your browser settings; the site will still work, although some features may be limited.
      </p>
      <h2>Data retention and security</h2>
      <p>
        We keep personal information only as long as needed for the purposes above, including to meet legal, tax and accounting requirements, and delete or anonymise it afterwards. We use reasonable technical and organisational safeguards to protect it, but no method of transmission or storage is completely secure, so we cannot guarantee absolute security.
      </p>
      <h2>Your rights</h2>
      <p>
        Subject to applicable law, you may ask us to access, correct, update or delete the personal information we hold about you, and to tell us if you have a grievance about how it is handled. Write to us using the details below and we will respond within a reasonable time.
      </p>
      <h2>Third-party links</h2>
      <p>
        Our site may link to third-party websites, such as our product sites, payment providers or social platforms. We do not control them and are not responsible for their content or privacy practices.
      </p>
      <h2>Children</h2>
      <p>
        Our services are intended for adults. We do not knowingly collect personal information from anyone under 18.
      </p>
      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &quot;Last updated&quot; date above shows when it last changed, and continued use of the site after a change means you accept the updated policy.
      </p>
      <h2>Contact us</h2>
      <p>
        Aarohan Enterprises, Nagpur, Maharashtra, India. Email: <a href="mailto:contact@pinecoder.in">contact@pinecoder.in</a>. Phone / WhatsApp: +91 74994 62967. You can also use our <a href="/contact/">contact page</a>.
      </p>
    </LegalPageLayout>
  );
}
