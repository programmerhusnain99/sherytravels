# Shery Travels — WordPress → Next.js migration

Goal: redesign the site in **Next.js + Tailwind** while keeping the **same URLs**
and **preserving SEO/rankings**. Users should not notice any functional change —
only the design updates.

## Locked rules (do not break these)

| Rule | Value | Enforced by |
|------|-------|-------------|
| Canonical host | `https://sherytravels.com` (NON-www) | `src/lib/site.ts` + `www→non-www` redirect in `next.config.ts` |
| Trailing slash | Always on (`/about/`) | `trailingSlash: true` in `next.config.ts` |
| Casing | all lowercase | manual (keep route folders lowercase) |
| URL set | 51 URLs | `src/lib/seo-urls.ts` (drives `/sitemap.xml`) |

## What's already wired up

- `next.config.ts` — `trailingSlash: true` + `www → non-www` 301.
- `src/app/layout.tsx` — `metadataBase`, default metadata, site-wide
  `TravelAgency` + `WebSite` JSON-LD.
- `src/app/sitemap.ts` — generates `/sitemap.xml` from `src/lib/seo-urls.ts` (51 URLs).
- `src/app/robots.ts` — generates `/robots.txt` pointing to the new sitemap.
- `src/lib/seo.ts` — helpers: `pageMetadata()`, `breadcrumbSchema()`,
  `breadcrumbsFromPath()`, `articleSchema()`, `organizationSchema()`, `websiteSchema()`.
- `src/components/JsonLd.tsx` — `<JsonLd data={...} />` to inject structured data.

## How to build each page (keeps SEO parity)

1. Create the route folder matching the URL exactly, e.g.
   `/umrah/usa-packages/newyork/` → `src/app/umrah/usa-packages/newyork/page.tsx`.
2. Export `metadata` using the EXACT title + meta description from the migration
   tracker (see below). Example:

   ```tsx
   import { pageMetadata, breadcrumbSchema, breadcrumbsFromPath } from "@/lib/seo";
   import { JsonLd } from "@/components/JsonLd";

   const PATH = "/umrah/usa-packages/newyork/";

   export const metadata = pageMetadata({
     path: PATH,
     title: "New York Umrah Packages at Shery Travels", // EXACT
     description: "…",                                   // EXACT (or new, for the 5 blogs)
     ogType: "article",
   });

   export default function Page() {
     return (
       <>
         <JsonLd data={breadcrumbSchema(breadcrumbsFromPath(PATH))} />
         {/* page content — port the real text & images from the old page */}
       </>
     );
   }
   ```

3. **Port the real body content** (text, images w/ alt, internal links) from the
   old page — rankings depend on the on-page text, not just the metadata.
4. Blog posts: also add `articleSchema(...)`.
5. Tick the page off in the migration tracker.

## Reference data (migration audit artifacts)

Captured from the live site on 2026-11-04. Ask the assistant for these if not in
the repo: `migration-tracker.csv` (per-page title/meta/H1/canonical/route),
`seo-capture.csv` (full raw capture), `redirects-and-robots-spec.md`,
`seo-enhancement-spec.md`.

## SEO improvements being applied at launch (decided: migrate + improve together)

- New meta descriptions for 5 blog pages that currently have none.
- Expanded JSON-LD: `TravelAgency` site-wide, `BreadcrumbList` on nested pages,
  `Article`/`BlogPosting` on blog posts.
- Keep titles, existing meta, body copy, and canonicals unchanged.

## Pre-launch checklist

- [ ] All 51 routes built and ticked in the tracker
- [ ] Deploy to a **noindex** staging URL; re-crawl with Screaming Frog; diff vs baseline
- [ ] Google Rich Results Test on one page per template type
- [ ] Remove `noindex`, go live
- [ ] Verify live redirects: `www→non-www`, `http→https`, slash enforcement
- [ ] 301 old sitemap URLs (`/sitemap_index.xml`, `/post-sitemap.xml`, `/page-sitemap.xml`, `/wp-sitemap.xml`) → `/sitemap.xml`
- [ ] GSC: submit new sitemap, inspect key URLs, watch Indexed (~51) & Performance for 2–3 weeks
- [ ] Keep WordPress backed up for rollback
