import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { HeroArch } from "./HeroArch";

/**
 * Homepage hero. Server-rendered content (heading, copy = SEO) with one client
 * island: the arch image cross-fade + rotating stat badges.
 * Order on every breakpoint: eyebrow → H1 → image → description.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_62%,#f2fdff_100%)]">
      <Container className="relative pb-24 pt-10 text-center dt:pb-32 dt:pt-16">
        {/* Decorative arch outline behind */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-10 hidden h-[560px] w-[1100px] -translate-x-1/2 rounded-t-[550px] border border-b-0 border-navy/10 dt:block"
        />

        <div className="relative flex flex-col items-center">
          <Eyebrow className="mb-5">Start your pilgrimage with confidence</Eyebrow>

          <AccentHeading
            as="h1"
            before="Embrace Your Spirit: Step Boldly onto Your Sacred "
            accent="Journey"
            className="order-2 mx-auto max-w-[900px] text-[31px] leading-[1.2] text-navy dt:text-[50px] dt:leading-[1.16]"
          />

          <div className="order-3 mt-8">
            <HeroArch />
          </div>

          <p className="order-4 mx-auto mt-7 max-w-[640px] text-[16px] font-light leading-[1.65] text-navy/80 dt:text-[17px]">
            Join us at Shery Travels for a pilgrimage that uplifts your spirit. Experience the true
            spiritual calling for Umrah and Hajj, supported by smooth travel and a trusted partner by
            your side whom you can truly rely on.
          </p>
        </div>
      </Container>
    </section>
  );
}
