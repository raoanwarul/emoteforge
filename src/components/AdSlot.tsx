"use client";

import { useEffect, useRef, useState } from "react";

const CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

/**
 * Google AdSense display slot.
 * - Renders nothing when no client ID is configured.
 * - Starts collapsed while the ad auction runs.
 * - Expands only if the slot is actually filled.
 * - Stays collapsed forever if the slot is unfilled.
 * This avoids blank ad placeholders during review and normal browsing.
 */
export default function AdSlot({
  slot,
  className = "",
  format = "auto",
}: {
  slot: string;
  className?: string;
  format?: string;
}) {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);
  const [adFilled, setAdFilled] = useState<boolean | null>(null); // null = not checked yet

  useEffect(() => {
    if (!CLIENT_ID || pushed.current || !insRef.current) return;
    pushed.current = true;

    try {
      // @ts-expect-error adsbygoogle is injected by the AdSense script.
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blocker or script not loaded — treat as unfilled.
      queueMicrotask(() => setAdFilled(false));
      return;
    }

    // Poll briefly for the data-ad-status attribute AdSense sets after the
    // auction completes. "filled" means an ad was served; anything else means
    // the slot is empty and we collapse the container.
    let attempts = 0;
    const timer = window.setInterval(() => {
      const status = insRef.current?.getAttribute("data-ad-status");
      if (status) {
        setAdFilled(status === "filled");
        clearInterval(timer);
        return;
      }
      // Give up after ~5 seconds (50 × 100 ms).
      if (++attempts >= 50) {
        setAdFilled(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Never render when no publisher ID (dev / pre-approval).
  if (!CLIENT_ID) return null;

  // Keep the node in the DOM so AdSense can inspect/fill it, but collapse it
  // visually until we know the slot is actually filled.
  const wrapperClass =
    adFilled === true
      ? `my-8 overflow-hidden text-center ${className}`
      : "m-0 max-h-0 overflow-hidden opacity-0 pointer-events-none";

  return (
    <div className={wrapperClass} aria-hidden={adFilled !== true}>
      {adFilled === true && (
        <span className="mb-1 block text-[10px] uppercase tracking-wider text-zinc-600 dark:text-zinc-700">
          Advertisement
        </span>
      )}
      <ins
        ref={insRef}
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
