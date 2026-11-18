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
      <span className="h-px w-5 flex-none bg-gold dt:w-6" />
      <span className={`whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.15em] dt:text-[12px] dt:tracking-[0.22em] ${text}`}>
        {children}
      </span>
      {align === "center" && <span className="h-px w-5 flex-none bg-gold dt:w-6" />}
    </div>
  );
}
