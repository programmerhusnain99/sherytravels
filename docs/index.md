# Shery Travels — Documentation Index

> Single entry point for all project docs. Every significant thing we do gets its
> own doc, linked here.

## About the site

**Shery Travels** is a Hajj & Umrah travel agency website. This project is a
**redesign** of the existing WordPress site into **Next.js + Tailwind**, with one
hard constraint: **keep the exact same URLs and preserve existing SEO/rankings.**
Users should notice only a new design — the content, URLs, and experience stay the same.

- Live (current WordPress) site: https://sherytravels.com
- Canonical host: `https://sherytravels.com` (non-www, trailing slash, lowercase)
- Stack: Next.js 16 (App Router, TypeScript, `src/`), Tailwind v4

## Documents

| Doc | What it covers |
|-----|----------------|
| [setup.md](./setup.md) | Everything done to set up the project (scaffold, config, tooling, deploy). |
| [seo.md](./seo.md) | All SEO measures: URL parity, redirects, sitemap, robots, metadata, structured data. |
| [pages.md](./pages.md) | The 51 pages, their templates, and what each page is. |
| [components.md](./components.md) | Component inventory: shared/common vs page-specific, server vs client. |
| [conventions.md](./conventions.md) | Project conventions: images, folders, docs, naming. |
| [migration/](./migration/) | Raw audit artifacts: URL inventory, SEO capture, redirect & enhancement specs. |
| [../MIGRATION.md](../MIGRATION.md) | Top-level migration overview + per-page build recipe. |

## How we work

- **Docs:** anything we build or decide → a doc (or an update to one). Keep this index current.
- **Rendering:** Server Components by default (SEO + zero JS); `"use client"` only on
  interactive leaf components ("islands"). Never fetch SEO-critical content in `useEffect`.
- **Build order:** page-by-page, extracting shared components as they repeat. ~6 templates cover all 51 pages.
- **This Next.js has breaking changes** (see `AGENTS.md`): read `node_modules/next/dist/docs/`
  before writing page/routing/metadata code.
