import type { ReactNode } from "react";

type Bg = "white" | "ice" | "navy" | "lightblue";

const BG: Record<Bg, string> = {
  white: "bg-white text-navy",
  ice: "bg-ice text-navy",
  navy: "bg-navy text-white",
  lightblue: "bg-lightblue text-navy",
};

/** Page section wrapper with a background variant. Vertical rhythm via className. */
export function Section({
  id,
  bg = "white",
  className = "",
  children,
}: {
  id?: string;
  bg?: Bg;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${BG[bg]} ${className}`}>
      {children}
    </section>
  );
}
