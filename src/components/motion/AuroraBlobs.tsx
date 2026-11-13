"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Soft, slowly-drifting gradient blobs for section backgrounds.
 * Absolutely positioned, non-interactive. Place inside a `relative overflow-hidden`
 * parent. `tone` picks the palette against light vs. navy grounds.
 */
export function AuroraBlobs({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const reduce = useReducedMotion();
  const gold = tone === "navy" ? "rgba(219,183,37,0.18)" : "rgba(219,183,37,0.12)";
  const blue = tone === "navy" ? "rgba(214,232,254,0.14)" : "rgba(26,62,110,0.08)";

  const anim = (dx: number, dy: number) =>
    reduce
      ? undefined
      : {
          x: [0, dx, 0],
          y: [0, dy, 0],
          scale: [1, 1.12, 1],
        };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 -top-24 h-[340px] w-[340px] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${gold}, transparent 70%)` }}
        animate={anim(60, 40)}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-20 top-1/3 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${blue}, transparent 70%)` }}
        animate={anim(-70, 50)}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[-120px] left-1/3 h-[360px] w-[360px] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${gold}, transparent 70%)` }}
        animate={anim(40, -50)}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, delay: 2 }}
      />
    </div>
  );
}
