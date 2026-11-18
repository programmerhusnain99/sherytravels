import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";
import { PackageCardLarge } from "@/components/home/packages/PackageCardLarge";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import type { PackageCard } from "@/data/home/packageCards";

const UMRAH: PackageCard[] = [
  {
    title: "3-Star Umrah",
    image: "/images/home/home-hotel-grand.webp",
    highlights: ["7 Nights · 4 Makkah / 3 Madinah", "Comfortable hotels near the Haram", "Visa & Transport included"],
    price: "$940",
    href: "/umrah-packages/3-star/",
  },
  {
    title: "4-Star Umrah",
    image: "/images/home/home-hotel-kiswah.webp",
    highlights: ["10 Nights · 5 Makkah / 5 Madinah", "Closer, premium-comfort hotels", "Visa & Transport included"],
    price: "$1,140",
    href: "/umrah-packages/4-star/",
  },
  {
    title: "5-Star Umrah",
    image: "/images/home/home-pkg-luxury.webp",
    highlights: ["6 Nights · 3 Makkah / 3 Madinah", "5★ Haram-view rooms", "Private transfers & guide"],
    price: "$1,670",
    href: "/umrah-packages/5-star/",
  },
];

/** Homepage section: Umrah package tiers as large cards, linking to /umrah-packages. */
export function ExploreUmrahPackages() {
  return (
    <Section bg="ice" className="py-16 dt:py-24">
      <Container>
        <Reveal as="div" className="mx-auto mb-11 max-w-[760px] text-center">
          <Eyebrow align="center" className="mb-4">The serenity of Umrah</Eyebrow>
          <AccentHeading
            as="h2"
            before="Explore Our Umrah "
            accent="Packages"
            className="text-[28px] leading-[1.16] text-navy dt:text-[42px]"
          />
          <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] font-light leading-[1.68] text-navy/80 dt:text-[16.5px]">
            Choose the comfort level that suits you — every package includes flights, visa, hotels
            near the Haram and transport, fully arranged for you.
          </p>
        </Reveal>

        <Stagger as="div" gap={0.12} className="grid gap-6 dt:grid-cols-3 dt:gap-7">
          {UMRAH.map((pkg) => (
            <StaggerItem as="div" key={pkg.href} direction="up">
              <PackageCardLarge pkg={pkg} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-11 flex justify-center">
          <Button href="/umrah-packages/" variant="gold" size="lg" className="rounded-lg uppercase tracking-[0.06em]">
            View all Umrah packages
            <ArrowRight size={18} aria-hidden />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
