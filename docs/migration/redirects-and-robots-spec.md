# Redirect & robots.txt spec — sherytravels.com → Next.js

Behavior captured from the LIVE WordPress site 2026-11-04. The Next.js build must
reproduce every rule below exactly, or URLs stop being byte-for-byte identical.

## Canonical host
- Canonical: `https://sherytravels.com` (NON-www, HTTPS)

## Redirect rules to reproduce (all 301 / permanent)
| From | To | Current status | Where to implement in new stack |
|------|----|----------------|--------------------------------|
| `https://www.sherytravels.com/*` | `https://sherytravels.com/*` | 301 (verified, 1 hop) | Host/CDN (Vercel domain redirect) |
| `http://*` (any) | `https://*` | standard — NOT testable from this env* | Host/CDN (auto on Vercel/most hosts) |
| `/path` (no trailing slash) | `/path/` | 301 (verified: /about → /about/) | `trailingSlash: true` in next.config.js |

*The http→https and http://www variants could not be hit from this cloud session
(network policy only allowed the exact https host; other hostnames didn't resolve).
These are standard and handled automatically by the hosting layer — verify post-deploy.

## robots.txt (current, live)
```
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

Sitemap: https://sherytravels.com/sitemap_index.xml
```
### New robots.txt (Next.js)
- Drop the `/wp-admin/` lines — that path won't exist in Next.js.
- Keep a permissive policy + point to the NEW sitemap:
```
User-agent: *
Allow: /

Sitemap: https://sherytravels.com/sitemap.xml
```
- NOTE: if old sitemap URLs (`/sitemap_index.xml`, `/post-sitemap.xml`,
  `/page-sitemap.xml`, `/wp-sitemap.xml`) have backlinks or are in GSC, consider
  301-ing them to the new `/sitemap.xml` so nothing 404s.

## 404 behavior
- Live site returns a genuine HTTP 404 for unknown paths (verified).
- Next.js `not-found.tsx` must return a real 404 status (App Router does this by default).

## Sitemap structure (for parity / GSC resubmission)
- Index: `/sitemap_index.xml` → `/post-sitemap.xml` (10 URLs) + `/page-sitemap.xml` (41 URLs) = 51
- Union is a byte-for-byte match with our 51-URL inventory (verified, zero diff).
- WP core `/wp-sitemap.xml` currently 301-redirects (Yoast/RankMath owns sitemaps).
- New site: generate `/sitemap.xml` with the same 51 URLs (non-www, trailing slash).
