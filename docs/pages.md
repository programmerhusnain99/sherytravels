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
- ⬜ `/about/`
- ⬜ `/contact/`
- ⬜ `/privacy-policy/`

## Section hubs (5)
- ⬜ `/umrah/`
- ⬜ `/umrah/usa-packages/`
- ⬜ `/hajj/`
- ⬜ `/hajj/usa-packages/`
- ⬜ `/transportation/`

## Transportation sub-pages (2)
- ⬜ `/transportation/ziarat/`
- ⬜ `/transportation/fleets/`

## Package landings — Umrah USA (30)
Cities (9): ⬜ newyork, chicago, los-angeles, washington-dc, dallas, detroit, houston, atlanta, dearborn
Package types (4): ⬜ economy, family, group, luxury (`*-umrah-packages`)
Seasonal (5): ⬜ rabi-ul-awal, ramadan, shaban, shawwal, monthly
Months (12): ⬜ january … december
(all under `/umrah/usa-packages/<slug>/`)

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
