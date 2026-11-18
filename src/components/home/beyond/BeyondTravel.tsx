import Image from "next/image";
import { Award, Sparkles, Globe2, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { DropBounce } from "@/components/motion/DropBounce";

const PILLARS = [
  { Icon: Award, title: "10+ Years of Service", body: "A decade of guiding pilgrims with care and devotion." },
  { Icon: Sparkles, title: "Tailored to You", body: "Custom Hajj & Umrah journeys built around your needs." },
  { Icon: Globe2, title: "Strong KSA Network", body: "Trusted partners on the ground in Saudi Arabia." },
];

/**
 * "Beyond Travel" — the prominent second section. Navy ground (so the enquiry
 * card above floats over a dark backdrop) with a warm gold glow, a bold
 * heading, three pillar cards and an arch-framed image with a floating stat.
 */
export function BeyondTravel() {
  return (
    <Section bg="navy" className="relative overflow-hidden pb-16 pt-28 dt:pb-24 dt:pt-40">
      {/* Warm gold glow + decorative rings */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.16),transparent_68%)]" />
      <div aria-hidden className="pointer-events-none absolute -right-28 -bottom-24 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
      <div aria-hidden className="pointer-events-none absolute right-10 top-10 hidden h-3 w-3 rounded-full bg-gold/60 dt:block" />

      <Container className="relative grid items-center gap-14 dt:grid-cols-[1.08fr_0.92fr] dt:gap-16">
        {/* Heading + copy + pillars */}
        <div className="text-center dt:text-left">
          <Reveal as="div">
            <Eyebrow align="center" tone="white" className="mb-4 dt:justify-start">
              Why Shery Travels
            </Eyebrow>
            <AccentHeading
              as="h2"
              before="Every Step of Your Pilgrimage "
              accent="Matters"
              className="text-[30px] leading-[1.14] text-white dt:text-[46px] dt:leading-[1.1]"
            />
            <p className="mx-auto mt-5 max-w-[520px] text-[15.5px] font-light leading-[1.72] text-white/80 dt:mx-0 dt:text-[16.5px]">
              For over a decade we&apos;ve handled every detail of the sacred journey — visas, hotels
              near the Haram, guided ziyarat and comfortable transport — so you can focus entirely on
              your worship, from the first message to your return home.
            </p>
          </Reveal>

          <Stagger
            as="ul"
            gap={0.1}
            delay={0.1}
            className="mt-9 grid gap-4 text-left sm:grid-cols-3"
          >
            {PILLARS.map(({ Icon, title, body }) => (
              <StaggerItem
                as="li"
                key={title}
                direction="up"
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-colors hover:border-gold/40"
              >
                <span className="mb-3 grid h-11 w-11 place-items-center rounded-xl border border-gold/50 text-gold">
                  <Icon size={21} />
                </span>
                <h3 className="font-serif text-[15.5px] font-bold leading-snug text-white">{title}</h3>
                <p className="mt-1.5 text-[12.5px] font-light leading-relaxed text-white/70">{body}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <DropBounce className="mt-9 flex justify-center dt:justify-start">
            <Button href="/about/" variant="gold" size="lg" className="rounded-lg uppercase tracking-[0.06em]">
              Discover Shery Travels
              <ArrowRight size={18} aria-hidden />
            </Button>
          </DropBounce>
        </div>

        {/* Image with floating stats */}
        <div className="relative mx-auto w-full max-w-[460px]">
          <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 hidden h-32 w-32 rounded-full border border-gold/25 dt:block" />
          <div className="relative h-[360px] w-full overflow-hidden rounded-t-[180px] rounded-b-[18px] bg-lightblue shadow-[0_44px_90px_-32px_rgba(0,0,0,0.6)] dt:h-[460px]">
            <Image
              src="/images/home/home-beyond.webp"
              alt="Pilgrims on their journey with Shery Travels"
              fill
              sizes="(max-width:900px) 460px, 460px"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(26,62,110,0.35)_100%)]" />
          </div>

          {/* Floating stat badge (drops in and bounces) */}
          <div className="absolute -bottom-5 inset-x-0 flex justify-center dt:inset-x-auto dt:left-[-24px] dt:block">
            <DropBounce className="flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white px-5 py-3.5 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.5)]">
              <span className="font-serif text-[36px] font-bold leading-none text-navy">10+</span>
              <span className="text-[12.5px] font-light leading-tight text-navy/70">
                years guiding
                <br />
                pilgrims
              </span>
            </DropBounce>
          </div>

          {/* Second floating accent — pilgrims guided */}
          <div className="absolute -right-3 top-6 hidden dt:block">
            <DropBounce delay={0.2} className="flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-navy/80 px-4 py-2.5 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] backdrop-blur">
              <span className="font-serif text-[20px] font-bold leading-none text-gold">1,000+</span>
              <span className="text-[11px] font-light leading-tight text-white/85">pilgrims<br />guided</span>
            </DropBounce>
          </div>
        </div>
      </Container>
    </Section>
  );
}
