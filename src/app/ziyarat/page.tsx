import { pageMetadata } from "@/lib/seo";
import { ZiaratContent } from "@/components/transport/ZiaratContent";

const PATH = "/ziyarat/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Ziyarat Tours in Makkah & Madinah | Shery Travels",
  description:
    "Experience peaceful Ziyarat journeys in Makkah & Madinah with Shery Travels. Clean vehicles, expert guides, and personalized tours for a spiritual experience.",
  ogType: "article",
});

export default function ZiyaratPage() {
  return (
    <ZiaratContent
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Ziyarat", path: PATH },
      ]}
    />
  );
}
