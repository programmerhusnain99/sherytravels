import { pageMetadata } from "@/lib/seo";
import { HajjPackagesContent } from "@/components/hajj/HajjPackagesContent";

const PATH = "/hajj-packages/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Hajj Packages | Shery Travels",
  description:
    "Discover premium Hajj packages designed just for you. Enjoy easy visa processing, inclusive services, and 24/7 support for a stress-free Hajj journey.",
  ogType: "article",
});

export default function HajjPackagesPage() {
  return (
    <HajjPackagesContent
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Hajj Packages", path: PATH },
      ]}
    />
  );
}
