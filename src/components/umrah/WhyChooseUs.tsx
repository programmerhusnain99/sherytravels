import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { WHY } from "@/data/umrah/packages";

/**
 * "Why Choose Us for Your Umrah Journey" — dark-blue section with premium
 * glass cards, gold gradient icon tiles and a growing gold underline on hover.
 */
export function WhyChooseUs() {
  return (
    <Section bg="navy" className="relative overflow-hidden py-14 dt:py-20">
      {/* Ambient gold glow + decorative arches */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.16),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -right-28 top-24 hidden h-[360px] w-[360px] rounded-full border border-gold/15 dt:block" />
      <div aria-hidden className="pointer-events-none absolute -left-28 -bottom-28 hidden h-[400px] w-[400px] rounded-full border border-white/[0.06] dt:block" />

      <Container className="relative">
        <div className="mx-auto mb-11 max-w-[760px] text-center dt:mb-14">
          <Eyebrow align="center" tone="white" className="mb-4">Why choose us</Eyebrow>
          <AccentHeading as="h2" before="Why Choose Us for Your Umrah " accent="Journey" className="text-[28px] leading-tight text-white dt:text-[40px]" />
          <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] font-light leading-relaxed text-white/70 dt:text-[16.5px]">
            A dedicated team, trusted partners and years of experience — so every part of your pilgrimage is in safe, caring hands.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 dt:grid-cols-4 dt:gap-6">
          {WHY.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50"
            >
              {/* Gold corner glow on hover */}
              <span aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/0 blur-2xl transition-colors duration-300 group-hover:bg-gold/25" />
              {/* Gold gradient icon tile */}
              <span className="relative mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_16px_32px_-12px_rgba(219,183,37,0.65)]">
                <Icon size={28} aria-hidden />
              </span>
              <h3 className="relative mb-2 font-serif text-[18px] font-bold text-white">{title}</h3>
              <p className="relative text-[14px] font-light leading-relaxed text-white/70">{body}</p>
              {/* Growing gold underline */}
              <span aria-hidden className="relative mt-5 h-[3px] w-10 rounded-full bg-gradient-to-r from-gold to-gold/0 transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
