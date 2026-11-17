import { pageMetadata } from "@/lib/seo";
import { FleetsContent } from "@/components/transport/FleetsContent";

const PATH = "/transportation/fleets/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Hajj Umrah Fleet | Comfortable Travel with Shery Travels",
  description:
    "Travel across Makkah, Madinah, and beyond with Shery Travels. Enjoy modern, air-conditioned vehicles, skilled drivers, and easy booking for a smooth journey.",
  ogType: "article",
});

export default function FleetsPage() {
  return (
    <FleetsContent
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Transportation", path: "/transportation/" },
        { name: "Our Fleet", path: PATH },
      ]}
    />
  );
}
