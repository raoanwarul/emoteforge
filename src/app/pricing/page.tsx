import type { Metadata } from "next";
import PricingClient from "@/components/PricingClient";

export const metadata: Metadata = {
  title: "Pricing & Pro — Get EmoteForge Pro",
  description:
    "Unlock unlimited bulk pack resizes, unlimited AI background removal, and premium animations with a one-time EmoteForge Pro lifetime license.",
  alternates: { canonical: "/pricing" },
};

export default function Pricing() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-10">
        <span className="inline-block rounded-full border border-violet-500/50 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-400">
          Pricing Plans
        </span>
        <h1 className="mt-4 text-3xl font-bold text-zinc-50 sm:text-4xl">
          Upgrade to EmoteForge Pro
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-400">
          Create and resize your Twitch, Kick, and Discord assets faster than ever. Upgrade to a lifetime Pro key or keep using the basic tools for free.
        </p>
      </div>

      <PricingClient />

      <p className="mt-12 text-center text-xs text-zinc-600">
        Have questions or need help? Contact support or share feedback. By upgrading, you directly support the independent development of EmoteForge. Thank you! 💜
      </p>
    </div>
  );
}
