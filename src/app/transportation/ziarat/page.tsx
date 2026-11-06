import Image from "next/image";
import { Sparkles, MapPinned, Clock, UserCheck, CarFront, Route, Headset, MapPin } from "lucide-react";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { ContactForm } from "@/components/inquiry/ContactForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

const PATH = "/transportation/ziarat/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Ziarat Tours in Makkah & Madinah | Shery Travels",
  description:
    "Experience peaceful Ziarat journeys in Makkah & Madinah with Shery Travels. Clean vehicles, expert guides, and personalized tours for a spiritual experience.",
  ogType: "article",
});

const FEATURES = [
  { Icon: Sparkles, title: "Clean & Comfortable Vehicles", body: "Travel with ease in our modern, air-conditioned cars, SUVs, and vans. We make sure every vehicle is thoroughly cleaned and well-maintained, so you can enjoy a smooth and safe Ziarat experience." },
  { Icon: MapPinned, title: "Guided Visits to Holy Sites", body: "Our experienced guides are here to lead you through each Ziarat site with care and passion. You’ll hear fascinating stories and learn about the history and importance of every sacred place on your spiritual journey." },
  { Icon: Clock, title: "Reliable & Punctual Services", body: "At Shery Travels, you can rely on us for timely pickups, smooth transportation, and well-organized schedules. We respect your time and strive to make sure every visit is stress-free and on time." },
];

const MAKKAH_SITES = ["The Kaaba", "Maqam Ibrahim", "The Black Stone (Al-Hajar Al-Aswad)", "The Well of Zamzam", "Mina", "Arafat", "Muzdalifah", "Gar-e-Hira", "Masjid Al-Jinn", "Jannat-ul-Mualla"];
const MADINAH_SITES = ["Masjid Al Nabawi", "Jannat Al-Baqi", "Quba Mosque", "Uhud Mountain", "Masjid Al-Qiblatain", "The Baab-As-Salaam", "Mosque Al Ghamamah", "Battlefield of the Trench (Khandaq)"];

const WHY = [
  { Icon: UserCheck, title: "Trained Local Guides", body: "Our team of local guides has a deep understanding of each sacred site and its rich history. They will accompany you with genuine respect and insight, making your experience more meaningful and spiritually fulfilling." },
  { Icon: CarFront, title: "Comfortable Transportation", body: "Travel in style with our modern, air-conditioned vehicles carefully selected for your comfort, whether you are in a group or with family. Each vehicle is well-maintained to ensure a smooth and safe journey for everyone." },
  { Icon: Route, title: "Personalized Ziarat Plans", body: "No matter if you’re traveling on your own, with family, or as part of a larger group, our customized itineraries cater to your needs. You’ll have the freedom to explore at your own pace while ensuring you visit all the essential Ziarat sites." },
  { Icon: Headset, title: "24/7 Support Team", body: "Our dedicated support team is here for you 24/7, ready to help with bookings, transportation, or any last-minute changes you might need. Enjoy your journey with peace of mind, focusing on your spiritual experience." },
];

const BOOK = [
  { title: "Choose Your Ride", body: "You can choose from a variety of modern vehicles like sedans, SUVs, vans, and buses. Whether you’re going alone or with family, we’ve got the right choice for every pilgrim." },
  { title: "Book Online or via WhatsApp", body: "Booking is fast and simple! You can reserve your ride online or message us on WhatsApp. Our team will confirm your booking instantly and provide flexible options to fit your schedule." },
  { title: "Instant Confirmation", body: "You’ll get an instant confirmation of your booking along with your driver’s details right after you make your reservation. No waiting or delays – just a smooth experience from beginning to end." },
  { title: "Relax and Travel", body: "Sit back and enjoy your Ziarat journey. Our professional, English-speaking drivers will give you a comfortable and timely ride to all your sacred destinations." },
];

const FAQ = [
  { q: "Do you offer Ziarat tours for both Makkah and Madinah?", a: "Yes, at Shery Travels, we provide full Ziarat tours that include both Makkah and Madinah. You can choose to take individual tours for each city or opt for a combined package that fits your travel plans." },
  { q: "Can I customize my Ziarat itinerary?", a: "Definitely! We offer flexible options that allow you to add or skip places based on your preferences, group size, and the time you have available." },
  { q: "Are the Ziarat locations guided by experts?", a: "Yes, all our tours are led by knowledgeable, English-speaking guides who will share important historical and spiritual insights about each Ziarat site. This way, you’ll understand the significance of each sacred location." },
  { q: "What transport options are available for Ziarat?", a: "We provide a range of comfortable transportation options, including sedans, SUVs, vans, and luxury buses. All of our vehicles are air-conditioned and driven by experienced, licensed drivers to ensure your comfort." },
  { q: "Can I book my Ziarat tour in advance from my home country?", a: "Absolutely! You can easily book your Ziarat tours online or through WhatsApp before you arrive in Saudi Arabia. This makes for a smoother and stress-free experience." },
];

function SiteChips({ sites }: { sites: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {sites.map((s) => (
        <li key={s} className="flex items-center gap-1.5 rounded-full border border-navy/10 bg-white px-3.5 py-1.5 text-[13.5px] font-medium text-navy">
          <MapPin size={14} className="flex-none text-gold" /> {s}
        </li>
      ))}
    </ul>
  );
}

