/**
 * Small Makkah/Madinah skyline silhouette (the card's `.pk-mark`). Fills with
 * `currentColor`, so tint it with a Tailwind text color. Meant to sit as a short
 * band just above the feature-row divider.
 */
export function Skyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 82"
      preserveAspectRatio="none"
      aria-hidden
      fill="currentColor"
      className={className}
    >
      <rect x="0" y="52" width="38" height="30" />
      <rect x="44" y="36" width="18" height="46" />
      <circle cx="53" cy="36" r="9" />
      <rect x="70" y="58" width="48" height="24" />
      <path d="M126 82V64a30 22 0 0 1 60 0v18z" />
      <rect x="194" y="48" width="28" height="34" />
      <rect x="230" y="28" width="15" height="54" />
      <circle cx="237.5" cy="28" r="7.5" />
      <rect x="254" y="60" width="54" height="22" />
      <path d="M316 82V68a26 19 0 0 1 52 0v14z" />
      <rect x="374" y="44" width="26" height="38" />
    </svg>
  );
}
