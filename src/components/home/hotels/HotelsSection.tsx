import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Reveal } from "@/components/motion/Reveal";
import { HotelsTabs, type Hotel } from "./HotelsTabs";
import { HotelsScrollButtons } from "./HotelsScrollButtons";

const MAKKAH: Hotel[] = [
  {
    name: "Dar Al Eiman Grand",
    stars: 5,
    image: "/images/home/home-hotel-grand.webp",
    nearest: "200m from Masjid al-Haram",
  },
  {
    name: "Al Kiswah Towers",
    stars: 4,
    image: "/images/home/home-hotel-kiswah.webp",
    nearest: "150m from Masjid al-Haram",
  },
];

const MADINAH: Hotel[] = [
  {
    name: "Dar Al Eiman Al Manar",
    stars: 4,
    image: "/images/home/home-hotel-manar.webp",
    nearest: "250m from Al-Masjid an-Nabawi",
  },
  {
    name: "Nada Al Salam",
    stars: 3,
    image: "/images/home/home-hotel-nadaalsalam.webp",
    nearest: "450m from Al-Masjid an-Nabawi",
  },
];

/**
 * "Choose Your Perfect Stay" — hotel showcase. Server component: heading, layout
 * and all hotel data render server-side. The Makkah/Madinah tab toggle lives in
 * the small client child <HotelsTabs>, which receives both lists as props.
 */
export function HotelsSection() {
  return (
    <Section bg="lightblue" className="py-16 dt:py-24">
      <Container>
        <div className="dt:grid dt:grid-cols-[minmax(0,1fr)_420px] dt:items-stretch dt:gap-12">
          {/* Left: heading + tabs + cards */}
          <div>
            <div className="flex items-start gap-5">
              <HotelsScrollButtons />
              <Reveal as="div" className="flex-1 text-center dt:text-left">
                <Eyebrow align="center" className="dt:justify-start">
                  Where You&apos;ll Stay
                </Eyebrow>
                <AccentHeading
                  as="h2"
                  before="Choose Your "
                  accent="Perfect"
                  after=" Stay"
                  className="mt-3 text-[32px] leading-[1.1] dt:text-[48px]"
                />
                <p className="mx-auto mt-3 max-w-[550px] text-[15px] leading-relaxed text-navy/60 dt:mx-0 dt:text-[17px]">
                  Shery Travels partners with 3, 4 and 5-star hotels in Makkah and
                  Madinah, carefully selected for comfort, quality and convenience.
                </p>
              </Reveal>
            </div>

            {/* Mobile tower banner */}
            <div className="relative -mx-5 mb-2 mt-6 h-[220px] dt:hidden">
              <Image
                src="/images/home/home-hotels-tower.webp"
                alt="Makkah Clock Tower"
                fill
                sizes="100vw"
                className="object-contain"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"
              />
            </div>

            <HotelsTabs makkah={MAKKAH} madinah={MADINAH} />
          </div>

          {/* Right: floating Makkah Clock Tower cutout (desktop only) */}
          <div className="relative hidden self-stretch dt:block">
            <div className="relative h-full min-h-[560px] w-full">
              <Image
                src="/images/home/home-hotels-tower.webp"
                alt="Makkah Clock Tower"
                fill
                sizes="420px"
                className="object-contain object-bottom"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.12),transparent_70%)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
