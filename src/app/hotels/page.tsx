import Image from "next/image";
import {
  Star, MapPin, BedDouble, Wallet, ShieldCheck, Footprints, Wind, Utensils,
  Clock, Users, Sparkles, BusFront,
} from "lucide-react";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { HeroEnquiryForm } from "@/components/home/hero/HeroEnquiryForm";
import { HERO_DESCRIPTION } from "@/components/sections/heroCopy";
import { FormSection } from "@/components/home/form/FormSection";
import { CustomPackageForm } from "@/components/inquiry/CustomPackageForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

// TODO(client): replace placeholder hotel images with real photos, and confirm
// the featured hotel names / distances with Shery Travels before launch.
const PATH = "/hotels/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Hotels Near the Haram | Makkah & Madinah | Shery Travels",
  description:
    "Comfortable 3, 4 and 5-star hotels near Masjid al-Haram in Makkah and Al-Masjid an-Nabawi in Madinah — Haram-view rooms, walking distance, and options for every budget with Shery Travels.",
  ogType: "article",
});

const WHY = [
  { Icon: Footprints, title: "Walking Distance to the Haram", body: "Hotels chosen for their closeness to Masjid al-Haram and Al-Masjid an-Nabawi, so prayers are only a short walk away." },
  { Icon: ShieldCheck, title: "Verified & Comfortable", body: "Clean, well-maintained, carefully vetted hotels — so you can rest and focus fully on your worship." },
  { Icon: Wallet, title: "Options for Every Budget", body: "From economical 3-star stays to luxury 5-star Haram-view rooms, we match your comfort level and budget." },
  { Icon: BedDouble, title: "Makkah & Madinah Covered", body: "Accommodation arranged in both holy cities, with family and group rooms available throughout." },
];

const TIERS = [
  {
    stars: 5,
    name: "5-Star Luxury",
    distance: "50–200m from the Haram",
    image: "/images/home/home-hotels-tower.webp",
    body: "The closest, most premium stays — spacious Haram-view rooms, fine dining and full service, steps from the sanctuary.",
    features: ["Haram-view rooms", "Premium dining", "Closest to the Haram"],
  },
  {
    stars: 4,
    name: "4-Star Comfort",
    distance: "200–500m from the Haram",
    image: "/images/home/home-hotel-kiswah.webp",
    body: "A comfortable balance of quality and value — a short, easy walk to prayers with excellent on-site facilities.",
    features: ["Short walk to the Haram", "Great value", "Family rooms"],
  },
  {
    stars: 3,
    name: "3-Star Economy",
    distance: "500m – 1.5km from the Haram",
    image: "/images/home/home-hotel-manar.webp",
    body: "Clean, budget-friendly hotels for pilgrims who want the essentials done well, with a shuttle to the Haram where needed.",
    features: ["Budget-friendly", "Clean & comfortable", "Haram shuttle"],
  },
];

interface Hotel {
  name: string;
  stars: number;
  distance: string;
  image: string;
  tags: string[];
}

const MAKKAH: Hotel[] = [
  { name: "Dar Al Eiman Grand", stars: 5, distance: "200m from Masjid al-Haram", image: "/images/home/home-hotel-grand.webp", tags: ["Haram-view rooms", "Walking distance"] },
  { name: "Al Kiswah Towers", stars: 4, distance: "150m from Masjid al-Haram", image: "/images/home/home-hotel-kiswah.webp", tags: ["Walking distance", "Family rooms"] },
  { name: "Makkah Tower Residences", stars: 5, distance: "Steps from the Haram", image: "/images/home/home-hotels-tower.webp", tags: ["Haram view", "Premium"] },
];

