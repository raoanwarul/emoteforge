import Link from "next/link";
import { ASSET_LIST } from "@/lib/specs";
import { POSTS_SORTED } from "@/lib/blog";

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

const howItWorks = [
  { step: "1", icon: "📤", title: "Upload your image", text: "Drop any image, GIF or video. Supports PNG, JPG, GIF, WebP and MP4." },
  { step: "2", icon: "🎨", title: "Customize & preview", text: "Adjust padding, background, outline, text overlay and see a real-time chat mockup at actual size." },
  { step: "3", icon: "⬇️", title: "Download all sizes", text: "Get every required size in one click — individual PNGs or a platform-ready ZIP file." },
];

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EmoteForge",
    "url": "https://www.emoteforge.app",
    "description": "Free online Twitch & Kick Emote and Badge Maker. Resizes emotes in your browser, completely private and instant.",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EmoteForge",
    "url": "https://www.emoteforge.app",
    "logo": "https://www.emoteforge.app/icon-512.png",
    "sameAs": [
      "https://github.com/raoanwarul/emoteforge"
    ]
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EmoteForge",
    "description": "Free online emote and badge maker for Twitch, Kick, 7TV, BTTV, FFZ and Discord. Create perfectly-sized emotes, sub badges and stickers instantly in your browser.",
    "url": "https://www.emoteforge.app",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
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
      <section className="py-8 pb-16">
        <h2 className="mb-6 text-center text-2xl font-semibold text-zinc-100">
          Free emote &amp; badge tools for every platform
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

      {/* Guides & Tutorials */}
      <section className="border-t border-zinc-900 py-16 pb-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-zinc-100 sm:text-3xl">
            Emote guides &amp; tutorials
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400">
            Learn about exact dimensions, requirements, animation tricks, and specifications for Twitch and Kick.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {POSTS_SORTED.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 transition hover:border-violet-500 hover:bg-zinc-900/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-800/80 text-xl">
                  {post.hero}
                </span>
                <span className="rounded-full bg-violet-600/15 px-2.5 py-0.5 text-xs font-medium text-violet-300">
                  {post.tag}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-zinc-100 group-hover:text-violet-300">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-zinc-400">
                {post.description}
              </p>
              <div className="mt-4 text-xs font-medium text-zinc-300 group-hover:text-violet-400">
                Read guide →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
