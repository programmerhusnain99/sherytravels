import type { Metadata } from "next";
import { SITE, absoluteUrl } from "@/lib/site";

/**
 * SEO helpers for per-page metadata and JSON-LD structured data.
 *
 * Usage in a page (App Router):
 *
 *   export const metadata = pageMetadata({
 *     path: "/umrah/usa-packages/newyork/",
 *     title: "New York Umrah Packages at Shery Travels", // EXACT title from migration-tracker.csv
 *     description: "…",                                   // EXACT meta description (or new one)
 *     ogType: "article",
 *   });
 */
export function pageMetadata(opts: {
  /** Byte-for-byte path, with trailing slash. Used for the canonical URL. */
  path: string;
  /** Exact <title>. Set as an absolute title so no suffix is appended. */
  title: string;
  description?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  /** Set true only for pages that must NOT be indexed. */
  noindex?: boolean;
}): Metadata {
  const url = absoluteUrl(opts.path);
  const images = opts.ogImage ? [{ url: opts.ogImage }] : undefined;
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: opts.ogType ?? "website",
      url,
      title: opts.title,
      description: opts.description,
      siteName: SITE.name,
      locale: SITE.locale,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: opts.ogImage ? [opts.ogImage] : undefined,
    },
  };
}

/* ----------------------------- JSON-LD builders ---------------------------- */

/** Site-wide Organization / TravelAgency schema (render once, in the root layout). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${SITE.baseUrl}/#organization`,
    name: SITE.name,
    url: SITE.baseUrl,
    logo: absoluteUrl(SITE.logo),
    ...(SITE.telephone ? { telephone: SITE.telephone } : {}),
    ...(SITE.email ? { email: SITE.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    contactPoint: [
      { "@type": "ContactPoint", telephone: "+1-667-439-1263", contactType: "customer service", areaServed: "US" },
      { "@type": "ContactPoint", telephone: "+966-58-384-2090", contactType: "customer service", areaServed: "SA" },
    ],
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

/** WebSite schema (render once, in the root layout). */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.baseUrl}/#website`,
    url: SITE.baseUrl,
    name: SITE.name,
    publisher: { "@id": `${SITE.baseUrl}/#organization` },
  };
}

/**
 * BreadcrumbList from a path. Derives readable names from slugs; override by
 * passing explicit {name,path} items when the auto-title isn't ideal.
 */
export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

/** Build breadcrumb {name,path} pairs automatically from a URL path. */
export function breadcrumbsFromPath(path: string): { name: string; path: string }[] {
  const segs = path.replace(/^\/|\/$/g, "").split("/").filter(Boolean);
  const crumbs = [{ name: "Home", path: "/" }];
  let acc = "";
  for (const seg of segs) {
    acc += `/${seg}`;
    crumbs.push({ name: titleCaseSlug(seg), path: `${acc}/` });
  }
  return crumbs;
}

function titleCaseSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}

/** Article / BlogPosting schema for blog posts. */
export function articleSchema(opts: {
  path: string;
  headline: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    image: opts.image ? absoluteUrl(opts.image) : undefined,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(opts.path) },
    author: { "@id": `${SITE.baseUrl}/#organization` },
    publisher: { "@id": `${SITE.baseUrl}/#organization` },
  };
}
