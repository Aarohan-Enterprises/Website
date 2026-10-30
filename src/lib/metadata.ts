import type { Metadata } from 'next';
import { siteConfig } from '@/data/seo';

export const DEFAULT_TITLE = 'Aarohan Enterprises | Business Operations Software, Analytics and SaaS';
export const DEFAULT_SOCIAL_DESCRIPTION =
  "Operations systems, analytics dashboards and everyday tools, built to order, plus eight SaaS products of our own. Based in Nagpur, India.";

/**
 * Per-page metadata with a self-referencing canonical and a matching og:url.
 *
 * `path` is the route with a trailing slash ('/', '/about/', ...) to match
 * `trailingSlash: true` in next.config.js — GitHub Pages serves the slash form
 * and 301s the slash-less one, so the canonical must be the slash form.
 * Every page must go through this helper so no route ships without a canonical.
 */
export function pageMetadata(path: string, meta: Metadata = {}): Metadata {
  if (!path.startsWith('/') || !path.endsWith('/')) {
    throw new Error(`pageMetadata: path must start and end with "/" (got "${path}")`);
  }
  const url = `${siteConfig.url}${path}`;
  const title = typeof meta.title === 'string' ? `${meta.title} | ${siteConfig.name}` : DEFAULT_TITLE;
  const ogTitle = (meta.openGraph?.title as string | undefined) ?? title;
  const ogDescription = meta.openGraph?.description ?? meta.description ?? DEFAULT_SOCIAL_DESCRIPTION;

  return {
    ...meta,
    alternates: { ...meta.alternates, canonical: url },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      locale: 'en_IN',
      images: [siteConfig.ogImage],
      ...meta.openGraph,
      title: ogTitle,
      description: ogDescription,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      images: [siteConfig.ogImage],
      ...meta.twitter,
      title: ogTitle,
      description: ogDescription,
    },
  };
}
