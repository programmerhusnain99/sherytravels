import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { WHY } from "@/data/umrah/packages";

/**
 * "Why Choose Us for Your Umrah Journey" — dark-blue section with compact glass
 * cards, gold gradient icon tiles and a growing gold underline on hover.
 */
export function WhyChooseUs() {
  return (
    <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
      {/* Ambient gold glow + decorative arches */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.15),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -right-28 top-24 hidden h-[340px] w-[340px] rounded-full border border-gold/15 dt:block" />
      <div aria-hidden className="pointer-events-none absolute -left-28 -bottom-28 hidden h-[380px] w-[380px] rounded-full border border-white/[0.06] dt:block" />

      <Container className="relative">
        <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-12">
          <Eyebrow align="center" tone="white" className="mb-4">Why choose us</Eyebrow>
          <AccentHeading as="h2" before="Why Choose Us for Your Umrah " accent="Journey" className="text-[27px] leading-tight text-white dt:text-[38px]" />
          <p className="mx-auto mt-4 max-w-[580px] text-[15px] font-light leading-relaxed text-white/70 dt:text-[16px]">
            A dedicated team, trusted partners and years of experience — so every part of your pilgrimage is in safe, caring hands.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3.5 dt:grid-cols-4 dt:gap-4">
          {WHY.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
            >
              <span aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gold/0 blur-2xl transition-colors duration-300 group-hover:bg-gold/25" />
              <div className="relative mb-2.5 flex items-center gap-3">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_10px_22px_-10px_rgba(219,183,37,0.65)]">
                  <Icon size={19} aria-hidden />
                </span>
                <h3 className="font-serif text-[15px] font-bold leading-tight text-white">{title}</h3>
              </div>
              <p className="relative text-[12.5px] font-light leading-relaxed text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
