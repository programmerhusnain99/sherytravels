import Image from "next/image";
import { Route, ShieldCheck, Headset, Users, HeartHandshake } from "lucide-react";
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
      <Section bg="white" className="pt-12 dt:pt-16">
        <Container className="text-center">
          <Eyebrow className="mb-5">About Shery Travels</Eyebrow>
          <AccentHeading
            as="h1"
            before="Making Pilgrimage Journeys Easy and "
            accent="Comfortable"
            className="mx-auto max-w-[880px] text-[32px] leading-[1.18] text-navy dt:text-[52px]"
          />
        </Container>
      </Section>

      {/* Story + image */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="relative order-2 mx-auto h-[420px] w-[320px] overflow-hidden rounded-t-[160px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:order-1 dt:h-[520px] dt:w-[440px]">
            <Image
              src="/images/about/about-story.webp"
              alt="Pilgrims on their journey with Shery Travels"
              fill
              sizes="(max-width: 900px) 320px, 440px"
              className="object-cover"
            />
          </div>
          <div className="order-1 dt:order-2">
            <Eyebrow align="left" className="mb-4">Who we are</Eyebrow>
            <AccentHeading
              as="h2"
              before="Umrah & Services Planned with "
              accent="Care"
              className="text-[28px] leading-[1.2] text-navy dt:text-[40px]"
            />
            <p className="mt-5 text-[16px] font-light leading-[1.7] text-navy/80 dt:text-[17px]">
              Shery Travels was founded with the idea of providing more than just an ordinary travel
              experience.
            </p>
            <p className="mt-4 text-[16px] font-light leading-[1.7] text-navy/80 dt:text-[17px]">
              We understand that Umrah and Hajj are close to the heart of Muslims. The spiritual
              journey is of utmost importance to our brothers and sisters. Keeping this in mind, we
              wanted to share our expertise in travel matters, along with guidance on planning your
              first Umrah and Hajj, without waiting in long queues.
            </p>
          </div>
        </Container>
      </Section>

      {/* Three pillars */}
      <Section bg="ice" className="py-14 dt:py-20">
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
      <Section bg="navy" className="py-14 dt:py-16">
        <Container className="flex flex-col items-center gap-6 text-center dt:flex-row dt:justify-between dt:text-left">
          <AccentHeading
            as="h2"
            before="Plan Your First Umrah & Hajj, "
            accent="Worry-Free"
            className="max-w-[720px] text-[26px] leading-[1.25] text-white dt:text-[36px]"
          />
          <div className="flex flex-none gap-3">
            <InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton>
            <Button href="/umrah/" variant="outline" size="lg" className="hidden border-white/30 text-white dt:inline-flex">
              Explore Umrah
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why Shery Travels */}
      <Section bg="white" className="py-14 dt:py-20">
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
      <Section bg="ice" className="py-14 dt:py-20">
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
