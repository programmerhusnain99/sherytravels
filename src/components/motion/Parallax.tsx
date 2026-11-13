"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/** Translates its children on the Y axis as the element scrolls through the viewport. */
export function Parallax({
  children,
  className,
  distance = 60,
}: {
  children: ReactNode;
  className?: string;
  /** Total px of travel across the scroll (positive = slower than scroll). */
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
}