const MADINAH: Hotel[] = [
  { name: "Dar Al Eiman Al Manar", stars: 4, distance: "250m from Al-Masjid an-Nabawi", image: "/images/home/home-hotel-manar.webp", tags: ["Walking distance", "Family rooms"] },
  { name: "Nada Al Salam", stars: 3, distance: "450m from Al-Masjid an-Nabawi", image: "/images/home/home-hotel-nadaalsalam.webp", tags: ["Great value", "Clean & comfortable"] },
];

const AMENITIES = [
  { Icon: Wind, label: "Air-conditioned rooms" },
  { Icon: Utensils, label: "Breakfast & meal options" },
  { Icon: Clock, label: "24/7 reception" },
  { Icon: Users, label: "Family & group rooms" },
  { Icon: BusFront, label: "Haram shuttle (select hotels)" },
  { Icon: Sparkles, label: "Daily housekeeping" },
];

const FAQ = [
  { q: "How close are the hotels to the Haram?", a: "It depends on the tier. 5-star hotels are typically 50–200m from the Haram, 4-star hotels around 200–500m, and 3-star hotels 500m–1.5km, usually with a shuttle. We confirm the exact distance of your hotel before booking." },
  { q: "Can I choose a specific hotel?", a: "Yes. Tell us your preferred city, star rating and budget and we'll recommend suitable hotels. Final availability is confirmed at the time of booking." },
  { q: "Are Haram-view rooms available?", a: "Yes, Haram-view rooms are available in many 4 and 5-star hotels, subject to availability. Let us know if this is a priority and we'll arrange it where possible." },
  { q: "Do the hotels include meals?", a: "Many hotels offer breakfast or half-board options, and some packages include meals. We'll confirm exactly what's included for your chosen hotel." },
  { q: "Can my family or group share rooms?", a: "Absolutely. We arrange double, triple, quad and family rooms so you can stay together comfortably." },
];

