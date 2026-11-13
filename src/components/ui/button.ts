export type ButtonVariant = "navy" | "gold" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  // Default: navy fill, white text.
  navy: "bg-navy text-white hover:bg-navy/90",
  // On navy grounds / submit buttons: gold fill, navy text.
  gold: "bg-gold text-navy hover:brightness-105",
  // Text link (e.g. "View details").
  ghost: "text-navy hover:text-navy/70 px-0 py-0",
  // Outlined (navy border on white).
  outline: "border border-navy/20 text-navy hover:border-navy/40",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "text-[13px] px-4 py-2.5 rounded-md",
  md: "text-[14px] px-6 py-3 rounded-md",
  lg: "text-[15.5px] px-7 py-3.5 rounded-lg",
};

/** Shared button/link styling used by <Button> (server) and interactive triggers (client). */
export function buttonClasses({
  variant = "navy",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}): string {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-[background-color,color,filter,border-color,transform,box-shadow] duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2";
  const sizeCls = variant === "ghost" ? SIZES[size].replace(/rounded-\w+/, "") : SIZES[size];
  return `${base} ${VARIANTS[variant]} ${sizeCls} ${className}`.trim();
}
