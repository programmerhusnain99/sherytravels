import type { BlogPost } from "./types";

import { POST as umrahTypes } from "./umrah-types";
import { POST as hajjGuide } from "./hajj-guide";
import { POST as umrahGuideForUsa } from "./umrah-guide-for-usa";
import { POST as ziyaratInMakkah } from "./ziyarat-in-makkah";
import { POST as ziyaratInMadinaSacredSitesGuidedToursBySheryTravels } from "./ziyarat-in-madina-sacred-sites-guided-tours-by-shery-travels";
import { POST as umrahTransportCostsBreakdown } from "./umrah-transport-costs-breakdown";
import { POST as hajjUmrahVisaRequirements } from "./hajj-umrah-visa-requirements";
import { POST as bestTimeToBookUmrahUsa } from "./best-time-to-book-umrah-usa";
import { POST as jeddahMeccaGuide } from "./jeddah-mecca-guide";

/** All posts, newest first (by publish date). */
export const POSTS: BlogPost[] = [
  umrahTypes,
  hajjGuide,
  umrahGuideForUsa,
  ziyaratInMakkah,
  ziyaratInMadinaSacredSitesGuidedToursBySheryTravels,
  umrahTransportCostsBreakdown,
  hajjUmrahVisaRequirements,
  bestTimeToBookUmrahUsa,
  jeddahMeccaGuide,
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
