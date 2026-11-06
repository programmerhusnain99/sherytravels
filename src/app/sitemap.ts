import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SEO_URLS } from "@/lib/seo-urls";

/**
 * Generates /sitemap.xml with all canonical URLs (non-www, trailing slash).
 * Mirrors the 51 URLs from the original WordPress sitemap. As you add or
 * remove pages, update src/lib/seo-urls.ts to keep this in sync.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return SEO_URLS.map((u) => ({
    url: `${SITE.baseUrl}${u.path}`,
    lastModified: u.lastModified || undefined,
    priority: u.priority,
  }));
}
