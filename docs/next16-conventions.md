# Next.js 16 App Router Cheat-Sheet (sherytravels, `cacheComponents: true`)

Source of truth: the docs in `node_modules/next/dist/docs/01-app/`. Anything marked ⚠️ differs from older/common Next.js.

---

## 1. Server vs Client Components

- **Default = Server Component.** Layouts and pages are Server Components unless you opt out.
- **Server Components can be async** — `export default async function Page()` and `await` data directly. This is the norm.
- `"use client"` goes at the **very top of the file, above imports**. It marks a boundary: **all imports and components it directly renders join the client bundle** — you do NOT repeat the directive on every child.
- ⚠️ `params` and `searchParams` are **Promises** — you must `await` them:
  ```tsx
  export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
  }
  ```
- **Server → Client data**: pass as **props** (must be React-serializable). Or stream via React's `use()` API.
- **Server Components can be passed as `children`/props INTO a Client Component** (interleaving). They render on the server; the Client Component gets rendered output, NOT the module. Use this to keep static UI out of the client bundle.
- **React Context** is Client-only. Wrap `createContext` + provider in a `"use client"` component, render it in a Server layout, keep it as deep as possible (wrap `{children}`, not `<html>`) so static parts stay static.
- Env vars: only `NEXT_PUBLIC_`-prefixed reach the client; others become `""`. Use `import 'server-only'` to hard-fail accidental client imports.
- Browser-only / state / effects / event handlers (`onClick`, `useState`, `useEffect`, `localStorage`) require `"use client"`.

---

## 2. Metadata (Server Components ONLY)

- Static: `export const metadata: Metadata = {...}`. Dynamic: `export async function generateMetadata(props, parent)`.
- ⚠️ **Cannot export both** from the same segment. File-based metadata (e.g. `opengraph-image.tsx`) overrides the config exports.
- `generateMetadata` receives `{ params, searchParams }` (both **Promises** — await them) and a `parent` promise (to extend parent metadata).
- Fields merge shallowly root→leaf; duplicate keys (incl. whole `openGraph`/`robots` objects) are **replaced** by the deepest segment.

**title**
```tsx
title: { default: 'Sheryl Travels', template: '%s | Sheryl Travels' } // layout
title: 'About'            // child → "About | Sheryl Travels"
title: { absolute: 'X' }  // ⚠️ ignores parent template → "X"
```
`template`/`default` affect **child** segments only; `template` in a `page.js` has no effect.

**metadataBase + alternates.canonical**
```tsx
metadataBase: new URL('https://sheryltravels.com'),
alternates: {
  canonical: '/',                         // relative → resolved against metadataBase
  languages: { 'en-US': '/en-US' },
  media: { 'only screen and (max-width: 600px)': '/mobile' },
  types: { 'application/rss+xml': '/rss' },
},
```
- Set `metadataBase` in root `app/layout`. Without it, relative URL-based fields cause a **build error**.
- URL composition: a leading-slash path like `/payments` is treated as **relative to metadataBase** (not root-replacing). `/` and `./` both resolve to the base origin.
- ⚠️ **trailingSlash interaction**: canonical URLs are emitted exactly as composed from `metadataBase` + the string you give; Next normalizes duplicate slashes only. If `trailingSlash: true` in config, make your `canonical` strings consistent (with/without trailing slash) to avoid canonical ≠ actual URL. The docs do not auto-append a trailing slash to canonical — control it yourself.
- ⚠️ With Cache Components + `'use cache'` in `generateMetadata`, the return must be serializable — `URL` instances are NOT serializable, so return `metadataBase` as a **string** (`url.toString()`) inside a cached scope.

**openGraph / twitter** — image/video/audio/url values must be **absolute URLs** (or use `metadataBase` + relative).
```tsx
openGraph: { title, description, url: 'https://...', siteName, locale: 'en_US', type: 'website',
  images: [{ url: 'https://.../og.png', width: 1200, height: 630, alt: '...' }] },
twitter: { card: 'summary_large_image', title, description, creator: '@x', images: ['https://.../og.png'] },
```

**robots**
```tsx
robots: { index: true, follow: true, googleBot: { index: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
```

- `themeColor`, `colorScheme`, `viewport` ⚠️ **deprecated in metadata** → use `generateViewport` / `export const viewport`.

---

## 3. next/image

