import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          {/* Left — brand + disclaimer */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <div className="flex items-center gap-2 text-sm font-bold text-zinc-200">
              <span>🔥</span> EmoteForge
            </div>
            <p className="text-[11px] text-zinc-600">
              © {new Date().getFullYear()} EmoteForge · Not affiliated with Twitch, Kick, or Discord.
            </p>
          </div>

          {/* Center — quick links */}
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-zinc-500">
              <Link href="/blog" className="transition hover:text-zinc-200">Blog</Link>
              <Link href="/about" className="transition hover:text-zinc-200">About</Link>
              <Link href="/contact" className="transition hover:text-zinc-200">Contact</Link>
              <Link href="/emote-resizer" className="transition hover:text-zinc-200">Emote Resizer</Link>
              <Link href="/emote-background-remover" className="transition hover:text-zinc-200">BG Remover</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-zinc-600">
              <Link href="/privacy-policy" className="transition hover:text-zinc-300">Privacy Policy</Link>
              <Link href="/terms" className="transition hover:text-zinc-300">Terms of Service</Link>
            </div>
          </div>

          {/* Right — credit */}
          <p className="text-[11px] text-zinc-600">Built by Arvindesh Malhotra</p>
        </div>
      </div>
    </footer>
  );
}
