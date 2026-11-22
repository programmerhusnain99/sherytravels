import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { HIGHLIGHTS } from "@/data/umrah/packages";

const ACCENTS = [
  { from: "#2f80ed", to: "#1b5fc4" }, // sky
  { from: "#17a884", to: "#0c7a60" }, // emerald
  { from: "#f0722e", to: "#d1551a" }, // coral
  { from: "#8a5cf6", to: "#6a3fd4" }, // violet
];

/**
 * "Spiritual Highlights of Our Umrah Packages" — a connected step-flow: gradient
 * numbered nodes on a line (horizontal on desktop, a vertical timeline on
 * mobile). Deliberately card-free for an editorial, premium feel.
 */
export function SpiritualHighlights() {
  return (
    <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-white via-[#f6f9ff] to-white py-14 dt:py-20">
      <div aria-hidden className="pointer-events-none absolute -right-24 top-10 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(47,128,237,0.1),transparent_70%)] blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(138,92,246,0.08),transparent_70%)] blur-2xl" />

      <Container className="relative">
        <div className="mx-auto mb-12 max-w-[760px] text-center dt:mb-16">
          <Eyebrow align="center" className="mb-4">Spiritual highlights</Eyebrow>
          <AccentHeading as="h2" before="Spiritual Highlights of Our Umrah " accent="Packages" className="text-[28px] leading-tight text-navy dt:text-[40px]" />
          <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] font-light leading-relaxed text-navy/75 dt:text-[16.5px]">
            Every package is built around meaningful worship — guided sites, closeness to the Haram, and support at every step.
          </p>
        </div>

        {/* Desktop — horizontal connected steps */}
        <div className="relative hidden dt:block">
          <div aria-hidden className="absolute inset-x-[12%] top-8 h-[2px] bg-gradient-to-r from-transparent via-navy/15 to-transparent" />
          <div className="relative grid grid-cols-4 gap-8">
            {HIGHLIGHTS.map((h, i) => {
              const c = ACCENTS[i % ACCENTS.length];
              return (
                <div key={h.title} className="flex flex-col items-center px-1 text-center">
                  <span
                    className="relative z-10 grid h-16 w-16 place-items-center rounded-full font-serif text-[20px] font-bold text-white ring-[6px] ring-white"
                    style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})`, boxShadow: `0 16px 30px -12px ${c.from}` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-serif text-[16.5px] font-bold text-navy">{h.title}</h3>
                  <p className="mt-2 text-[13.5px] font-light leading-relaxed text-navy/65">{h.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile — vertical timeline */}
        <div className="relative mx-auto max-w-[460px] dt:hidden">
          <div aria-hidden className="absolute left-[27px] top-4 bottom-6 w-[2px] bg-gradient-to-b from-navy/15 via-navy/15 to-transparent" />
          <div className="flex flex-col gap-7">
            {HIGHLIGHTS.map((h, i) => {
              const c = ACCENTS[i % ACCENTS.length];
              return (
                <div key={h.title} className="relative flex gap-4">
                  <span
                    className="relative z-10 grid h-14 w-14 flex-none place-items-center rounded-full font-serif text-[17px] font-bold text-white ring-[5px] ring-white"
                    style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})`, boxShadow: `0 12px 24px -10px ${c.from}` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-serif text-[16px] font-bold text-navy">{h.title}</h3>
                    <p className="mt-1.5 text-[13.5px] font-light leading-relaxed text-navy/65">{h.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
