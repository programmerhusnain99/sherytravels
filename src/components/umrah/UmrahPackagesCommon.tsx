import { PackagesShowcase } from "@/components/home/packages/PackagesShowcase";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FormSection, type FormSectionProps } from "@/components/home/form/FormSection";
import { WhyChooseUs } from "./WhyChooseUs";
import { SpiritualHighlights } from "./SpiritualHighlights";
import { FAQ } from "@/data/umrah/packages";

/**
 * The shared lower half of every Umrah page (index + tier pages):
 * Why choose us → Explore more → Spiritual highlights → enquiry CTA → FAQ.
 * The enquiry CTA ("Ready to begin your Umrah journey") sits above the FAQ.
 */
export function UmrahPackagesCommon({ cta }: { cta?: FormSectionProps }) {
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

      <FormSection {...cta} />

      <FaqAccordion
        intro="Find answers to common questions about our Umrah packages, visas, room options and support during your pilgrimage."
        items={FAQ}
      />
    </>
  );
}
