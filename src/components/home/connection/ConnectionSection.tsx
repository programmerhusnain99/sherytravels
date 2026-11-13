import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ReadMore } from "@/components/ui/ReadMore";

// Content verbatim from the live site's "Your Connection with Allah Matters to Us" section.
const POINTS = [
  "Accommodation near Haram",
  "Fluent staff in multiple languages",
  "Transportation for city transfers",
];

export function ConnectionSection() {
  return (
    <Section bg="white" className="relative overflow-hidden pb-16 pt-6 dt:pb-20 dt:pt-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 hidden h-[320px] w-[320px] rounded-full border border-gold/15 dt:block"
      />
      <Container className="relative mx-auto max-w-[840px] text-center">
        <Reveal as="div">
          <Eyebrow align="center" className="mb-4">
            A deeper purpose
          </Eyebrow>
          <AccentHeading
            as="h2"
            before="Your Connection with "
            accent="Allah"
            after=" Matters to Us"
            className="text-[27px] leading-tight text-navy dt:text-[38px] dt:leading-[1.16]"
          />
        </Reveal>
        <ReadMore
          id="rm-connection"
          className="mt-5"
          leadClassName="text-[15.5px] font-light leading-[1.72] text-navy/80 text-pretty"
          lead={
            <>
              Step into the holy cities of Makkah and Madinah without a shadow of doubt and worry. A
              pilgrimage is more than just rituals; it’s meant to enlighten and renew your faith with
              a deeper understanding of your history.
            </>
          }
        >
          <p className="mt-4 text-[15.5px] font-light leading-[1.72] text-navy/70 text-pretty">
            We help you visit sacred sites with proper guidance, arrange tours, and provide ready
            transport that departs on time.
          </p>
        </ReadMore>

        <Stagger as="ul" gap={0.1} className="mt-8 flex flex-col justify-center gap-3.5 dt:flex-row dt:gap-5">
          {POINTS.map((p) => (
            <StaggerItem
              as="li"
              key={p}
              className="flex items-center justify-center gap-2.5 rounded-xl border border-navy/10 bg-ice px-5 py-3.5 text-[14.5px] font-medium text-navy transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_34px_-18px_rgba(26,62,110,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <Check size={17} className="flex-none text-gold" aria-hidden />
              {p}
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
