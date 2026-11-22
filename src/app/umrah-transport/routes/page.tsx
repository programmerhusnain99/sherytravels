import Image from "next/image";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";
import { InquireButton } from "@/components/inquiry/InquireButton";

const PATH = "/umrah-transport/routes/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Transport Routes | Shery Travels",
  description:
    "Our transport routes between Jeddah, Makkah and Madinah — airport transfers, inter-city travel and ziyarat routes with Shery Travels.",
  ogType: "article",
});

export default function RoutesPage() {
  return (
    <PageShell active="/umrah-transport/">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Umrah Transport", path: "/umrah-transport/" },
          { name: "Routes", path: PATH },
        ])}
      />

      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white py-14 dt:py-18">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
        <Container className="relative flex flex-col items-center text-center">
          <Eyebrow align="center">Transportation</Eyebrow>
          <div className="relative mt-6 flex justify-center dt:mt-7">
            <div className="hero-float relative h-[330px] w-[290px] overflow-hidden rounded-t-[145px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[420px] dt:w-[380px] dt:rounded-t-[190px]">
              <Image src="/images/transportation/transport-hero.webp" alt="Transport routes across the holy cities" fill sizes="(max-width:900px) 290px, 380px" priority className="object-cover" />
            </div>
          </div>
          <AccentHeading
            as="h1"
            before="Our Transport "
            accent="Routes"
            className="mt-8 text-[30px] leading-[1.16] text-navy dt:text-[44px]"
          />
          <p className="mx-auto mt-6 max-w-[560px] text-[16px] font-light leading-[1.7] text-navy/80 dt:text-[17px]">
            Airport transfers, inter-city travel between Makkah and Madinah, and guided ziyarat routes — details for each route are on the way.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton>
            <Button href="/umrah-transport/" variant="outline" size="lg">Back to Transport</Button>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
