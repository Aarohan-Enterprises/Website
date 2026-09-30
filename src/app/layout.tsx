import type { Metadata } from 'next';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { GA_ID } from '@/lib/analytics';
import { siteConfig, organizationSchema, localBusinessSchema } from '@/data/seo';

// Grotesque body face — clean, neutral, readable at small sizes.
const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

// Monospace — the display/heading voice and all tabular labels and captions.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Aarohan Enterprises — Software Development Studio',
    template: '%s | Aarohan Enterprises',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: 'Aarohan Enterprises — Software Development Studio',
    description: 'We design, build, and ship web apps, SaaS platforms, browser extensions, desktop apps, and cloud systems — from idea to production.',
    images: [siteConfig.ogImage],
    siteName: siteConfig.name,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aarohan Enterprises — Software Development Studio',
    description: 'We design, build, and ship web apps, SaaS platforms, browser extensions, desktop apps, and cloud systems — from idea to production.',
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hanken.variable} ${jetbrainsMono.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-body bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
