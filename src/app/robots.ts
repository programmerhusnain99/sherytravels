import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Generates /robots.txt. The old WordPress /wp-admin/ rules are dropped
 * (no such path exists in Next.js). Points crawlers to the new sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
    host: SITE.baseUrl,
  };
}
