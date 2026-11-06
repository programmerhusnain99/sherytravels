# SEO

All SEO measures implemented and planned. The migration's core goal is to preserve
the existing site's rankings, so this doc is the authority on SEO behavior.

## URL parity (locked)

- 51 URLs, matched **byte-for-byte**: non-www, lowercase, always trailing slash.
- Canonical origin: `https://sherytravels.com`.
- Full list: `src/lib/seo-urls.ts`; per-page detail: `docs/migration/migration-tracker.csv`.

## Redirects (must reproduce old behavior)

| From | To | Where |
|------|----|-------|
| `www` → non-`www` | `https://sherytravels.com/*` | `next.config.ts` redirects() + host/CDN |
| no trailing slash → trailing slash | `/about` → `/about/` | `trailingSlash: true` |
| `http` → `https` | — | host/CDN (verify after deploy) |
| old sitemap URLs | → `/sitemap.xml` | add at launch (301) |

## Sitemap & robots

- `/sitemap.xml` — generated from `seo-urls.ts`, all 51 URLs with lastmod + priority.
- `/robots.txt` — allows all, points to `/sitemap.xml`; old `/wp-admin/` rules dropped.

## Per-page metadata

Set via `pageMetadata()` in `src/lib/seo.ts`. Each page provides:
- Exact `<title>` (absolute — no suffix appended).
- Exact meta description (reuse current; 5 blog pages get new ones — see below).
- Self-referencing canonical (matches the page URL exactly).
- Open Graph (home = `website`, inner = `article`) + Twitter card.
- `metadataBase` is set in the root layout so relative URLs resolve to the canonical origin.

## Structured data (JSON-LD)

- **Site-wide (root layout):** `TravelAgency` (Organization) + `WebSite`.
- **Nested pages:** `BreadcrumbList` (use `breadcrumbSchema(breadcrumbsFromPath(path))`).
- **Blog posts:** `Article`/`BlogPosting` (`articleSchema(...)`).
- Validate each template against Google Rich Results Test before launch.

## Rendering policy (SEO-critical)

- Server Components by default → content + data in the server-rendered HTML, zero JS.
- Static rendering where possible; SSR where content is request-time dynamic.
- Interactivity via small `"use client"` islands only.
- **Never** fetch SEO-critical content in `useEffect` (it won't be in the HTML).

## Enhancement decisions (migrate + improve together)

Keep exact: URLs, titles, existing meta descriptions, body copy, canonicals, OG.
Add at launch:
- Meta descriptions for the 5 blog pages missing them:
  `/blogs/`, `/blogs/umrah-transport-costs-breakdown/`,
  `/blogs/hajj-umrah-visa-requirements/`, `/blogs/best-time-to-book-umrah-usa/`,
  `/blogs/jeddah-mecca-guide/`.
- Expanded JSON-LD (above).

## Pre-launch / post-launch checklist

- [ ] All 51 routes built, exact metadata set.
- [ ] Deploy to a **noindex** staging URL; re-crawl (Screaming Frog); diff vs baseline.
- [ ] Rich Results Test on one page per template.
- [ ] Remove noindex; verify live redirects (www→non-www, http→https, slash).
- [ ] 301 old sitemap URLs → `/sitemap.xml`.
- [ ] GSC: submit sitemap, inspect key URLs, watch Indexed (~51) & Performance for 2–3 weeks.
- [ ] Keep WordPress backup for rollback.
