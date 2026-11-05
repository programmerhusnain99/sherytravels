import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Makes relative canonical/OG URLs resolve against the canonical origin.
  metadataBase: new URL(SITE.baseUrl),
  // Fallback title/description only; each page sets its own EXACT values + canonical.
  // NOTE: intentionally NO default `alternates.canonical` here — a layout-level
  // canonical would wrongly apply to any page that forgot to set its own
  // (every page must set its canonical via pageMetadata()).
  title: SITE.name,
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Site-wide structured data. Per-page Breadcrumb/Article schema is added in each page. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
