"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Award, Handshake, BusFront, SlidersHorizontal, type LucideIcon } from "lucide-react";
import type { Feature } from "@/data/home/features";

const ICONS: Record<Feature["icon"], LucideIcon> = {
  premium: Award,
  handshake: Handshake,
  shuttle: BusFront,
  tune: SlidersHorizontal,
};

export function FirstChoiceRail({ features }: { features: Feature[] }) {
  const [active, setActive] = useState(0);
  const held = useRef(false);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const n = features.length;

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!held.current) setActive((i) => (i + 1) % n);
    }, 3500);
    return () => clearInterval(id);
  }, [n]);

  const hold = () => {
    if (holdTimer.current) clearTimeout(holdTimer.current);
    held.current = true;
  };
  const release = () => {
    held.current = false;
  };
  const releaseSoon = () => {
    if (holdTimer.current) clearTimeout(holdTimer.current);
    holdTimer.current = setTimeout(() => (held.current = false), 6000);
  };

  const ActiveIcon = ICONS[features[active].icon];
  const reduce = useReducedMotion();

  const dotVariants = reduce
    ? undefined
    : {
        hidden: { opacity: 0, y: 14, scale: 0.8 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring" as const, stiffness: 420, damping: 18 },
        },
      };

  return (
    <div onMouseLeave={release}>
      {/* Station rail */}
      <div
        className="relative mb-8 w-full px-2 dt:mb-10 dt:px-10"
        onMouseEnter={hold}
        role="tablist"
        aria-label="Reasons to choose Shery Travels"
      >
        <motion.div
          className="absolute left-10 right-10 top-7 h-0.5 origin-left bg-navy/15"
          aria-hidden
          {...(reduce
            ? {}
            : {
                initial: { scaleX: 0, opacity: 0 },
                whileInView: { scaleX: 1, opacity: 1 },
                viewport: { once: true, amount: 0.6 },
                transition: { duration: 0.6, ease: "easeOut" as const },
              })}
        />
        <motion.div
          className="relative grid grid-cols-4"
          {...(reduce
            ? {}
            : {
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.6 },
                variants: { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } } },
              })}
        >
          {features.map((f, i) => {
            const StopIcon = ICONS[f.icon];
            const on = i === active;
            return (
              <motion.button
                key={f.num}
                role="tab"
                aria-selected={on}
                variants={dotVariants}
                onMouseEnter={() => {
                  hold();
                  setActive(i);
                }}
                onFocus={() => {
                  hold();
                  setActive(i);
                }}
                onClick={() => {
                  setActive(i);
                  releaseSoon();
                }}
                className="flex flex-col items-center gap-3 outline-none"
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-full border-2 transition-colors duration-300 ${
                    on ? "border-gold bg-navy text-white" : "border-navy/15 bg-white text-navy"
                  }`}
                >
                  <span className="hidden font-serif text-[18px] font-bold dt:block">{f.num}</span>
                  <StopIcon size={22} className="dt:hidden" />
                </span>
                <span
                  className={`hidden text-center text-[13.5px] font-medium transition-opacity duration-300 dt:block ${
                    on ? "text-navy opacity-100" : "text-navy/70 opacity-80"
                  }`}
                >
                  {f.title}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Stage panel */}
      <div className="relative w-full overflow-hidden rounded-[26px] bg-navy px-6 py-10 text-white dt:px-14 dt:py-14">
        <span
          className="pointer-events-none absolute -top-4 right-4 font-serif text-[104px] font-bold leading-none text-white/[0.06] dt:text-[150px]"
          aria-hidden
        >
          {features[active].num}
        </span>
        <div className="relative flex flex-col items-start gap-5 dt:flex-row dt:items-center dt:gap-7">
          <span className="grid h-16 w-16 flex-none place-items-center rounded-2xl border-2 border-gold/60 text-gold dt:h-[74px] dt:w-[74px]">
            <ActiveIcon size={32} />
          </span>
          <div>
            <div className="mb-1 flex items-center gap-2 dt:hidden">
              <span className="font-serif text-[15px] font-bold text-gold">{features[active].num}</span>
              <span className="h-px w-6 bg-gold/60" />
            </div>
            <h3 className="font-serif text-[24px] font-normal text-white dt:text-[34px]">
              {features[active].title}
            </h3>
            <p className="mt-2 max-w-[680px] text-[15px] leading-relaxed text-white/80 dt:text-[16px]">
              {features[active].body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
