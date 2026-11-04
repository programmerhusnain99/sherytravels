/**
 * Central site configuration. Single source of truth for the canonical
 * origin and brand details used across metadata, sitemap, robots, and JSON-LD.
 *
 * CANONICAL RULES (locked during migration — do not change without a redirect plan):
 *  - Host is NON-www:        https://sherytravels.com
 *  - Every URL has a trailing slash (enforced by trailingSlash: true)
 *  - All paths are lowercase
 */
export const SITE = {
  /** Canonical origin — no trailing slash here. */
  baseUrl: "https://sherytravels.com",
  name: "Shery Travels",
  /** Short default description used as a fallback only. */
  description:
    "Shery Travels — your trusted partner for Hajj & Umrah pilgrimages with personalized packages, smooth travel, and 24/7 support.",
  locale: "en_US",
  /** Social / sameAs profiles for Organization schema. Fill these in. */
  sameAs: [] as string[],
  /** Contact details for Organization schema. Fill these in. */
  telephone: "",
  email: "",
  /** Path to the logo in /public (used by Organization schema). */
  logo: "/logo.png",
} as const;

/** Build an absolute, canonical URL for a given path. */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.baseUrl}${clean}`;
}