- Import `from 'next/image'`. **Required props: `src`, `alt`.**
- `width`+`height` required **unless** static import or `fill`. Static imports auto-provide width/height **and** `blurDataURL`.
- `fill`: parent must be `position: relative|fixed|absolute`; use `sizes` + `style={{objectFit:'cover'}}`.
- `sizes`: give it for `fill` or CSS-responsive images (else browser assumes `100vw` → oversized downloads).
- ⚠️ **`priority` is DEPRECATED in Next 16** → use **`preload={true}`** for the LCP/hero image. (Or `loading="eager"` / `fetchPriority="high"`.)
- `placeholder="blur"` needs `blurDataURL` (auto for static jpg/png/webp/avif imports; supply manually for remote/dynamic).
- **Avoid CLS**: always give real width/height (or static import, or `fill` + positioned parent); keep aspect ratio with `style={{ width:'100%', height:'auto' }}`.
- ⚠️ **`qualities` is now REQUIRED config in Next 16** — default is `[75]`. A `quality` prop not in the list is coerced to the closest; direct API call with a bad quality → 400. Add values in `next.config` `images.qualities` if you use non-75.
- Remote images need `images.remotePatterns` in config (the old `domains` is deprecated).
- SVGs: not optimized by default; `src` ending `.svg` auto-sets `unoptimized`.
- `getImageProps()` for art direction / background / passing to a raw `<img>`.

---

## 4. next/font/google (multiple fonts + CSS variables)

```tsx
// app/fonts.ts (or inline in root layout)
import { Libre_Baskerville, Outfit } from 'next/font/google'

export const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],        // ⚠️ REQUIRED: Libre Baskerville is NOT a variable font
  style: ['normal', 'italic'],   // optional
  display: 'swap',
  variable: '--font-libre',
})

export const outfit = Outfit({
  subsets: ['latin'],            // variable font → weight optional
  display: 'swap',
  variable: '--font-outfit',
})
```
```tsx
// app/layout.tsx
import { libre, outfit } from './fonts'
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${libre.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```
```css
/* globals.css (Tailwind v4) */
@import 'tailwindcss';
@theme inline {
  --font-serif: var(--font-libre);
  --font-sans: var(--font-outfit);
}
```
- Multi-word names use underscores: `Libre_Baskerville`, `Roboto_Mono`.
- Prefer variable fonts (no `weight` needed); non-variable fonts **require `weight`**.
- `subsets` is required-ish: omitting it while `preload` (default `true`) warns.
- Use `.className` to apply directly, or `.variable` + CSS var for multiple fonts. Self-hosted, zero layout shift, no request to Google at runtime.

---

## 5. next/link

- ⚠️ **No child `<a>` since v13** — `<Link href="/x">Text</Link>` renders the `<a>` itself. Pass `<a>` attrs (`className`, `target`) straight to `<Link>`.
- Auto-prefetches links in viewport (production only).
- `prefetch` ⚠️ accepts **`true` | `false` | `"auto"` | `null`** (not just boolean). Default (`auto`/`null`): static route → full prefetch; dynamic → partial (down to nearest `loading.js`).
- ⚠️ **With Partial Prefetching on (this project)**: `auto` prefetches the route's **App Shell** (static + session-derived content), NOT the full page. Use `prefetch={true}` to also prefetch URL-dependent cached content (searchParams/params).
- `replace`, `scroll` (default `true`, maintains scroll position), `onNavigate` (fires only on client-side nav; has `preventDefault()`), `transitionTypes` (v16.2+).
- Sticky-header offset: use CSS `scroll-padding-top` on `html`.

---

## 6. Cache Components (`cacheComponents: true` — CRITICAL for SEO)

**This project uses Partial Prerendering (PPR) as default.** `experimental.ppr`/`experimental_ppr` and `experimental.dynamicIO`/`experimental.useCache` are removed/replaced. Pair with `partialPrefetching: true` (already implied; leaving it unset only warns).

