import { pageMetadata } from "@/lib/seo";
import { ZiaratContent } from "@/components/transport/ZiaratContent";

const PATH = "/transportation/ziarat/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Ziarat Tours in Makkah & Madinah | Shery Travels",
  description:
    "Experience peaceful Ziarat journeys in Makkah & Madinah with Shery Travels. Clean vehicles, expert guides, and personalized tours for a spiritual experience.",
  ogType: "article",
});

export default function ZiaratPage() {
  return (
    <ZiaratContent
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Transportation", path: "/transportation/" },
        { name: "Ziarat Tours", path: PATH },
      ]}
    />
  );
}
