import { PackagesShowcase } from "@/components/home/packages/PackagesShowcase";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { WhyChooseUs } from "./WhyChooseUs";
import { SpiritualHighlights } from "./SpiritualHighlights";
import { FAQ } from "@/data/umrah/packages";

/**
 * The shared lower half of every Umrah page (index + tier pages):
 * Why choose us → Explore more → Spiritual highlights → FAQ.
 * The pre-footer enquiry CTA is provided by PageShell's FormSection.
 */
export function UmrahPackagesCommon() {
  return (
    <>
      <WhyChooseUs />

      <PackagesShowcase
        eyebrow="Keep exploring"
        headingBefore="Explore more "
        headingAccent="packages"
        description="Browse other Umrah packages — flights, visa, hotels near the Haram and transport, all arranged for you."
        viewAllHref="/umrah-packages/"
        bg="ice"
      />

      <SpiritualHighlights />

      <FaqAccordion
        intro="Find answers to common questions about our Umrah packages, visas, room options and support during your pilgrimage."
        items={FAQ}
      />
    </>
  );
}
