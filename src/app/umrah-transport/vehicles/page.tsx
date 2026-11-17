import { pageMetadata } from "@/lib/seo";
import { FleetsContent } from "@/components/transport/FleetsContent";

const PATH = "/umrah-transport/vehicles/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Our Vehicles | Umrah Transport Fleet | Shery Travels",
  description:
    "Travel across Makkah, Madinah, and beyond with Shery Travels. Modern, air-conditioned vehicles, skilled drivers, and easy booking for a smooth journey.",
  ogType: "article",
});

export default function UmrahTransportVehiclesPage() {
  return (
    <FleetsContent
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Umrah Transport", path: "/umrah-transport/" },
        { name: "Vehicles", path: PATH },
      ]}
    />
  );
}
