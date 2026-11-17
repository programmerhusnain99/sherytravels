import { pageMetadata } from "@/lib/seo";
import { UmrahTierPage } from "@/components/umrah/UmrahTierPage";
import { getTier } from "@/data/umrah/packages";

const tier = getTier("3-star");

export const metadata = pageMetadata({
  path: "/umrah-packages/3-star/",
  title: tier.metaTitle,
  description: tier.metaDescription,
  ogType: "article",
});

export default function ThreeStarUmrahPackagesPage() {
  return <UmrahTierPage tier={tier} />;
}
