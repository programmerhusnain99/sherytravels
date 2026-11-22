import Image from "next/image";
import { Star } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { PackageCardLarge } from "@/components/home/packages/PackageCardLarge";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { type UmrahTier } from "@/data/umrah/packages";
import { UmrahPackagesCommon } from "./UmrahPackagesCommon";

const PACKAGES_PATH = "/umrah-packages/";

/** Full tier page (3/4/5-star) for `/umrah-packages/<tier>`. */
export function UmrahTierPage({ tier }: { tier: UmrahTier }) {
  const path = `${PACKAGES_PATH}${tier.slug}/`;

  return (
    <PageShell
      active="/umrah-packages/"
      cta={{
        eyebrow: "Plan your Umrah",
        headingBefore: `Ready to Begin Your ${tier.star} Umrah `,
        headingAccent: "Journey?",
        description:
          "Share your dates and group size and our team will put together a tailored plan — visa, flights, hotels and transport included.",
      }}
    >
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Umrah Packages", path: PACKAGES_PATH },
          { name: `${tier.star} Umrah Packages`, path },
        ])}
      />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-10 dt:pt-12">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="flex flex-col items-center gap-6 text-center">
          <div className="order-1">
            <Eyebrow align="center">{tier.heroEyebrow}</Eyebrow>
          </div>
          <div className="order-3 max-w-[680px] text-center">
            <div className="mb-4 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={18} className={s < tier.stars ? "fill-gold text-gold" : "fill-navy/10 text-navy/10"} />
              ))}
            </div>
            <AccentHeading as="h1" before={tier.heroHeadBefore} accent={tier.heroHeadAccent} className="text-[29px] leading-[1.18] text-navy dt:text-[44px]" />
            {tier.heroIntro.map((p, i) => (
              <p key={i} className={`${i === 0 ? "mt-5" : "mt-3"} text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]`}>{p}</p>
            ))}
            <div className="mt-7"><InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton></div>
          </div>
          <div className="relative order-2 flex justify-center">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden h-[500px] w-[450px] -translate-x-1/2 rounded-t-[225px] rounded-b-[18px] border border-navy/10 dt:block" />
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[360px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-[420px]">
              <Image src={tier.heroImage} alt={`${tier.star} Umrah packages`} fill sizes="(max-width:900px) 300px, 420px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Tier package cards. Clearer section tint + extra space after the hero CTA. */}
      <Section bg="lightblue" className="pt-16 pb-12 dt:pt-24 dt:pb-16">
        <Container>
          <div className="mb-10 flex flex-col items-center gap-2 text-center dt:mb-12 dt:flex-row dt:items-end dt:justify-between dt:text-left">
            <div>
              <Eyebrow align="center" className="mb-4 dt:justify-start">{tier.star} packages</Eyebrow>
              <AccentHeading as="h2" before={`Choose Your ${tier.star} Umrah `} accent="Package" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            </div>
            <p className="text-[14.5px] text-navy/70">{tier.nights} · {tier.split}</p>
          </div>
          <div className="grid gap-6 dt:grid-cols-3 dt:gap-7">
            {tier.rooms.map((r) => (
              <PackageCardLarge
                key={r.room}
                pkg={{
                  title: `${tier.star} · ${r.room}`,
                  image: r.image,
                  highlights: [tier.nights, tier.split, "Visa & Transport included"],
                  price: r.price,
                  href: path,
                }}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Why choose us → Explore → Spiritual highlights → FAQ */}
      <UmrahPackagesCommon />
    </PageShell>
  );
}
