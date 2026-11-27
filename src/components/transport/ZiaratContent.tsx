import Image from "next/image";
import { UserCheck, CarFront, Route, Headset, MapPin } from "lucide-react";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { HeroEnquiryForm } from "@/components/home/hero/HeroEnquiryForm";
import { HERO_DESCRIPTION } from "@/components/sections/heroCopy";
import { FormSection } from "@/components/home/form/FormSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SightseeingTour } from "./SightseeingTour";
import { FleetPreview } from "./FleetPreview";
import { CustomPackageForm } from "@/components/inquiry/CustomPackageForm";
import { MAKKAH_TOUR, MADINAH_TOUR, MAKKAH_GALLERY, MADINAH_GALLERY } from "@/data/transport/routesData";

const MAKKAH_SITES = ["The Kaaba", "Maqam Ibrahim", "The Black Stone (Al-Hajar Al-Aswad)", "The Well of Zamzam", "Mina", "Arafat", "Muzdalifah", "Gar-e-Hira", "Masjid Al-Jinn", "Jannat-ul-Mualla"];
const MADINAH_SITES = ["Masjid Al Nabawi", "Jannat Al-Baqi", "Quba Mosque", "Uhud Mountain", "Masjid Al-Qiblatain", "The Baab-As-Salaam", "Mosque Al Ghamamah", "Battlefield of the Trench (Khandaq)"];

const WHY = [
  { Icon: UserCheck, title: "Trained Local Guides", body: "Local guides who know each site’s history and accompany you with genuine insight." },
  { Icon: CarFront, title: "Comfortable Transportation", body: "Modern, air-conditioned, well-kept vehicles for groups and families alike." },
  { Icon: Route, title: "Personalized Ziarat Plans", body: "Custom itineraries — explore at your own pace and cover every essential site." },
  { Icon: Headset, title: "24/7 Support Team", body: "A dedicated team on hand around the clock for bookings and any changes." },
];

const BOOK = [
  { title: "Choose Your Ride", body: "Pick from sedans, SUVs, vans or buses — the right fit for every pilgrim, solo or family." },
  { title: "Book Online or WhatsApp", body: "Reserve online or message us on WhatsApp — flexible options, instant reply." },
  { title: "Instant Confirmation", body: "Get your booking and driver details immediately — no waiting, no delays." },
  { title: "Relax and Travel", body: "Sit back as our professional, English-speaking drivers take you to every sacred stop." },
];

const FAQ = [
  { q: "Do you offer Ziarat tours for both Makkah and Madinah?", a: "Yes, at Shery Travels, we provide full Ziarat tours that include both Makkah and Madinah. You can choose to take individual tours for each city or opt for a combined package that fits your travel plans." },
  { q: "Can I customize my Ziarat itinerary?", a: "Definitely! We offer flexible options that allow you to add or skip places based on your preferences, group size, and the time you have available." },
  { q: "Are the Ziarat locations guided by experts?", a: "Yes, all our tours are led by knowledgeable, English-speaking guides who will share important historical and spiritual insights about each Ziarat site. This way, you’ll understand the significance of each sacred location." },
  { q: "What transport options are available for Ziarat?", a: "We provide a range of comfortable transportation options, including sedans, SUVs, vans, and luxury buses. All of our vehicles are air-conditioned and driven by experienced, licensed drivers to ensure your comfort." },
  { q: "Can I book my Ziarat tour in advance from my home country?", a: "Absolutely! You can easily book your Ziarat tours online or through WhatsApp before you arrive in Saudi Arabia. This makes for a smoother and stress-free experience." },
];

