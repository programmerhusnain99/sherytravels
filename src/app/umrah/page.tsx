import { pageMetadata } from "@/lib/seo";
import { PilgrimagePage } from "@/components/sections/PilgrimagePage";
import { UMRAH_PAGE } from "@/data/pages/umrah";

export const metadata = pageMetadata({
  path: "/umrah/",
  title: "Umrah - A Sacred Journey of a Lifetime | Shery Travels",
  description:
    "Learn the importance of Umrah, a voluntary pilgrimage that offers Muslims a chance to seek forgiveness and strengthen their faith. Join Shery Travels to start this meaningful & sacred journey.",
  ogType: "article",
});

export default function UmrahPage() {
  return <PilgrimagePage data={UMRAH_PAGE} />;
}
