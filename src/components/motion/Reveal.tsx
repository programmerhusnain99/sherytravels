"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Dir = "up" | "down" | "left" | "right" | "none";

const OFFSET: Record<Dir, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

const EASE = [0.22, 1, 0.36, 1] as const;

type Tag = keyof HTMLElementTagNameMap;

/** Fade + slide an element into view on scroll (honours reduced-motion). */
export function Reveal({
  children,
  className,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.65,
  amount = 0.25,
  once = true,
  mount = false,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  direction?: Dir;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  /** Animate on mount (for above-the-fold content) instead of on scroll-into-view. */
  mount?: boolean;
}) {
  const reduce = useReducedMotion();
  const off = reduce ? {} : OFFSET[direction];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = (motion as any)[as] ?? motion.div;
  const trigger = mount
    ? { animate: { opacity: 1, x: 0, y: 0 } }
    : { whileInView: { opacity: 1, x: 0, y: 0 }, viewport: { once, amount } };
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, ...off }}
      {...trigger}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

/** Container that staggers the reveal of its <StaggerItem> children. */
export function Stagger({
  children,
  className,
  as = "div",
  gap = 0.1,
  delay = 0,
  amount = 0.2,
  once = true,
  mount = false,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  gap?: number;
  delay?: number;
  amount?: number;
  once?: boolean;
  mount?: boolean;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = (motion as any)[as] ?? motion.div;
  const trigger = mount ? { animate: "show" } : { whileInView: "show", viewport: { once, amount } };
  return (
    <Comp
      className={className}
      initial="hidden"
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </Comp>
  );
}

/** One staggered child inside <Stagger>. */
export function StaggerItem({
  children,
  className,
  as = "div",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  direction?: Dir;
}) {
  const reduce = useReducedMotion();
  const off = reduce ? {} : OFFSET[direction];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = (motion as any)[as] ?? motion.div;
  return (
    <Comp
      className={className}
      variants={{
        hidden: { opacity: 0, ...off },
        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </Comp>
  );
}
