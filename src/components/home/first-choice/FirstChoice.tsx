import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Reveal } from "@/components/motion/Reveal";
import { FEATURES } from "@/data/home/features";
import { FirstChoiceRail } from "./FirstChoiceRail";

/** "What makes Shery Travels the first choice" — station rail + navy stage. */
export function FirstChoice() {
  return (
    <section className="bg-lightblue py-16 dt:py-24">
      <Container>
        <Reveal as="div" className="mx-auto mb-10 max-w-[760px] text-center dt:mb-14">
          <Eyebrow className="mb-4">Why pilgrims choose us</Eyebrow>
          <AccentHeading
            as="h2"
            before="What makes Shery Travels the "
            accent="first choice"
            className="text-[28px] leading-tight text-navy dt:text-[42px]"
          />
        </Reveal>
        <FirstChoiceRail features={FEATURES} />
      </Container>
    </section>
  );
}
