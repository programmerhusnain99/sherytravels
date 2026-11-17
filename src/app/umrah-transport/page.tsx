import { pageMetadata } from "@/lib/seo";
import { TransportationContent } from "@/components/transport/TransportationContent";

const PATH = "/umrah-transport/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Umrah Transportation Services | Shery Travels",
  description:
    "Discover stress-free travel between Jeddah, Makkah, and Madinah with Shery Travels. Comfortable, air-conditioned transportation designed for your pilgrimage.",
  ogType: "article",
});

export default function UmrahTransportPage() {
  return (
    <TransportationContent
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Umrah Transport", path: PATH },
      ]}
      fleetsHref="/umrah-transport/vehicles/"
      ziaratHref="/ziyarat/"
    />
  );
}
