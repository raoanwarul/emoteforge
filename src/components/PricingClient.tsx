"use client";

import Link from "next/link";
import { useState } from "react";
import { usePro } from "@/lib/pro";

const freeFeatures = [
  "Standard image resizing & specs",
  "Animated emote export (GIF)",
  "Standard animations (Bounce, Shake, Pulse)",
  "AI background removal (3 per session)",
  "Bulk processing (up to 2 images)",
  "100% private, runs in browser",
];

const proFeatures = [
  "Everything in Free, plus:",
  "Unlimited bulk pack ZIP exports",
  "Unlimited AI background removals",
  "Premium animations (Rainbow & Spin)",
  "No watermark, priority updates",
  "One-time payment, lifetime access",
];

export default function PricingClient() {
  const { isPro, activate, deactivate, licenseKey } = usePro();
  const [key, setKey] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#";

  async function handleActivate(e: React.FormEvent) {
    e.preventDefault();
    if (!key.trim()) return;
    setBusy(true);
    setError("");
    setSuccessMsg("");
    const res = await activate(key);
    setBusy(false);
    if (res.ok) {
      setSuccessMsg("EmoteForge Pro activated successfully! 🎉");
      setKey("");
    } else {
      setError(res.error ?? "Activation failed.");
    }
  }

  if (isPro) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-violet-500/30 bg-zinc-900/40 p-8 text-center backdrop-blur-sm">
        <span className="inline-block rounded-full border border-violet-500/50 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-400">
          Pro Activated
        </span>
        <h2 className="mt-4 text-2xl font-bold text-zinc-50">
          You have EmoteForge Pro!
        </h2>
        <p className="mt-3 text-sm text-zinc-400">
          Thank you for supporting EmoteForge. All premium features, unlimited background removal, unlimited bulk resizes, and premium animations are fully unlocked on this browser.
        </p>

        {licenseKey && (
          <div className="mt-6 rounded-lg bg-zinc-950 p-3 text-xs text-zinc-500">
            Active Key: <code className="text-zinc-300">{licenseKey}</code>
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/twitch-emote-maker"
            className="rounded-lg bg-violet-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-violet-500 transition-colors"
          >
            Go to Emote Maker
          </Link>
          <button
            onClick={() => {
              deactivate();
              setSuccessMsg("");
            }}
            className="rounded-lg border border-zinc-800 bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200 transition-colors"
          >
            Deactivate License
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Comparison Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Free Plan */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-zinc-50">Free Tier</h3>
                <p className="text-xs text-zinc-400 mt-1">For casual streamers</p>
              </div>
              <span className="text-2xl font-extrabold text-zinc-50">$0</span>
            </div>
            <div className="h-px bg-zinc-800/80 my-4" />
            <ul className="space-y-2.5 text-sm text-zinc-300">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="text-emerald-400 shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <Link
              href="/twitch-emote-maker"
              className="block w-full rounded-lg border border-zinc-700 bg-transparent px-4 py-2.5 text-center text-sm font-semibold text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 transition-colors"
            >
              Start Creating
            </Link>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="rounded-2xl border border-violet-500/40 bg-zinc-900/40 p-6 flex flex-col justify-between relative shadow-lg shadow-violet-950/20">
          <div className="absolute -top-3 right-6 rounded-full bg-violet-600 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            Best Value
          </div>
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-zinc-50">EmoteForge Pro</h3>
                <p className="text-xs text-violet-300 mt-1">For serious creators</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-zinc-50">$19</span>
                <span className="text-xs text-zinc-400 block">one-time payment</span>
              </div>
            </div>
            <div className="h-px bg-violet-500/20 my-4" />
            <ul className="space-y-2.5 text-sm text-zinc-300 font-medium">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="text-violet-400 shrink-0">★</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            {checkoutUrl === "#" ? (
              <div className="text-center">
                <button
                  disabled
                  className="w-full cursor-not-allowed rounded-lg bg-zinc-800 px-4 py-2.5 text-sm font-semibold text-zinc-500"
                >
                  Checkout Unavailable
                </button>
                <p className="text-[10px] text-zinc-500 mt-1">
                  Configure NEXT_PUBLIC_CHECKOUT_URL in env file.
                </p>
              </div>
            ) : (
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-violet-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-violet-500 shadow-sm shadow-violet-800/20 transition-all hover:scale-[1.01]"
              >
                Unlock Pro Lifetime — $19
              </a>
            )}
          </div>
        </div>
      </div>

      {/* License Key Activation Section */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 max-w-lg mx-auto">
        <h4 className="text-sm font-semibold text-zinc-200 text-center mb-1">
          Already purchased a license?
        </h4>
        <p className="text-xs text-zinc-500 text-center mb-4">
          Enter your license key below to unlock EmoteForge Pro on this browser.
        </p>
        <form onSubmit={handleActivate} className="flex gap-2">
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="XXXX-XXXX-XXXX-XXXX"
            className="input flex-1 py-2 text-sm"
            disabled={busy}
          />
          <button
            type="submit"
            disabled={busy || !key.trim()}
            className="btn-primary py-2 px-4 text-xs font-semibold shrink-0"
          >
            {busy ? "Activating…" : "Activate"}
          </button>
        </form>
        {error && <p className="mt-2 text-xs text-red-400 text-center">{error}</p>}
        {successMsg && (
          <p className="mt-2 text-xs text-emerald-400 text-center font-medium">
            {successMsg}
          </p>
        )}
      </div>
    </div>
  );
}
