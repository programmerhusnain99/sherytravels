import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { HIGHLIGHTS } from "@/data/umrah/packages";

/** Per-card accent gradients — distinct from the "Why choose us" set. */
const ACCENTS = [
  { from: "#2f80ed", to: "#1b5fc4", soft: "rgba(47,128,237,0.10)" }, // sky
  { from: "#17a884", to: "#0c7a60", soft: "rgba(23,168,132,0.10)" }, // emerald
  { from: "#f0722e", to: "#d1551a", soft: "rgba(240,114,46,0.10)" }, // coral
  { from: "#8a5cf6", to: "#6a3fd4", soft: "rgba(138,92,246,0.10)" }, // violet
];

/**
 * "Spiritual Highlights of Our Umrah Packages" — colourful numbered cards, each
 * with a gradient numeral badge and a coloured side rail.
 */
export function SpiritualHighlights() {
  return (
    <Section
      bg="white"
      className="relative overflow-hidden bg-gradient-to-b from-ice/60 via-white to-ice/40 py-14 dt:py-20"
    >
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-16 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(47,128,237,0.12),transparent_70%)] blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(240,114,46,0.10),transparent_70%)] blur-2xl" />

      <Container className="relative">
        <div className="mx-auto mb-11 max-w-[760px] text-center dt:mb-14">
          <Eyebrow align="center" className="mb-4">Spiritual highlights</Eyebrow>
          <AccentHeading as="h2" before="Spiritual Highlights of Our Umrah " accent="Packages" className="text-[28px] leading-tight text-navy dt:text-[40px]" />
          <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] font-light leading-relaxed text-navy/75 dt:text-[16.5px]">
            Every package is built around meaningful worship — guided sites, closeness to the Haram, and support at every step.
          </p>
        </div>

        <div className="grid gap-6 dt:grid-cols-2">
          {HIGHLIGHTS.map((h, i) => {
            const c = ACCENTS[i % ACCENTS.length];
            return (
              <div
                key={h.title}
                className="group relative overflow-hidden rounded-[22px] border border-navy/10 bg-white p-7 pl-8 shadow-[0_20px_45px_-30px_rgba(26,62,110,0.45)] transition-transform duration-300 hover:-translate-y-1"
                style={{ background: `linear-gradient(135deg, ${c.soft}, transparent 60%), #ffffff` }}
              >
                {/* Coloured side rail */}
                <span aria-hidden className="absolute left-0 top-0 h-full w-[6px]" style={{ background: `linear-gradient(180deg, ${c.from}, ${c.to})` }} />
                <div className="mb-4 flex items-center gap-4">
                  <span
                    className="grid h-14 w-14 flex-none place-items-center rounded-2xl font-serif text-[21px] font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})`, boxShadow: `0 14px 28px -12px ${c.from}` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-[19px] font-bold text-navy">{h.title}</h3>
                </div>
                <p className="text-[14.5px] font-light leading-relaxed text-navy/72">{h.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
