import { PageLoader } from "@/components/layout/PageLoader";

/**
 * Shown automatically by Next.js while a route segment is actually loading
 * (e.g. a navigation that isn't instant). Removed the moment the page is ready
 * — no fixed display time. Static, prefetched routes won't show it because
 * there is nothing to wait for.
 */
export default function Loading() {
  return <PageLoader />;
}
