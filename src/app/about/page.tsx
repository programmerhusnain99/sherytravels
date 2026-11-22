import Image from "next/image";
import { Route, ShieldCheck, Headset, Users, HeartHandshake, Check } from "lucide-react";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { ContactForm } from "@/components/inquiry/ContactForm";

const PATH = "/about/";

export const metadata = pageMetadata({
  path: PATH,
  title: "About Us - Shery Travels: Your Trusted Partner for Umrah & Hajj",
  description:
    "Discover Shery Travels, where we specialize in making your pilgrimage journeys easy and comfortable. Join us to get started on your spiritual journey worry-free!",
  ogType: "article",
});

const PILLARS = [
  { Icon: Route, title: "Personalized Itineraries", body: "Customized packages to meet your needs." },
  { Icon: ShieldCheck, title: "Trusted Processes", body: "From visas to hotel bookings." },
  { Icon: Headset, title: "Ground Support", body: "Professional experts guide you." },
];

const WHY = [
  {
    Icon: Users,
    title: "Professional Team",
    body: "Professionally trained and spiritually aware, we handle your logistics planning from start to end to ensure every detail is taken care of.",
  },
  {
    Icon: HeartHandshake,
    title: "Safety and Comfort",
    body: "Get updated information on Saudi travel regulations and all necessary documents you need to ensure a safe and sound journey throughout the pilgrimage.",
  },
];

