import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = pageMetadata('/disclaimer/', {
  title: 'Disclaimer',
  description: 'Disclaimer for Aarohan Enterprises: trading involves risk, nothing here is financial advice, and past performance does not indicate future results.',
});

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="Disclaimer">
      <p><strong>Last updated:</strong> 26 October 2026</p>
      <h2>Educational and informational purposes</h2>
      <p>
        The information provided by Aarohan Enterprises on this website and in our materials is for educational and informational purposes only.
      </p>
      <h2>Not financial advice</h2>
      <p>
        We are not registered investment advisers, research analysts or portfolio managers, and nothing on this website or in our communications should be construed as financial, investment, legal or tax advice, or as a recommendation to buy or sell any security. Consult a qualified, SEBI-registered professional before making financial decisions.
      </p>
      <h2>Trading involves risk</h2>
      <p>
        Trading in financial markets, including equities, futures and options, involves substantial risk and is not suitable for all investors. You can lose some or all of your capital. Automated trading adds further risks, such as software errors, connectivity failures, latency, slippage, rejected orders and broker or exchange outages.
      </p>
      <h2>No guarantee of results</h2>
      <p>
        Past performance is not indicative of future results. Backtests and simulations are based on historical data and assumptions, and typically do not reflect real execution costs, liquidity or slippage. We make no promise or guarantee of profit or of any particular outcome.
      </p>
      <h2>Tools built to your specification</h2>
      <p>
        We develop indicators, strategies and integrations according to the logic you specify. The trading decisions, strategy parameters, position sizing and risk limits are yours, and you are solely responsible for testing, monitoring and operating them, including on live capital.
      </p>
      <h2>Third-party platforms</h2>
      <p>
        We are not affiliated with TradingView, any broker, exchange or bridge platform unless explicitly stated. Product names belong to their owners. Their availability, terms and fees are outside our control, and we are not responsible for their errors or changes.
      </p>
      <h2>Accuracy of information</h2>
      <p>
        We try to keep the website accurate and current, but we make no warranty that it is complete, accurate or up to date, and content may change without notice. Pricing shown is indicative only; see our <a href="/pricing/">pricing page</a> and your written quotation.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Aarohan Enterprises accepts no liability for any loss or damage, including trading losses, arising from use of this website, our tools or reliance on any information provided. See our <a href="/terms-of-service/">Terms of Service</a> for details.
      </p>
      <h2>Contact us</h2>
      <p>
        Aarohan Enterprises, Nagpur, Maharashtra, India. Email: <a href="mailto:contact@pinecoder.in">contact@pinecoder.in</a>. Phone / WhatsApp: +91 74994 62967. You can also use our <a href="/contact/">contact page</a>.
      </p>
    </LegalPageLayout>
  );
}
