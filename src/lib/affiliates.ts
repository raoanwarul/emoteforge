// Config-driven affiliate partner registry — single source of truth.
//
// To activate real tracking links, set the matching NEXT_PUBLIC_AFF_* env var
// to your affiliate URL (e.g. NEXT_PUBLIC_AFF_PLACEIT=https://1.envato.market/abc123).
// When a var is unset, the partner's normal homepage is used as a fallback so
// links keep working before you have enrolled in each program.
//
// Add / remove / reorder partners here — every placement updates automatically.

export type AffiliateContext =
  | "emotes"
  | "badges"
  | "overlays"
  | "export"
  | "general";

export interface Affiliate {
  /** Stable id; also the env-var suffix (NEXT_PUBLIC_AFF_<ID_UPPER>). */
  id: string;
  name: string;
  /** Short value proposition shown on the full card. */
  blurb: string;
  /** Call-to-action button label. */
  cta: string;
  /** Emoji icon. */
  icon: string;
  /** Used when no affiliate env var is configured. */
  fallbackUrl: string;
  /** Resolved destination URL (affiliate env var if set, else fallbackUrl). */
  url: string;
  /** Placement contexts this partner appears in. */
  contexts: AffiliateContext[];
  /** Higher shows first. */
  priority: number;
}

// Static references so Next.js can inline NEXT_PUBLIC_* at build time.
// (Dynamic `process.env[key]` is NOT inlined into the client bundle.)
const ENV_URL: Record<string, string | undefined> = {
  placeit: process.env.NEXT_PUBLIC_AFF_PLACEIT,
  own3d: process.env.NEXT_PUBLIC_AFF_OWN3D,
  nerdordie: process.env.NEXT_PUBLIC_AFF_NERDORDIE,
  fiverr: process.env.NEXT_PUBLIC_AFF_FIVERR,
  canva: process.env.NEXT_PUBLIC_AFF_CANVA,
  epidemicsound: process.env.NEXT_PUBLIC_AFF_EPIDEMICSOUND,
  restream: process.env.NEXT_PUBLIC_AFF_RESTREAM,
  elgato: process.env.NEXT_PUBLIC_AFF_ELGATO,
};

type AffiliateSeed = Omit<Affiliate, "url">;

const SEED: AffiliateSeed[] = [
  {
    id: "placeit",
    name: "Placeit by Envato",
    blurb: "Thousands of ready-made emote, badge and overlay templates you can customize in the browser.",
    cta: "Browse templates",
    icon: "🎨",
    fallbackUrl: "https://placeit.net/c/twitch",
    contexts: ["emotes", "badges", "overlays", "export", "general"],
    priority: 100,
  },
  {
    id: "fiverr",
    name: "Fiverr",
    blurb: "Hire a custom emote / sub-badge artist for a fully original, one-of-a-kind set.",
    cta: "Find an artist",
    icon: "🧑‍🎨",
    fallbackUrl: "https://www.fiverr.com/categories/graphics-design/twitch-store",
    contexts: ["emotes", "badges", "general"],
    priority: 90,
  },
  {
    id: "own3d",
    name: "OWN3D",
    blurb: "Premium overlays, alerts and emote packs trusted by thousands of streamers.",
    cta: "Shop premium packs",
    icon: "🔥",
    fallbackUrl: "https://www.own3d.tv/en/",
    contexts: ["emotes", "overlays", "export", "general"],
    priority: 85,
  },
  {
    id: "nerdordie",
    name: "Nerd or Die",
    blurb: "High-end stream overlays, alert packages and animated widgets.",
    cta: "Explore overlays",
    icon: "🖥️",
    fallbackUrl: "https://nerdordie.com/",
    contexts: ["overlays", "export", "general"],
    priority: 70,
  },
  {
    id: "canva",
    name: "Canva",
    blurb: "Design panels, banners and overlays from free templates — no design skills needed.",
    cta: "Start designing",
    icon: "✏️",
    fallbackUrl: "https://www.canva.com/",
    contexts: ["overlays", "export", "general"],
    priority: 60,
  },
  {
    id: "epidemicsound",
    name: "Epidemic Sound",
    blurb: "Stream-safe, DMCA-free music and sound effects for your broadcasts.",
    cta: "Get safe music",
    icon: "🎵",
    fallbackUrl: "https://www.epidemicsound.com/",
    contexts: ["export", "general"],
    priority: 55,
  },
  {
    id: "restream",
    name: "Restream",
    blurb: "Go live on Twitch, Kick, YouTube and more at the same time from one studio.",
    cta: "Multistream now",
    icon: "📡",
    fallbackUrl: "https://restream.io/",
    contexts: ["export", "general"],
    priority: 50,
  },
  {
    id: "elgato",
    name: "Elgato",
    blurb: "Stream Deck, capture cards, key lights and gear to upgrade your setup.",
    cta: "Shop gear",
    icon: "🎛️",
    fallbackUrl: "https://www.elgato.com/",
    contexts: ["export"],
    priority: 40,
  },
];

export const AFFILIATES: Affiliate[] = SEED.map((a) => ({
  ...a,
  url: ENV_URL[a.id] || a.fallbackUrl,
}));

/** Partners for a placement context, highest priority first. */
export function getAffiliates(context: AffiliateContext, limit = 3): Affiliate[] {
  return AFFILIATES.filter((a) => a.contexts.includes(context))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit);
}

/** Map a tool spec id to the most relevant affiliate context. */
export function contextForSpec(specId: string): AffiliateContext {
  if (specId.includes("badge")) return "badges";
  return "emotes";
}
