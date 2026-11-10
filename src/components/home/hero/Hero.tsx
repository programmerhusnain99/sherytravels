import { Landmark, HeartHandshake, BusFront, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { HeroArch } from "./HeroArch";

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
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_58%,#f2fdff_100%)]">
      <Container className="relative pb-28 pt-10 text-center dt:pb-40 dt:pt-16">
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

          <div className="order-3 mt-8">
            <HeroArch />
          </div>

          <p className="order-4 mx-auto mt-7 max-w-[640px] text-[16px] font-light leading-[1.65] text-navy/80 dt:text-[17px]">
            Join us at Shery Travels for a pilgrimage that uplifts your spirit. Experience the true
            spiritual calling for Umrah and Hajj, supported by smooth travel and a trusted partner
            by your side whom you can truly rely on.
          </p>
        </div>
      </Container>

      {/* Service pillars — elevated cards overlapping the hero above */}
      <Container className="relative z-10 -mt-20 pb-14 dt:-mt-32 dt:pb-20">
        <div className="grid gap-5 dt:grid-cols-3 dt:gap-7">
          {PILLARS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="card-hover group relative overflow-hidden rounded-[22px] border border-navy/10 bg-white p-7 text-center shadow-[0_34px_70px_-30px_rgba(26,62,110,0.45)] dt:p-8 dt:text-left"
              >
                {/* gold top accent */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold/0 via-gold to-gold/0"
                />
                {/* soft corner glow */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 blur-xl transition-opacity duration-300 group-hover:opacity-80"
                />
                <span className="relative mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold shadow-[0_12px_26px_-12px_rgba(26,62,110,0.7)] transition-transform duration-300 group-hover:-translate-y-0.5 dt:mx-0">
                  <Icon size={26} aria-hidden />
                </span>
                <h3 className="relative mb-2.5 font-serif text-[20px] font-bold text-navy dt:text-[21px]">
                  {title}
                </h3>
                <p className="relative text-[14.5px] font-light leading-relaxed text-navy/75">
                  {body}
                </p>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
