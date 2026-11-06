import { Check } from "lucide-react";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { CONTACT_EMAIL } from "@/data/nav";

const PATH = "/privacy-policy/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Shery Travels’ Privacy Policy",
  description:
    "Learn about how Shery Travels respects your privacy. Explore our data collection, usage, sharing, and protection practices for travel services.",
  ogType: "article",
});

interface Sub {
  title: string;
  items: string[];
}
interface Sec {
  h: string;
  intro?: string;
  paragraphs?: string[];
  list?: string[];
  subs?: Sub[];
}

const SECTIONS: Sec[] = [
  {
    h: "1. Information We Collect",
    subs: [
      { title: "Personal Information", items: ["Full name", "Email address", "Phone number", "Passport information", "Mailing address", "Visa details", "Payment and billing information"] },
      { title: "Non-Personal Information", items: ["Browser type", "IP address", "Device information", "Pages visited and browsing behavior on our website"] },
    ],
  },
  {
    h: "2. Our Use of Your Information",
    intro: "We use the information we collect to:",
    list: [
      "Process Hajj and Umrah bookings as well as other travel-related services",
      "Issue confirmations, invoices, and other documents",
      "Follow Saudi Arabia’s visa requirements and other government policies",
      "Respond to customer inquiries and requests for support",
      "Send updates, promotional offers, and other service alerts",
      "Improve the website’s experience and update content to users’ preferences",
    ],
  },
  {
    h: "3. Our Sharing of Your Information",
    intro: "We may share your information in the following ways:",
    list: [
      "We may share your information with third-party providers (e.g., visa facilitators, airline partners, hotel providers) that are necessary to fulfill your travel bookings",
      "We may share your information with government authorities, as permitted by law or for visa processing",
      "We may share your information with payment processors to process secure transactions",
      "We may share your information with trusted marketing services, only upon your consent, for promotional updates",
      "We will never sell, rent, or trade your personally identifiable information to a third party.",
    ],
  },
  {
    h: "4. Cookies and Tracking Technologies",
    paragraphs: [
      "We use cookies and tracking technologies to enhance your browsing experience. Cookies allow us to understand site traffic, remember a user’s preferences, and show you relevant content.",
      "Cookies can be managed within your browser, but they can impact some website functions.",
    ],
  },
  {
    h: "5. Data Safety",
    paragraphs: [
      "We use measures that have industry standards to protect your information. Security measures include encryption, secure servers, and access controls.",
      "While we do our best to protect your information by utilizing industry best practices, no method of transferring data over the Internet can be 100% perfect. We encourage users to do their part as well in helping to protect their information (i.e., by not sharing overly sensitive information, using strong passwords, etc.).",
    ],
  },
  {
    h: "6. Your Rights",
    intro: "You have the following rights:",
    list: [
      "Access and review your data",
      "Request that any incorrect information be corrected",
      "Withdraw consent or request deletion of your data (where applicable by law)",
      "Opt out of receiving marketing emails at any time by clicking “unsubscribe” in our emails",
    ],
  },
  { h: "7. Data Retention", paragraphs: ["We only retain your personal information for so long as we need it for the uses set out above or as required by law."] },
  { h: "8. Children’s Privacy", paragraphs: ["Shery Travels does not knowingly collect any personal information from children under the age of 13. If we learn that we have collected personal information from a child under 13, we will make commercially reasonable attempts to delete that information."] },
  { h: "9. International Users", paragraphs: ["Suppose you use our website from a location outside the United States. In that case, your information may be transferred to, stored, and processed in the United States as well as other countries where our servers or third-party service providers are located."] },
  { h: "10. Changes to This Privacy Policy", paragraphs: ["We reserve the right to update this Privacy Policy from time to time. When we do, we will revise the “Effective Date” at the top of the page. We encourage you to review this page periodically to stay informed about how we protect your information."] },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-col gap-2.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-navy/80">
          <Check size={17} className="mt-1 flex-none text-gold" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <PageShell active="/privacy-policy/">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: PATH },
        ])}
      />

      {/* Header */}
      <Section bg="ice" className="py-12 dt:py-16">
        <Container className="mx-auto max-w-[820px] text-center">
          <Eyebrow className="mb-4">Legal</Eyebrow>
          <AccentHeading as="h1" before="Privacy " accent="Policy" className="text-[34px] leading-tight text-navy dt:text-[46px]" />
        </Container>
      </Section>

      {/* Body */}
      <Section bg="white" className="py-12 dt:py-16">
        <Container className="mx-auto max-w-[820px]">
          <p className="text-[15.5px] leading-[1.75] text-navy/80">
            Shery Travels holds your privacy with utmost respect. This privacy policy is meant to inform you of the collection, usage, sharing, and protection of your personal information by us while using the website and services with respect to Hajj, Umrah, and other travel offerings.
          </p>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-navy/80">
            By using this website and booking services on it, you agree to the practices described in this Privacy Policy.
          </p>

          {SECTIONS.map((s) => (
            <section key={s.h} className="mt-10">
              <h2 className="font-serif text-[22px] font-bold text-navy dt:text-[24px]">{s.h}</h2>
              {s.intro && <p className="mt-3 text-[15.5px] leading-[1.75] text-navy/80">{s.intro}</p>}
              {s.paragraphs?.map((p, i) => (
                <p key={i} className="mt-3 text-[15.5px] leading-[1.75] text-navy/80">{p}</p>
              ))}
              {s.list && <Bullets items={s.list} />}
              {s.subs?.map((sub) => (
                <div key={sub.title} className="mt-4">
                  <h3 className="font-serif text-[17px] font-bold text-navy">{sub.title}</h3>
                  <Bullets items={sub.items} />
                </div>
              ))}
            </section>
          ))}

          {/* 11. Contact Us */}
          <section className="mt-10">
            <h2 className="font-serif text-[22px] font-bold text-navy dt:text-[24px]">11. Contact Us</h2>
            <p className="mt-3 text-[15.5px] leading-[1.75] text-navy/80">
              If you have any questions or concerns regarding this Privacy Policy or your data, please contact:
            </p>
            <div className="mt-4 rounded-2xl border border-navy/10 bg-ice p-6 text-[15px] leading-relaxed text-navy/80">
              <p className="font-serif text-[16px] font-bold text-navy">Shery Travels</p>
              <p className="mt-2">
                Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy underline underline-offset-2 hover:text-gold">{CONTACT_EMAIL}</a>
              </p>
              <p>
                Phone: <a href="tel:+16674391263" className="text-navy underline underline-offset-2 hover:text-gold">+1 667-439-1263</a>
              </p>
              <p>Address: 419 East Cherry Hill Road Reisterstown MD, 21136, USA</p>
            </div>
          </section>
        </Container>
      </Section>
    </PageShell>
  );
}
