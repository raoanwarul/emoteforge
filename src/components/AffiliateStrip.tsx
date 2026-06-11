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

  if (compact) {
    return (
      <section
        className={`rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 ${className}`}
        aria-label="Recommended partners"
      >
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <h3 className="text-sm font-semibold text-zinc-100">
            {heading ?? copy.heading}
          </h3>
          <span className="shrink-0 text-[10px] uppercase tracking-wider text-zinc-600">
            Ad · affiliate
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
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

  return (
    // Outer wrapper: gradient border via padding trick
    <div className={`relative rounded-2xl p-[1.5px] ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(139,92,246,0.7) 0%, rgba(168,85,247,0.5) 40%, rgba(236,72,153,0.4) 100%)",
        boxShadow: "0 0 28px rgba(139,92,246,0.18), 0 2px 8px rgba(0,0,0,0.4)",
      }}
    >
      <section
        className="rounded-2xl p-5"
        style={{
          background: "linear-gradient(135deg, rgba(30,18,54,0.97) 0%, rgba(24,18,42,0.99) 60%, rgba(26,16,36,1) 100%)",
        }}
        aria-label="Recommended partners"
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between gap-2">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-bold text-zinc-100">
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs"
                style={{ background: "linear-gradient(135deg,#7c3aed,#db2777)", boxShadow: "0 0 10px rgba(139,92,246,0.5)" }}
                aria-hidden
              >
                ✦
              </span>
              {heading ?? copy.heading}
            </h3>
            <p className="mt-0.5 pl-8 text-xs text-zinc-400">{subheading ?? copy.sub}</p>
          </div>
          <span className="shrink-0 rounded-full border border-zinc-700 px-2 py-0.5 text-[9px] uppercase tracking-widest text-zinc-500">
            Ad · affiliate
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-3 sm:grid-cols-3">
          {items.map((a) => (
            <AffiliateItem key={a.id} affiliate={a} context={context} compact={false} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-[10px] leading-relaxed text-zinc-600">
          These are affiliate links — EmoteForge may earn a commission if you buy
          through them, at no extra cost to you.{" "}
          <a href="/recommended" className="underline transition hover:text-zinc-400">
            Learn more
          </a>
          .
        </p>
      </section>
    </div>
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
      className="group flex flex-col rounded-xl border border-zinc-700/60 p-3 transition-all duration-200 hover:border-violet-500/70"
      style={{
        background: "rgba(255,255,255,0.03)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 18px rgba(139,92,246,0.22), inset 0 1px 0 rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.07)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "inset 0 1px 0 rgba(255,255,255,0.04)";
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
      }}
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
      <span className="mt-2 text-xs font-semibold text-violet-400 transition group-hover:text-violet-300">
        {affiliate.cta} →
      </span>
    </a>
  );
}
