import type { Metadata } from "next";
import { getAllAffiliates } from "@/lib/affiliates";
import { track } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Recommended Streamer Tools & Assets — EmoteForge",
  description:
    "Hand-picked tools, asset packs and services for Twitch, Kick, YouTube and Discord streamers — emotes, overlays, alerts, stream-safe music and gear.",
  alternates: { canonical: "/recommended" },
};

// Category labels for the tag pills shown on each card
const CONTEXT_LABELS: Record<string, string> = {
  emotes: "Emotes & Badges",
  badges: "Emotes & Badges",
  overlays: "Overlays & Alerts",
  export: "Stream Tools",
  general: "General",
};

export default function RecommendedPage() {
  const affiliates = getAllAffiliates();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-violet-500/50 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-400">
          Recommended
        </span>
        <h1 className="mt-4 text-3xl font-bold text-zinc-50 sm:text-4xl">
          Tools &amp; assets we recommend for streamers
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
          EmoteForge keeps your emotes and badges perfectly sized and private.
          For everything else — finished art packs, overlays, alerts, music and
          gear — these are the partners we trust.
        </p>
      </div>

      {/* All affiliates — one grid, no duplicates */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {affiliates.map((a) => {
          // Pick the most specific label from the affiliate's contexts
          const primaryContext =
            a.contexts.find((c) => c !== "general" && c !== "export") ??
            a.contexts[0];
          const label = CONTEXT_LABELS[primaryContext] ?? "General";

          return (
            <a
              key={a.id}
              href={a.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={() =>
                track("affiliate_click", {
                  partner: a.id,
                  context: "recommended-page",
                })
              }
              className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-all duration-200 hover:border-violet-500/60 hover:bg-zinc-900/70"
            >
              {/* Icon + Name */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl" aria-hidden>
                    {a.icon}
                  </span>
                  <span className="text-sm font-semibold text-zinc-100">
                    {a.name}
                  </span>
                </div>
                <span className="shrink-0 rounded-full border border-zinc-700 bg-zinc-800 px-2 py-0.5 text-[9px] uppercase tracking-wider text-zinc-500">
                  {label}
                </span>
              </div>

              {/* Blurb */}
              <p className="mt-2 flex-1 text-xs leading-relaxed text-zinc-400">
                {a.blurb}
              </p>

              {/* CTA */}
              <span className="mt-3 text-xs font-semibold text-violet-400 transition group-hover:text-violet-300">
                {a.cta} →
              </span>
            </a>
          );
        })}
      </div>

      {/* Affiliate disclosure */}
      <section className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
        <h2 className="mb-2 text-lg font-semibold text-zinc-100">
          Affiliate disclosure
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Some links on this page and throughout EmoteForge are affiliate links.
          If you click one and make a purchase, EmoteForge may earn a small
          commission — at no extra cost to you. We only recommend products we
          believe are genuinely useful to streamers. Commissions help keep the
          core EmoteForge tools free and privacy-friendly.
        </p>
      </section>
    </div>
  );
}
