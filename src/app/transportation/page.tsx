import Image from "next/image";
import {
  Check,
  Users,
  Briefcase,
  MapPin,
  Clock,
  ShieldCheck,
  ReceiptText,
  ArrowRight,
} from "lucide-react";
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
import { FaqAccordion } from "@/components/sections/FaqAccordion";

const PATH = "/transportation/";
const FLEETS = "/transportation/fleets/";
const ZIARAT = "/transportation/ziarat/";

export const metadata = pageMetadata({
  path: PATH,
  title: "USA Transportation Services at Shery Travels",
  description:
    "Discover stress-free travel between Jeddah, Makkah, and Madinah with Shery Travels. Experience comfortable transportation designed for your pilgrimage right from the USA. Book with us today!",
  ogType: "article",
});

const FLEET = [
  { name: "Sedan / Camry / Ford Taurus", seats: "4 pax", bags: "2 – 4 bags", src: "/images/transportation/fleet-sedan.webp" },
  { name: "Hyundai H1 / Toyota Hiace", seats: "7 – 10 pax", bags: "Up to 10 bags", src: "/images/transportation/fleet-h1.webp" },
  { name: "GMC Yukon / Chevy Suburban", seats: "7 pax", bags: "7 bags", src: "/images/transportation/fleet-yukon.webp" },
  { name: "Minibus / Coaster", seats: "15 – 16 pax", bags: "20 – 25 bags", src: "/images/transportation/fleet-coaster.webp" },
  { name: "Large Bus", seats: "Up to 50 pax", bags: "Up to 50 bags", src: "/images/transportation/fleet-bus.webp" },
];

const HOW = [
  { Icon: MapPin, title: "Point-to-Point Transfers", body: "We ensure smooth connections for pilgrims traveling between airports, hotels, and sacred sites. Our services also include Ziyarat transfers in Mecca, Medina, and Jeddah with both Umrah taxi services and buses." },
  { Icon: Clock, title: "24/7 Flexible Travel", body: "Travel on your schedule – day or night. One-way or round-trip? The choice is yours. We recommend booking at least 2 hours in advance to ensure availability." },
  { Icon: ShieldCheck, title: "Licensed & Courteous Drivers", body: "Our drivers are experienced, multilingual, and familiar with all the Umrah and Hajj routes. Expect timely service, professionalism, and a calm, safe journey." },
  { Icon: ReceiptText, title: "Transparent Fare Structure", body: "You will know the cost before you start your journey. We offer transparent pricing for key routes and Umrah bus sharing options, providing economical travel options." },
];

const BOOK = [
  { title: "Choose Your Ride", body: "Pick your route, vehicle type, and the date for your transfer – whether it’s an Umrah bus or a private taxi." },
  { title: "Book Online or via WhatsApp", body: "Fill out our booking form online or WhatsApp us. Our team is here to help you with instant support." },
  { title: "Instant Confirmation", body: "Get prompt confirmation with all the details about your ride. This includes fare, driver info, and your timings." },
  { title: "Relax and Travel", body: "Our driver will be there on time for you. All you have to do is sit back, enjoy the journey, and focus on your spiritual goals." },
];

const FAQ = [
  { q: "How much is the Makkah to Madinah taxi fare?", a: "It varies depending on vehicle type and time, but we provide transparent pricing upfront when you book." },
  { q: "Can I book a taxi from Jeddah to Makkah late at night?", a: "Yes! Our Umrah taxi service operates 24/7 to meet your travel needs." },
  { q: "Do you provide shared options for Jeddah to Madinah bus services?", a: "Yes, shared and private Umrah bus options are available based on your preference and budget." },
  { q: "How do I pay for my trip?", a: "We accept secure online payments at the time of booking for a stress-free experience." },
  { q: "Is the taxi service in Madinah available during peak Umrah season?", a: "Absolutely. We increase availability during busy seasons to accommodate all travelers." },
];

