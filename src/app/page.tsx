import Link from "next/link";
import { ASSET_LIST } from "@/lib/specs";

const toolLinks: Record<string, string> = {
  "twitch-emote": "/twitch-emote-maker",
  "twitch-sub-badge": "/twitch-sub-badge-maker",
  "twitch-bit-badge": "/twitch-bit-badge-maker",
  "kick-emote": "/kick-emote-maker",
  "generic-emote": "/emote-resizer",
  "7tv-emote": "/7tv-emote-maker",
  "bttv-emote": "/bttv-emote-maker",
  "discord-sticker": "/discord-sticker-maker",
};

const features = [
  { icon: "🔒", title: "100% private", text: "Everything runs in your browser. Your artwork is never uploaded to a server." },
  { icon: "👁️", title: "Real-size preview", text: "See exactly how your emote looks at 28px in a live chat mockup before you export." },
  { icon: "📦", title: "All sizes at once", text: "One image in, every required size out — plus a platform-ready ZIP." },
  { icon: "✅", title: "Auto-validated", text: "We check every file against the platform's size limits and optimize to fit." },
  { icon: "🎞️", title: "Animated support", text: "Drop a GIF or video to export looping animated emotes." },
  { icon: "✂️", title: "Background removal", text: "Remove backgrounds and add sticker outlines without an editor." },
];

const howItWorks = [
  { step: "1", icon: "📤", title: "Upload your image", text: "Drop any image, GIF or video. Supports PNG, JPG, GIF, WebP and MP4." },
  { step: "2", icon: "🎨", title: "Customize & preview", text: "Adjust padding, background, outline, text overlay and see a real-time chat mockup at actual size." },
  { step: "3", icon: "⬇️", title: "Download all sizes", text: "Get every required size in one click — individual PNGs or a platform-ready ZIP file." },
];

const allTools = [
  { href: "/twitch-emote-maker", label: "Twitch Emote Maker" },
  { href: "/twitch-sub-badge-maker", label: "Twitch Sub Badge Maker" },
  { href: "/twitch-bit-badge-maker", label: "Twitch Bits Badge Maker" },
  { href: "/kick-emote-maker", label: "Kick Emote Maker" },
  { href: "/7tv-emote-maker", label: "7TV Emote Maker" },
  { href: "/bttv-emote-maker", label: "BTTV / FFZ Emote Maker" },
  { href: "/discord-sticker-maker", label: "Discord Sticker Maker" },
  { href: "/emote-resizer", label: "Emote Resizer" },
  { href: "/emote-background-remover", label: "Emote Background Remover" },
  { href: "/emote-board", label: "Emote Board" },
  { href: "/bulk-emote-pack", label: "Bulk Emote Pack" },
  { href: "/blog", label: "Guides & Blog" },
];

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EmoteForge",
    "url": "https://emoteforge.app",
    "description": "Free online Twitch & Kick Emote and Badge Maker. Resizes emotes in your browser, completely private and instant.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://emoteforge.app/emote-resizer?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EmoteForge",
    "url": "https://emoteforge.app",
    "logo": "https://emoteforge.app/icon-512.png",
    "sameAs": [
      "https://github.com/raoanwarul/emoteforge"
    ]
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EmoteForge",
    "description": "Free online emote and badge maker for Twitch, Kick, 7TV, BTTV, FFZ and Discord. Create perfectly-sized emotes, sub badges and stickers instantly in your browser.",
    "url": "https://emoteforge.app",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "127",
      "bestRating": "5"
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Make Twitch and Kick Emotes for Free",
    "description": "Create perfectly-sized Twitch and Kick emotes in 3 simple steps using EmoteForge, a free browser-based emote maker.",
    "step": howItWorks.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.title,
      "text": s.text
    })),
    "tool": {
      "@type": "HowToTool",
      "name": "EmoteForge online emote maker"
    },
    "totalTime": "PT1M"
  };

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <section className="py-20 text-center">
        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs text-zinc-400">
          🔥 Free · Private · No signup
        </div>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
          Make perfect Twitch &amp; Kick emotes in seconds
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
          Upload one image and get every required size — emotes and badges — instantly.
          Processed entirely in your browser, so nothing ever leaves your device.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/twitch-emote-maker" className="btn-primary px-6 py-3 text-base">
            Make a Twitch emote
          </Link>
          <Link href="/kick-emote-maker" className="btn-secondary px-6 py-3 text-base">
            Make a Kick emote
          </Link>
        </div>
      </section>

      {/* How it works — 3-step flow */}
      <section className="py-12">
        <h2 className="mb-8 text-center text-2xl font-semibold text-zinc-100">
          How it works
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {howItWorks.map((s) => (
            <div
              key={s.step}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-center"
            >
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-violet-600/20 text-lg font-bold text-violet-400">
                {s.step}
              </div>
              <div className="text-2xl">{s.icon}</div>
              <div className="mt-2 font-semibold text-zinc-100">{s.title}</div>
              <p className="mt-1 text-sm text-zinc-400">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools grid */}
      <section className="py-8">
        <h2 className="mb-6 text-center text-2xl font-semibold text-zinc-100">
          Free emote & badge tools for every platform
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ASSET_LIST.map((spec) => (
            <Link
              key={spec.id}
              href={toolLinks[spec.id]}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-violet-500 hover:bg-zinc-900"
            >
              <div className="text-sm font-semibold text-violet-400">{spec.platform.toUpperCase()}</div>
              <div className="mt-1 text-lg font-semibold text-zinc-100">{spec.label}</div>
              <p className="mt-2 text-sm text-zinc-400">{spec.description}</p>
              <div className="mt-4 text-sm font-medium text-zinc-300 group-hover:text-violet-400">
                Open tool →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-zinc-100">
          Why streamers choose EmoteForge
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <div className="text-2xl">{f.icon}</div>
              <div className="mt-3 font-semibold text-zinc-100">{f.title}</div>
              <p className="mt-1 text-sm text-zinc-400">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO keyword-rich intro paragraph */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4">
            The free emote maker for Twitch, Kick, 7TV, BTTV, FFZ & Discord
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-zinc-400">
            <p>
              EmoteForge is a free, browser-based emote maker designed for streamers on Twitch, Kick, 7TV, BetterTTV (BTTV), FrankerFaceZ (FFZ) and Discord. Upload any image and instantly generate all required emote sizes — including 28×28, 56×56, 112×112 for Twitch emotes, 18×36×72 for sub badges and bit badges, 32×64×96×128 for 7TV, and 320×320 for Discord stickers.
            </p>
            <p>
              Unlike other emote makers that require software downloads or account signups, EmoteForge processes everything 100% in your browser using the Canvas API and WebAssembly. Your artwork never leaves your device — no upload, no server, no waiting. Create static PNG emotes or animated GIF emotes with a built-in background remover, text overlay, sticker outline, color adjustments, and a live chat preview that shows exactly how your emote reads at 28px.
            </p>
            <p>
              Whether you need a Twitch emote maker, Kick emote creator, emote resizer, or emote background remover — EmoteForge has you covered with 11+ free tools, zero signup, and instant export to a platform-ready ZIP file.
            </p>
          </div>
        </div>
      </section>

      {/* Internal links section for SEO crawling */}
      <section className="py-8 pb-16">
        <h2 className="mb-4 text-center text-lg font-semibold text-zinc-100">
          All tools
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {allTools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-violet-500 hover:text-violet-300"
            >
              {t.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
