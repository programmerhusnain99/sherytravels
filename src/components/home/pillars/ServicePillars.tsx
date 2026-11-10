import { Landmark, HeartHandshake, BusFront, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/** Three service pillars from the live site's hero (their own section). */
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

export function ServicePillars() {
  return (
    <Section bg="ice" className="relative overflow-hidden py-14 dt:py-20">
      {/* Decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-28 hidden h-[360px] w-[360px] rounded-full border border-gold/15 dt:block"
      />

      <Container className="relative">
        <div className="grid gap-5 dt:grid-cols-3 dt:gap-7">
          {PILLARS.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="card-hover group relative overflow-hidden rounded-[22px] bg-[linear-gradient(150deg,#1a3e6e_0%,#15335c_58%,#102748_100%)] p-7 text-white shadow-[0_34px_70px_-30px_rgba(26,62,110,0.6)] dt:p-8"
            >
              {/* gold top accent */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold/0 via-gold to-gold/0"
              />
              {/* soft corner glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gold/15 blur-2xl transition-opacity duration-300 group-hover:opacity-90"
              />
              {/* faint index number */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-3 font-serif text-[46px] font-bold leading-none text-white/[0.06]"
              >
                0{i + 1}
              </span>

              <span className="relative mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-gold ring-1 ring-gold/30 transition-transform duration-300 group-hover:-translate-y-0.5">
                <Icon size={26} aria-hidden />
              </span>
              <h3 className="relative mb-2.5 font-serif text-[20px] font-bold text-white dt:text-[21px]">
                {title}
              </h3>
              <p className="relative text-[14.5px] font-light leading-relaxed text-white/75">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
