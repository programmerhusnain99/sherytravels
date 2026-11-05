# Setup

What was done to set up the project. Record of the foundation everything else builds on.

## Stack

- **Next.js 16.4.5** — App Router, TypeScript, `src/` directory
- **React 19.3**
- **Tailwind CSS v4**
- **ESLint**, npm
- Node 22, npm 10.9

## How it was scaffolded

- Created with `create-next-app` (TS + Tailwind + App Router + `src/` + ESLint + `@/*` alias).
- Scaffolded in a temp dir, then merged into the existing git repo so the original
  `.git` history and the placeholder `shery_travels.txt` were preserved.

## Configuration (`next.config.ts`)

- `trailingSlash: true` — every URL ends in `/` (matches live site; see seo.md).
- `redirects()` — `www.sherytravels.com/*` → `https://sherytravels.com/*` (301).
- `cacheComponents: true`, `partialPrefetching: true` — enabled by the scaffold (Next 16 caching).
- Turbopack CSS rule for Tailwind.

## Files added for the foundation

| File | Purpose |
|------|---------|
| `src/lib/site.ts` | Central site config: canonical `baseUrl`, brand, `absoluteUrl()` helper. |
| `src/lib/seo.ts` | `pageMetadata()` + JSON-LD builders (organization/website/breadcrumb/article). |
| `src/lib/seo-urls.ts` | The locked list of all 51 URLs (drives the sitemap). |
| `src/app/sitemap.ts` | Generates `/sitemap.xml` from `seo-urls.ts`. |
| `src/app/robots.ts` | Generates `/robots.txt` → new sitemap. |
| `src/components/JsonLd.tsx` | `<JsonLd data={...} />` structured-data injector. |
| `src/app/layout.tsx` | `metadataBase`, default metadata, site-wide TravelAgency/WebSite JSON-LD. |

## Docs & audit artifacts

- `MIGRATION.md` (root) — overview + per-page build recipe.
- `docs/` — this documentation set.
- `docs/migration/` — URL inventory, SEO capture CSVs, redirect & enhancement specs.

## Verification

- `npm run build` passes (TypeScript clean).
- Preview served on port 3000; `/sitemap.xml` (51 URLs), `/robots.txt`, and site-wide
  JSON-LD all verified rendering.

## Source control

- Branch: `claude/affectionate-keller-ydpnro`
- First foundation commit: `ee34a0e`, pushed to origin.
- `node_modules/` and `.next/` are gitignored.

## Image folders

- `public/images/<page>/` with files prefixed by page name, WebP format.
- `public/images/common/` for global assets (prefix `common-`).
- See conventions.md.
