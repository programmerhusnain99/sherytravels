"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

/** Fixed, pulsing "Inquire" action button that appears after the hero. */
export function FloatingContact() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShow(v > 0.08 && v < 0.96);
  });

  return (
    <motion.div
      className="fixed bottom-6 right-5 z-50 dt:bottom-8 dt:right-8"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={show ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{ pointerEvents: show ? "auto" : "none" }}
    >
      <Link
        href="/contact/"
        aria-label="Inquire now"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-gold text-navy shadow-[0_14px_34px_-10px_rgba(219,183,37,0.7)] dt:h-16 dt:w-16"
      >
        {!reduce && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-gold"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.8, ease: "easeOut", repeat: Infinity }}
          />
        )}
        <MessageCircle className="relative h-6 w-6 transition-transform group-hover:scale-110 dt:h-7 dt:w-7" />
      </Link>
    </motion.div>
  );
}
