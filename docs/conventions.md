# Conventions

Project-wide conventions. Keep these consistent so the codebase stays predictable.

## Images

- **Location:** `public/images/`
- **Per-page folders:** one folder per page, named after the page.
  - Home → `public/images/home/`
  - About → `public/images/about/`
  - Package page (New York) → `public/images/umrah-usa-newyork/` (flatten the URL path, hyphenated)
- **Filename prefix:** every file is prefixed with its page name.
  - `public/images/home/home-hero.webp`, `home-cta.webp`, `home-package-umrah.webp`
- **Global/shared assets:** `public/images/common/` with a `common-` prefix
  (e.g. `common-logo.webp`, `common-og-default.webp`).
- **Format:** **WebP** for all content images (smaller = better Core Web Vitals).
  Keep an SVG for the logo/icons where vector is better.
- **Always** render via `next/image` with meaningful `alt` text (accessibility + image SEO).

## Folders / routes

- Route folders mirror the URL exactly, lowercase, matching `seo-urls.ts`.
  - `/umrah/usa-packages/newyork/` → `src/app/umrah/usa-packages/newyork/page.tsx`
- Shared code in `src/lib/`, shared UI in `src/components/`.

## Components

- Server Component by default. Add `"use client"` only on interactive leaf components.
- Shared components live in `src/components/`; document them in `components.md`.
- Name files PascalCase (`PackageCard.tsx`), one primary component per file.

## Docs

- Every significant feature/decision → a doc in `docs/`, linked from `docs/index.md`.
- Brief but sufficient. Update the relevant doc when behavior changes.

## SEO (summary — full detail in seo.md)

- Exact URLs, titles, meta, canonicals. Server-rendered content. No `useEffect` for SEO content.
