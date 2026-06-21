"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
}

export default function ArticleSidebar({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-12% 0px -68% 0px", threshold: 0 },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="lg:sticky lg:top-24 space-y-4">
      {/* TOC card */}
      <div className="rounded-2xl border border-zinc-300/60 bg-white/90 p-5 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-[0_8px_32px_rgba(0,0,0,0.22)]">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-violet-700 dark:text-violet-300">
          On This Page
        </p>
        <nav aria-label="Table of contents">
          <ul className="space-y-0.5">
            {headings.map((heading, i) => {
              const isActive = activeId === heading.id;
              return (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    className={`group flex items-start gap-2.5 rounded-xl px-3 py-2 text-sm leading-snug transition-all duration-150 ${
                      isActive
                        ? "bg-violet-50 font-semibold text-violet-700 dark:bg-violet-500/15 dark:text-violet-300"
                        : "text-zinc-500 hover:bg-zinc-100/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100"
                    }`}
                  >
                    <span
                      className={`mt-0.5 min-w-[1.5rem] text-[10px] font-black tabular-nums leading-none transition-colors ${
                        isActive
                          ? "text-violet-500 dark:text-violet-400"
                          : "text-zinc-300 dark:text-zinc-600"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-5">{heading.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Tip card */}
      <div className="rounded-2xl border border-zinc-300/60 bg-white/90 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900/70">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-400 dark:text-zinc-500">
          Quick tip
        </p>
        <p className="mt-2 text-xs leading-5 text-zinc-400 dark:text-zinc-500">
          Hover any section heading and click the link icon to share that exact part of the guide.
        </p>
      </div>
    </aside>
  );
}
