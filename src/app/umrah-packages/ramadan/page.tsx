import { pageMetadata } from "@/lib/seo";
import { PackageLandingPage } from "@/components/sections/PackageLandingPage";
import { PAGE_DATA } from "@/data/packages/ramadan";

/** Same content as the legacy /umrah/usa-packages/ramadan/ page, served at the new route. */
const data = { ...PAGE_DATA, path: "/umrah-packages/ramadan/" };

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

export default function RamadanUmrahPackagePage() {
  return <PackageLandingPage data={data} breadcrumb={TRAIL} packagesHref="/umrah-packages/" />;
}
