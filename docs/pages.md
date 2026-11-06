# Pages

The 51 pages, grouped by template. "Template" = shared layout/structure; most pages
are one of ~6 templates repeated. Template assignments are **provisional** until we
review each design. Status: ⬜ not started · 🚧 in progress · ✅ done.

> Exact title/meta/canonical for every page: `docs/migration/migration-tracker.csv`.

## Templates

| Template | Purpose |
|----------|---------|
| Home | Landing page / brand entry. |
| Simple content | Text-heavy static pages. |
| Section hub | Overview/listing for a section. |
| Package landing | A specific Umrah/Hajj package offering. |
| Blog index | List of blog posts. |
| Blog post | A single article. |

## Home (1)
- ✅ `/` — Home — built on `features/home`: all 14 blocks (hero, trending carousel,
  first-choice rail, umrah, perfect-package, transport, steps, hajj, hotels tabs,
  form, faqs, trust) + shell. 1 H1, 11 H2s, static prerender, exact title/meta/canonical.
  Placeholder images in place (swap real photos at `public/images/home/`).

## Simple content (3)
- ✅ `/about/` — built on `features/home`. All live content preserved (founding story,
  3 pillars, Why Shery Travels, inquiry form). Exact title/meta/canonical, 1 H1.
- ✅ `/contact/` — built. Address + both phones + email + map + 3-type inquiry form.
  Exact title/meta/canonical, 1 H1. Address added to site-wide Organization schema.
- ⬜ `/privacy-policy/`

## Section hubs (5)
- ✅ `/umrah/` — built from the shared `PilgrimagePage` template (hero, overview,
  4 service cards, journey stages, FAQ, inquiry). Exact title/meta/canonical, 1 H1.
- ✅ `/umrah/usa-packages/` — anchor hub. Hero, 3 feature cards, 3 star-tiers × 3
  price cards (9, new-design via `PriceCard`), navy Why-Choose band, Specialized +
  Holy-Months link tiles (→ child pages), numbered highlights, Monthly CTA, FAQ,
  inquiry. Exact title/meta/canonical, 1 H1. Links to ~13 child pages not yet built.
- ✅ `/hajj/` — same `PilgrimagePage` template, Hajj data. Exact title/meta/canonical, 1 H1.
  (Live <title> keeps its quirky surrounding quotes — flagged for client.)
- ✅ `/hajj/usa-packages/` — hero, 3 feature cards, trusted intro, 3 room-type cards
  (no price — bed/board details, reuses PriceCard), navy Why-Rely band, Transparent
  Journey, Designed-for-every-Muslim + audience chips, Essential Documents (4 numbered),
  Be-Part-of-a-Guided-Group band, FAQ, inquiry. Exact title/meta/canonical, 1 H1.
- ✅ `/transportation/` — dedicated page (hero, reliable-transfers intro, Madinah,
  fleet grid, navy Ziarat band, how-it-works, effortless-planning, book-your-ride
  steps, FAQ, inquiry). Reuses FaqAccordion + ContactForm. Exact title/meta/canonical, 1 H1.

Reusable: `src/components/sections/PilgrimagePage.tsx` + `FaqAccordion.tsx`; data in
`src/data/pages/{umrah,hajj}.ts`. One template, two data sets — no duplication.

## Transportation sub-pages (2)
- ✅ `/transportation/ziarat/` — hero, 3 feature cards, Makkah (10 sites) + Madinah
  (8 sites) chip sections, navy "Why Choose Us" band, booking steps, FAQ, inquiry.
  Exact title/meta/canonical, 1 H1. Breadcrumb: Home ▸ Transportation ▸ Ziarat Tours.
- ✅ `/transportation/fleets/` — hero, 3 feature cards, premium-experience section,
  6 vehicle cards (persons/luggage/AC), navy "Why Choose Us" band, FAQ, inquiry.
  Exact title/meta/canonical, 1 H1. NOTE: GMC Yukon spec was missing on live
  (filled 7/7 from the Transportation page) — flagged for client.

## Package landings — Umrah USA (30)
✅ 29 built from ONE shared template `PackageLandingPage` + per-page data files in
`src/data/packages/<slug>.ts` (edit one page without touching others). Route wrappers
in `src/app/umrah/usa-packages/<slug>/page.tsx`. Each: hero, 9 price cards (own prices),
"Why/What's Included" navy band (4 highlights), "Plan Your X", FAQ, inquiry. Exact
title/meta/canonical, 1 H1, static.
- Cities (9): ✅ newyork, chicago, los-angeles, washington-dc, dallas, detroit, houston, atlanta, dearborn
- Package types (4): ✅ economy, family, group, luxury (`*-umrah-packages`) — +2 extra blocks
- Seasonal (4): ✅ rabi-ul-awal, ramadan, shaban, shawwal
- Months (12): ✅ january … december
- ⬜ monthly (the hub, different structure — build separately)
NOTE: live Dallas & Houston pages carry stray "Types of Economy Packages" sections
(WordPress copy-paste error) — preserved verbatim in their data files; flagged for client.

## Blog index (1)
- ⬜ `/blogs/`

## Blog posts (9)
- ⬜ `/blogs/umrah-types/`
- ⬜ `/blogs/hajj-guide/`
- ⬜ `/blogs/umrah-guide-for-usa/`
- ⬜ `/blogs/ziyarat-in-makkah/`
- ⬜ `/blogs/ziyarat-in-madina-sacred-sites-guided-tours-by-shery-travels/`
- ⬜ `/blogs/umrah-transport-costs-breakdown/`
- ⬜ `/blogs/hajj-umrah-visa-requirements/`
- ⬜ `/blogs/best-time-to-book-umrah-usa/`
- ⬜ `/blogs/jeddah-mecca-guide/`

---
Total: 51. Per-template section breakdowns will be added here as we design each.