### What it does to rendering
At build time Next renders the tree and decides per-component:
- **Predictable work → prerendered into the static shell automatically.** This includes: module imports, pure computation, `fs.readFileSync`, `await import('./data.json')`, synchronous DB (better-sqlite3), and reading local files at **module scope**.
- **`use cache` → cached + included in the static shell** (if its `cacheLife` isn't too short).
- **`<Suspense>` → fallback ships in the shell; children stream at request time.**
- **Runtime APIs / uncached async / random / time → must be handled explicitly.**

### ✅ Your marketing homepage with ONLY local static data stays FULLY static
A page that imports **local static data** (JS/TS/JSON modules, pure computation) and does **no `fetch`, no `cookies()`/`headers()`/`searchParams`, no `Date.now()`/`Math.random()`/`crypto.randomUUID()`** is **prerendered into static HTML automatically — no `"use cache"` needed.** This is exactly what you want for SEO. Read config/files at **module scope** or via `import` so they resolve at build.

### When you DO need `"use cache"`
- You `fetch`/query an external API or DB and want it in the static shell (instead of streaming). Add `'use cache'` + `cacheLife(...)` to that async function/component. Without it, uncached async data must sit behind `<Suspense>` and streams at request time.
- `'use cache'` must be on an **async** function/component (or top of file → all exports cached & async). Args + captured closure vars become the cache key; must be serializable.
- ⚠️ `'use cache'` **cannot** read `cookies()`/`headers()`/`searchParams` (throws `next-request-in-use-cache`). Read them outside and pass values as args.
- Pair with `cacheLife('seconds'|'minutes'|'hours'|'days'|'weeks'|'max')`; omitting it uses `default` (stale 5m / revalidate 15m / never expires). On-demand: `cacheTag(...)` + `revalidateTag(tag, 'max')` / `updateTag(tag)` (Server Action only).

### What triggers DYNAMIC rendering / forces a Suspense boundary
Any of these **outside** `use cache` and **outside** `<Suspense>` triggers a dev **blocking-prerender** insight/error (and keeps that subtree from the shell):
- `cookies()`, `headers()`, `searchParams`, dynamic `params`
- uncached `fetch` / DB reads at render time
- `Math.random()`, `Date.now()`, `new Date()`, `crypto.randomUUID()` ⚠️ — these throw a **build error** that `instant = false` does NOT clear; fix with `await connection()` + `<Suspense>`, or `use cache`.

Fix pattern (keeps the rest of the page static):
```tsx
import { Suspense } from 'react'
export default function Page() {
  return (
    <>
      <StaticHero />                    {/* prerendered */}
      <Suspense fallback={<Skeleton/>}>
        <RuntimeThing />                {/* reads cookies/fetch, streams at request time */}
      </Suspense>
    </>
  )
}
```

### Other Cache-Components rules
- ⚠️ Route segment configs **gone/changed**: remove `export const dynamic`, `revalidate`, `fetchCache`, `runtime`, `dynamicParams`. Replace with `use cache`/`cacheLife`/`<Suspense>`. `runtime = 'edge'` unsupported (Node only).
- ⚠️ `generateStaticParams` must return **≥1 param** (empty `[]` now errors). `dynamicParams` not supported.
- Await `params` **inside** `<Suspense>` (or push down) to keep the shell static for dynamic routes.
- `generateMetadata` follows the same rules: cache external data with `'use cache'`, or add a dynamic-marker component if it needs runtime data.
- `GET` Route Handlers prerender like pages; move data into a `'use cache'` helper (can't put directive on `GET` itself).
- `unstable_noStore` not needed (nothing cached unless you opt in); `unstable_cache`/`fetch` Data Cache still work (and persist across deploys, unlike `use cache` in-memory).
- (16.4+) `export const ensureStatic = 'navigation'` to hard-require a static route.

---

## 7. Other build/SEO gotchas

- ⚠️ **`images.qualities` is required** in Next 16 if you use any quality ≠ 75 — build/serve 400s otherwise.
- ⚠️ **`priority` deprecated** → `preload` (see §3). Set `preload` on the hero so LCP isn't hurt.
- **Metadata streaming**: for dynamically-rendered pages, metadata streams into `<body>` after UI. Next detects HTML-limited bots (Slackbot, Twitterbot, Bingbot, facebookexternalhit) by UA and serves metadata in `<head>` for them — so social/SEO previews still work. Keep the page prerenderable so bots get full `<head>` HTML.
- **Bots & crawlers**: if a page relies on build-time data that isn't available at request time, HTML-limited bots can get a **500**. Keep homepage data build-time-available.
- `metadataBase` missing → relative canonical/OG URLs **fail the build**.
- ⚠️ **UI state persists across navigations** (React `<Activity>` hidden mode) — dropdowns/dialogs/forms no longer reset on navigate-away-and-back; reset explicitly if you relied on unmount.
- `AGENTS.md` block is regenerated by `next dev`; commit it with your work to keep the tree clean.
- Don't use `styled-jsx` for `<Image>`. Use `className`/`style`.
```
