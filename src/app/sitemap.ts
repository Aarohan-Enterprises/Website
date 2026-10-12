import fs from 'node:fs';
import path from 'node:path';
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/seo';

export const dynamic = 'force-static';

/**
 * Route-derived sitemap, regenerated on every build: every src/app/**\/page.tsx
 * becomes a trailing-slash URL (matches trailingSlash: true and each page's canonical).
 *
 * No <lastmod>: there is no honest per-page modification date at build time (CI does a
 * shallow checkout, and a build-time stamp on every URL tells Google nothing). Add it
 * back only with a real per-page date source.
 */
function collectRoutes(dir: string, route = ''): string[] {
  const routes: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      // Skip route groups, private folders, dynamic and parallel segments.
      if (/^[([@_]/.test(entry.name)) continue;
      routes.push(...collectRoutes(path.join(dir, entry.name), `${route}/${entry.name}`));
    } else if (/^page\.(tsx|ts|jsx|js|mdx)$/.test(entry.name)) {
      routes.push(`${route}/`);
    }
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'src', 'app');
  return collectRoutes(appDir)
    .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)))
    .map((route) => ({ url: `${siteConfig.url}${route}` }));
}
