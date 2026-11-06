/**
 * Blog content model. Each post lives in its own data file (src/data/blog/<slug>.ts)
 * so a single post can be edited without touching any other page. The blog index
 * (src/app/blogs/page.tsx) and the detail template (BlogPostPage) both read these,
 * so each post's data is the single source of truth for its card AND its page.
 *
 * Content is preserved VERBATIM from the live WordPress site for SEO parity:
 *   - `title` is the exact <title>; `h1` is the exact on-page H1 (they differ).
 *   - `description` is the exact meta description, or omitted when the live page had none.
 *   - `blocks` are the article body in document order; inline HTML in `html`/`items`
 *     is sanitised to <strong>/<em>/<u>/<a>/<br> only.
 */

export type BlogBlock =
  | { t: "heading"; level: "h2" | "h3"; text: string }
  | { t: "p"; html: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] };

export interface BlogPost {
  slug: string;
  /** Byte-for-byte canonical path, with trailing slash. */
  path: string;
  /** Exact <title> from the live site (carries the brand suffix). */
  title: string;
  /** Exact meta description, or omitted when the live page had none. */
  description?: string;
  /** Exact on-page H1 (the headline, no brand suffix). */
  h1: string;
  /** Presentational grouping only (not from the live site, not SEO-critical). */
  category: string;
  /** ISO publish timestamp (from article:published_time). */
  published: string;
  /** Pre-formatted publish date, e.g. "November 5, 2025" (baked at build time). */
  publishedLabel: string;
  /** ISO last-modified timestamp (from article:modified_time). */
  modified: string;
  /** Estimated read time in minutes (from body word count). */
  readMinutes: number;
  /** Short lead-in for index cards, derived from the first paragraph. */
  excerpt: string;
  /** Article body in document order. */
  blocks: BlogBlock[];
}
