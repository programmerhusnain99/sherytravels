import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { PackageRow } from "@/components/home/packages/PackageRow";
import { UmrahPackagesCommon } from "@/components/umrah/UmrahPackagesCommon";
import { TIERS } from "@/data/umrah/packages";

const PATH = "/umrah-packages/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Umrah Packages - 3, 4 & 5 Star Options - Shery Travels",
  description:
    "Explore Shery Travels Umrah packages — 3, 4 and 5-star options with hotels near the Haram, visa processing, flights, transport and guided ziyarat, all arranged for you.",
  ogType: "article",
});

export default function UmrahPackagesPage() {
  return (
    <PageShell active="/umrah-packages/" cta={false}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Umrah Packages", path: PATH },
        ])}
      />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-10 pb-14 dt:pt-12 dt:pb-20">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="flex flex-col items-center gap-6 text-center">
          <div className="order-1">
            <Eyebrow align="center">Umrah packages</Eyebrow>
          </div>
          <div className="order-3 max-w-[680px] text-center">
            <AccentHeading as="h1" before="Easy, Spiritual & Reliable Umrah " accent="Packages" className="text-[30px] leading-[1.18] text-navy dt:text-[46px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Choose from our 3, 4 and 5-star Umrah packages — each one with hotels near the Haram, visa processing, flights, transport and guided ziyarat handled for you. Simply pick the comfort level that suits you.
            </p>
            <p className="mt-4 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Travel solo, with family, or in a group, and let our dedicated team support you every step of the way so you can focus entirely on your worship.
            </p>
            <div className="mt-7"><InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton></div>
          </div>
          <div className="relative order-2 flex justify-center">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden h-[500px] w-[450px] -translate-x-1/2 rounded-t-[225px] rounded-b-[18px] border border-navy/10 dt:block" />
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[360px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-[420px]">
              <Image src="/images/umrah/usa-packages-hero.webp" alt="Umrah packages" fill sizes="(max-width:900px) 300px, 420px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Choose Your Umrah Package — cards on a soft, decorated backdrop. */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice via-white to-ice pt-12 pb-14 dt:pt-16 dt:pb-20">
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-16 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.1),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(47,128,237,0.08),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-10 hidden h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-navy/[0.06] dt:block" />
        <Container className="relative">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Eyebrow className="mb-4">Our packages</Eyebrow>
            <AccentHeading as="h2" before="Choose Your Umrah " accent="Package" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mt-4 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Three comfort levels, each fully arranged. Explore the room options below, or open a tier for full details.
            </p>
          </div>

          <div className="space-y-14">
            {TIERS.map((tier) => (
              <div key={tier.slug}>
                <div className="mb-6 flex flex-col items-center gap-3 dt:flex-row dt:items-end dt:justify-between">
                  <div className="text-center dt:text-left">
                    <div className="mb-1.5 flex items-center justify-center gap-0.5 dt:justify-start">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={16} className={s < tier.stars ? "fill-gold text-gold" : "fill-navy/10 text-navy/10"} />
                      ))}
                    </div>
                    <h3 className="font-serif text-[22px] font-bold text-navy dt:text-[26px]">{tier.star} Umrah Package</h3>
                    <p className="mt-1 text-[14px] text-navy/70">{tier.nights} · {tier.split}</p>
                  </div>
                  <Link
                    href={`${PATH}${tier.slug}/`}
                    className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-[13.5px] font-bold text-navy shadow-[0_10px_26px_-18px_rgba(26,62,110,0.6)] transition-colors hover:border-gold hover:text-gold"
                  >
                    Explore all {tier.star}
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                </div>
                <PackageRow
                  cards={tier.rooms.map((r) => ({
                    title: `${tier.star} · ${r.room}`,
                    image: r.image,
                    highlights: [tier.nights, tier.split, "Visa & Transport included"],
                    price: r.price,
                    href: `${PATH}${tier.slug}/`,
                  }))}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why choose us → Explore → Spiritual highlights → CTA → FAQ */}
      <UmrahPackagesCommon
        cta={{
          eyebrow: "Plan your Umrah",
          headingBefore: "Ready to Begin Your Umrah ",
          headingAccent: "Journey?",
          description:
            "Share your dates, group size and preferred tier, and a travel expert will reply within 24 hours with the best Umrah package for you.",
        }}
      />
    </PageShell>
  );
}
