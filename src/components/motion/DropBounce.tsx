"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Drops its children in from above and lets them bounce a couple of times (like
 * a ball hitting the ground) when scrolled into view. Honours reduced-motion.
 */
export function DropBounce({
  children,
  className,
  height = 70,
  delay = 0,
  amount = 0.6,
}: {
  children: ReactNode;
  className?: string;
  /** How far above it starts (px). */
  height?: number;
  delay?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ y: -height, opacity: 0 }}
      whileInView={{
        y: [-height, 0, -height * 0.3, 0, -height * 0.1, 0],
        opacity: [0, 1, 1, 1, 1, 1],
      }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 1.05,
        delay,
        // fall (accelerate) → bounce up (decelerate) → fall → small bounce → settle
        times: [0, 0.4, 0.58, 0.76, 0.88, 1],
        ease: ["easeIn", "easeOut", "easeIn", "easeOut", "easeIn"],
      }}
    >
      {children}
    </motion.div>
  );
}
