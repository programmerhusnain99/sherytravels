import { pageMetadata } from "@/lib/seo";
import { RoutesContent } from "@/components/transport/RoutesContent";

const PATH = "/umrah-transport/routes/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Transport Routes | Shery Travels",
  description:
    "Private transport routes across Saudi Arabia — airport transfers, intercity travel, round-trip Umrah packages and local transfers with Shery Travels.",
  ogType: "article",
});

export default function RoutesPage() {
  return (
    <RoutesContent
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Umrah Transport", path: "/umrah-transport/" },
        { name: "Routes", path: PATH },
      ]}
      active="/umrah-transport/"
    />
  );
}
