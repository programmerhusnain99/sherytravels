import { Landmark, HeartHandshake, BusFront, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/** Three service pillars from the live site's hero (now their own section). */
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
    <Section bg="white" className="border-b border-navy/[0.07] py-14 dt:py-[70px]">
      <Container>
        <div className="grid gap-y-12 dt:grid-cols-3 dt:gap-0">
          {PILLARS.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className={`group flex flex-col items-center px-2 text-center dt:px-12 ${
                i > 0 ? "dt:border-l dt:border-navy/10" : ""
              }`}
            >
              <span className="mb-6 inline-grid h-[70px] w-[70px] place-items-center rounded-full bg-ice ring-1 ring-navy/10 transition-colors duration-300 group-hover:ring-gold/50">
                <Icon size={30} className="text-gold" aria-hidden />
              </span>
              <h3 className="mb-1.5 font-serif text-[22px] font-bold text-navy">{title}</h3>
              <span aria-hidden className="mb-4 h-[2px] w-9 rounded-full bg-gold/70" />
              <p className="mx-auto max-w-[330px] text-[14.5px] font-light leading-relaxed text-navy/70">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
