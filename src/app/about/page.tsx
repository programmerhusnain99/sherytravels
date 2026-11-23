import Image from "next/image";
import { Route, ShieldCheck, Headset, Users, HeartHandshake, Check } from "lucide-react";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { FormSection } from "@/components/home/form/FormSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

const PATH = "/about/";

export const metadata = pageMetadata({
  path: PATH,
  title: "About Us - Shery Travels: Your Trusted Partner for Umrah & Hajj",
  description:
    "Discover Shery Travels, where we specialize in making your pilgrimage journeys easy and comfortable. Join us to get started on your spiritual journey worry-free!",
  ogType: "article",
});

const PILLARS = [
  {
    Icon: Route,
    title: "Personalized Itineraries",
    body: "We tailor every package to your dates, budget and pace — so your pilgrimage fits you, not a fixed template.",
  },
  {
    Icon: ShieldCheck,
    title: "Trusted, End-to-End Processes",
    body: "From visa processing to hotels near the Haram, every step is handled accurately and on time, with nothing left to chance.",
  },
  {
    Icon: Headset,
    title: "On-Ground Support",
    body: "Professional, spiritually aware experts guide you before departure and throughout your stay in Saudi Arabia.",
  },
];

const WHY = [
  {
    Icon: Users,
    title: "Professional Team",
    body: "Professionally trained and spiritually aware, we handle your logistics from start to end so every detail is taken care of.",
  },
  {
    Icon: HeartHandshake,
    title: "Safety and Comfort",
    body: "Up-to-date guidance on Saudi travel regulations and the documents you need, for a safe and sound journey throughout.",
  },
];

const FAQ = [
  { q: "What makes Shery Travels different?", a: "We combine years of travel expertise with a deep, faith-first understanding of Umrah and Hajj — handling visas, flights, hotels and transport so you can focus entirely on your worship." },
  { q: "Do you handle the full Umrah visa and booking process?", a: "Yes. We process your visa, book flights and hotels near the Haram, and arrange all transfers and guided ziyarat — the complete journey, arranged end to end." },
  { q: "Can you customize a package for my family or group?", a: "Absolutely. Every itinerary is tailored to your dates, group size, budget and preferences, whether you travel solo, with family, or in a group." },
  { q: "Is support available during the trip?", a: "Yes — our team offers 24/7 on-ground support in Saudi Arabia, so help is always a call away throughout your stay." },
];

