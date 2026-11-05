import { pageMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/hero/Hero";
import { TrendingPackages } from "@/components/home/trending/TrendingPackages";
import { FirstChoice } from "@/components/home/first-choice/FirstChoice";

// EXACT title + meta description from the live site (preserves SEO).
export const metadata = pageMetadata({
  path: "/",
  title: "Shery Travels: Your Trusted Partner for Hajj & Umrah Pilgrimages",
  description:
    "Start your spiritual journey with Shery Travels. Enjoy personalized packages, smooth travel, and 24/7 support for Umrah and Hajj. Start your pilgrimage today!",
  ogType: "website",
});

export default function HomePage() {
  return (
    <>
      <Header active="/" />
      <main>
        <Hero />
        <TrendingPackages />
        <FirstChoice />
        {/* Remaining sections (umrah, perfect-package, transport, steps, hajj,
            hotels, form, faqs, trust) are integrated next. */}
      </main>
      <Footer />
    </>
  );
}
