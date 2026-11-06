import { pageMetadata } from "@/lib/seo";
import { PackageLandingPage } from "@/components/sections/PackageLandingPage";
import { PAGE_DATA } from "@/data/packages/november";

export const metadata = pageMetadata({
  path: PAGE_DATA.path,
  title: PAGE_DATA.title,
  description: PAGE_DATA.description,
  ogType: "article",
});

export default function Page() {
  return <PackageLandingPage data={PAGE_DATA} />;
}
