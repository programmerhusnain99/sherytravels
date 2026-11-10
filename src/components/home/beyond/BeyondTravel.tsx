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

export function BeyondTravel() {
  return (
    <Section bg="white" className="relative overflow-hidden py-16 dt:py-24">
      {/* Decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 hidden h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-gold/15 dt:block"
      />

      <Container className="relative grid items-center gap-12 dt:grid-cols-[1.02fr_0.98fr] dt:gap-16">
        {/* Text */}
        <div className="text-center dt:text-left">
          <Eyebrow align="center" className="mb-4 dt:justify-start">
            Beyond travel
          </Eyebrow>
          <AccentHeading
            as="h2"
            before="Beyond Travel — Where Every Step of Your Pilgrimage "
            accent="Matters"
            className="text-[27px] leading-[1.2] text-navy dt:text-[38px] dt:leading-[1.16]"
          />
          <p className="mt-5 text-[15.5px] font-light leading-[1.72] text-navy/80">
            With over a decade of experience, we have learned the importance of faith and religious
            journeys for Muslims, who are looking to renew their emotional and spiritual strength.
            We, at Shery Travels, are dedicated to fulfilling our part in your pilgrimage to ensure a
            smooth travel experience. From helping process visas to guided tours, comfortable
            transportation, and family-friendly accommodations, we provide a hassle-free experience
            from beginning to end.
          </p>
          <p className="mt-4 text-[15.5px] font-light leading-[1.72] text-navy/80">
            Whether you’re seeking luxury accommodations and essentials for a lavish stay or
            affordable options that still offer the essentials, we have what you need.
          </p>
        </div>

        {/* Premium navy panel with the key points */}
        <div className="relative">
          {/* ring peeking behind */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 hidden h-32 w-32 rounded-full border border-gold/25 dt:block"
          />
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#1a3e6e_0%,#15335c_55%,#102748_100%)] p-8 shadow-[0_44px_84px_-34px_rgba(26,62,110,0.65)] dt:p-10">
            {/* corner glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gold/15 blur-2xl"
            />
            {/* gold top accent */}
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold/0 via-gold to-gold/0"
            />

            <div className="relative">
              {/* headline stat */}
              <div className="mb-6 flex items-baseline gap-3">
                <span className="font-serif text-[52px] font-bold leading-none text-gold dt:text-[58px]">
                  10+
                </span>
                <span className="text-[14px] font-light leading-tight text-white/75">
                  years guiding
                  <br />
                  pilgrims
                </span>
              </div>

              <div aria-hidden className="mb-6 h-px w-full bg-white/15" />

              <ul className="flex flex-col gap-4">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-gold/20 ring-1 ring-gold/30">
                      <Check size={15} className="text-gold" aria-hidden />
                    </span>
                    <span className="text-[15px] font-light leading-snug text-white/90">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
