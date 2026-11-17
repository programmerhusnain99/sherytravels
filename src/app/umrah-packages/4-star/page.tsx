import { pageMetadata } from "@/lib/seo";
import { UmrahTierPage } from "@/components/umrah/UmrahTierPage";
import { getTier } from "@/data/umrah/packages";

const tier = getTier("4-star");

export const metadata = pageMetadata({
  path: "/umrah-packages/4-star/",
  title: tier.metaTitle,
  description: tier.metaDescription,
  ogType: "article",
});

export default function FourStarUmrahPackagesPage() {
  return <UmrahTierPage tier={tier} />;
}
