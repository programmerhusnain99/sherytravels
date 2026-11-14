"use client";

import { motion, useReducedMotion } from "motion/react";
import { Award, Users, Headset, MapPin, ShieldCheck, Lock, BadgeCheck, type LucideIcon } from "lucide-react";

/**
 * Infinite marquee of trust points (drawn from the site's genuine selling
 * points). NOTE: these are not formal accreditations — if Shery Travels holds
 * IATA / Ministry of Hajj & Umrah / payment certifications, swap in those logos.
 */
const ITEMS: { icon: LucideIcon; label: string }[] = [
  { icon: Award, label: "10+ Years of Service" },
  { icon: Users, label: "1,000+ Pilgrims Guided" },
  { icon: Headset, label: "24/7 On-Ground Support" },
  { icon: MapPin, label: "Hotels Near the Haram" },
  { icon: ShieldCheck, label: "Licensed, Vetted Drivers" },
  { icon: Lock, label: "Secure Payments" },
  { icon: BadgeCheck, label: "Tailored Packages" },
];

function Pill({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="flex flex-none items-center gap-2.5 whitespace-nowrap text-[14px] font-semibold text-navy/80">
      <Icon size={18} className="text-gold" aria-hidden />
      {label}
      <span aria-hidden className="ml-8 inline-block h-1.5 w-1.5 rounded-full bg-gold/50" />
    </span>
  );
}

export function CredentialsStrip() {
  const reduce = useReducedMotion();
  const track = [...ITEMS, ...ITEMS];

  return (
    <section aria-label="Why travellers trust us" className="overflow-hidden border-y border-navy/[0.06] bg-ice py-5">
      <div className="relative">
        <motion.div
          className="flex w-max gap-10 pr-10"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {track.map((it, i) => (
            <Pill key={`${it.label}-${i}`} {...it} />
          ))}
        </motion.div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ice to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ice to-transparent" />
      </div>
    </section>
  );
}
