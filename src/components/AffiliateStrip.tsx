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
        className={`rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm ${className}`}
        aria-label="Recommended partners"
      >
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <h3 className="text-sm font-semibold text-zinc-800">
            {heading ?? copy.heading}
          </h3>
          <span className="shrink-0 text-[9px] uppercase tracking-widest text-zinc-400">
            Ad · affiliate
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((a) => (
            <AffiliateItem key={a.id} affiliate={a} context={context} compact />
          ))}
        </div>
        <p className="mt-3 text-[10px] leading-relaxed text-zinc-400">
          These are affiliate links — EmoteForge may earn a commission if you buy
          through them, at no extra cost to you.{" "}
          <a href="/recommended" className="underline hover:text-zinc-600 transition">
            Learn more
          </a>
          .
        </p>
      </section>
    );
  }

  return (
    <section
      className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}
      style={{
        background: "#ffffff",
        border: "1.5px solid rgba(139,92,246,0.25)",
        boxShadow: "0 4px 24px rgba(139,92,246,0.10), 0 1px 4px rgba(0,0,0,0.06)",
      }}
      aria-label="Recommended partners"
    >
      {/* Subtle gradient accent strip at top */}
      <div
        className="h-[3px] w-full"
        style={{ background: "linear-gradient(90deg,#7c3aed,#a855f7,#ec4899)" }}
        aria-hidden
      />

      <div className="p-5">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between gap-2">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-bold" style={{ color: "#18181b" }}>
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white"
                style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)" }}
                aria-hidden
              >
                ✦
              </span>
              {heading ?? copy.heading}
            </h3>
            <p className="mt-0.5 pl-7 text-xs" style={{ color: "#71717a" }}>{subheading ?? copy.sub}</p>
          </div>
          <span className="shrink-0 rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-widest" style={{ border: "1px solid #e4e4e7", background: "#fafafa", color: "#a1a1aa" }}>
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
        <p className="mt-4 text-[10px] leading-relaxed text-zinc-400">
          These are affiliate links — EmoteForge may earn a commission if you buy
          through them, at no extra cost to you.{" "}
          <a href="/recommended" className="underline hover:text-zinc-600 transition">
            Learn more
          </a>
          .
        </p>
      </div>
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
        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-700 transition hover:border-violet-400 hover:text-violet-700"
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
      className="group flex flex-col rounded-xl p-3.5 transition-all duration-200"
      style={{ background: "#f8f8fa", border: "1px solid #e8e4f0" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "#f3effe";
        el.style.borderColor = "#c4b5fd";
        el.style.boxShadow = "0 2px 12px rgba(139,92,246,0.12)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "#f8f8fa";
        el.style.borderColor = "#e8e4f0";
        el.style.boxShadow = "none";
      }}
    >
      <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#18181b" }}>
        <span className="text-base" aria-hidden>
          {affiliate.icon}
        </span>
        {affiliate.name}
      </div>
      <p className="mt-1.5 flex-1 text-xs leading-relaxed" style={{ color: "#71717a" }}>
        {affiliate.blurb}
      </p>
      <span className="mt-2.5 text-xs font-semibold" style={{ color: "#7c3aed" }}>
        {affiliate.cta} →
      </span>
    </a>
  );
}
