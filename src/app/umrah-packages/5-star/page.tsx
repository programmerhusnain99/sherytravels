import { pageMetadata } from "@/lib/seo";
import { UmrahTierPage } from "@/components/umrah/UmrahTierPage";
import { getTier } from "@/data/umrah/packages";

const tier = getTier("5-star");

export const metadata = pageMetadata({
  path: "/umrah-packages/5-star/",
  title: tier.metaTitle,
  description: tier.metaDescription,
  ogType: "article",
});

export default function FiveStarUmrahPackagesPage() {
  return <UmrahTierPage tier={tier} />;
}
