import Image from "next/image";
import { Star } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { ContactForm } from "@/components/inquiry/ContactForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PriceCard } from "@/components/sections/PriceCard";
import { PackagesShowcase } from "@/components/home/packages/PackagesShowcase";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export interface PackageTier {
  star: string; // e.g. "3 Star"
  nights: string; // e.g. "7 Nights"
  split: string; // e.g. "4 In Makkah & 3 In Madina"
  rooms: { room: string; price: string }[];
}
export interface PackageHighlight {
  title: string;
  body: string;
}
export interface PackageFaq {
  q: string;
  a: string;
}
export interface PackageLandingData {
  path: string;
  title: string;
  description: string;
  crumb: string;
  heroImage: string;
  h1: string;
  heroIntro: string[];
  packagesHeading?: string;
  tiers: PackageTier[];
  highlightHeading: string;
  highlightIntro: string[];
  highlights: PackageHighlight[];
  planHeading: string;
  planParagraphs: string[];
  faq: PackageFaq[];
}

/** Splits a heading so the last word renders as the gold accent. */
function splitHeading(text: string): { before: string; accent: string } {
  const words = text.trim().split(/\s+/);
  const accent = words.pop() ?? "";
  return { before: words.length ? words.join(" ") + " " : "", accent };
}

/**
 * Shared template for all /umrah/usa-packages/<slug>/ landing pages (cities,
 * package types, seasonal, months). Fed by one data object per page.
 */
export function PackageLandingPage({ data }: { data: PackageLandingData }) {
  const h1 = splitHeading(data.h1);
  const pkg = data.packagesHeading ? splitHeading(data.packagesHeading) : null;
  const hilite = splitHeading(data.highlightHeading);
  const plan = splitHeading(data.planHeading);

  return (
    <PageShell active="/umrah/">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Umrah", path: "/umrah/" },
          { name: "USA Packages", path: "/umrah/usa-packages/" },
          { name: data.crumb, path: data.path },
        ])}
      />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-12 dt:pt-16">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="order-2 text-center dt:order-1 dt:text-left">
            <Eyebrow align="center" className="mb-5 dt:justify-start">{data.crumb} · Umrah packages</Eyebrow>
            <AccentHeading as="h1" before={h1.before} accent={h1.accent} className="text-[29px] leading-[1.18] text-navy dt:text-[44px]" />
            {data.heroIntro.map((p, i) => (
              <p key={i} className={`${i === 0 ? "mt-5" : "mt-3"} text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]`}>{p}</p>
            ))}
            <div className="mt-7"><InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton></div>
          </div>
          <div className="relative order-1 flex justify-center dt:order-2">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden h-[500px] w-[450px] -translate-x-1/2 rounded-t-[225px] rounded-b-[18px] border border-navy/10 dt:block" />
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[360px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-[420px]">
              <Image src={data.heroImage} alt={`${data.crumb} Umrah packages`} fill sizes="(max-width:900px) 300px, 420px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Packages */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-[780px] text-center">
            <Eyebrow className="mb-4">Our packages</Eyebrow>
            {pkg ? (
              <AccentHeading as="h2" before={pkg.before} accent={pkg.accent} className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            ) : (
              <AccentHeading as="h2" before="Choose Your Umrah " accent="Package" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            )}
          </div>

          <div className="space-y-12">
            {data.tiers.map((tier) => {
              const stars = parseInt(tier.star, 10) || 0;
              return (
                <div key={tier.star}>
                  <div className="mb-6 flex flex-col items-center gap-2 dt:flex-row dt:items-end dt:justify-between">
                    <div className="text-center dt:text-left">
                      <div className="mb-1.5 flex items-center justify-center gap-0.5 dt:justify-start">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={16} className={s < stars ? "fill-gold text-gold" : "fill-navy/10 text-navy/10"} />
                        ))}
                      </div>
                      <h3 className="font-serif text-[22px] font-bold text-navy dt:text-[26px]">{tier.star} Umrah Package</h3>
                    </div>
                    <p className="text-[14.5px] text-navy/70">{tier.nights} · {tier.split}</p>
                  </div>
                  <div className="grid gap-5 dt:grid-cols-3 dt:gap-7">
                    {tier.rooms.map((r, i) => (
                      <PriceCard
                        key={r.room}
                        badge={`${tier.star} · ${tier.nights}`}
                        title={r.room}
                        price={r.price}
                        features={[tier.split, "Visa & Transport included"]}
                        featured={i === 0}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Highlights — navy band */}
      <Section bg="navy" className="relative overflow-hidden py-14 dt:py-20">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full border border-gold/15" />
        <Container>
          <div className="mx-auto mb-10 max-w-[820px] text-center">
            <Eyebrow tone="white" className="mb-4">Why choose us</Eyebrow>
            <AccentHeading as="h2" before={hilite.before} accent={hilite.accent} className="text-[26px] leading-tight text-white dt:text-[36px]" />
            {data.highlightIntro.map((p, i) => (
              <p key={i} className="mt-4 text-[15.5px] font-light leading-relaxed text-white/80">{p}</p>
            ))}
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-7">
            {data.highlights.map((h, i) => (
              <div key={h.title} className="card-hover relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-7">
                <span className="pointer-events-none absolute -right-2 -top-3 font-serif text-[64px] font-bold leading-none text-gold/25" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mb-2 font-serif text-[19px] font-bold text-white">{h.title}</h3>
                <p className="relative text-[14.5px] font-light leading-relaxed text-white/75">{h.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Plan */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="mx-auto max-w-[840px] text-center">
          <Eyebrow className="mb-4">Plan your trip</Eyebrow>
          <AccentHeading as="h2" before={plan.before} accent={plan.accent} className="text-[25px] leading-tight text-navy dt:text-[34px]" />
          {data.planParagraphs.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-5" : "mt-3"} text-[15.5px] font-light leading-[1.7] text-navy/80`}>{p}</p>
          ))}
          <div className="mt-7"><InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton></div>
        </Container>
      </Section>

      {/* FAQ */}
      <FaqAccordion items={data.faq} />

      {/* Inquiry */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container className="grid items-start gap-10 dt:grid-cols-2 dt:gap-16">
          <div>
            <Eyebrow align="left" className="mb-4">Get in touch with us</Eyebrow>
            <AccentHeading as="h2" before="Plan your Umrah from " accent={data.crumb} className="text-[28px] leading-tight text-navy dt:text-[38px]" />
            <p className="mt-5 max-w-[460px] text-[16px] font-light leading-[1.7] text-navy/80">
              Tell us your dates and group size — a travel expert replies within 24 hours.
            </p>
          </div>
          <ContactForm />
        </Container>
      </Section>

      {/* Suggestions — explore more packages */}
      <PackagesShowcase
        eyebrow="Keep exploring"
        headingBefore="Explore more "
        headingAccent="packages"
        description="Browse other Umrah packages — flights, visa, hotels near the Haram and transport, all arranged for you."
        bg="white"
      />
    </PageShell>
  );
}
