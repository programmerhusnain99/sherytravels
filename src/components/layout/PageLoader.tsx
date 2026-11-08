"use client";

import { useEffect, useState } from "react";

/**
 * Full-page loading screen: a blank white page with a centered line loader
 * (an indeterminate navy segment sweeping a light track). Just the line for
 * now — no logo/name.
 *
 * Two uses, one visual:
 *  - `PageLoader`  → rendered by src/app/loading.tsx, shown by Next while a
 *    route is actually loading, and removed by Next the moment it's ready.
 *  - `PageSplash`  → the initial-load splash. Server-rendered so it shows from
 *    the very first paint, then fades out once the page is ready (hydrated +
 *    fonts loaded). No fixed duration — it's tied to actual load completion.
 */

function LoaderVisual({
  style,
  onTransitionEnd,
}: {
  style?: React.CSSProperties;
  onTransitionEnd?: React.TransitionEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[300] grid place-items-center bg-white"
      style={style}
      onTransitionEnd={onTransitionEnd}
    >
      <div className="relative h-[3px] w-[190px] overflow-hidden rounded-full bg-navy/12">
        <span className="page-loader-bar" />
      </div>
    </div>
  );
}

/** Route-transition loader (Next unmounts it when the page is ready). */
export function PageLoader() {
  return <LoaderVisual />;
}

/**
 * Initial-load splash. Renders on the server (visible immediately), then hides
 * once the app has hydrated and fonts are ready. A 6s safety timer guarantees
 * it never gets stuck; otherwise there is no fixed display time.
 */
export function PageSplash() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const finish = () => {
      if (!cancelled) setHidden(true);
    };

    // "Loaded" = hydrated (this effect ran) + web fonts ready.
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    if (fonts?.ready) {
      fonts.ready.then(() => requestAnimationFrame(finish));
    } else {
      requestAnimationFrame(finish);
    }
    const safety = setTimeout(finish, 6000);

    return () => {
      cancelled = true;
      clearTimeout(safety);
    };
  }, []);

  if (removed) return null;

  return (
    <LoaderVisual
      style={{
        opacity: hidden ? 0 : 1,
        transition: "opacity 350ms ease",
        pointerEvents: hidden ? "none" : undefined,
      }}
      // remove from the DOM after the fade so it can't trap paint
      onTransitionEnd={() => {
        if (hidden) setRemoved(true);
      }}
    />
  );
}
