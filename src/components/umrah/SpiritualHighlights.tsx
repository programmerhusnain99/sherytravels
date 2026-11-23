import Image from "next/image";
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
 * "Spiritual Highlights of Our Umrah Packages" — white, two-column editorial
 * layout: an arch image beside a compact numbered highlight list.
 */
export function SpiritualHighlights() {
  return (
    <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-white via-ice/40 to-white py-10 dt:py-14">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(47,128,237,0.1),transparent_70%)] blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(240,114,46,0.08),transparent_70%)] blur-2xl" />

      <Container className="relative grid items-center gap-11 dt:grid-cols-2 dt:gap-16">
        {/* Image */}
        <div className="relative order-2 mx-auto w-full max-w-[460px] dt:order-1">
          <div aria-hidden className="pointer-events-none absolute -left-5 -top-5 hidden h-28 w-28 rounded-full border border-gold/25 dt:block" />
          <div aria-hidden className="pointer-events-none absolute -right-6 -bottom-6 hidden h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.14),transparent_70%)] dt:block" />
          <div className="relative mx-auto h-[380px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[18px] bg-lightblue shadow-[0_40px_80px_-32px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-full dt:rounded-t-[200px]">
            <Image
              src="/images/home/home-umrah-haram.webp"
              alt="Pilgrims at the Haram"
              fill
              sizes="(max-width:900px) 300px, 440px"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(26,62,110,0.35)_100%)]" />
          </div>
          <div className="absolute inset-x-0 -bottom-4 flex justify-center dt:inset-x-auto dt:left-[-18px] dt:block">
            <div className="flex w-fit items-center gap-3 rounded-2xl border border-navy/10 bg-white px-5 py-3 shadow-[0_24px_50px_-18px_rgba(26,62,110,0.4)]">
              <span className="font-serif text-[28px] font-bold leading-none text-gold">4</span>
              <span className="text-left text-[12px] font-light leading-tight text-navy/70">ways we deepen<br />your worship</span>
            </div>
          </div>
        </div>

        {/* Highlight list */}
        <div className="order-1 text-center dt:order-2 dt:text-left">
          <Eyebrow align="center" className="mb-4 dt:justify-start">Spiritual highlights</Eyebrow>
          <AccentHeading as="h2" before="Spiritual Highlights of Our Umrah " accent="Packages" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
          <p className="mx-auto mt-4 max-w-[480px] text-[15px] font-light leading-relaxed text-navy/75 dt:mx-0">
            Every package is built around meaningful worship — guided sites, closeness to the Haram, and support at every step.
          </p>

          <div className="mt-8 flex flex-col gap-5 text-left">
            {HIGHLIGHTS.map((h, i) => {
              const c = ACCENTS[i % ACCENTS.length];
              return (
                <div key={h.title} className="flex gap-4">
                  <span
                    className="grid h-11 w-11 flex-none place-items-center rounded-xl font-serif text-[15px] font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})`, boxShadow: `0 12px 24px -10px ${c.from}` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-[16px] font-bold text-navy">{h.title}</h3>
                    <p className="mt-1 text-[13.5px] font-light leading-relaxed text-navy/65">{h.body}</p>
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
