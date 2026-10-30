# pinecoder.in — Aarohan Enterprises website

Company marketing site for Aarohan Enterprises at the root of **pinecoder.in**. Positioning (redesigned 2026-10-30, branch `software-company-redesign`, not yet deployed): a **software company**, led by business operations, then data and analytics, then user convenience; custom work is quoted per project (no published prices); eight own SaaS products; two anonymised private-client systems (freight operations, gaming cafe). Look: blueprint / drafting-sheet, navy and gold from the logo, Archivo + IBM Plex Mono. Pages: `/`, `/products/`, `/services/`, `/about/`, `/pricing/`, `/contact/`, privacy, terms, refund. `/tools/`, `/assessment/`, `/disclaimer/` are static redirect stubs in `public/` (not in the sitemap). Ownership wording must stay "agreed per project", never "you own 100% of the code". (product
subdomains like alertsync / groupsync / section63 are separate repos). Workspace-wide SEO/DNS
rules live in `..\.claude\CLAUDE.md` (outside this repo); this file covers only what is specific
here. No secrets in this file — the repo is on GitHub.

## Deploy map

- Next.js 14 App Router, `output: 'export'`, `trailingSlash: true` → static `out/`.
- GitHub repo `Aarohan-Enterprises/Website`. **Push to `main` = deploy**:
  `.github/workflows/github-pages.yml` runs `npm ci && npm run build` and publishes `out/`
  to GitHub Pages. Custom domain via `public/CNAME` (`pinecoder.in`). Usually live 1–3 min
  after the workflow finishes.
- DNS: Cloudflare zone `pinecoder.in`, apex A records → GitHub Pages IPs (185.199.108–111.153), DNS-only.

## SEO specifics

- **Every page's metadata goes through `pageMetadata('/route/', {...})` in
  `src/lib/metadata.ts`.** It emits the self-referencing canonical
  (`https://pinecoder.in/route/`, trailing slash) and a matching `og:url`, plus OG/Twitter
  title/description. Don't hand-write `alternates.canonical` and don't put `openGraph.url` in
  the root layout (that used to stamp the homepage URL on every page).
- Client-component pages (`'use client'`, e.g. `contact`, `assessment`) can't export metadata —
  put it in a sibling `layout.tsx` (see `src/app/contact/layout.tsx`). That's how `/`, `/contact/`
  and `/assessment/` shipped with no canonical until 2026-10-12.
- `sitemap.xml` is **generated** by `src/app/sitemap.ts` from the `src/app/**/page.tsx` tree on
  every build — no hand-kept `public/sitemap.xml`. It deliberately has **no `<lastmod>`** (no
  honest per-page date source; CI does a shallow checkout). New page = automatically in the sitemap.
- `public/robots.txt` allows all and points at the sitemap.
- JSON-LD `Organization` + `ProfessionalService` in `src/app/layout.tsx` (data in `src/data/seo.ts`); `ItemList` of `SoftwareApplication` on `/products/`; `FAQPage` on `/pricing/`. `public/og-image.jpg` was missing before the redesign (every og:image 404ed); it now exists.
- After a deploy: resubmit `https://pinecoder.in/sitemap.xml` to `sc-domain:pinecoder.in` via the
  Search Console API (google-auth ADC in-process; see workspace CLAUDE.md §2) and URL-inspect
  changed pages.

## Indexing snapshot

**2026-10-12** (URL Inspection):
- `/` — indexed.
- `/about/`, `/tools/`, `/pricing/`, `/contact/`, `/assessment/`, `/privacy-policy/`,
  `/disclaimer/`, `/refund-policy/` — "Discovered – currently not indexed".
- `/terms-of-service/` — URL is unknown to Google.
- Same day: fixed missing canonicals on `/`, `/contact/`, `/assessment/` (+ per-page og:url),
  switched to the generated sitemap, resubmitted it. Remaining gap is crawl priority/authority
  (inbound links), not tags.
