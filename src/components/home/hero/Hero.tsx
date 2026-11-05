import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { HeroArch } from "./HeroArch";
import { HeroEnquiryForm } from "./HeroEnquiryForm";

/**
 * Homepage hero. Server-rendered content (heading, copy = SEO) with two client
 * islands: the arch cross-fade and the enquiry form.
 * Mobile reorders: eyebrow → H1 → image → paragraph. Desktop: paragraph above image.
 */
export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <Container className="relative pb-16 pt-10 text-center dt:pb-20 dt:pt-16">
          {/* Decorative arch outline behind */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-10 hidden h-[560px] w-[1100px] -translate-x-1/2 rounded-t-[550px] border border-b-0 border-navy/10 dt:block"
          />

          <div className="relative flex flex-col items-center">
            <Eyebrow className="mb-5">Over a decade of dedicated service</Eyebrow>

            <AccentHeading
              as="h1"
              before="Every step of your pilgrimage "
              accent="matters"
              className="order-2 mx-auto max-w-[880px] text-[33px] leading-[1.22] text-navy dt:text-[54px] dt:leading-[1.18]"
            />

            <p className="order-4 mx-auto mt-5 max-w-[620px] text-[16px] font-light leading-[1.65] text-navy/80 dt:order-3 dt:text-[17px]">
              Visas, hotels near the Haram, guided ziyarat across Makkah and Madinah, and transport
              that leaves on time.
            </p>

            <div className="order-3 mt-8 dt:order-4">
              <HeroArch />
            </div>
          </div>
        </Container>
      </section>

      {/* Enquiry band: card overlaps the hero above */}
      <section className="bg-ice pb-10 dt:pb-14">
        <Container>
          <div className="-mt-12 dt:-mt-16">
            <HeroEnquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
