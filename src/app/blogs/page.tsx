import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BlogCard } from "@/components/blog/BlogCard";
import { POSTS } from "@/data/blog";

const PATH = "/blogs/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Blogs - Shery Travels",
  ogType: "website",
});

export default function BlogsIndexPage() {
  const [featured, ...rest] = POSTS;

  return (
    <PageShell active="/blogs/">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blogs", path: PATH },
        ])}
      />

      {/* Header */}
      <Section bg="ice" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute -left-28 -top-24 hidden h-[360px] w-[360px] rounded-full border border-gold/15 dt:block" />
        <div aria-hidden className="pointer-events-none absolute -right-24 top-10 hidden h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.1),transparent_70%)] dt:block" />
        <Container className="relative mx-auto max-w-[760px] text-center">
          <Eyebrow className="mb-4">Guides &amp; insights</Eyebrow>
          <h1 className="font-serif text-[36px] font-bold leading-tight text-navy dt:text-[48px]">Blogs</h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[15.5px] leading-[1.7] text-navy/75">
            Practical guides and spiritual insights for Hajj, Umrah, and ziyarat — written to help U.S. pilgrims plan every step with confidence.
          </p>
        </Container>
      </Section>

      {/* Featured + grid */}
      <Section bg="white" className="py-12 dt:py-16">
        <Container>
          {/* Featured (latest) */}
          <article className="card-hover group mb-8 overflow-hidden rounded-2xl border border-navy/10 bg-gradient-to-br from-ice to-white p-7 dt:p-10">
            <a href={featured.path} className="block">
              <span className="inline-flex w-fit items-center rounded-full bg-gold/12 px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#9a7d14]">
                Latest &middot; {featured.category}
              </span>
              <h2 className="mt-4 max-w-[760px] font-serif text-[24px] font-bold leading-snug text-navy transition-colors group-hover:text-navy dt:text-[30px]">
                {featured.h1}
              </h2>
              <p className="mt-3 max-w-[680px] text-[15.5px] leading-relaxed text-navy/70">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-[13px] font-medium text-navy/55">
                <span>{featured.publishedLabel}</span>
                <span className="h-1 w-1 rounded-full bg-navy/25" />
                <span>{featured.readMinutes} min read</span>
                <span className="ml-auto hidden font-semibold text-navy transition-colors group-hover:text-gold dt:inline">Read article →</span>
              </div>
            </a>
          </article>

          {/* Rest */}
          <div className="grid gap-5 sm:grid-cols-2 dt:grid-cols-3 dt:gap-6">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
