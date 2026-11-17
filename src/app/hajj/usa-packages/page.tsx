import { pageMetadata } from "@/lib/seo";
import { HajjPackagesContent } from "@/components/hajj/HajjPackagesContent";

const PATH = "/hajj/usa-packages/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Hajj Packages from USA - Shery Travels",
  description:
    "Discover premium Hajj packages designed just for you. Enjoy easy visa processing, inclusive services, and 24/7 support for a stress-free journey from the USA.",
  ogType: "article",
});

export default function HajjUsaPackagesPage() {
  return (
    <HajjPackagesContent
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Hajj", path: "/hajj/" },
        { name: "USA Packages", path: PATH },
      ]}
    />
  );
}
