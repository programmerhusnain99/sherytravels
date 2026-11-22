import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { HIGHLIGHTS } from "@/data/umrah/packages";

/** Per-card accent gradients — distinct from the "Why choose us" set. */
const ACCENTS = [
  { from: "#2f80ed", to: "#1b5fc4", soft: "rgba(47,128,237,0.08)" }, // sky
  { from: "#17a884", to: "#0c7a60", soft: "rgba(23,168,132,0.08)" }, // emerald
  { from: "#f0722e", to: "#d1551a", soft: "rgba(240,114,46,0.08)" }, // coral
  { from: "#8a5cf6", to: "#6a3fd4", soft: "rgba(138,92,246,0.08)" }, // violet
];

/**
 * "Spiritual Highlights of Our Umrah Packages" — compact colourful cards, each
 * with a gradient numeral badge and a coloured side rail.
 */
export function SpiritualHighlights() {
  return (
    <Section
      bg="white"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f5f9ff] to-white py-14 dt:py-20"
    >
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-16 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(47,128,237,0.1),transparent_70%)] blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(240,114,46,0.08),transparent_70%)] blur-2xl" />

      <Container className="relative">
        <div className="mx-auto mb-10 max-w-[760px] text-center dt:mb-12">
          <Eyebrow align="center" className="mb-4">Spiritual highlights</Eyebrow>
          <AccentHeading as="h2" before="Spiritual Highlights of Our Umrah " accent="Packages" className="text-[28px] leading-tight text-navy dt:text-[40px]" />
          <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] font-light leading-relaxed text-navy/75 dt:text-[16.5px]">
            Every package is built around meaningful worship — guided sites, closeness to the Haram, and support at every step.
          </p>
        </div>

        <div className="mx-auto grid max-w-[980px] gap-4 sm:grid-cols-2 dt:gap-5">
          {HIGHLIGHTS.map((h, i) => {
            const c = ACCENTS[i % ACCENTS.length];
            return (
              <div
                key={h.title}
                className="group relative flex items-start gap-4 overflow-hidden rounded-xl border border-navy/10 bg-white p-5 pl-6 shadow-[0_14px_34px_-26px_rgba(26,62,110,0.45)] transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${c.soft}, transparent 55%), #ffffff` }}
              >
                {/* Coloured side rail */}
                <span aria-hidden className="absolute left-0 top-0 h-full w-[5px]" style={{ background: `linear-gradient(180deg, ${c.from}, ${c.to})` }} />
                <span
                  className="mt-0.5 grid h-11 w-11 flex-none place-items-center rounded-xl font-serif text-[16px] font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})`, boxShadow: `0 10px 22px -10px ${c.from}` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-1.5 font-serif text-[16.5px] font-bold text-navy">{h.title}</h3>
                  <p className="text-[13.5px] font-light leading-relaxed text-navy/70">{h.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