export default function TransportationPage() {
  return (
    <PageShell active="/transportation/">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Transportation", path: PATH },
        ])}
      />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-12 dt:pt-16">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="order-2 text-center dt:order-1 dt:text-left">
            <Eyebrow align="center" className="mb-5 dt:justify-start">Transportation</Eyebrow>
            <AccentHeading
              as="h1"
              before="Umrah Transportation Services for Smooth Travel Across the "
              accent="Holy Cities"
              className="text-[30px] leading-[1.18] text-navy dt:text-[46px]"
            />
            <div className="mt-7 flex flex-wrap justify-center gap-3 dt:justify-start">
              <InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton>
              <Button href={FLEETS} variant="outline" size="lg">Explore Fleet</Button>
              <Button href={ZIARAT} variant="ghost" size="lg" className="text-navy underline underline-offset-4">Visit Ziarat</Button>
            </div>
          </div>
          <div className="relative order-1 flex justify-center dt:order-2">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[320px] w-[320px] overflow-hidden rounded-3xl bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[440px] dt:w-full">
              <Image src="/images/transportation/transport-hero.webp" alt="Air-conditioned vehicle for Umrah transfers" fill sizes="(max-width:900px) 320px, 45vw" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Reliable Mecca intro */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="mx-auto max-w-[900px] text-center">
          <Eyebrow className="mb-4">Reliable transfers</Eyebrow>
          <AccentHeading as="h2" before="Reliable Mecca Transportation for Umrah " accent="Pilgrims" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
          <p className="mt-5 text-[15.5px] font-light leading-[1.75] text-navy/80 dt:text-[16.5px]">
            Traveling to Mecca for Umrah is a journey that can truly change your life. At Shery Travels, we understand how important this experience is, which is why we offer reliable Mecca transportation designed to serve pilgrims from every walk of life. Whether you prefer the convenience of an umrah taxi service, the affordability of an umrah bus, or the shared experience of umrah by bus, we ensure every option meets your needs. We provide smooth transfers from Jeddah Airport to your hotel or directly to Masjid al-Haram. Our modern, air-conditioned vehicles are driven by skilled professionals who respect the significance of your journey. Plus, with our round-the-clock service, we’re here to make your travel as easy and stress-free as possible.
          </p>
          <ul className="mx-auto mt-7 flex max-w-[760px] flex-col flex-wrap justify-center gap-3 dt:flex-row dt:gap-4">
            {["24/7 reliable Mecca transportation", "Options for Umrah bus or taxi", "Smooth transfers to Masjid al-Haram"].map((b) => (
              <li key={b} className="flex items-center gap-2 rounded-full border border-navy/10 bg-ice px-4 py-2 text-[14px] font-medium text-navy">
                <Check size={16} className="flex-none text-gold" /> {b}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Madinah */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="relative order-2 mx-auto h-[360px] w-full overflow-hidden rounded-2xl bg-lightblue shadow-[0_30px_60px_-26px_rgba(26,62,110,0.45)] dt:order-1 dt:h-[420px]">
            <Image src="/images/transportation/transport-madinah.webp" alt="Transfers near Masjid al-Nabawi in Madinah" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="order-1 dt:order-2">
            <Eyebrow align="left" className="mb-4">In Madinah</Eyebrow>
            <AccentHeading as="h2" before="Madinah Umrah Services with Easy Bus " accent="Travel" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              When you’re in Madinah, our Umrah services are all about making your journey smooth and enjoyable. We offer convenient airport pickups and comfortable hotel transfers just a short walk from Masjid al-Nabawi. If you’re looking for a friendly and cost-effective way to travel, join us for Umrah by bus with other pilgrims. You can trust that every ride will be timely and safe, allowing you to focus on your prayers and visits while we take care of the transportation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Fleet */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow className="mb-4">Our fleet</Eyebrow>
            <AccentHeading as="h2" before="Travel in Comfort: Choose Your " accent="Ride" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mt-4 text-[15.5px] font-light leading-relaxed text-navy/75">
              Shery Travels offers a diverse, well-maintained fleet to suit group or individual needs.
            </p>
          </div>
          <div className="grid gap-5 dt:grid-cols-3 dt:gap-6">
            {FLEET.map((v) => (
              <div key={v.name} className="card-hover overflow-hidden rounded-2xl border border-navy/10 bg-white">
                <div className="relative h-[180px] w-full bg-lightblue">
                  <Image src={v.src} alt={v.name} fill sizes="(max-width:900px) 100vw, 30vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="mb-3 font-serif text-[18px] font-bold text-navy">{v.name}</h3>
                  <div className="flex flex-wrap gap-4 text-[13.5px] text-navy/75">
                    <span className="flex items-center gap-1.5"><Users size={16} className="text-gold" /> {v.seats}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-gold" /> {v.bags}</span>
                  </div>
                </div>
              </div>
            ))}
            <Button href={FLEETS} variant="outline" size="lg" className="flex h-full min-h-[200px] flex-col items-center justify-center rounded-2xl text-center">
              <span>Explore full fleet</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Ziarat — navy band */}
      <Section bg="navy" className="relative overflow-hidden py-14 dt:py-20">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full border border-gold/15" />
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div>
            <Eyebrow align="left" tone="white" className="mb-4">Ziarat journeys</Eyebrow>
            <AccentHeading as="h2" before="Sacred Ziarat Journeys Made " accent="Simple" className="text-[26px] leading-tight text-white dt:text-[36px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-white/80 dt:text-[16.5px]">
              At Shery Travels, we’re dedicated to providing you with trustworthy and convenient Umrah services for your Ziarat journeys in Makkah and Madinah. Our well-maintained vehicles are driven by skilled chauffeurs who prioritize your safety and comfort.
            </p>
            <p className="mt-4 text-[15.5px] font-light leading-[1.7] text-white/80 dt:text-[16.5px]">
              Whether you’re en route to the holy sites in Makkah or exploring the rich history of Madinah, our Mecca transportation and Madinah routes are carefully designed to ensure a smooth and enjoyable travel experience. We aim to enhance your spiritual journey, allowing you to focus on your personal reflection and connection to these sacred places.
            </p>
            <Button href={ZIARAT} variant="gold" size="lg" className="mt-7 rounded-lg">
              Visit Ziarat <ArrowRight size={18} />
            </Button>
          </div>
          <div className="relative mx-auto h-[360px] w-full overflow-hidden rounded-2xl bg-white/10 dt:h-[420px]">
            <Image src="/images/transportation/transport-ziarat.webp" alt="Ziarat sites in Makkah and Madinah" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow className="mb-4">How it works</Eyebrow>
            <AccentHeading as="h2" before="How Our Transportation " accent="Works" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-7">
            {HOW.map(({ Icon, title, body }) => (
              <div key={title} className="card-hover group flex gap-5 rounded-2xl border border-navy/10 bg-ice p-7">
                <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl border-[1.5px] border-gold bg-white transition-colors duration-300 group-hover:bg-gold">
                  <Icon size={26} className="text-navy" />
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-[19px] font-bold text-navy">{title}</h3>
                  <p className="text-[14.5px] font-light leading-relaxed text-navy/75">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Effortless planning */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container className="mx-auto max-w-[900px] text-center">
          <Eyebrow className="mb-4">Plan your trip</Eyebrow>
          <AccentHeading as="h2" before="Effortless Travel Planning: Your Trip, Your " accent="Way" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
          <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
            Planning your Umrah by bus or car has never been easier! With our simple transportation services, you can arrange all your travel needs with just a few clicks. We understand how important this spiritual journey is for you, so we offer easy booking options customized to your requirements. Simply fill out the form, and our team will follow up with confirmation and any extra details you may need. Enjoy your pilgrimage by focusing on your prayers and reflections while we handle all your transportation arrangements, from airport pickups to transfers between holy sites.
          </p>
          <ul className="mx-auto mt-7 flex flex-col flex-wrap justify-center gap-3 dt:flex-row dt:gap-4">
            {["Effortless Booking", "Customized Services", "24/7 Team Support"].map((b) => (
              <li key={b} className="flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-[14px] font-medium text-navy">
                <Check size={16} className="flex-none text-gold" /> {b}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Book your ride — numbered steps */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow className="mb-4">Book your ride with ease</Eyebrow>
            <AccentHeading as="h2" before="Book Your Ride With " accent="Ease" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mt-4 text-[15.5px] font-light leading-relaxed text-navy/75">
              Since 2007, thousands of pilgrims have trusted us for safe and reliable Umrah services across the holy cities. Booking your trip is quite simple. Here’s how you can do it:
            </p>
          </div>
          <div className="grid gap-5 dt:grid-cols-4 dt:gap-6">
            {BOOK.map((s, i) => (
              <div key={s.title} className="card-hover relative overflow-hidden rounded-2xl border border-navy/10 bg-ice p-6">
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
      <FaqAccordion
        intro="Find answers to common questions about our Umrah services, required documents, customized options, or support during your pilgrimage."
        items={FAQ}
      />

      {/* Inquiry */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="grid items-start gap-10 dt:grid-cols-2 dt:gap-16">
          <div>
            <Eyebrow align="left" className="mb-4">Get in touch with us</Eyebrow>
            <AccentHeading as="h2" before="Get in Touch with " accent="Us" className="text-[28px] leading-tight text-navy dt:text-[40px]" />
            <p className="mt-5 max-w-[460px] text-[16px] font-light leading-[1.7] text-navy/80">
              Choose your ride, book online or via WhatsApp, and get instant confirmation — a travel expert replies within 24 hours.
            </p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </PageShell>
  );
}
