# SEO parity + enhancement spec (Step 4 decisions)

Policy chosen: **Migrate + improve together.** Launch the redesign with SEO
improvements applied in the same release. Trade-off accepted: if rankings move
after launch, it's harder to attribute to design vs. SEO changes — so we mitigate
by (a) keeping URLs/titles/content faithful, (b) only ADDING signals (meta, schema),
not removing or rewording existing ones, and (c) watching GSC closely for 2–3 weeks.

## KEEP EXACTLY (do not change — ranking-sensitive)
- All 51 URLs: non-www, trailing slash, lowercase. (byte-for-byte)
- `<title>` tags: reuse current text verbatim (keeps keyword targeting intact).
  - Long blog titles (82–94 chars) stay as-is for launch — do NOT reword.
- Existing `<meta name="description">` on the 46 pages that have one: reuse verbatim.
- H1 text and heading hierarchy: preserve (one H1 per page).
- Body content / copy: preserve the words (SEO depends on on-page text). Redesign
  changes layout & styling, NOT the substantive content.
- Canonical tags: self-referencing, matching each URL exactly.
- Open Graph tags: preserve (home=website, inner=article).

## ADD / IMPROVE AT LAUNCH (net-new, low risk)
1. **Meta descriptions for the 5 pages currently missing them:**
   - /blogs/ (index)
   - /blogs/umrah-transport-costs-breakdown/
   - /blogs/hajj-umrah-visa-requirements/
   - /blogs/best-time-to-book-umrah-usa/
   - /blogs/jeddah-mecca-guide/
   → Draft unique, ~150–160 char descriptions during build.

2. **Structured data (JSON-LD) expansion:**
   - Site-wide: `TravelAgency` (or `Organization`) with name, logo, URL, contactPoint,
     sameAs (social). Replaces/extends the current Organization block.
   - All nested pages: `BreadcrumbList` reflecting the URL path
     (e.g. Home ▸ Umrah ▸ USA Packages ▸ New York).
   - Blog posts (9): `Article` / `BlogPosting` with headline, datePublished,
     dateModified, author, image.
   - Package pages: consider `Product`/`Offer` later if pricing is structured.
   → Validate every template against Google Rich Results Test before launch.

## VERIFY POST-LAUNCH
- http→https and http→www→non-www redirects (couldn't test from build env).
- Rich Results Test on 1 page of each template type.
- GSC: submit new sitemap, watch Indexed count stays ~51 and Performance holds.

## STILL NEEDED BEFORE BUILD
- Full page CONTENT capture (body text, images, internal links, section structure)
  so the redesign preserves content + experience. Metadata alone isn't enough to
  rebuild pages. → This is the next step.
