import Link from "next/link";

const toolLinks = [
  { href: "/twitch-emote-maker", label: "Twitch Emote Maker" },
  { href: "/twitch-sub-badge-maker", label: "Sub Badge Maker" },
  { href: "/twitch-bit-badge-maker", label: "Bits Badge Maker" },
  { href: "/kick-emote-maker", label: "Kick Emote Maker" },
  { href: "/7tv-emote-maker", label: "7TV Emote Maker" },
  { href: "/bttv-emote-maker", label: "BTTV / FFZ Maker" },
  { href: "/discord-sticker-maker", label: "Discord Sticker Maker" },
  { href: "/emote-resizer", label: "Emote Resizer" },
  { href: "/emote-background-remover", label: "Background Remover" },
  { href: "/emote-board", label: "Emote Board" },
  { href: "/bulk-emote-pack", label: "Bulk Pack" },
];

const resourceLinks = [
  { href: "/blog", label: "Guides & Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog/twitch-emote-sizes-guide", label: "Twitch Emote Sizes Guide" },
  { href: "/blog/how-to-make-animated-twitch-emotes", label: "Animated Emotes Tutorial" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Footer Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-sm font-bold text-zinc-200">
              <span>🔥</span> EmoteForge
            </div>
            <p className="mt-3 text-xs leading-relaxed text-zinc-500">
              Free, browser-based emote and badge maker for Twitch, Kick, 7TV, BTTV, FFZ and Discord.
              100% private — your images never leave your device.
            </p>
          </div>

          {/* Tools */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Tools
            </div>
            <ul className="space-y-1.5">
              {toolLinks.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="text-xs text-zinc-500 transition hover:text-zinc-200"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Resources
            </div>
            <ul className="space-y-1.5">
              {resourceLinks.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="text-xs text-zinc-500 transition hover:text-zinc-200"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About / Trust */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              About
            </div>
            <ul className="space-y-1.5 text-xs text-zinc-500">
              <li>✓ 100% free, no signup</li>
              <li>✓ Runs entirely in-browser</li>
              <li>✓ No images uploaded to servers</li>
              <li>✓ Works on desktop & mobile</li>
              <li>✓ Supports animated GIF emotes</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center gap-2 border-t border-zinc-800/60 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} EmoteForge · Not affiliated with Twitch, Kick, or Discord.
          </p>
          <p className="text-xs text-zinc-600">
            Made with ❤️ for the streaming community
          </p>
        </div>
      </div>
    </footer>
  );
}
