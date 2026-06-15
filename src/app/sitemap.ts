import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";

const base = "https://www.emoteforge.app";

const toolRoutes = [
  "/twitch-emote-maker",
  "/twitch-sub-badge-maker",
  "/twitch-bit-badge-maker",
  "/kick-emote-maker",
  "/emote-resizer",
  "/7tv-emote-maker",
  "/bttv-emote-maker",
  "/discord-sticker-maker",
  "/emote-background-remover",
  "/emote-board",
  "/bulk-emote-pack",
];

const staticRoutes = ["/blog", "/pricing", "/recommended"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const entries: MetadataRoute.Sitemap = [
    // Homepage — highest priority
    {
      url: base,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Tool pages — high priority, weekly crawl
    ...toolRoutes.map((r) => ({
      url: `${base}${r}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    // Static pages
    ...staticRoutes.map((r) => ({
      url: `${base}${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Blog posts
    ...POSTS.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return entries;
}

