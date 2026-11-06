# Components

Component inventory. Filled in as we build. For each component: what it is, server
or client, and where it's used. Shared/common components are listed first.

Legend: **[S]** Server Component · **[C]** Client Component (`"use client"`)

## Layout / shell (global)
_To be built with the homepage._
- `Header` / `Nav` — [S] shell; mobile drawer toggle is a [C] island.
- `Footer` — [S]
- `Container` / layout primitives — [S]

## Common / shared (used across many pages)
_Extracted when a block repeats (rule of two). Examples anticipated:_
- `Button` / `LinkButton` — [S] (a plain link needs no JS)
- `PackageCard` — [S]
- `Section` / `SectionHeading` — [S]
- `JsonLd` — [S] (already built: `src/components/JsonLd.tsx`)

## Client islands (interactive only)
_Keep small and leaf-level._
- `MobileNav` — [C]
- `EnquiryForm` / `ContactForm` — [C]
- `ImageGallery` / `Carousel` — [C]
- `Accordion` / `FAQ` — [C]

## Page-specific
_Listed per page as built._

---
Guidelines: Server by default; `"use client"` only where state/events/browser APIs
are needed. Never fetch SEO-critical content in a client component's `useEffect`.
