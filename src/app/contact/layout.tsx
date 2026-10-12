import { pageMetadata } from '@/lib/metadata';

// contact/page.tsx is a client component and can't export metadata, so it lives here.
export const metadata = pageMetadata('/contact/', {
  title: 'Contact Us - Free Consultation',
  description:
    "Free consultation, no obligations. Tell Aarohan Enterprises your trading idea and we'll tell you how to automate it. We reply within 2–4 hours.",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
