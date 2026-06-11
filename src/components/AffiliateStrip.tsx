"use client";

import { track } from "@/lib/analytics";
import {
  getAffiliates,
  type Affiliate,
  type AffiliateContext,
} from "@/lib/affiliates";

interface Props {
  context: AffiliateContext;
  heading?: string;
  subheading?: string;
  limit?: number;
  /** Compact chip row (used in tight spots like the downloads card). */
  compact?: boolean;
  className?: string;
}

const DEFAULT_COPY: Record<AffiliateContext, { heading: string; sub: string }> = {
  emotes: {
    heading: "Don't have artwork yet?",
    sub: "Get ready-made emotes or hire a custom artist.",
  },
  badges: {
    heading: "Need matching sub & bit badges?",
    sub: "Grab pro badge packs or commission a designer.",
  },
  overlays: {
    heading: "Complete your stream look",
    sub: "Premium overlays, alerts and panels.",
  },
  export: {
    heading: "Level up your whole stream",
    sub: "Overlays, alerts, stream-safe music and gear.",
  },
  general: {
    heading: "Recommended for streamers",
    sub: "Hand-picked tools and assets to grow your channel.",
  },
};

export default function AffiliateStrip({
  context,
  heading,
  subheading,
  limit = 3,
  compact = false,
  className = "",
}: Props) {
  const items = getAffiliates(context, limit);
  if (items.length === 0) return null;

  const copy = DEFAULT_COPY[context];

  return (
    <section
      className={`rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 ${className}`}
      aria-label="Recommended partners"
    >
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-zinc-100">
            {heading ?? copy.heading}
          </h3>
          {!compact && (
            <p className="text-xs text-zinc-500">{subheading ?? copy.sub}</p>
          )}
        </div>
        <span className="shrink-0 text-[10px] uppercase tracking-wider text-zinc-600">
          Ad · affiliate
        </span>
      </div>

      <div className={compact ? "flex flex-wrap gap-2" : "grid gap-3 sm:grid-cols-3"}>
        {items.map((a) => (
          <AffiliateItem key={a.id} affiliate={a} context={context} compact={compact} />
        ))}
      </div>

      <p className="mt-3 text-[10px] leading-relaxed text-zinc-600">
        These are affiliate links — EmoteForge may earn a commission if you buy
        through them, at no extra cost to you.{" "}
        <a href="/recommended" className="underline transition hover:text-zinc-400">
          Learn more
        </a>
        .
      </p>
    </section>
  );
}

function AffiliateItem({
  affiliate,
  context,
  compact,
}: {
  affiliate: Affiliate;
  context: AffiliateContext;
  compact: boolean;
}) {
  const onClick = () =>
    track("affiliate_click", { partner: affiliate.id, context });

  if (compact) {
    return (
      <a
        href={affiliate.url}
        target="_blank"
        rel="sponsored noopener noreferrer"
        onClick={onClick}
        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-violet-500/60 hover:text-white"
      >
        <span aria-hidden>{affiliate.icon}</span>
        {affiliate.name}
      </a>
    );
  }

  return (
    <a
      href={affiliate.url}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={onClick}
      className="group flex flex-col rounded-xl border border-zinc-700 bg-zinc-800/40 p-3 transition hover:border-violet-500/60"
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
        <span className="text-base" aria-hidden>
          {affiliate.icon}
        </span>
        {affiliate.name}
      </div>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-zinc-400">
        {affiliate.blurb}
      </p>
      <span className="mt-2 text-xs font-medium text-violet-400 transition group-hover:text-violet-300">
        {affiliate.cta} →
      </span>
    </a>
  );
}
