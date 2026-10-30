import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { GA_ID } from '@/lib/analytics';
import { siteConfig, organizationSchema, localBusinessSchema } from '@/data/seo';
import { DEFAULT_TITLE, DEFAULT_SOCIAL_DESCRIPTION } from '@/lib/metadata';

// One grotesque for display and body; weight does the hierarchy.
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  variable: '--font-sans',
});

// Mono for labels, captions and figures.
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Aarohan Enterprises',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: DEFAULT_TITLE,
    description: DEFAULT_SOCIAL_DESCRIPTION,
    images: [siteConfig.ogImage],
    siteName: siteConfig.name,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_SOCIAL_DESCRIPTION,
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
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
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
