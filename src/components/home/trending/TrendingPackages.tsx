import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";
import { TRENDING_PACKAGES } from "@/data/home/packages";
import { PackagesCarousel } from "./PackagesCarousel";

/** "This month's most requested" — auto-advancing package carousel. */
export function TrendingPackages() {
  return (
    <section className="bg-ice py-16 dt:py-24">
      <Container>
        <div className="mb-8 flex flex-col items-start justify-between gap-4 dt:mb-12 dt:flex-row dt:items-end">
          <div>
            <Eyebrow align="left" className="mb-4">This month</Eyebrow>
            <AccentHeading
              as="h2"
              before="This month's "
              accent="most requested"
              className="text-[28px] leading-tight text-navy dt:text-[42px]"
            />
          </div>
          <Button href="/umrah/usa-packages/" variant="outline" size="md" className="hidden rounded-full dt:inline-flex">
            View all packages
          </Button>
        </div>
        <PackagesCarousel packages={TRENDING_PACKAGES} />
      </Container>
    </section>
  );
}