export default function ZiaratPage() {
  return (
    <PageShell active="/transportation/">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Transportation", path: "/transportation/" },
          { name: "Ziarat Tours", path: PATH },
        ])}
      />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-12 dt:pt-16">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="order-2 text-center dt:order-1 dt:text-left">
            <Eyebrow align="center" className="mb-5 dt:justify-start">Ziarat tours</Eyebrow>
            <AccentHeading as="h1" before="Sacred Ziarat Journeys with Ease & " accent="Comfort" className="text-[32px] leading-[1.15] text-navy dt:text-[48px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Join Shery Travels for a meaningful spiritual journey. Our Ziarat tours in Makkah and Madinah focus on your peace, comfort, and reflection. We provide trusted drivers and clean vehicles, along with guided visits to holy sites, ensuring your sacred trip is smooth and worry-free.
            </p>
            <div className="mt-7">
              <InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton>
            </div>
          </div>
          <div className="relative order-1 flex justify-center dt:order-2">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[360px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-[420px]">
              <Image src="/images/ziarat/ziarat-hero.webp" alt="Ziarat tour to holy sites in Makkah and Madinah" fill sizes="(max-width:900px) 300px, 420px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container className="grid gap-5 dt:grid-cols-3 dt:gap-7">
          {FEATURES.map(({ Icon, title, body }) => (
            <div key={title} className="card-hover group rounded-2xl border border-navy/10 bg-white p-7">
              <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border-[1.5px] border-gold bg-ice transition-colors duration-300 group-hover:bg-gold">
                <Icon size={26} className="text-navy" />
              </span>
              <h3 className="mb-2 font-serif text-[19px] font-bold text-navy">{title}</h3>
              <p className="text-[14.5px] font-light leading-relaxed text-navy/75">{body}</p>
            </div>
          ))}
        </Container>
      </Section>

      {/* Makkah sites */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="order-2 dt:order-1">
            <Eyebrow align="left" className="mb-4">In Makkah</Eyebrow>
            <AccentHeading as="h2" before="Explore the Sacred Ziarat of Makkah " accent="Mukarma" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Discover Makkah, a place where faith begins. With Shery Travels, each Ziarat stop helps you connect to stories of devotion, revelation, and sacrifice. Our guided tours cover important sites, allowing you to reflect, pray, and appreciate the essence of Islam.
            </p>
            <div className="mt-6"><SiteChips sites={MAKKAH_SITES} /></div>
          </div>
          <div className="relative order-1 h-[360px] w-full overflow-hidden rounded-2xl bg-lightblue shadow-[0_30px_60px_-26px_rgba(26,62,110,0.45)] dt:order-2 dt:h-[460px]">
            <Image src="/images/ziarat/ziarat-makkah.webp" alt="Sacred Ziarat sites in Makkah" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
          </div>
        </Container>
      </Section>

      {/* Madinah sites */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="relative order-1 h-[360px] w-full overflow-hidden rounded-2xl bg-lightblue shadow-[0_30px_60px_-26px_rgba(26,62,110,0.45)] dt:h-[460px]">
            <Image src="/images/ziarat/ziarat-madinah.webp" alt="Blessed Ziarat sites in Madinah" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="order-2">
            <Eyebrow align="left" className="mb-4">In Madinah</Eyebrow>
            <AccentHeading as="h2" before="Experience the Blessed Ziarat of Madinah " accent="Munawara" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Explore the beautiful and sacred sites of Madinah, known as the city of peace and mercy, home to the Prophet (PBUH). Our Ziarat tours are designed to guide you through places rich with historical and spiritual significance. With the help of our experienced guides, each visit promises to be insightful and unforgettable.
            </p>
            <div className="mt-6"><SiteChips sites={MADINAH_SITES} /></div>
          </div>
        </Container>
      </Section>

      {/* Why choose us — navy band */}
      <Section bg="navy" className="relative overflow-hidden py-14 dt:py-20">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full border border-gold/15" />
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow tone="white" className="mb-4">Why choose us</Eyebrow>
            <AccentHeading as="h2" before="Why Choose Us for Your Sacred Ziarat " accent="Journey" className="text-[27px] leading-tight text-white dt:text-[38px]" />
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-7">
            {WHY.map(({ Icon, title, body }) => (
              <div key={title} className="card-hover flex gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-7">
                <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl border-[1.5px] border-gold/60 text-gold">
                  <Icon size={26} />
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-[19px] font-bold text-white">{title}</h3>
                  <p className="text-[14.5px] font-light leading-relaxed text-white/75">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Book your ride — numbered steps */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow className="mb-4">Book with ease</Eyebrow>
            <AccentHeading as="h2" before="Book Your Ziarat Ride With " accent="Ease" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mt-4 text-[15.5px] font-light leading-relaxed text-navy/75">
              Booking your Ziarat ride is now super easy. Whether you want a private car, SUV, GMC, or a bus, Shery Travels makes the process hassle-free. Just choose your vehicle, confirm your booking online or via WhatsApp, and we’ll handle everything from pickup to your final sacred stop.
            </p>
          </div>
          <div className="grid gap-5 dt:grid-cols-4 dt:gap-6">
            {BOOK.map((s, i) => (
              <div key={s.title} className="card-hover rounded-2xl border border-navy/10 bg-ice p-6">
                <span className="mb-3 inline-grid h-11 w-11 place-items-center rounded-full bg-navy font-serif text-[16px] font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-serif text-[17px] font-bold text-navy">{s.title}</h3>
                <p className="text-[13.5px] font-light leading-relaxed text-navy/75">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FaqAccordion items={FAQ} />

      {/* Inquiry */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="grid items-start gap-10 dt:grid-cols-2 dt:gap-16">
          <div>
            <Eyebrow align="left" className="mb-4">Get in touch</Eyebrow>
            <AccentHeading as="h2" before="Plan your Ziarat " accent="Journey" className="text-[28px] leading-tight text-navy dt:text-[40px]" />
            <p className="mt-5 max-w-[460px] text-[16px] font-light leading-[1.7] text-navy/80">
              Tell us your preferred cities, dates, and group size — a travel expert replies within 24 hours.
            </p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </PageShell>
  );
}
