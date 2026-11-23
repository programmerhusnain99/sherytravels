import { Container } from "@/components/ui/Container";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { HeroArch } from "./HeroArch";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Homepage hero. Server-rendered content (heading, copy = SEO) with one client
 * island: the arch image cross-fade + rotating stat badges.
 * Order on every breakpoint: H1 title → image.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_62%,#f2fdff_100%)]">
      <Container className="relative pb-20 pt-4 text-center dt:pb-28 dt:pt-7">
        {/* Decorative arch outline behind */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-10 hidden h-[560px] w-[1100px] -translate-x-1/2 rounded-t-[550px] border border-b-0 border-navy/10 dt:block"
        />

        <Stagger mount gap={0.14} className="relative flex flex-col items-center">
          <StaggerItem className="order-1 w-full">
            <AccentHeading
              as="h1"
              before="Begin Your Sacred "
              accent="Journey"
              className="mx-auto max-w-[640px] text-[30px] leading-[1.14] text-navy dt:text-[44px] dt:leading-[1.12]"
            />
          </StaggerItem>

          <StaggerItem className="order-2 mt-8 w-full dt:mt-10">
            <HeroArch />
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
