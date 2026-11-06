# Homepage — component & implementation plan

Approved plan for building the homepage (`/`). Source design analysis:
[home-design-analysis.md](./home-design-analysis.md). Built on branch `features/home`.

## Decisions (locked)
- **Hotels section** → reconcile to the **global tokens** (`#1A3E6E` navy, `#DBB725` gold,
  Libre Baskerville), NOT the draft `#103A71`/Playfair.
- **Placeholder data** (package prices, "1,000+ pilgrims" stat) → build with the design's
  placeholders now; real values swapped into `src/data/home/*` before launch.
- **Tablet** → design holds the mobile composition up to ~900px, then desktop. Custom
  `900px` breakpoint; tablet (≤900) uses the mobile layout.
- **Copy** → visible copy follows the new design; `<title>`/meta/canonical stay exact
  (via `pageMetadata()`). Homepage H1/body change from the live site is the monitored SEO risk.

## Architecture

### Shell (site-wide, built once)
| Component | Type | Notes |
|---|---|---|
| `Header` (utility strip + logo row + nav) | [S] | tel: links, nav links |
| `MobileNav` (hamburger drawer) | [C] | open/close drawer |
| `Footer` | [S] | real sitemap links |
| `InquiryProvider` + `InquiryModal` | [C] | one global modal, opened via context |
| `InquireButton` | [C] | trigger island (nav, footer) |

### Shared primitives
`Container`, `Section`, `Eyebrow`, `AccentHeading` (italic-gold word), `Button`
(navy / gold-on-navy), `Pill`/`Badge`, `Icon` (Material Symbols), `StatBadge`,
`EnquiryForm` (field-configurable; reused by hero, form section, modal).

### Data (server-rendered → in HTML for SEO)
`src/data/home/`: `packages.ts`(8), `features.ts`(4), `perfect-packages.ts`(5),
`transport.ts`, `steps.ts`, `hajj.ts`, `hotels.ts`, `faqs.ts`, `trust.ts`;
`src/data/nav.ts` (nav + footer links + phones).

## Section rendering split

| # | Section | Component | Type | Island (JS) |
|---|---|---|---|---|
| Hero | Hero | `Hero` | [S] | `HeroArchCarousel` [C] (4-photo cross-fade 4.2s), `EnquiryForm` [C] |
| 1 | Trending | `TrendingPackages` | [S] | `PackagesCarousel` [C] (loop 3.6s, pause-on-hover) |
| 2 | First Choice | `FirstChoice` | [S] | `FirstChoiceRail` [C] (auto-cycle 3.5s) |
| 3 | Umrah | `UmrahSection` | [S] | `UmrahArchCarousel` [C] (2-photo cross-fade) |
| 4 | Perfect Package | `PerfectPackages` | [S] | none (CSS scroll-snap) |
| 5 | Transport | `TransportSection` | [S] | none (static SVG) |
| 6 | Steps | `StepsSection` | [S] | none (static SVG) |
| 7 | Hajj | `HajjSection` | [S] | none |
| 8 | Hotels | `HotelsSection` | [S] | `HotelsTabs` [C] (city tabs + scroll) |
| 9 | Form | `FormSection` | [S] | `EnquiryForm` [C] |
| 10 | FAQs | `FaqSection` | [S] | none (native `<details>`) |
| 11 | Trust | `TrustStrip` | [S] | none |
| Footer | Footer | `Footer` | [S] | `InquireButton` [C] |
| Pop-up | Inquiry modal | `InquiryModal` | [C] | fade/scale desktop · slide-up sheet mobile |

8 of 14 blocks ship zero JS. Islands render content from props (never `useEffect` fetch),
so all text is server-rendered for SEO.

## Animations to implement (client islands, all honour `prefers-reduced-motion`)
- Hero arch 4-photo cross-fade (4200ms).
- Umrah arch 2-photo cross-fade (4200ms).
- Trending looping carousel (3600ms, pause on hover/touch, invisible duplicate wrap).
- First-choice station rail auto-cycle (3500ms, hover/focus hold, 6s tap-hold).
- Hotels Makkah/Madinah tab switch (+ desktop vertical scroll arrows).
- Inquiry modal open/close transitions (fade+scale desktop, slide-up sheet mobile; Esc/backdrop/swipe close; body scroll lock).
- Static decorative SVGs (transport route, steps curve) — no motion.

## Images
- Real assets available: logos (`shery-logo-lockup.webp`, `logo-white.png`) → `public/images/common/`.
- Content photos not supplied → placeholder blocks (`#D6E8FE`) or copied/renamed placeholder
  files at the target path/name (per conventions.md) so swapping the real file later needs no code change.
- All via `next/image` + meaningful `alt`. WebP.

## Build order (each step committed to `features/home`)
1. Tailwind theme tokens (colors, fonts, 900px breakpoint) + shared primitives + shell.
2. Hero.
3. Sections 1–11 in order.
4. Pop-up modal wiring across triggers.
5. Full responsive + animation QA on preview; update `docs/pages.md` status.
