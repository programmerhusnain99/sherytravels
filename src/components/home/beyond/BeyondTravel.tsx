import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";

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
      {/* Decorative rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 hidden h-[420px] w-[420px] rounded-full border border-gold/12 dt:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-10 hidden h-[300px] w-[300px] rounded-full border border-gold/15 dt:block"
      />

      <Container className="relative grid items-center gap-11 dt:grid-cols-2 dt:gap-16">
        {/* Heading + copy */}
        <div className="text-center dt:text-left">
          <Eyebrow align="center" tone="white" className="mb-4 dt:justify-start">
            Beyond travel
          </Eyebrow>
          <AccentHeading
            as="h2"
            before="Beyond Travel — Where Every Step of Your Pilgrimage "
            accent="Matters"
            className="text-[27px] leading-[1.2] text-white dt:text-[38px] dt:leading-[1.16]"
          />
          <p className="mt-5 text-[15.5px] font-light leading-[1.72] text-white/85">
            With over a decade of experience, we have learned the importance of faith and religious
            journeys for Muslims, who are looking to renew their emotional and spiritual strength.
            We, at Shery Travels, are dedicated to fulfilling our part in your pilgrimage to ensure a
            smooth travel experience. From helping process visas to guided tours, comfortable
            transportation, and family-friendly accommodations, we provide a hassle-free experience
            from beginning to end.
          </p>
          <p className="mt-4 text-[15.5px] font-light leading-[1.72] text-white/70">
            Whether you’re seeking luxury accommodations and essentials for a lavish stay or
            affordable options that still offer the essentials, we have what you need.
          </p>
        </div>

        {/* Stat + key points (directly on the navy) */}
        <div className="relative mx-auto w-full max-w-[460px] dt:mx-0">
          <div className="mb-7 flex items-baseline justify-center gap-3 dt:justify-start">
            <span className="font-serif text-[54px] font-bold leading-none text-gold dt:text-[62px]">
              10+
            </span>
            <span className="text-[14px] font-light leading-tight text-white/70">
              years guiding
              <br />
              pilgrims
            </span>
          </div>

          <div aria-hidden className="mb-7 h-px w-full bg-white/15" />

          <ul className="flex flex-col gap-4">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-gold/15 ring-1 ring-gold/30">
                  <Check size={15} className="text-gold" aria-hidden />
                </span>
                <span className="text-[15px] font-light leading-snug text-white/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
