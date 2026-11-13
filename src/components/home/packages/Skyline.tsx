/**
 * Decorative Makkah/Madinah skyline silhouette. Fills with `currentColor`, so
 * tint it with a Tailwind text color. Stretches to the container width.
 */
export function Skyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 90"
      preserveAspectRatio="none"
      aria-hidden
      fill="currentColor"
      className={className}
    >
      {/* left low buildings */}
      <rect x="0" y="54" width="26" height="36" />
      <rect x="30" y="42" width="20" height="48" rx="2" />
      <rect x="54" y="62" width="30" height="28" />
      {/* left minaret */}
      <rect x="92" y="30" width="7" height="60" />
      <circle cx="95.5" cy="27" r="6" />
      {/* left domed hall */}
      <path d="M110 90 V60 a22 20 0 0 1 44 0 V90 Z" />
      <rect x="129" y="22" width="6" height="20" />
      <circle cx="132" cy="19" r="4" />
      {/* central grand dome */}
      <rect x="180" y="56" width="80" height="34" />
      <path d="M180 57 a40 34 0 0 1 80 0 Z" />
      <rect x="217" y="16" width="6" height="26" />
      <circle cx="220" cy="13" r="5" />
      {/* right domed hall */}
      <path d="M286 90 V60 a22 20 0 0 1 44 0 V90 Z" />
      {/* right minaret */}
      <rect x="341" y="32" width="7" height="58" />
      <circle cx="344.5" cy="29" r="6" />
      {/* right low buildings */}
      <rect x="356" y="60" width="30" height="30" />
      <rect x="390" y="46" width="20" height="44" rx="2" />
      <rect x="414" y="56" width="26" height="34" />
    </svg>
  );
}
