import type { Metadata } from "next";
import AffiliateStrip from "@/components/AffiliateStrip";

export const metadata: Metadata = {
  title: "Recommended Streamer Tools & Assets — EmoteForge",
  description:
    "Hand-picked tools, asset packs and services for Twitch, Kick, YouTube and Discord streamers — emotes, overlays, alerts, stream-safe music and gear.",
  alternates: { canonical: "/recommended" },
};

export default function RecommendedPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
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

      <div className="space-y-6">
        <AffiliateStrip context="emotes" limit={6} />
        <AffiliateStrip context="overlays" limit={6} />
        <AffiliateStrip context="export" limit={6} />
      </div>

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
