import { pageMetadata } from "@/lib/seo";
import { PilgrimagePage } from "@/components/sections/PilgrimagePage";
import { HAJJ_PAGE } from "@/data/pages/hajj";

// NOTE: the live <title> literally includes surrounding quotation marks (likely a
// WordPress typo). Kept EXACT for SEO parity — TODO(client): drop the quotes if desired.
export const metadata = pageMetadata({
  path: "/hajj/",
  title: '"Hajj: A Spiritual Journey Awaits You with Shery Travels"',
  description:
    "Discover the profound experience of Hajj with Shery Travels. Join us as we guide you through the significance, rituals, and preparations for this sacred journey.",
  ogType: "article",
});

export default function HajjPage() {
  return <PilgrimagePage data={HAJJ_PAGE} />;
}