function Stars({ n }: { n: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${n} star`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={13} className="fill-gold text-gold" />
      ))}
    </span>
  );
}

function HotelCard({ h }: { h: Hotel }) {
  return (
    <article className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_26px_54px_-30px_rgba(26,62,110,0.4)]">
      <div className="relative h-[200px] w-full flex-none bg-lightblue">
        <Image src={h.image} alt={h.name} fill sizes="(max-width:900px) 100vw, 33vw" className="object-cover" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 shadow-sm">
          <Stars n={h.stars} />
        </span>
      </div>
      <div className="flex-1 p-5">
        <h3 className="font-serif text-[18px] font-bold text-navy">{h.name}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-[13.5px] text-navy/70">
          <MapPin size={15} className="flex-none text-gold" /> {h.distance}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {h.tags.map((t) => (
            <span key={t} className="rounded-full border border-navy/10 bg-ice px-2.5 py-1 text-[12px] font-medium text-navy/75">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function HotelsPage() {
  return (
    <PageShell active="/hotels/" cta={false}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Hotels", path: PATH },
        ])}
      />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-10 pb-8 dt:pt-12 dt:pb-10">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="flex flex-col items-center gap-6 text-center">
          <div className="order-1 max-w-[680px] text-center">
            <AccentHeading as="h1" before="Comfortable Hotels Near the " accent="Haram" className="text-[30px] leading-[1.18] text-navy dt:text-[46px]" />
          </div>
          <div className="order-3 max-w-[680px] text-center">
            <p className="text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">{HERO_DESCRIPTION}</p>
          </div>
          <div className="order-4 w-full"><HeroEnquiryForm /></div>
          <div className="relative order-2 flex justify-center">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden h-[500px] w-[450px] -translate-x-1/2 rounded-t-[225px] rounded-b-[18px] border border-navy/10 dt:block" />
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[360px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-[420px]">
              <Image src="/images/home/home-hotel-grand.webp" alt="Hotel near Masjid al-Haram" fill sizes="(max-width:900px) 300px, 420px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Why our hotels — dark-blue band, gold-framed image + divided feature list */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.12),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -left-24 -bottom-24 hidden h-[360px] w-[360px] rounded-full border border-gold/15 dt:block" />
        <Container className="relative grid items-center gap-12 dt:grid-cols-2 dt:gap-16">
          {/* Image with gold corner frame + floating badge */}
          <div className="relative order-2 mx-auto w-full max-w-[460px] dt:order-1">
            {[
              "left-0 top-0 border-l-2 border-t-2",
              "right-0 top-0 border-r-2 border-t-2",
              "left-0 bottom-0 border-b-2 border-l-2",
              "right-0 bottom-0 border-b-2 border-r-2",
            ].map((c) => (
              <span key={c} aria-hidden className={`pointer-events-none absolute z-20 h-7 w-7 border-gold ${c}`} />
            ))}
            <div className="relative m-2.5 h-[360px] overflow-hidden rounded-2xl bg-lightblue shadow-[0_44px_90px_-30px_rgba(0,0,0,0.6)] dt:h-[480px]">
              <Image src="/images/home/home-hotels-tower.webp" alt="Hotel steps from the Haram" fill sizes="(max-width:900px) 100vw, 44vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(26,62,110,0.45)_100%)]" />
            </div>
            <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-white/10 bg-white px-4 py-2 shadow-[0_22px_48px_-18px_rgba(0,0,0,0.5)] dt:left-5 dt:translate-x-0">
              <Footprints size={16} className="text-gold" />
              <span className="text-[12.5px] font-semibold text-navy">Steps from the Haram</span>
            </div>
          </div>

          {/* Heading + divided feature list */}
          <div className="order-1 dt:order-2">
            <Eyebrow align="center" tone="white" className="mb-4 dt:justify-start">Why stay with us</Eyebrow>
            <AccentHeading as="h2" before="Hotels Chosen for Your " accent="Comfort" className="text-center text-[27px] leading-tight text-white dt:text-left dt:text-[38px]" />
            <div className="mt-6 flex flex-col">
              {WHY.map(({ Icon, title, body }, i) => (
                <div key={title} className={`flex gap-4 py-4 ${i > 0 ? "border-t border-white/10" : ""}`}>
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border-[1.5px] border-gold/50 text-gold">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="mb-1 font-serif text-[16px] font-bold text-white">{title}</h3>
                    <p className="text-[13.5px] font-light leading-relaxed text-white/70">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Tiers */}
      <Section bg="white" className="py-10 dt:py-14">
        <Container>
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Eyebrow className="mb-4">Hotel categories</Eyebrow>
            <AccentHeading as="h2" before="Choose Your Comfort " accent="Level" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mt-4 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Every tier is close to the Haram — the difference is how close, and how much comfort you'd like.
            </p>
          </div>
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto scroll-pl-5 pb-3 pl-5 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dt:mx-0 dt:grid dt:grid-cols-3 dt:gap-7 dt:overflow-visible dt:p-0">
            {TIERS.map((t) => (
              <div key={t.name} className="group relative flex w-[80vw] max-w-[330px] flex-none snap-start flex-col dt:w-auto dt:max-w-none">
                {/* Image — a little wider than the card; its lower edge tucks behind the card body */}
                <div className="relative z-10 mx-[-10px] h-[180px] overflow-hidden rounded-[18px] shadow-[0_28px_54px_-22px_rgba(26,62,110,0.6)] dt:h-[200px]">
                  <Image src={t.image} alt={t.name} fill sizes="(max-width:900px) 100vw, 360px" className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none" />
                  <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(26,62,110,0.3)_100%)]" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 shadow-sm"><Stars n={t.stars} /></span>
                </div>
                {/* Card body — overlaps the image's lower edge */}
                <div className="relative z-20 -mt-9 flex flex-1 flex-col rounded-2xl border border-navy/10 bg-white p-6 pt-7 shadow-[0_24px_50px_-30px_rgba(26,62,110,0.4)]">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="font-serif text-[20px] font-bold text-navy">{t.name}</h3>
                    <span className="flex-none rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-semibold text-navy/70">{t.distance}</span>
                  </div>
                  <p className="text-[13.5px] font-light leading-relaxed text-navy/75">{t.body}</p>
                  <ul className="mt-4 flex flex-col gap-2 border-t border-navy/10 pt-4">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-navy/80">
                        <span className="h-2 w-2 flex-none rounded-full border-2 border-gold" aria-hidden /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Makkah hotels */}
      <Section bg="ice" className="py-10 dt:py-14">
        <Container>
          <div className="mb-10 flex flex-col items-center gap-2 text-center dt:mb-12 dt:flex-row dt:items-end dt:justify-between dt:text-left">
            <div>
              <Eyebrow align="center" className="mb-4 dt:justify-start">In Makkah</Eyebrow>
              <AccentHeading as="h2" before="Hotels Near Masjid " accent="al-Haram" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
            </div>
            <p className="max-w-[420px] text-[14.5px] font-light leading-relaxed text-navy/70">
              Stay steps from the Kaaba, with Haram-view and walking-distance options across every star rating.
            </p>
          </div>
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-pl-5 pb-3 pl-5 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dt:mx-0 dt:grid dt:grid-cols-3 dt:gap-7 dt:overflow-visible dt:p-0">
            {MAKKAH.map((h) => (
              <div key={h.name} className="w-[80vw] max-w-[330px] flex-none snap-start dt:w-auto dt:max-w-none">
                <HotelCard h={h} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Madinah hotels */}
      <Section bg="white" className="py-10 dt:py-14">
        <Container>
          <div className="mb-10 flex flex-col items-center gap-2 text-center dt:mb-12 dt:flex-row dt:items-end dt:justify-between dt:text-left">
            <div>
              <Eyebrow align="center" className="mb-4 dt:justify-start">In Madinah</Eyebrow>
              <AccentHeading as="h2" before="Hotels Near Al-Masjid " accent="an-Nabawi" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
            </div>
            <p className="max-w-[420px] text-[14.5px] font-light leading-relaxed text-navy/70">
              Peaceful, comfortable hotels a short walk from the Prophet&apos;s Mosque, for a restful stay in the city of light.
            </p>
          </div>
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-pl-5 pb-3 pl-5 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dt:mx-0 dt:grid dt:grid-cols-3 dt:gap-7 dt:overflow-visible dt:p-0">
            {MADINAH.map((h) => (
              <div key={h.name} className="w-[80vw] max-w-[330px] flex-none snap-start dt:w-auto dt:max-w-none">
                <HotelCard h={h} />
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-[640px] text-center text-[13.5px] font-light leading-relaxed text-navy/55">
            Hotels shown are representative. Your final hotel is confirmed at booking based on availability, your dates and your budget.
          </p>
        </Container>
      </Section>

      {/* Amenities */}
      <Section bg="lightblue" className="py-10 dt:py-14">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow className="mb-4">What to expect</Eyebrow>
            <AccentHeading as="h2" before="Comfort in Every " accent="Stay" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
          </div>
          <div className="grid grid-cols-2 gap-4 dt:grid-cols-3 dt:gap-5">
            {AMENITIES.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white p-4 dt:p-5">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border-[1.5px] border-gold bg-ice text-navy">
                  <Icon size={20} />
                </span>
                <span className="text-[14px] font-medium text-navy dt:text-[15px]">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CustomPackageForm
        title="Customise Your Hotel Stay"
        accent="Hotel"
        description="Pick the city, dates, star rating and distance from the Haram — we match you to the right residency for your stay."
        image="/images/home/home-hotels-tower.webp"
        variant="hotel"
      />

      {/* Enquiry CTA (homepage design) */}
      <FormSection />

      {/* FAQ */}
      <FaqAccordion
        intro="Answers to common questions about our hotels, distances from the Haram, room types and what's included."
        items={FAQ}
      />
    </PageShell>
  );
}