export default function AboutPage() {
  return (
    <PageShell active="/about/">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: PATH },
        ])}
      />

      {/* Intro */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-10 pb-12 dt:pt-12 dt:pb-16">
        <Container className="flex flex-col items-center text-center">
          <Eyebrow>About Shery Travels</Eyebrow>
          <div className="relative mt-6 flex justify-center dt:mt-7">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[330px] w-[290px] overflow-hidden rounded-t-[145px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[420px] dt:w-[380px] dt:rounded-t-[190px]">
              <Image src="/images/about/about-story.webp" alt="Shery Travels — about us" fill sizes="(max-width:900px) 290px, 380px" priority className="object-cover" />
            </div>
          </div>
          <AccentHeading
            as="h1"
            before="Making Pilgrimage Journeys Easy and "
            accent="Comfortable"
            className="mt-8 max-w-[760px] text-[30px] leading-[1.16] text-navy dt:text-[44px]"
          />
        </Container>
      </Section>

      {/* Story + image — navy glorified band */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.12),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -right-28 -bottom-24 hidden h-[420px] w-[420px] rounded-full border border-gold/15 dt:block" />
        <Container className="relative grid items-center gap-14 dt:grid-cols-2 dt:gap-16">
          {/* Image */}
          <div className="relative order-2 mx-auto w-full max-w-[420px] dt:order-1">
            <div aria-hidden className="pointer-events-none absolute -left-5 -top-5 hidden h-28 w-28 rounded-full border border-gold/25 dt:block" />
            <div className="hero-float relative mx-auto h-[380px] w-[300px] overflow-hidden rounded-t-[160px] rounded-b-[18px] bg-lightblue shadow-[0_44px_90px_-30px_rgba(0,0,0,0.6)] dt:h-[480px] dt:w-full dt:rounded-t-[220px]">
              <Image src="/images/about/about-story.webp" alt="Pilgrims on their journey with Shery Travels" fill sizes="(max-width:900px) 300px, 440px" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(26,62,110,0.4)_100%)]" />
            </div>
            <div className="absolute -bottom-4 inset-x-0 flex justify-center dt:inset-x-auto dt:left-[-20px] dt:block">
              <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white px-5 py-3.5 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.5)]">
                <span className="font-serif text-[30px] font-bold leading-none text-navy">10+</span>
                <span className="text-left text-[12px] font-light leading-tight text-navy/70">years of<br />trusted service</span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="order-1 text-center dt:order-2 dt:text-left">
            <Eyebrow align="center" tone="white" className="mb-4 dt:justify-start">Who we are</Eyebrow>
            <AccentHeading
              as="h2"
              before="Umrah & Services Planned with "
              accent="Care"
              className="text-[28px] leading-[1.18] text-white dt:text-[40px]"
            />
            <p className="mx-auto mt-5 max-w-[520px] text-[15.5px] font-light leading-[1.7] text-white/80 dt:mx-0 dt:text-[16.5px]">
              Shery Travels was founded on the idea of providing more than an ordinary travel
              experience — a journey rooted in faith, care and trust.
            </p>
            <p className="mx-auto mt-4 max-w-[520px] text-[15.5px] font-light leading-[1.7] text-white/70 dt:mx-0">
              We understand that Umrah and Hajj are close to the heart of Muslims. Keeping that in
              mind, we share our expertise and guidance to plan your pilgrimage smoothly — without
              waiting in long queues.
            </p>
            <ul className="mx-auto mt-6 flex max-w-[520px] flex-col gap-2.5 text-left dt:mx-0 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {["Faith-first guidance", "End-to-end arrangements", "Strong local network"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-[14.5px] font-medium text-white/90">
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-gold/15 ring-1 ring-gold/30"><Check size={13} className="text-gold" /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Three pillars */}
      <Section bg="ice" className="py-10 dt:py-14">
        <Container className="grid gap-5 dt:grid-cols-3 dt:gap-7">
          {PILLARS.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-navy/10 bg-white p-7 text-center dt:text-left">
              <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl border-[1.5px] border-gold bg-ice dt:mx-0">
                <Icon size={26} className="text-navy" />
              </span>
              <h3 className="mb-2 font-serif text-[20px] font-bold text-navy">{title}</h3>
              <p className="text-[15px] font-light leading-relaxed text-navy/75">{body}</p>
            </div>
          ))}
        </Container>
      </Section>

      {/* Worry-free CTA band */}
      <Section bg="navy" className="py-10 dt:py-12">
        <Container className="flex flex-col items-center gap-6 text-center dt:flex-row dt:justify-between dt:text-left">
          <AccentHeading
            as="h2"
            before="Plan Your First Umrah & Hajj, "
            accent="Worry-Free"
            className="max-w-[720px] text-[26px] leading-[1.25] text-white dt:text-[36px]"
          />
          <div className="flex flex-none gap-3">
            <InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton>
            <Button href="/umrah-packages/" variant="outline" size="lg" className="hidden border-white/30 text-white dt:inline-flex">
              Explore Umrah
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why Shery Travels */}
      <Section bg="white" className="py-10 dt:py-14">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <Eyebrow className="mb-4">Why choose us</Eyebrow>
            <AccentHeading
              as="h2"
              before="Why Shery "
              accent="Travels?"
              className="text-[28px] leading-tight text-navy dt:text-[42px]"
            />
            <p className="mt-5 text-[16px] font-light leading-[1.7] text-navy/80 dt:text-[17px]">
              Our years of travel expertise make us a reliable and trusted partner with a deep
              spiritual understanding of sacred journeys. We provide Muslim travelers with comfort and
              ease for their sacred trip to Makkah and Madinah, helping them relax and enjoy the journey.
            </p>
          </div>
          <div className="mt-10 grid gap-5 dt:grid-cols-2 dt:gap-7">
            {WHY.map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-5 rounded-2xl border border-navy/10 bg-ice p-7">
                <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl border-[1.5px] border-gold bg-white">
                  <Icon size={26} className="text-navy" />
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-[19px] font-bold text-navy">{title}</h3>
                  <p className="text-[15px] font-light leading-relaxed text-navy/75">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Inquiry */}
      <Section bg="ice" className="py-10 dt:py-14">
        <Container className="grid items-start gap-10 dt:grid-cols-2 dt:gap-16">
          <div>
            <Eyebrow align="left" className="mb-4">Get in touch</Eyebrow>
            <AccentHeading
              as="h2"
              before="Send us an "
              accent="Inquiry"
              className="text-[28px] leading-tight text-navy dt:text-[40px]"
            />
            <p className="mt-5 max-w-[460px] text-[16px] font-light leading-[1.7] text-navy/80">
              Whether it&apos;s a general question, a transport request, or a package inquiry — a travel
              expert replies within 24 hours.
            </p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </PageShell>
  );
}
