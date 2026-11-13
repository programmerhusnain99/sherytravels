import { pageMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { FloatingContact } from "@/components/motion/FloatingContact";
import { Hero } from "@/components/home/hero/Hero";
import { HeroEnquiry } from "@/components/home/hero/HeroEnquiry";
import { CredentialsStrip } from "@/components/home/credentials/CredentialsStrip";
import { Testimonials } from "@/components/home/testimonials/Testimonials";
import { BeyondTravel } from "@/components/home/beyond/BeyondTravel";
import { TrendingPackages } from "@/components/home/trending/TrendingPackages";
import { FirstChoice } from "@/components/home/first-choice/FirstChoice";
import { UmrahSection } from "@/components/home/umrah/UmrahSection";
import { ConnectionSection } from "@/components/home/connection/ConnectionSection";
import { PerfectPackages } from "@/components/home/perfect/PerfectPackages";
import { TransportSection } from "@/components/home/transport/TransportSection";
import { StepsSection } from "@/components/home/steps/StepsSection";
import { HajjSection } from "@/components/home/hajj/HajjSection";
import { HotelsSection } from "@/components/home/hotels/HotelsSection";
import { FormSection } from "@/components/home/form/FormSection";
import { FaqSection } from "@/components/home/faqs/FaqSection";
import { TrustStrip } from "@/components/home/trust/TrustStrip";

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
      <ScrollProgress />
      <FloatingContact />
      <Header active="/" />
      <main>
        <Hero />
        <HeroEnquiry />
        <CredentialsStrip />
        <BeyondTravel />
        <TrendingPackages />
        <FirstChoice />
        <UmrahSection />
        <ConnectionSection />
        <PerfectPackages />
        <TransportSection />
        <StepsSection />
        <HajjSection />
        <HotelsSection />
        <Testimonials />
        <FormSection />
        <FaqSection />
        <TrustStrip />
      </main>
      <Footer />
    </>
  );
}
