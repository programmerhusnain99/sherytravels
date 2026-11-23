import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { ContactForm } from "@/components/inquiry/ContactForm";
import { PHONES, CONTACT_EMAIL } from "@/data/nav";
import { SITE } from "@/lib/site";

const PATH = "/contact/";
const ADDRESS = `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`;
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export const metadata = pageMetadata({
  path: PATH,
  title: "Contact Us - Shery Travels",
  description:
    "Contact our US or Saudi Arabia office to experience a seamless Umrah or Hajj journey with our custom packages and to secure your slots today!",
  ogType: "article",
});

export default function ContactPage() {
  return (
    <PageShell active="/contact/" cta={false}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: PATH },
        ])}
      />

      {/* Intro */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-10 pb-12 dt:pt-12 dt:pb-16">
        <Container className="flex flex-col items-center text-center">
          <AccentHeading
            as="h1"
            before="Get In "
            accent="Touch"
            className="text-[30px] leading-[1.16] text-navy dt:text-[44px]"
          />
          <div className="relative mt-6 flex justify-center dt:mt-7">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[330px] w-[290px] overflow-hidden rounded-t-[145px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[420px] dt:w-[380px] dt:rounded-t-[190px]">
              <Image src="/images/home/home-hero-madinah.webp" alt="Contact Shery Travels" fill sizes="(max-width:900px) 290px, 380px" priority className="object-cover" />
            </div>
          </div>
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] font-light leading-[1.7] text-navy/80 dt:text-[17px]">
            For any queries you might have, please contact us.
          </p>
        </Container>
      </Section>

      {/* Contact detail cards */}
      <Section bg="lightblue" className="py-10 dt:py-12">
        <Container className="grid gap-5 dt:grid-cols-3 dt:gap-7">
          {/* Address */}
          <div className="rounded-2xl border border-navy/10 bg-ice p-7">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gold/15">
              <MapPin size={24} className="text-gold" />
            </span>
            <h3 className="mb-2 font-serif text-[18px] font-bold text-navy">Address</h3>
            <p className="text-[15px] leading-relaxed text-navy/75">
              {SITE.address.street}
              <br />
              {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
            </p>
          </div>

          {/* Call / WhatsApp */}
          <div className="rounded-2xl border border-navy/10 bg-ice p-7">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gold/15">
              <MessageCircle size={24} className="text-gold" />
            </span>
            <h3 className="mb-2 font-serif text-[18px] font-bold text-navy">Call / WhatsApp</h3>
            <div className="flex flex-col gap-1.5">
              {PHONES.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2 text-[15px] text-navy/80 hover:text-navy">
                  <Phone size={15} className="flex-none text-gold" />
                  <span className="text-[10px] font-bold tracking-[0.12em] text-gold">{p.country}</span>
                  {p.display}
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-navy/10 bg-ice p-7">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gold/15">
              <Mail size={24} className="text-gold" />
            </span>
            <h3 className="mb-2 font-serif text-[18px] font-bold text-navy">Email</h3>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[15px] text-navy/80 hover:text-navy">
              {CONTACT_EMAIL}
            </a>
          </div>
        </Container>
      </Section>

      {/* Map + form */}
      <Section bg="ice" className="py-10 dt:py-14">
        <Container className="grid items-stretch gap-10 dt:grid-cols-2 dt:gap-14">
          <div>
            <Eyebrow align="left" className="mb-4">Get in touch with us</Eyebrow>
            <AccentHeading
              as="h2"
              before="Send us an "
              accent="Inquiry"
              className="mb-6 text-[28px] leading-tight text-navy dt:text-[40px]"
            />
            <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-[0_20px_50px_-24px_rgba(26,62,110,0.4)]">
              <iframe
                title="Shery Travels office location"
                src={MAP_SRC}
                className="h-[320px] w-full border-0 dt:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </PageShell>
  );
}
