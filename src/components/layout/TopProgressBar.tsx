"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Thin top-of-page navigation progress bar (YouTube / NProgress style).
 *
 * The site is statically prerendered and prefetched, so route changes are
 * near-instant — this bar is a *perceptual* cue so visitors notice the page
 * changed, not a real 0–100% load meter. It eases quickly toward ~90% when a
 * navigation starts, then snaps to 100% and fades once the new route commits.
 *
 * Start is detected from internal link clicks + back/forward (popstate) +
 * programmatic history changes (pushState/replaceState patch), so it covers
 * every kind of navigation. Completion is keyed off usePathname() changing.
 *
 * NOTE: deliberately does NOT use useSearchParams() — reading it in the root
 * layout would opt the whole app out of static rendering under cacheComponents.
 *
 * Colour is brand navy; a lighter glowing "peg" at the leading edge keeps it
 * visible even over the navy utility strip at the very top of the page.
 */
export function TopProgressBar() {
  const pathname = usePathname();
  const [width, setWidth] = useState(0); // 0–100
  const [visible, setVisible] = useState(false);

  const trickle = useRef<ReturnType<typeof setInterval> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(false);

  const stopTrickle = () => {
    if (trickle.current) {
      clearInterval(trickle.current);
      trickle.current = null;
    }
  };

  const start = useCallback(() => {
    if (activeRef.current) return; // already running
    activeRef.current = true;
    if (hideTimer.current) clearTimeout(hideTimer.current);
    stopTrickle();
    setVisible(true);
    setWidth(8);
    trickle.current = setInterval(() => {
      setWidth((w) => {
        if (w >= 90) return w;
        const inc = w < 40 ? 9 : w < 65 ? 5 : w < 80 ? 2.5 : 1;
        return Math.min(90, w + inc);
      });
    }, 160);
  }, []);

  const done = useCallback(() => {
    if (!activeRef.current) return;
    activeRef.current = false;
    stopTrickle();
    setWidth(100);
    hideTimer.current = setTimeout(() => {
      setVisible(false);
      setWidth(0);
    }, 300);
  }, []);

  // Complete when the committed route changes. Skip the very first render.
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    done();
  }, [pathname, done]);

  // Detect the START of any navigation.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;
      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (
        !href ||
        anchor.getAttribute("target") === "_blank" ||
        anchor.hasAttribute("download")
      )
        return;
      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      // Only path-changing, same-origin navigations (ignore hash/same-page).
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      start();
    };

    const onPopState = () => start();

    // Catch programmatic navigation (router.push/replace use the History API).
    const origPush = window.history.pushState;
    const origReplace = window.history.replaceState;
    window.history.pushState = function (...args) {
      const to = args[2];
      if (to && new URL(to, window.location.href).pathname !== window.location.pathname) {
        start();
      }
      return origPush.apply(this, args);
    };
    window.history.replaceState = function (...args) {
      return origReplace.apply(this, args);
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
      window.history.pushState = origPush;
      window.history.replaceState = origReplace;
      stopTrickle();
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [start]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-[3px]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 250ms ease" }}
    >
      <div
        className="relative h-full"
        style={{
          width: `${width}%`,
          transition: "width 200ms ease-out",
          // Mostly brand navy, lightening toward the leading edge so the fill
          // stays visible even over the navy utility strip at the top.
          background: "linear-gradient(90deg, #1a3e6e 0%, #1a3e6e 55%, #3f6fb0 100%)",
        }}
      >
        {/* Bright glowing leading "peg" — marks the progress edge on any background. */}
        <span
          className="absolute right-0 top-0 h-full w-28"
          style={{
            background: "linear-gradient(90deg, rgba(214,232,254,0) 0%, #d6e8fe 85%, #ffffff 100%)",
            boxShadow:
              "0 0 12px 2px rgba(214,232,254,0.95), 0 0 8px 1px rgba(219,183,37,0.55)",
          }}
        />
      </div>
    </div>
  );
}
