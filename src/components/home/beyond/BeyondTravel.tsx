import Image from "next/image";
import { Award, Users, Headset, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { DropBounce } from "@/components/motion/DropBounce";

const STATS = [
  { Icon: Award, value: "10+", label: "Years guiding pilgrims" },
  { Icon: Users, value: "1,000+", label: "Pilgrims served" },
  { Icon: Headset, value: "24/7", label: "On-ground support" },
];

/**
 * Navy band under the floating enquiry card. On desktop: copy + stats on the
 * left, an image on the right. On mobile: the same centered compact column
 * (image hidden).
 */
export function BeyondTravel() {
  return (
    <Section bg="navy" className="relative overflow-hidden pb-10 pt-20 dt:pb-16 dt:pt-24">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.14),transparent_70%)]" />

      <Container className="relative dt:grid dt:grid-cols-[1.05fr_0.9fr] dt:items-center dt:gap-14">
        {/* Content (left on desktop, centered on mobile) */}
        <div>
          <Reveal as="div" className="mx-auto max-w-[760px] text-center dt:mx-0 dt:text-left">
            <Eyebrow align="center" tone="white" className="mb-4 dt:justify-start">Why Shery Travels</Eyebrow>
            <AccentHeading
              as="h2"
              before="A Pilgrimage Handled, End to "
              accent="End"
              className="text-[28px] leading-[1.16] text-white dt:text-[40px]"
            />
            <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] font-light leading-[1.7] text-white/80 dt:mx-0 dt:text-[16.5px]">
              Visas, hotels near the Haram, guided ziyarat and comfortable transport — every detail
              arranged for you, so you can focus entirely on your worship.
            </p>
          </Reveal>

          <Stagger as="div" gap={0.12} delay={0.1} className="mx-auto mt-9 grid max-w-[640px] gap-4 sm:grid-cols-3 dt:mx-0">
            {STATS.map(({ Icon, value, label }) => (
              <StaggerItem
                as="div"
                key={label}
                direction="up"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 transition-colors hover:border-gold/40 sm:flex-col sm:gap-2 sm:py-5 sm:text-center"
              >
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl border border-gold/50 text-gold">
                  <Icon size={22} />
                </span>
                <div>
                  <div className="font-serif text-[26px] font-bold leading-none text-gold dt:text-[28px]">{value}</div>
                  <div className="mt-1.5 text-[12.5px] font-light text-white/80">{label}</div>
                </div>
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

        {/* Image (desktop only) */}
        <div className="relative mx-auto hidden w-full max-w-[440px] dt:block">
          <div aria-hidden className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 rounded-full border border-gold/25" />
          <div className="hero-float relative h-[460px] w-full overflow-hidden rounded-t-[210px] rounded-b-[18px] bg-lightblue shadow-[0_44px_90px_-32px_rgba(0,0,0,0.6)]">
            <Image src="/images/home/home-beyond.webp" alt="Pilgrims on their journey with Shery Travels" fill sizes="440px" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(26,62,110,0.35)_100%)]" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
