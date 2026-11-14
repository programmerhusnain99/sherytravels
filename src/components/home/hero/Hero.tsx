import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { HeroArch } from "./HeroArch";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

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

        <Stagger mount gap={0.14} className="relative flex flex-col items-center">
          <StaggerItem className="mb-5">
            <Eyebrow>Start your pilgrimage with confidence</Eyebrow>
          </StaggerItem>

          <StaggerItem className="order-2 w-full">
            <AccentHeading
              as="h1"
              before="Embrace Your Spirit: Step Boldly onto Your Sacred "
              accent="Journey"
              className="mx-auto max-w-[900px] text-[31px] leading-[1.2] text-navy dt:text-[50px] dt:leading-[1.16]"
            />
          </StaggerItem>

          <StaggerItem className="order-3 mt-8 w-full">
            <HeroArch />
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
