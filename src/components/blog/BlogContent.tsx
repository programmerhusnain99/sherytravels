import type { BlogBlock } from "@/data/blog/types";

/**
 * Renders a blog post body (array of BlogBlock) with on-brand typography.
 *
 * Inline HTML inside `html` / `items` is sanitised at extraction time to
 * <strong>/<em>/<u>/<a>/<br> only, so it is safe to inject. External links
 * (absolute http(s) URLs) are given target/rel; internal links were already
 * normalised to canonical paths at extraction time.
 */

/** Add target/rel to external anchors inside an already-sanitised HTML string. */
function withSafeLinks(html: string): string {
  return html.replace(
    /<a href="(https?:\/\/[^"]+)">/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">',
  );
}

const LINK = "[&_a]:font-medium [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-gold";

export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col">
      {blocks.map((b, i) => {
        if (b.t === "heading") {
          return b.level === "h2" ? (
            <h2
              key={i}
              className="mt-10 font-serif text-[23px] font-bold leading-snug text-navy first:mt-0 dt:text-[27px]"
            >
              {b.text}
            </h2>
          ) : (
            <h3
              key={i}
              className="mt-7 font-serif text-[18.5px] font-bold leading-snug text-navy dt:text-[20px]"
            >
              {b.text}
            </h3>
          );
        }
        if (b.t === "p") {
          return (
            <p
              key={i}
              className={`mt-4 text-[15.5px] leading-[1.8] text-navy/80 ${LINK}`}
              dangerouslySetInnerHTML={{ __html: withSafeLinks(b.html) }}
            />
          );
        }
        const ordered = b.t === "ol";
        const ListTag = ordered ? "ol" : "ul";
        return (
          <ListTag key={i} className="mt-4 flex flex-col gap-2.5 pl-1">
            {b.items.map((it, j) => (
              <li
                key={j}
                className={`flex items-start gap-3 text-[15.5px] leading-[1.75] text-navy/80 ${LINK}`}
              >
                {ordered ? (
                  <span className="mt-0.5 flex-none font-serif text-[14px] font-bold text-gold">
                    {j + 1}.
                  </span>
                ) : (
                  <span aria-hidden className="mt-[9px] flex-none h-[6px] w-[6px] rounded-full bg-gold" />
                )}
                <span dangerouslySetInnerHTML={{ __html: withSafeLinks(it) }} />
              </li>
            ))}
          </ListTag>
        );
      })}
    </div>
  );
}
