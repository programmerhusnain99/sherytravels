import type { ElementType } from "react";

/**
 * Serif heading with one italic-gold accent word (the site-wide convention).
 * Example: <AccentHeading as="h1" before="Every step of your pilgrimage " accent="matters" />
 * Font size/line-height come from `className` per usage.
 */
export function AccentHeading({
  as: Tag = "h2" as ElementType,
  before = "",
  accent,
  after = "",
  className = "",
  id,
}: {
  as?: ElementType;
  before?: string;
  accent: string;
  after?: string;
  className?: string;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={`font-serif font-normal tracking-[-0.01em] text-balance ${className}`}
    >
      {before}
      <em className="italic text-gold">{accent}</em>
      {after}
    </Tag>
  );
}