export default function AboutPage() {
  return (
    <PageShell active="/about/" cta={false}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: PATH },
        ])}
      />

      {/* Intro */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-10 pb-12 dt:pt-12 dt:pb-16">
        <Container className="flex flex-col items-center text-center">
          <AccentHeading
            as="h1"
            before="Making Pilgrimage Journeys Easy and "
            accent="Comfortable"
            className="max-w-[760px] text-[30px] leading-[1.16] text-navy dt:text-[44px]"
          />
          <div className="relative mt-6 flex justify-center dt:mt-7">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[330px] w-[290px] overflow-hidden rounded-t-[145px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[420px] dt:w-[380px] dt:rounded-t-[190px]">
              <Image src="/images/about/about-story.webp" alt="Shery Travels — about us" fill sizes="(max-width:900px) 290px, 380px" priority className="object-cover" />
            </div>
          </div>
          <p className="mx-auto mt-7 max-w-[620px] text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
            At Shery Travels, we make Umrah and Hajj simple, comfortable and deeply spiritual — handling visas, flights, hotels near the Haram and transport, so you can focus entirely on your worship.
          </p>
        </Container>
      </Section>

      {/* Story — dark-blue band with image */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.12),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -right-28 -bottom-24 hidden h-[420px] w-[420px] rounded-full border border-gold/15 dt:block" />
        <Container className="relative grid items-center gap-12 dt:grid-cols-2 dt:gap-16">
          <div className="relative order-2 mx-auto w-full max-w-[420px] dt:order-1">
            <div aria-hidden className="pointer-events-none absolute -left-5 -top-5 hidden h-28 w-28 rounded-full border border-gold/25 dt:block" />
            <div className="hero-float relative mx-auto h-[380px] w-[300px] overflow-hidden rounded-t-[160px] rounded-b-[18px] bg-lightblue shadow-[0_44px_90px_-30px_rgba(0,0,0,0.6)] dt:h-[480px] dt:w-full dt:rounded-t-[220px]">
              <Image src="/images/about/about-story.webp" alt="Pilgrims on their journey with Shery Travels" fill sizes="(max-width:900px) 300px, 440px" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(26,62,110,0.4)_100%)]" />
            </div>
            <div className="absolute inset-x-0 -bottom-4 flex justify-center dt:inset-x-auto dt:left-[-20px] dt:block">
              <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white px-5 py-3.5 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.5)]">
                <span className="font-serif text-[30px] font-bold leading-none text-navy">10+</span>
                <span className="text-left text-[12px] font-light leading-tight text-navy/70">years of<br />trusted service</span>
              </div>
            </div>
          </div>
          <div className="order-1 text-center dt:order-2 dt:text-left">
            <Eyebrow align="center" tone="white" className="mb-4 dt:justify-start">Who we are</Eyebrow>
            <AccentHeading as="h2" before="Umrah & Services Planned with " accent="Care" className="text-[28px] leading-[1.18] text-white dt:text-[40px]" />
            <p className="mx-auto mt-5 max-w-[520px] text-[15.5px] font-light leading-[1.7] text-white/80 dt:mx-0 dt:text-[16.5px]">
              Shery Travels was founded on the idea of providing more than an ordinary travel experience — a journey rooted in faith, care and trust.
            </p>
            <p className="mx-auto mt-4 max-w-[520px] text-[15.5px] font-light leading-[1.7] text-white/70 dt:mx-0">
              We understand that Umrah and Hajj are close to the heart of Muslims. Keeping that in mind, we share our expertise and guidance to plan your pilgrimage smoothly — without waiting in long queues.
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

      {/* What we do — redesigned pillars (compact) */}
      <Section bg="lightblue" className="py-10 dt:py-14">
        <Container>
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-11">
            <Eyebrow className="mb-4">What we do</Eyebrow>
            <AccentHeading as="h2" before="Everything Handled, " accent="End to End" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              From the first enquiry to your return home, we take care of every detail — so your only focus is worship.
            </p>
          </div>
          <div className="grid gap-4 dt:grid-cols-3 dt:gap-5">
            {PILLARS.map(({ Icon, title, body }, i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl border border-navy/10 bg-white p-5 shadow-[0_16px_36px_-30px_rgba(26,62,110,0.45)] transition-transform duration-300 hover:-translate-y-1"
              >
                <span aria-hidden className="pointer-events-none absolute -right-1 -top-2 font-serif text-[48px] font-bold leading-none text-gold/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative mb-3 flex items-center gap-3">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_12px_26px_-12px_rgba(219,183,37,0.6)]">
                    <Icon size={21} />
                  </span>
                  <h3 className="font-serif text-[16.5px] font-bold leading-tight text-navy">{title}</h3>
                </div>
                <p className="relative text-[13.5px] font-light leading-relaxed text-navy/70">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Shery Travels — with image */}
      <Section bg="white" className="py-10 dt:py-14">
        <Container className="grid items-center gap-11 dt:grid-cols-2 dt:gap-16">
          <div className="order-1 text-center dt:text-left">
            <Eyebrow align="center" className="mb-4 dt:justify-start">Why choose us</Eyebrow>
            <AccentHeading as="h2" before="Why Shery " accent="Travels?" className="text-[28px] leading-tight text-navy dt:text-[40px]" />
            <p className="mx-auto mt-5 max-w-[520px] text-[15.5px] font-light leading-[1.7] text-navy/80 dt:mx-0 dt:text-[16.5px]">
              Our years of travel expertise make us a reliable, trusted partner with a deep spiritual understanding of sacred journeys — so you can relax and enjoy the trip to Makkah and Madinah.
            </p>
            <div className="mt-7 flex flex-col gap-4 text-left">
              {WHY.map(({ Icon, title, body }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-navy/10 bg-ice p-5">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_12px_26px_-12px_rgba(219,183,37,0.6)]">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="mb-1 font-serif text-[17px] font-bold text-navy">{title}</h3>
                    <p className="text-[13.5px] font-light leading-relaxed text-navy/70">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-2 mx-auto w-full max-w-[440px]">
            <div aria-hidden className="pointer-events-none absolute -left-5 -bottom-5 hidden h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.18),transparent_70%)] dt:block" />
            <div className="relative mx-auto h-[380px] w-[300px] overflow-hidden rounded-t-[160px] rounded-b-[18px] bg-lightblue shadow-[0_40px_80px_-32px_rgba(26,62,110,0.5)] dt:h-[460px] dt:w-full dt:rounded-t-[210px]">
              <Image src="/images/about/about-team.webp" alt="The Shery Travels team" fill sizes="(max-width:900px) 300px, 440px" className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Enquiry CTA (homepage design) */}
      <FormSection />

      {/* FAQ */}
      <FaqAccordion
        intro="Answers to common questions about Shery Travels and how we plan your Umrah and Hajj."
        items={FAQ}
      />
    </PageShell>
  );
}
