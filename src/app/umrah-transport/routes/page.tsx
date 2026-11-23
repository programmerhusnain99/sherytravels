import { pageMetadata } from "@/lib/seo";
import { RoutesContent } from "@/components/transport/RoutesContent";

const PATH = "/umrah-transport/routes/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Transport Routes & Fares | Shery Travels",
  description:
    "Private transport routes and per-vehicle fares across Saudi Arabia — airport transfers, intercity travel, round-trip Umrah packages, local transfers and guided Ziyarat with Shery Travels.",
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
