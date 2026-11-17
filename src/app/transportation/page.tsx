import { pageMetadata } from "@/lib/seo";
import { TransportationContent } from "@/components/transport/TransportationContent";

const PATH = "/transportation/";

export const metadata = pageMetadata({
  path: PATH,
  title: "USA Transportation Services at Shery Travels",
  description:
    "Discover stress-free travel between Jeddah, Makkah, and Madinah with Shery Travels. Experience comfortable transportation designed for your pilgrimage right from the USA. Book with us today!",
  ogType: "article",
});

export default function TransportationPage() {
  return (
    <TransportationContent
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Transportation", path: PATH },
      ]}
      fleetsHref="/transportation/fleets/"
      ziaratHref="/transportation/ziarat/"
    />
  );
}
