import Image from "next/image";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { AuroraBlobs } from "@/components/motion/AuroraBlobs";
import { Parallax } from "@/components/motion/Parallax";
import { Counter } from "@/components/motion/Counter";
import { ReadMore } from "@/components/ui/ReadMore";

// Content verbatim from the live site's "Beyond Travel" section.
const POINTS = [
  "Over 10 years of dedicated service",
  "Customized Hajj and Umrah services to suit individual needs",
  "Strong network in Saudi Arabia and beyond",
];

/**
 * Navy band so the white overlapping pillar cards above read as floating over a
 * dark backdrop. Generous top padding leaves room for that overlap.
 */
export function BeyondTravel() {
  return (
    <Section bg="navy" className="relative overflow-hidden pb-16 pt-28 dt:pb-24 dt:pt-40">
      <AuroraBlobs />
      {/* Decorative rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 hidden h-[420px] w-[420px] rounded-full border border-gold/12 dt:block"
      />

      <Container className="relative grid items-center gap-12 dt:grid-cols-[1.05fr_0.95fr] dt:gap-16">
        {/* Heading + copy + points */}
        <div className="text-center dt:text-left">
          <Reveal as="div">
            <Eyebrow align="center" tone="white" className="mb-4 dt:justify-start">
              Beyond travel
            </Eyebrow>
            <AccentHeading
              as="h2"
              before="Beyond Travel — Where Every Step of Your Pilgrimage "
              accent="Matters"
              className="text-[27px] leading-[1.2] text-white dt:text-[38px] dt:leading-[1.16]"
            />
          </Reveal>
          <ReadMore
            id="rm-beyond"
            className="mt-5"
            leadClassName="text-[15.5px] font-light leading-[1.72] text-white/85"
            lead={
              <>
                With over a decade of experience, we have learned the importance of faith and
                religious journeys for Muslims, who are looking to renew their emotional and
                spiritual strength. We, at Shery Travels, are dedicated to fulfilling our part in
                your pilgrimage to ensure a smooth travel experience. From helping process visas to
                guided tours, comfortable transportation, and family-friendly accommodations, we
                provide a hassle-free experience from beginning to end.
              </>
            }
          >
            <p className="mt-4 text-[15.5px] font-light leading-[1.72] text-white/70">
              Whether you’re seeking luxury accommodations and essentials for a lavish stay or
              affordable options that still offer the essentials, we have what you need.
            </p>
          </ReadMore>

          <Stagger as="ul" gap={0.12} className="mx-auto mt-7 flex max-w-[460px] flex-col gap-3 text-left dt:mx-0">
            {POINTS.map((p) => (
              <StaggerItem as="li" key={p} direction="right" className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-gold/15 ring-1 ring-gold/30">
                  <Check size={14} className="text-gold" aria-hidden />
                </span>
                <span className="text-[14.5px] font-light leading-snug text-white/90">{p}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Image with a floating stat badge */}
        <Parallax distance={34} className="relative mx-auto w-full max-w-[460px]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 hidden h-32 w-32 rounded-full border border-gold/25 dt:block"
          />
          <div className="group relative h-[340px] w-full overflow-hidden rounded-t-[160px] rounded-b-[18px] bg-lightblue shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] dt:h-[420px]">
            <Image
              src="/images/home/home-beyond.webp"
              alt="Pilgrims on their journey with Shery Travels"
              fill
              sizes="(max-width:900px) 460px, 460px"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 motion-reduce:transform-none"
            />
          </div>

          {/* Floating stat badge */}
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/10 bg-white px-5 py-3.5 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.5)] dt:-left-6 dt:translate-x-0">
            <span className="font-serif text-[36px] font-bold leading-none text-navy">
              <Counter to={10} suffix="+" />
            </span>
            <span className="text-[12.5px] font-light leading-tight text-navy/70">
              years guiding
              <br />
              pilgrims
            </span>
          </div>
        </Parallax>
      </Container>
    </Section>
  );
}
