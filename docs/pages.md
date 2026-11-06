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
- ✅ `/privacy-policy/` — built. Legal article: Legal eyebrow + "Privacy Policy" H1, 2
  intro paragraphs, 11 sections verbatim (Information We Collect with Personal/Non-Personal
  sub-lists, Our Use, Our Sharing, Cookies, Data Safety, Your Rights, Data Retention,
  Children's Privacy, International Users, Changes, Contact Us). Exact title
  ("Shery Travels’ Privacy Policy") + meta/canonical, 1 H1. Sections driven by a local
  `SECTIONS` data array + `Bullets` helper (gold-check list items).

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
- ✅ monthly (the hub, different structure) — hero ("Find the Perfect Month for Your Umrah
  Journey"), navy "Why Monthly Umrah Packages Matter" band (4 numbered highlights), "Discover
  Your Ideal Monthly Umrah Package" with 12 month link-tiles (→ `/umrah/usa-packages/<month>/`),
  "Customize" CTA band, inquiry form. Exact title + meta/canonical, 1 H1. NOTE: live meta
  description carries literal surrounding quotes (WordPress quirk) — preserved EXACT for SEO
  parity; flagged to client. Hero image is a placeholder pending the real asset.
NOTE: live Dallas & Houston pages carry stray "Types of Economy Packages" sections
(WordPress copy-paste error) — preserved verbatim in their data files; flagged for client.

## Blog index (1)
- ✅ `/blogs/` — built. Header (Guides & insights eyebrow + "Blogs" H1 — exact, + intro),
  featured latest post card, then a responsive grid of `BlogCard`s (category chip, headline,
  excerpt, date · read-time, Read link). Exact title "Blogs - Shery Travels", og:type website,
  no meta description (matches live). Cards read from the post data files, so each post is the
  single source of truth for its card AND its page.

## Blog posts (9)
✅ All 9 built from ONE shared template `BlogPostPage` + per-post data files in
`src/data/blog/<slug>.ts` (content VERBATIM from live WordPress, extracted into ordered
`blocks[]`). Route: `src/app/blogs/[slug]/page.tsx` (generateStaticParams → all 9 prerendered
static; generateMetadata → exact per-post title/description/canonical, og:type article;
BlogPosting + Breadcrumb JSON-LD). `BlogContent` renders headings/paragraphs/lists with
on-brand typography; `BlogCard` is shared by the index grid and each post's "related reads".
Hero shows category chip + exact H1 + publish date + read time; inline CTA + related posts.
Image-free by design (the live posts carry no featured images); categories are presentational.
- ✅ `/blogs/umrah-types/` (desc ✓)
- ✅ `/blogs/hajj-guide/` (desc ✓)
- ✅ `/blogs/umrah-guide-for-usa/` (desc ✓)
- ✅ `/blogs/ziyarat-in-makkah/` (desc ✓)
- ✅ `/blogs/ziyarat-in-madina-sacred-sites-guided-tours-by-shery-travels/` (desc ✓)
- ✅ `/blogs/umrah-transport-costs-breakdown/` (no live meta desc — preserved as none).
  NOTE: live post has an empty "Cost Comparison of Umrah Transport Service (2025 Rates)"
  heading with no content under it (author left the section empty) — preserved verbatim.
- ✅ `/blogs/hajj-umrah-visa-requirements/` (no live meta desc — preserved as none)
- ✅ `/blogs/best-time-to-book-umrah-usa/` (no live meta desc — preserved as none)
- ✅ `/blogs/jeddah-mecca-guide/` (no live meta desc — preserved as none)

Flag for client: the live blog has no featured images, authors, or categories. The new design
is a clean image-free layout; supply post images anytime and they can be added to cards + hero.

---
Total: 51. Per-template section breakdowns will be added here as we design each.
