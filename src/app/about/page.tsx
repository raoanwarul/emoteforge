import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About EmoteForge",
  description:
    "Learn about EmoteForge — a free, browser-based emote and badge maker for Twitch, Kick, 7TV, BTTV and Discord, built by RAOGY.",
  alternates: { canonical: "/about" },
  robots: { index: true, follow: true },
};

const TOOLS = [
  { name: "Twitch Emote Maker", href: "/twitch-emote-maker", desc: "Export 28, 56 and 112 px transparent PNGs" },
  { name: "Kick Emote Maker", href: "/kick-emote-maker", desc: "Kick-tuned emote output in all required sizes" },
  { name: "7TV Emote Maker", href: "/7tv-emote-maker", desc: "Up to 100×100 px emotes for 7TV" },
  { name: "BTTV Emote Maker", href: "/bttv-emote-maker", desc: "BetterTTV-compatible 28, 56, 112 px exports" },
  { name: "Discord Sticker Maker", href: "/discord-sticker-maker", desc: "320×320 px PNG/APNG stickers under 512 KB" },
  { name: "Twitch Sub Badge Maker", href: "/twitch-sub-badge-maker", desc: "Sub badges at 18, 36 and 72 px" },
  { name: "Twitch Bit Badge Maker", href: "/twitch-bit-badge-maker", desc: "Bits badges at 18, 36 and 72 px" },
  { name: "Emote Background Remover", href: "/emote-background-remover", desc: "AI-powered background removal, fully local" },
  { name: "Emote Resizer", href: "/emote-resizer", desc: "Custom resize to any pixel dimension" },
  { name: "Bulk Emote Pack", href: "/bulk-emote-pack", desc: "Batch-process an entire emote set at once" },
  { name: "Emote Board", href: "/emote-board", desc: "Preview and organise your full emote collection" },
];

const VALUES = [
  {
    icon: "🔒",
    title: "100% Private",
    desc: "Every tool runs entirely in your browser. Your images are processed by WebAssembly and Canvas — they never leave your device or touch our servers.",
  },
  {
    icon: "⚡",
    title: "Instant Results",
    desc: "No upload queues, no wait times. Processing happens locally so results appear within seconds, even for animated GIFs.",
  },
  {
    icon: "🆓",
    title: "Free for Everyone",
    desc: "Core tools are and always will be free. A Pro tier unlocks advanced features like animated emote export and bulk processing.",
  },
  {
    icon: "🎯",
    title: "Platform-Accurate Specs",
    desc: "We research and maintain exact specifications for Twitch, Kick, 7TV, BTTV and Discord so you never upload the wrong size.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Hero */}
      <div className="mb-14 text-center">
        <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-3xl shadow-lg shadow-violet-900/40">
          🔥
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          About EmoteForge
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          A free, browser-based toolkit for streamers who want perfectly-sized
          emotes and badges — without paid software, uploads, or waiting.
        </p>
      </div>

      {/* Story */}
      <section className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-zinc-100">Our Story</h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
          <p>
            EmoteForge was built by{" "}
            <a
              href="https://raogy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-violet-400 hover:text-violet-300"
            >
              RAOGY
            </a>{" "}
            — a developer and streamer who got frustrated spending 20 minutes
            manually resizing a single emote in Photoshop only to have Twitch
            reject it because one file was 2 KB over the limit.
          </p>
          <p>
            The solution was simple: build a tool that knows every platform&apos;s
            exact specifications and handles all the sizing, compression, and
            file naming automatically. EmoteForge launched in 2025 and has since
            helped thousands of streamers on Twitch, Kick, 7TV, BTTV, FFZ, and
            Discord create ready-to-upload emotes in seconds.
          </p>
          <p>
            Everything runs in your browser using WebAssembly (a local FFmpeg
            build for video/GIF processing) and the HTML5 Canvas API. Your
            artwork never leaves your device — there are no servers processing
            your files, no uploads, and no accounts required.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-zinc-100">
          What We Stand For
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-5"
            >
              <div className="text-2xl">{v.icon}</div>
              <h3 className="mt-2 font-semibold text-zinc-100">{v.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools list */}
      <section className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-semibold text-zinc-100">
          Tools We Build
        </h2>
        <ul className="space-y-3">
          {TOOLS.map((tool) => (
            <li key={tool.href} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 text-violet-400">→</span>
              <span>
                <Link
                  href={tool.href}
                  className="font-medium text-zinc-200 hover:text-violet-400"
                >
                  {tool.name}
                </Link>
                <span className="text-zinc-500"> — {tool.desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Creator */}
      <section className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-semibold text-zinc-100">
          The Creator
        </h2>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-600/20 text-xl font-bold text-violet-400">
            R
          </div>
          <div className="text-sm leading-relaxed text-zinc-400">
            <p className="font-semibold text-zinc-200">RAOGY</p>
            <p className="mt-1">
              Developer, designer, and lifelong gamer with experience in web
              tooling, streaming, and browser-based media processing. EmoteForge
              is maintained as an ongoing passion project with a focus on
              performance, privacy, and practical value for the streaming
              community.
            </p>
            <a
              href="https://raogy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-violet-400 hover:text-violet-300"
            >
              raogy.com →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/"
          className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          Try the tools
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-500 hover:text-violet-300"
        >
          Contact us
        </Link>
        <Link
          href="/blog"
          className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-500 hover:text-violet-300"
        >
          Read our guides
        </Link>
      </div>
    </div>
  );
}
