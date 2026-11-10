import { Landmark, HeartHandshake, BusFront, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { HeroArch } from "./HeroArch";
import { HeroEnquiryForm } from "./HeroEnquiryForm";

/** Three service pillars from the live site's hero. */
const PILLARS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Landmark,
    title: "Umrah Made Easy",
    body: "Let’s uncover your journey of peace with our Umrah services. We handle visa processing efficiently and provide comfortable accommodations near the Haram.",
  },
  {
    icon: HeartHandshake,
    title: "Your Trusted Hajj Partner",
    body: "Join us for a memorable Hajj experience. We provide expert guidance, quality accommodations, and reliable transportation to make your pilgrimage unforgettable.",
  },
  {
    icon: BusFront,
    title: "Reliable Travel Solutions",
    body: "Travel comfortably with our modern, air-conditioned vehicles and professional drivers. We offer flexible scheduling to make sure you arrive on time everywhere.",
  },
];

/**
 * Homepage hero. Server-rendered content (heading, copy = SEO) with two client
 * islands: the arch cross-fade and the enquiry form.
 * Mobile reorders: eyebrow → H1 → image → paragraph. Desktop: paragraph above image.
 */
export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <Container className="relative pb-16 pt-10 text-center dt:pb-20 dt:pt-16">
          {/* Decorative arch outline behind */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-10 hidden h-[560px] w-[1100px] -translate-x-1/2 rounded-t-[550px] border border-b-0 border-navy/10 dt:block"
          />

          <div className="relative flex flex-col items-center">
            <Eyebrow className="mb-5">Start your pilgrimage with confidence</Eyebrow>

            <AccentHeading
              as="h1"
              before="Embrace Your Spirit: Step Boldly onto Your Sacred "
              accent="Journey"
              className="order-2 mx-auto max-w-[900px] text-[31px] leading-[1.2] text-navy dt:text-[50px] dt:leading-[1.16]"
            />

            <p className="order-4 mx-auto mt-5 max-w-[640px] text-[16px] font-light leading-[1.65] text-navy/80 dt:order-3 dt:text-[17px]">
              Join us at Shery Travels for a pilgrimage that uplifts your spirit. Experience the true
              spiritual calling for Umrah and Hajj, supported by smooth travel and a trusted partner
              by your side whom you can truly rely on.
            </p>

            <div className="order-3 mt-8 dt:order-4">
              <HeroArch />
            </div>
          </div>
        </Container>
      </section>

      {/* Enquiry band: card overlaps the hero above */}
      <section className="bg-ice pb-12 dt:pb-16">
        <Container>
          <div className="-mt-12 dt:-mt-16">
            <HeroEnquiryForm />
          </div>

          {/* Three service pillars (from the live site) */}
          <div className="mt-10 grid gap-5 dt:mt-14 dt:grid-cols-3 dt:gap-6">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="card-hover rounded-2xl border border-navy/10 bg-white p-6 text-center dt:p-7 dt:text-left"
              >
                <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-gold bg-ice dt:mx-0">
                  <Icon size={22} className="text-navy" aria-hidden />
                </span>
                <h3 className="mb-2 font-serif text-[19px] font-bold text-navy dt:text-[20px]">
                  {title}
                </h3>
                <p className="text-[14.5px] font-light leading-relaxed text-navy/75">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
