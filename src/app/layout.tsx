import type { Metadata } from "next";
import "./globals.css";
import { libre, outfit } from "@/app/fonts";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { InquiryProvider } from "@/components/inquiry/InquiryProvider";
import { PageSplash } from "@/components/layout/PageLoader";

export const metadata: Metadata = {
  // Makes relative canonical/OG URLs resolve against the canonical origin.
  metadataBase: new URL(SITE.baseUrl),
  // Fallback title/description only; each page sets its own EXACT values + canonical.
  // NOTE: intentionally NO default `alternates.canonical` here — a layout-level
  // canonical would wrongly apply to any page that forgot to set its own.
  title: SITE.name,
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${libre.variable} ${outfit.variable}`}>
      <body className="min-h-dvh bg-white text-navy">
        {/* Initial-load splash: full-page line loader until the page is ready. */}
        <PageSplash />
        {/* Site-wide structured data. Per-page Breadcrumb/Article schema is added per page. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <InquiryProvider>{children}</InquiryProvider>
      </body>
    </html>
  );
}
