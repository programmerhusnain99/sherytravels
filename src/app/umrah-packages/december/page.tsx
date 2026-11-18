import { pageMetadata } from "@/lib/seo";
import { PackageLandingPage } from "@/components/sections/PackageLandingPage";
import { PAGE_DATA } from "@/data/packages/december";

/** Same content as the legacy /umrah/usa-packages/december/ page, served at the new route. */
const data = { ...PAGE_DATA, path: "/umrah-packages/december/" };

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Umrah Packages", path: "/umrah-packages/" },
];

export const metadata = pageMetadata({
  path: data.path,
  title: data.title,
  description: data.description,
  ogType: "article",
});

export default function DecemberUmrahPackagePage() {
  return <PackageLandingPage data={data} breadcrumb={TRAIL} packagesHref="/umrah-packages/" />;
}
