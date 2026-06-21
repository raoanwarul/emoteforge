import type { Metadata } from "next";
import Link from "next/link";
import { POSTS_SORTED } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Emote Guides & Tutorials — Blog",
  description:
    "Guides, specs and tutorials for making Twitch and Kick emotes and badges: exact sizes, animated emotes, file-size limits and more.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-10 rounded-[28px] border border-zinc-800 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.12),_transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,244,245,0.98))] px-6 py-10 text-center shadow-[0_18px_48px_rgba(24,24,27,0.10)] sm:px-10">
        <div className="inline-flex rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-700 dark:border-violet-500/20 dark:bg-violet-600/10 dark:text-violet-300">
          Editorial Guides
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Emote guides &amp; tutorials
        </h1>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-zinc-300">
          Everything you need to know about emote sizes, badges, animation and
          getting your art approved on Twitch and Kick.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
          No filler, no vague templates. Each post focuses on exact sizes,
          platform limits, upload steps, and the mistakes that usually cause
          rejections.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {POSTS_SORTED.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-zinc-300/60 bg-zinc-900/40 p-6 transition hover:-translate-y-0.5 hover:border-violet-500 hover:bg-zinc-900 dark:border-zinc-800"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-zinc-800 text-2xl">
                {post.hero}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-600/15 dark:text-violet-300">
                  {post.tag}
                </span>
                {post.author && (
                  <span className="rounded-full border border-zinc-400/60 px-2.5 py-0.5 text-[11px] text-zinc-400 dark:border-zinc-700">
                    {post.author}
                  </span>
                )}
              </div>
            </div>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-violet-700 dark:group-hover:text-violet-300">
              {post.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-7 text-zinc-400">
              {post.description}
            </p>
            <div className="mt-4 flex items-center justify-between gap-4 text-xs text-zinc-500">
              <span>{formatDate(post.date)}</span>
              <span>{post.readMinutes} min read</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