function SiteChips({ sites, tone = "light" }: { sites: string[]; tone?: "light" | "dark" }) {
  const cls =
    tone === "dark"
      ? "border-white/15 bg-white/[0.08] text-white/90"
      : "border-navy/10 bg-white text-navy";
  return (
    <ul className="flex flex-wrap gap-2.5">
      {sites.map((s) => (
        <li key={s} className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13.5px] font-medium ${cls}`}>
          <MapPin size={14} className="flex-none text-gold" /> {s}
        </li>
      ))}
    </ul>
  );
}

/** Shared Ziarat / Ziyarat page body (legacy /transportation/ziarat/ + new /ziyarat/). */
export function ZiaratContent({
  breadcrumb,
  active = "/ziyarat/",
}: {
  breadcrumb: { name: string; path: string }[];
  active?: string;
}) {
  return (
    <PageShell active={active} cta={false}>
      <JsonLd data={breadcrumbSchema(breadcrumb)} />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-10 pb-14 dt:pt-12 dt:pb-20">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="flex flex-col items-center gap-6 text-center">
          <div className="order-1 max-w-[680px] text-center">
            <AccentHeading as="h1" before="Sacred Ziarat Journeys with Ease & " accent="Comfort" className="text-[32px] leading-[1.15] text-navy dt:text-[48px]" />
          </div>
          <div className="order-3 max-w-[680px] text-center">
            <p className="text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">{HERO_DESCRIPTION}</p>
          </div>
          <div className="order-4 w-full"><HeroEnquiryForm /></div>
          <div className="relative order-2 flex justify-center">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[360px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-[420px]">
              <Image src="/images/ziarat/ziarat-hero.webp" alt="Ziarat tour to holy sites in Makkah and Madinah" fill sizes="(max-width:900px) 300px, 420px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Makkah sites — dark */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.12),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -right-28 bottom-0 hidden h-[360px] w-[360px] rounded-full border border-white/[0.06] dt:block" />
        <Container className="relative grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="order-2 dt:order-1">
            <Eyebrow align="left" tone="white" className="mb-4">In Makkah</Eyebrow>
            <AccentHeading as="h2" before="Explore the Sacred Ziarat of Makkah " accent="Mukarma" className="text-[26px] leading-tight text-white dt:text-[36px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-white/75 dt:text-[16.5px]">
              Discover Makkah, a place where faith begins. With Shery Travels, each Ziarat stop helps you connect to stories of devotion, revelation, and sacrifice. Our guided tours cover important sites, allowing you to reflect, pray, and appreciate the essence of Islam.
            </p>
            <div className="mt-6"><SiteChips sites={MAKKAH_SITES} tone="dark" /></div>
          </div>
          <div className="relative order-1 dt:order-2">
            <span aria-hidden className="pointer-events-none absolute -left-3 -top-3 z-10 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-gold/70" />
            <span aria-hidden className="pointer-events-none absolute -bottom-3 -right-3 z-10 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-gold/70" />
            <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-white/5 shadow-[0_34px_64px_-26px_rgba(0,0,0,0.6)] dt:h-[460px]">
              <Image src="/images/ziarat/ziarat-makkah.webp" alt="Sacred Ziarat sites in Makkah" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Makkah sightseeing route */}
      <SightseeingTour
        bg="white"
        headBefore="Makkah Sightseeing "
        headAccent="Route"
        gallery={MAKKAH_GALLERY}
        stops={MAKKAH_TOUR}
        note="Be ready in your hotel lobby 10 minutes before the tour; your driver meets you there. Please arrive on time — delays may result in cancellation."
      />

      {/* Madinah sites — dark */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.12),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -left-28 bottom-0 hidden h-[360px] w-[360px] rounded-full border border-white/[0.06] dt:block" />
        <Container className="relative grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="relative order-1">
            <span aria-hidden className="pointer-events-none absolute -left-3 -top-3 z-10 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-gold/70" />
            <span aria-hidden className="pointer-events-none absolute -bottom-3 -right-3 z-10 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-gold/70" />
            <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-white/5 shadow-[0_34px_64px_-26px_rgba(0,0,0,0.6)] dt:h-[460px]">
              <Image src="/images/ziarat/ziarat-madinah.webp" alt="Blessed Ziarat sites in Madinah" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
            </div>
          </div>
          <div className="order-2">
            <Eyebrow align="left" tone="white" className="mb-4">In Madinah</Eyebrow>
            <AccentHeading as="h2" before="Experience the Blessed Ziarat of Madinah " accent="Munawara" className="text-[26px] leading-tight text-white dt:text-[36px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-white/75 dt:text-[16.5px]">
              Explore the beautiful and sacred sites of Madinah, known as the city of peace and mercy, home to the Prophet (PBUH). Our Ziarat tours are designed to guide you through places rich with historical and spiritual significance. With the help of our experienced guides, each visit promises to be insightful and unforgettable.
            </p>
            <div className="mt-6"><SiteChips sites={MADINAH_SITES} tone="dark" /></div>
          </div>
        </Container>
      </Section>

      {/* Madinah sightseeing route */}
      <SightseeingTour
        bg="white"
        headBefore="Madinah Sightseeing "
        headAccent="Route"
        gallery={MADINAH_GALLERY}
        stops={MADINAH_TOUR}
        note="A 2 to 2.5-hour tour with limited time at Masjid e Qiblatain — please make wudu beforehand. Be in your hotel lobby 10 minutes early."
      />

      {/* Why choose us — navy, glass-card design (matches Umrah / Vehicles) */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.15),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -right-28 top-24 hidden h-[340px] w-[340px] rounded-full border border-gold/15 dt:block" />
        <div aria-hidden className="pointer-events-none absolute -left-28 -bottom-28 hidden h-[380px] w-[380px] rounded-full border border-white/[0.06] dt:block" />
        <Container className="relative">
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" tone="white" className="mb-4">Why choose us</Eyebrow>
            <AccentHeading as="h2" before="Why Choose Us for Your Sacred Ziarat " accent="Journey" className="text-[27px] leading-tight text-white dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[580px] text-[15px] font-light leading-relaxed text-white/70 dt:text-[16px]">
              Trusted local guides, comfortable vehicles and personalised plans — backed by a team that’s with you every step of your sacred journey.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3.5 dt:grid-cols-4 dt:gap-4">
            {WHY.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
              >
                <span aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gold/0 blur-2xl transition-colors duration-300 group-hover:bg-gold/25" />
                <div className="relative mb-2.5 flex items-center gap-3">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_10px_22px_-10px_rgba(219,183,37,0.65)]">
                    <Icon size={19} aria-hidden />
                  </span>
                  <h3 className="font-serif text-[15px] font-bold leading-tight text-white">{title}</h3>
                </div>
                <p className="relative text-[12.5px] font-light leading-relaxed text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Book your ride — new connected flow on a glorified background */}
      <Section bg="white" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ice via-white to-ice" />
        <div aria-hidden className="pointer-events-none absolute -left-28 -top-20 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)] blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(47,128,237,0.08),transparent_70%)] blur-2xl" />
        <Container className="relative">
          <div className="mx-auto mb-10 max-w-[760px] text-center dt:mb-14">
            <Eyebrow align="center" className="mb-4">Book with ease</Eyebrow>
            <AccentHeading as="h2" before="Book Your Ziarat Ride With " accent="Ease" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[640px] text-[15.5px] font-light leading-relaxed text-navy/75">
              A private car, SUV, GMC or bus — booking is hassle-free. Pick your vehicle, confirm online or on WhatsApp, and we handle everything from pickup to your final sacred stop.
            </p>
          </div>
          <div className="relative">
            {/* Dashed connecting path (desktop) */}
            <div aria-hidden className="absolute inset-x-[13%] top-[34px] hidden border-t-2 border-dashed border-gold/35 dt:block" />
            <Stagger as="div" gap={0.1} className="relative grid gap-6 dt:grid-cols-4 dt:gap-5">
              {BOOK.map((s, i) => (
                <StaggerItem as="div" key={s.title} direction="up">
                  <div className="group relative h-full rounded-2xl border border-navy/10 bg-white/80 p-6 pt-10 text-center shadow-[0_22px_48px_-30px_rgba(26,62,110,0.45)] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50">
                    <span className="absolute -top-[26px] left-1/2 grid h-[52px] w-[52px] -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-gold to-[#b4871a] font-serif text-[20px] font-bold text-navy shadow-[0_14px_30px_-12px_rgba(219,183,37,0.75)] ring-4 ring-white transition-transform duration-300 group-hover:scale-105">
                      {i + 1}
                    </span>
                    <h3 className="mb-2 font-serif text-[16.5px] font-bold text-navy">{s.title}</h3>
                    <p className="text-[13px] font-light leading-relaxed text-navy/70">{s.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* Fleet preview — links to the vehicles page */}
      <FleetPreview bg="navy" />

      {/* Customise your ride */}
      <CustomPackageForm
        title="Customise Your Ride"
        accent="Ride"
        description="Build a private transfer that fits your trip — pickup and drop-off, dates and passengers, all arranged around you."
        image="/images/transportation/transport-hero.webp"
        variant="ride"
      />

      {/* Form — same as home */}
      <FormSection
        eyebrow="Get in touch with us"
        headingBefore="Plan Your Ziarat "
        headingAccent="Journey"
        description="Tell us your preferred cities, dates, and group size — a travel expert replies within 24 hours with a tailored Ziarat plan."
      />

      {/* FAQ */}
      <FaqAccordion items={FAQ} />
    </PageShell>
  );
}
