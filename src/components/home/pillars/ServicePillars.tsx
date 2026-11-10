import Link from "next/link";
import { Landmark, HeartHandshake, BusFront, ArrowRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

/** Three service pillars from the live site's hero. */
const PILLARS: { icon: LucideIcon; title: string; body: string; href: string }[] = [
  {
    icon: Landmark,
    title: "Umrah Made Easy",
    body: "Let’s uncover your journey of peace with our Umrah services. We handle visa processing efficiently and provide comfortable accommodations near the Haram.",
    href: "/umrah/",
  },
  {
    icon: HeartHandshake,
    title: "Your Trusted Hajj Partner",
    body: "Join us for a memorable Hajj experience. We provide expert guidance, quality accommodations, and reliable transportation to make your pilgrimage unforgettable.",
    href: "/hajj/",
  },
  {
    icon: BusFront,
    title: "Reliable Travel Solutions",
    body: "Travel comfortably with our modern, air-conditioned vehicles and professional drivers. We offer flexible scheduling to make sure you arrive on time everywhere.",
    href: "/transportation/",
  },
];

/**
 * Service pillars rendered as editorial white cards that OVERLAP the hero above
 * and the section below (they straddle the boundary). Not a section of its own —
 * a floating overlapping band pulled into both neighbours.
 */
export function ServicePillars() {
  return (
    <div className="relative z-20 -mt-28 -mb-16 dt:-mt-40 dt:-mb-24">
      <Container>
        <div className="grid gap-4 dt:grid-cols-3 dt:gap-5">
          {PILLARS.map(({ icon: Icon, title, body, href }, i) => (
            <div
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white p-5 shadow-[0_34px_66px_-34px_rgba(26,62,110,0.45)] dt:p-6"
            >
              {/* editorial index number */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-3 top-1 font-serif text-[42px] font-bold leading-none text-navy/[0.06]"
              >
                0{i + 1}
              </span>

              <span className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-gold/[0.14]">
                <Icon size={18} className="text-gold" aria-hidden />
              </span>
              <h3 className="mb-1.5 font-serif text-[16.5px] font-bold text-navy dt:text-[17px]">
                {title}
              </h3>
              <span aria-hidden className="mb-2.5 block h-[2px] w-6 rounded-full bg-gold" />
              <p className="text-[13px] font-light leading-relaxed text-navy/70">{body}</p>

              <Link
                href={href}
                className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-[11px] font-bold uppercase tracking-[0.1em] text-gold transition-colors hover:text-navy"
              >
                Explore
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
