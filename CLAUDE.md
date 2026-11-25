# pinecoder.in — Aarohan Enterprises website

Company marketing site for Aarohan Enterprises at the root of **pinecoder.in**. Positioning (redesigned 2026-10-30, branch `software-company-redesign`, not yet deployed): a **software company**, led by business operations, then data and analytics, then user convenience; custom work is quoted per project (no published prices); eight own SaaS products; three anonymised private-client systems (freight operations, real-time market data platform, gaming cafe). Look: blueprint / drafting-sheet, navy and gold from the logo, Archivo + IBM Plex Mono. Pages: `/`, `/products/`, `/services/`, `/about/`, `/pricing/`, `/contact/`, `/careers/`, privacy, terms, refund. `/careers/` (added 2026-11-25) is the SDE-intern opening: copy lives in `src/data/careers.ts`, page emits `JobPosting` + `FAQPage` JSON-LD. Applications come in through the on-page form (website link + optional code link + resume upload; no name/contact fields, the resume has them). Linked from the footer only, not the top nav (owner's call). Buttons scroll with JS (`ScrollButton`), so no `#task` fragments in the URL. When the role closes, remove the page (or the JobPosting schema) so Google for Jobs stops listing it. `/tools/`, `/assessment/`, `/disclaimer/` are static redirect stubs in `public/` (not in the sitemap). Ownership wording must stay "agreed per project", never "you own 100% of the code". (product
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

## Forms → Telegram (relay)

- `/contact/` and the `/careers/` apply form POST JSON to the **`pinecoder-forms` Lambda Function URL**
  (`src/lib/forms.ts`; source + tests + deploy in `forms-relay/`). It validates (resume sniffed by bytes:
  PDF/DOC/DOCX ≤ 4 MB; honeypot `company`), then calls Telegram `sendMessage` / `sendDocument` as
  **@AarohanEnt_ClientReg_Bot** into the owner's private chat.
- **Bot protection (2026-11-25):** both forms carry a Cloudflare **Turnstile** token (widget "pinecoder.in forms",
  site key in `src/lib/forms.ts`, domains pinecoder.in + localhost; secret only in the Lambda env as `TURNSTILE_SECRET`,
  carried over by `deploy.sh` on every redeploy). The relay rejects any POST without a valid token. The careers form
  also requires a video link and all six `applyChecks` boxes (keys shared with `APPLY_CHECKS` in the relay), and
  refuses a github.com profile/repo as the "website".
- **Every submission is also archived** (since 2026-11-25) to private bucket
  `pinecoder-form-submissions-576847308300` (public access blocked, SSE-S3, objects expire after 365 days):
  `applications/<UTC ts>-<id>/{submission.json,<resume>}` and `contacts/<UTC ts>-<id>/submission.json`.
  The Telegram message carries the `Saved:` prefix. If Telegram fails but S3 saved, the sender still gets OK.
  Read them: `aws s3 ls s3://pinecoder-form-submissions-576847308300/applications/ --recursive --profile cmroot`.
- AWS account 576847308300 (profile `cmroot`), ap-south-1, role `pinecoder-forms-lambda`. Redeploy:
  `bash forms-relay/deploy.sh` (runs the tests, reads the token from the repo's GitHub Actions variables
  `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` / `NEXT_PUBLIC_TELEGRAM_CHAT_ID` and writes them into the Lambda env;
  the names are legacy, they are NOT passed to the site build any more).
- **The bot token must never go back into the browser bundle.** History: from the 2026-02-25 Next.js
  rewrite until 2026-11-25 the workflow read `vars.TELEGRAM_BOT_TOKEN` (wrong name), so the live contact
  form shipped with no token and failed on every submit for ~9 months. Fixed by the relay.

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

**2026-11-25** (careers page + forms relay deployed, f87f6d3; sitemap resubmitted, HTTP 204):
- `/`, `/about/`, `/products/` — Submitted and indexed (about/products crawled 2026-11-23).
- `/contact/`, `/pricing/` — "Discovered – currently not indexed".
- `/careers/` — URL is unknown to Google (hours old). Re-inspect in a week; JobPosting should make it
  eligible for Google's job search once crawled.

**2026-10-30** (software-company redesign deployed, commit f8f10b5; sitemap resubmitted, HTTP 204):
- `/` — indexed (last crawled 2026-10-19, before the redesign; recrawl pending).
- `/pricing/`, `/products/` — "Discovered – currently not indexed". `/about/` — unknown to Google.
- Remaining gap is crawl priority/authority (inbound links), not tags. `/tools/`, `/assessment/`, `/disclaimer/`
  are now static redirect stubs (meta refresh + canonical, noindex). Re-inspect in a week.

**2026-10-12** (URL Inspection):
- `/` — indexed.
- `/about/`, `/tools/`, `/pricing/`, `/contact/`, `/assessment/`, `/privacy-policy/`,
  `/disclaimer/`, `/refund-policy/` — "Discovered – currently not indexed".
- `/terms-of-service/` — URL is unknown to Google.
- Same day: fixed missing canonicals on `/`, `/contact/`, `/assessment/` (+ per-page og:url),
  switched to the generated sitemap, resubmitted it. Remaining gap is crawl priority/authority
  (inbound links), not tags.
