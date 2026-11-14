"use client";

import { motion, useReducedMotion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Counter } from "@/components/motion/Counter";

/**
 * ⚠️ PLACEHOLDER testimonials — replace the quotes, names and the rating/count
 * with real, verifiable reviews before going live. Do not publish fabricated
 * reviews as genuine.
 */
const REVIEWS = [
  {
    quote:
      "From our first message to landing back home, every detail was handled. The hotel was a short walk from the Haram and the team checked on us daily.",
    name: "Ahmed R.",
    trip: "Umrah · 2025",
    initials: "AR",
  },
  {
    quote:
      "As a first-time pilgrim I was nervous, but the step-by-step guidance made everything calm and clear. Transport was always on time.",
    name: "Fatima S.",
    trip: "Umrah · 2025",
    initials: "FS",
  },
  {
    quote:
      "We travelled as a family of six. Accommodation, visas and ziyarat were perfectly coordinated. Truly a stress-free, spiritual journey.",
    name: "Yusuf K.",
    trip: "Hajj · 2024",
    initials: "YK",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={16} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <Section bg="lightblue" className="relative overflow-hidden py-16 dt:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 hidden h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.08),transparent_70%)] dt:block"
      />
      <Container className="relative">
        <div className="mx-auto max-w-[720px] text-center">
          <Eyebrow align="center" className="mb-4">
            Loved by pilgrims
          </Eyebrow>
          <AccentHeading
            as="h2"
            before="Journeys we're "
            accent="honoured"
            after=" to have guided"
            className="text-[28px] leading-[1.2] text-navy dt:text-[42px] dt:leading-[1.16]"
          />

          <div className="mt-6 flex items-center justify-center gap-3">
            <Stars />
            <span className="font-serif text-[20px] font-bold text-navy">
              <Counter to={4.9} decimals={1} />
              /5
            </span>
            <span className="text-[14px] text-navy/60">
              from <Counter to={200} suffix="+" /> reviews
            </span>
          </div>
        </div>

        <motion.ul
          className="mt-12 grid gap-6 dt:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {REVIEWS.map((r) => (
            <motion.li
              key={r.name}
              variants={{
                hidden: { opacity: 0, y: reduce ? 0 : 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative flex flex-col rounded-2xl border border-navy/10 bg-white p-7 shadow-[0_24px_56px_-30px_rgba(26,62,110,0.4)]"
            >
              <Quote size={30} className="mb-4 text-gold/35" aria-hidden />
              <p className="flex-1 text-[15px] font-light leading-[1.7] text-navy/85 text-pretty">
                “{r.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3.5 border-t border-navy/10 pt-5">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-navy font-serif text-[15px] font-bold text-white">
                  {r.initials}
                </span>
                <span>
                  <span className="block text-[14.5px] font-bold text-navy">{r.name}</span>
                  <span className="block text-[12.5px] text-navy/60">{r.trip}</span>
                </span>
                <span className="ml-auto">
                  <Stars />
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}
