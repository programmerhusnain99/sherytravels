import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { ContactForm } from "@/components/inquiry/ContactForm";

const PATH = "/umrah/usa-packages/monthly/";

// NOTE: the live meta description includes literal surrounding quotes (WordPress
// quirk) — kept EXACT for SEO parity. TODO(client): drop the quotes if desired.
export const metadata = pageMetadata({
  path: PATH,
  title: "Monthly Umrah Packages for U.S.-based Muslims - Shery Travels",
  description:
    '"Discover customized monthly Umrah packages for U.S.-based individuals, families, and groups. Plan your journey with flexible dates and customized options today!"',
  ogType: "article",
});

const WHY = [
  { title: "Travel According to Your Convenience", body: "Life doesn’t always follow the Islamic calendar, but you can plan Umrah any time of the year.. Select the month that works best for you, your family, and your job." },
  { title: "Experience All Seasons", body: "Every month has its own perks, and seasonal Umrah packages reflect varying pricing, flight availability, and the expected crowd. Get the best value out of each monthly package." },
  { title: "For Individuals, Families, and Groups", body: "Varying monthly Umrah packages are available according to multiple tiers. Whether you are traveling solo, with family, or in a group, each tier meets the needs of every traveler." },
  { title: "Year-Round Accessibility", body: "Easily schedule an Umrah journey from any major city. We offer reliable visa support and departures every month, so you can plan whenever you want." },
];

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function MonthlyUmrahPage() {
  return (
    <PageShell active="/umrah/">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Umrah", path: "/umrah/" },
          { name: "USA Packages", path: "/umrah/usa-packages/" },
          { name: "Monthly Packages", path: PATH },
        ])}
      />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-12 dt:pt-16">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="order-2 text-center dt:order-1 dt:text-left">
            <Eyebrow align="center" className="mb-5 dt:justify-start">Monthly Umrah packages</Eyebrow>
            <AccentHeading as="h1" before="Find the Perfect Month for Your Umrah " accent="Journey" className="text-[30px] leading-[1.18] text-navy dt:text-[46px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Offering Umrah packages for all year round, designed for U.S.-based Muslims that best fit your schedule, budget, and group size.
            </p>
            <div className="mt-7"><InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton></div>
          </div>
          <div className="relative order-1 flex justify-center dt:order-2">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden h-[500px] w-[450px] -translate-x-1/2 rounded-t-[225px] rounded-b-[18px] border border-navy/10 dt:block" />
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[360px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-[420px]">
              <Image src="/images/umrah/packages/monthly.webp" alt="Monthly Umrah packages for U.S. pilgrims" fill sizes="(max-width:900px) 300px, 420px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Why monthly — navy band */}
      <Section bg="navy" className="relative overflow-hidden py-14 dt:py-20">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full border border-gold/15" />
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow tone="white" className="mb-4">Why monthly</Eyebrow>
            <AccentHeading as="h2" before="Why Monthly Umrah Packages " accent="Matter" className="text-[27px] leading-tight text-white dt:text-[38px]" />
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-7">
            {WHY.map((h, i) => (
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

      {/* Discover — 12 month tiles */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow className="mb-4">Pick your month</Eyebrow>
            <AccentHeading as="h2" before="Discover Your Ideal Monthly Umrah " accent="Package" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mt-4 text-[15.5px] font-light leading-relaxed text-navy/80">
              We’ve got special packages every month with exciting highlights, updated rates, and travel schedules!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 dt:grid-cols-4">
            {MONTHS.map((m) => (
              <Link
                key={m}
                href={`/umrah/usa-packages/${m.toLowerCase()}/`}
                className="card-hover group flex items-center justify-between gap-3 rounded-xl border border-navy/10 bg-white p-4"
              >
                <span className="flex items-center gap-2.5">
                  <CalendarDays size={18} className="text-gold" />
                  <span className="font-serif text-[16px] font-bold text-navy">{m}</span>
                </span>
                <ArrowRight size={16} className="flex-none text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Customize — CTA band */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="mx-auto max-w-[840px] text-center">
          <Eyebrow className="mb-4">Made for you</Eyebrow>
          <AccentHeading as="h2" before="Customize Your Monthly Umrah Package with Shery " accent="Travels" className="text-[25px] leading-tight text-navy dt:text-[34px]" />
          <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80">
            Want to pre-build a monthly package that fulfills your exact travel requirements? At Shery Travels, you have the option to customize your Umrah journey fully. Select the departure month, travel dates, and preferences, and our team will ensure your requests are taken care of with utmost care.
          </p>
          <div className="mt-7"><InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton></div>
        </Container>
      </Section>

      {/* Inquiry */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container className="grid items-start gap-10 dt:grid-cols-2 dt:gap-16">
          <div>
            <Eyebrow align="left" className="mb-4">Get in touch with us</Eyebrow>
            <AccentHeading as="h2" before="Plan your monthly " accent="Umrah" className="text-[28px] leading-tight text-navy dt:text-[38px]" />
            <p className="mt-5 max-w-[460px] text-[16px] font-light leading-[1.7] text-navy/80">
              Tell us your preferred month, dates, and group size — a travel expert replies within 24 hours.
            </p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </PageShell>
  );
}
