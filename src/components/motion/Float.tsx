"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Gentle infinite up-and-down bob for decorative elements and badges. */
export function Float({
  children,
  className,
  amplitude = 10,
  duration = 4,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{ duration, delay, ease: "easeInOut", repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}
