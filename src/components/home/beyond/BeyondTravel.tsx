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
    <Section bg="white" className="py-14 dt:py-20">
      <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
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

        <div className="rounded-2xl border border-navy/10 bg-ice p-7 dt:p-9">
          <ul className="flex flex-col gap-4">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-gold/15">
                  <Check size={16} className="text-gold" aria-hidden />
                </span>
                <span className="text-[15.5px] font-medium leading-snug text-navy">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
