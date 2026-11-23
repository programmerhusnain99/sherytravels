import { pageMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Hero } from "@/components/home/hero/Hero";
import { HeroEnquiry } from "@/components/home/hero/HeroEnquiry";
import { BeyondTravel } from "@/components/home/beyond/BeyondTravel";
import { PackagesShowcase } from "@/components/home/packages/PackagesShowcase";
import { UmrahSection } from "@/components/home/umrah/UmrahSection";
import { ExploreUmrahPackages } from "@/components/home/explore/ExploreUmrahPackages";
import { FirstChoice } from "@/components/home/first-choice/FirstChoice";
import { PerfectPackages } from "@/components/home/perfect/PerfectPackages";
import { TransportSection } from "@/components/home/transport/TransportSection";
import { HajjServices } from "@/components/home/hajj/HajjServices";
import { HajjExperiences } from "@/components/home/hajj/HajjExperiences";
import { HotelsSection } from "@/components/home/hotels/HotelsSection";
import { FormSection } from "@/components/home/form/FormSection";
import { CustomPackageForm } from "@/components/inquiry/CustomPackageForm";
import { FaqSection } from "@/components/home/faqs/FaqSection";
import { TrustStrip } from "@/components/home/trust/TrustStrip";

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
      <Header active="/" />
      <main>
        <Hero />
        <HeroEnquiry />
        <BeyondTravel />
        <PackagesShowcase
          layout="split"
          loop
          bg="white"
          eyebrow="Trending now"
          headingBefore="Popular "
          headingAccent="Packages"
          description="Our most-booked Hajj & Umrah packages — flights, visa, hotels near the Haram and transport, all arranged for you."
        />
        <UmrahSection />
        <ExploreUmrahPackages />
        <FirstChoice />
        <PerfectPackages />
        <TransportSection />
        <HajjServices />
        <HajjExperiences />
        <HotelsSection />
        <CustomPackageForm
          title="Customise Your Umrah Package"
          accent="Umrah"
          description="Enjoy the flexibility to customise your Umrah package with trusted support, quality hotels, and convenient flight options."
          image="/images/home/home-hero-madinah.webp"
          variant="umrah"
        />
        <FormSection />
        <FaqSection />
        <TrustStrip />
      </main>
      <Footer />
    </>
  );
}
