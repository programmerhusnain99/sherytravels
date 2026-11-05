/** Uppercase eyebrow label with gold rule(s). Center (rules both sides) or left (one rule). */
export function Eyebrow({
  children,
  align = "center",
  tone = "navy",
  className = "",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
  tone?: "navy" | "white";
  className?: string;
}) {
  const text =
    tone === "white" ? "text-white/80" : "text-navy/75";
  return (
    <div
      className={`flex items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"} ${className}`}
    >
      <span className="h-px w-6 bg-gold" />
      <span className={`text-[12px] font-semibold uppercase tracking-[0.22em] ${text}`}>
        {children}
      </span>
      {align === "center" && <span className="h-px w-6 bg-gold" />}
    </div>
  );
}
