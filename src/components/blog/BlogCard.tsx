import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blog/types";

/**
 * Post card for the blog index grid and the "related reads" rail.
 * Image-free by design (the source posts have no featured images) — the brand
 * eyebrow + serif headline carry the card.
 */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={post.path}
      className="card-hover group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 dt:p-7"
    >
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/12 px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#9a7d14]">
        {post.category}
      </span>

      <h3 className="mt-4 font-serif text-[19px] font-bold leading-snug text-navy dt:text-[20.5px]">
        {post.h1}
      </h3>

      <p className="mt-3 text-[14.5px] leading-relaxed text-navy/70">{post.excerpt}</p>

      <div className="mt-5 flex flex-1 items-end">
        <div className="flex w-full items-center justify-between gap-3 border-t border-navy/8 pt-4">
          <span className="flex items-center gap-3 text-[12px] font-medium text-navy/55">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={13} className="text-gold" />
              {post.publishedLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-gold" />
              {post.readMinutes} min
            </span>
          </span>
          <span className="flex items-center gap-1 text-[13px] font-semibold text-navy transition-colors group-hover:text-gold">
            Read
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
