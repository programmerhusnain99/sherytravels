import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { breadcrumbSchema, articleSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { BlogContent } from "./BlogContent";
import { BlogCard } from "./BlogCard";
import { POSTS } from "@/data/blog";
import type { BlogPost } from "@/data/blog/types";

/** Shared detail template for every blog post. Content comes from the post's data file. */
export function BlogPostPage({ post }: { post: BlogPost }) {
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageShell active="/blogs/">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blogs/" },
            { name: post.h1, path: post.path },
          ]),
          articleSchema({
            path: post.path,
            headline: post.h1,
            description: post.description,
            datePublished: post.published,
            dateModified: post.modified,
          }),
        ]}
      />

      {/* Hero */}
      <Section bg="ice" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-24 hidden h-[360px] w-[360px] rounded-full border border-gold/15 dt:block" />
        <Container className="mx-auto max-w-[800px]">
          <Link href="/blogs/" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy/60 transition-colors hover:text-gold">
            <ArrowLeft size={15} /> All articles
          </Link>
          <span className="mt-5 inline-flex w-fit items-center rounded-full bg-gold/12 px-3.5 py-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#9a7d14]">
            {post.category}
          </span>
          <h1 className="mt-4 font-serif text-[29px] font-bold leading-[1.2] text-navy dt:text-[40px]">
            {post.h1}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px] font-medium text-navy/60">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={15} className="text-gold" /> {post.publishedLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} className="text-gold" /> {post.readMinutes} min read
            </span>
          </div>
        </Container>
      </Section>

      {/* Body */}
      <Section bg="white" className="py-12 dt:py-16">
        <Container className="mx-auto max-w-[760px]">
          <BlogContent blocks={post.blocks} />

          {/* Inline CTA */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-navy/10 bg-ice p-7 text-center dt:p-9">
            <AccentHeading as="h2" before="Plan your journey with Shery " accent="Travels" className="text-[22px] leading-tight text-navy dt:text-[26px]" />
            <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-relaxed text-navy/75">
              From visas and flights to hotels near the Haram and guided ziyarat — our team handles every detail so you can focus on your worship.
            </p>
            <div className="mt-6 flex justify-center">
              <InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related reads */}
      {related.length > 0 && (
        <Section bg="ice" className="py-12 dt:py-16">
          <Container>
            <div className="mb-8 text-center">
              <Eyebrow className="mb-4">Keep reading</Eyebrow>
              <AccentHeading as="h2" before="More from the Shery Travels " accent="blog" className="text-[25px] leading-tight text-navy dt:text-[32px]" />
            </div>
            <div className="grid gap-5 dt:grid-cols-3 dt:gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </PageShell>
  );
}
