import type { Metadata } from "next";
import { getAllAffiliates } from "@/lib/affiliates";

export const metadata: Metadata = {
  title: "Recommended Streamer Tools & Assets — EmoteForge",
  description:
    "Hand-picked tools, asset packs and services for Twitch, Kick, YouTube and Discord streamers — emotes, overlays, alerts, stream-safe music and gear.",
  alternates: { canonical: "/recommended" },
};

const CONTEXT_LABELS: Record<string, string> = {
  emotes: "Emotes & Art",
  badges: "Emotes & Art",
  overlays: "Overlays & Alerts",
  export: "Stream Tools",
  general: "General",
};

export default function RecommendedPage() {
  const affiliates = getAllAffiliates();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Scoped CSS for hover effects (no JS needed) */}
      <style>{`
        .rec-card {
          background: #f8f8fa;
          border: 1px solid #e8e4f0;
          transition: background 0.18s, border-color 0.18s, box-shadow 0.18s;
        }
        .rec-card:hover {
          background: #f3effe;
          border-color: #c4b5fd;
          box-shadow: 0 2px 12px rgba(139,92,246,0.12);
        }
        .rec-card:hover .rec-cta {
          color: #6d28d9;
        }
      `}</style>

      {/* Page header */}
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-violet-500/50 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-400">
          Recommended
        </span>
        <h1 className="mt-4 text-3xl font-bold text-zinc-50 sm:text-4xl">
          Tools &amp; assets we recommend for streamers
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
          EmoteForge keeps your emotes and badges perfectly sized and private.
          For everything else — art packs, overlays, alerts, music and gear —
          these are the partners we trust.
        </p>
      </div>

      {/* White highlighted panel — matches tool-page AffiliateStrip */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-lg"
        style={{
          background: "#ffffff",
          border: "1.5px solid rgba(139,92,246,0.25)",
          boxShadow: "0 4px 24px rgba(139,92,246,0.10), 0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        {/* Violet → pink gradient top accent strip */}
        <div
          className="h-[3px] w-full"
          style={{ background: "linear-gradient(90deg,#7c3aed,#a855f7,#ec4899)" }}
          aria-hidden
        />

        <div className="p-5 sm:p-6">
          {/* Panel heading */}
          <div className="mb-5 flex items-center justify-between gap-2">
            <div>
              <h2
                className="flex items-center gap-2 text-sm font-bold"
                style={{ color: "#18181b" }}
              >
                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)" }}
                  aria-hidden
                >
                  ✦
                </span>
                All recommended partners
              </h2>
              <p className="mt-0.5 pl-7 text-xs" style={{ color: "#71717a" }}>
                Hand-picked tools and assets — each listed once.
              </p>
            </div>
            <span
              className="shrink-0 rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-widest"
              style={{ border: "1px solid #e4e4e7", background: "#fafafa", color: "#a1a1aa" }}
            >
              Ad · affiliate
            </span>
          </div>

          {/* Cards grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {affiliates.map((a) => {
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
                  className="rec-card flex flex-col rounded-xl p-3.5"
                >
                  {/* Icon + Name + Category pill */}
                  <div className="flex items-start justify-between gap-1">
                    <div
                      className="flex items-center gap-2 text-sm font-semibold"
                      style={{ color: "#18181b" }}
                    >
                      <span className="text-base" aria-hidden>{a.icon}</span>
                      {a.name}
                    </div>
                    <span
                      className="shrink-0 rounded-full px-1.5 py-0.5 text-[8px] uppercase tracking-wider"
                      style={{ background: "#f0ebff", color: "#7c3aed", border: "1px solid #ddd6fe" }}
                    >
                      {label}
                    </span>
                  </div>

                  {/* Blurb */}
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed" style={{ color: "#71717a" }}>
                    {a.blurb}
                  </p>

                  {/* CTA */}
                  <span className="rec-cta mt-2.5 text-xs font-semibold" style={{ color: "#7c3aed" }}>
                    {a.cta} →
                  </span>
                </a>
              );
            })}
          </div>

          {/* Disclaimer */}
          <p className="mt-5 text-[10px] leading-relaxed" style={{ color: "#a1a1aa" }}>
            These are affiliate links — EmoteForge may earn a commission if you
            buy through them, at no extra cost to you.
          </p>
        </div>
      </div>

      {/* Affiliate disclosure */}
      <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
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
