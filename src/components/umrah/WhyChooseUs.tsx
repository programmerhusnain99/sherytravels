import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { WHY } from "@/data/umrah/packages";

/** Per-card accent gradients — the "colorful" layer over the brand palette. */
const ACCENTS = [
  { from: "#17a884", to: "#0c7a60", glow: "rgba(23,168,132,0.45)" }, // emerald
  { from: "#6d6bf5", to: "#4b3fd4", glow: "rgba(109,107,245,0.45)" }, // violet
  { from: "#2f80ed", to: "#1b5fc4", glow: "rgba(47,128,237,0.45)" }, // sky
  { from: "#e8a51f", to: "#c6841a", glow: "rgba(232,165,31,0.45)" }, // amber
];

/**
 * "Why Choose Us for Your Umrah Journey" — a bright, colorful feature grid.
 * Each card carries its own gradient icon tile + top accent bar.
 */
export function WhyChooseUs() {
  return (
    <Section
      bg="white"
      className="relative overflow-hidden bg-gradient-to-b from-white via-ice/50 to-white py-14 dt:py-20"
    >
      {/* Ambient colour blobs */}
      <div aria-hidden className="pointer-events-none absolute -left-28 -top-20 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(23,168,132,0.16),transparent_70%)] blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -right-28 top-36 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(109,107,245,0.14),transparent_70%)] blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 -bottom-24 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,165,31,0.12),transparent_70%)] blur-2xl" />

      <Container className="relative">
        <div className="mx-auto mb-11 max-w-[760px] text-center dt:mb-14">
          <Eyebrow align="center" className="mb-4">Why choose us</Eyebrow>
          <AccentHeading as="h2" before="Why Choose Us for Your Umrah " accent="Journey" className="text-[28px] leading-tight text-navy dt:text-[40px]" />
          <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] font-light leading-relaxed text-navy/75 dt:text-[16.5px]">
            A dedicated team, trusted partners and years of experience — so every part of your pilgrimage is in safe, caring hands.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 dt:grid-cols-4">
          {WHY.map(({ Icon, title, body }, i) => {
            const c = ACCENTS[i % ACCENTS.length];
            return (
              <div
                key={title}
                className="group relative overflow-hidden rounded-[22px] border border-navy/10 bg-white p-7 shadow-[0_20px_45px_-30px_rgba(26,62,110,0.45)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                {/* Coloured top accent bar */}
                <span aria-hidden className="absolute inset-x-6 top-0 h-[4px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${c.from}, ${c.to})` }} />
                {/* Gradient icon tile */}
                <span
                  className="mb-5 grid h-16 w-16 place-items-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})`, boxShadow: `0 16px 32px -12px ${c.glow}` }}
                >
                  <Icon size={28} aria-hidden />
                </span>
                <h3 className="mb-2 font-serif text-[18px] font-bold text-navy">{title}</h3>
                <p className="text-[14px] font-light leading-relaxed text-navy/70">{body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
