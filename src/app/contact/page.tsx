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
    <PageShell active="/contact/">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: PATH },
        ])}
      />

      {/* Intro */}
      <Section bg="white" className="pt-12 dt:pt-16">
        <Container className="text-center">
          <Eyebrow className="mb-5">Contact us</Eyebrow>
          <AccentHeading
            as="h1"
            before="Get In "
            accent="Touch"
            className="text-[34px] leading-[1.15] text-navy dt:text-[54px]"
          />
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] font-light leading-[1.7] text-navy/80 dt:text-[18px]">
            For any queries you might have, please contact us.
          </p>
        </Container>
      </Section>

      {/* Contact detail cards */}
      <Section bg="white" className="py-12 dt:py-16">
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
      <Section bg="ice" className="py-14 dt:py-20">
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
