// Blog content store. Posts are structured as typed blocks so they render
// with consistent styling and can emit Article JSON-LD for SEO.

export type Block =
  | { t: "h2"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readMinutes: number;
  tag: string;
  hero: string; // emoji
  author?: string;
  body: Block[];
  faq?: { q: string; a: string }[];
  cta?: { label: string; href: string };
}

export const POSTS: BlogPost[] = [
  {
    slug: "twitch-emote-sizes-guide",
    title: "Twitch Emote Sizes in 2026: The Complete Guide",
    description:
      "Exact Twitch emote dimensions, file size limits and format rules for emotes, sub badges and bits badges — plus how to export every size in one click.",
    date: "2026-01-12",
    readMinutes: 6,
    tag: "Guides",
    hero: "📐",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "Twitch requires you to upload your emote at three exact pixel sizes. If even one is the wrong size or too heavy, the upload is rejected. This guide lists every requirement for 2026 and shows the fastest way to hit them.",
      },
      { t: "h2", text: "Twitch emote sizes" },
      {
        t: "p",
        text: "A standard Twitch emote must be supplied at 28×28, 56×56 and 112×112 pixels as a transparent PNG. Each file must stay under 1 MB.",
      },
      {
        t: "table",
        head: ["Asset", "Sizes (px)", "Format", "Max size"],
        rows: [
          ["Emote", "28, 56, 112", "PNG (transparent)", "1 MB each"],
          ["Animated emote", "28, 56, 112", "GIF", "1 MB each"],
          ["Sub badge", "18, 36, 72", "PNG (transparent)", "25 KB each"],
          ["Bits badge", "18, 36, 72", "PNG (transparent)", "25 KB each"],
        ],
      },
      { t: "h2", text: "Why the smallest size matters most" },
      {
        t: "p",
        text: "Your emote is shown at 28×28 the vast majority of the time. Fine details, thin lines and small text disappear at that size. Design for 28px first, then scale up — not the other way around.",
      },
      {
        t: "ul",
        items: [
          "Use bold shapes and a clear silhouette.",
          "Add a 2–4px outline so the emote pops on both dark and light chat.",
          "Keep important elements away from the edges.",
          "Test on a real chat background before exporting.",
        ],
      },
      { t: "h2", text: "Export all sizes in one click" },
      {
        t: "p",
        text: "Instead of resizing each file by hand in Photoshop, drop one high-resolution image into the EmoteForge Twitch Emote Maker. It generates all three sizes, checks them against Twitch's limits, shows a live 28px chat preview, and exports a ready-to-upload ZIP — entirely in your browser, with nothing uploaded to a server.",
      },
    ],
    faq: [
      {
        q: "What size should I design my Twitch emote at?",
        a: "Create the artwork at 112×112 px (or larger and scale down). Twitch needs 28, 56 and 112 px versions, and EmoteForge generates all three automatically.",
      },
      {
        q: "What is the Twitch emote file size limit?",
        a: "Each PNG emote must be under 1 MB. Sub and bits badges must be under 25 KB each.",
      },
    ],
    cta: { label: "Open the Twitch Emote Maker", href: "/twitch-emote-maker" },
  },
  {
    slug: "how-to-make-animated-twitch-emotes",
    title: "How to Make Animated Twitch Emotes (No Software)",
    description:
      "Turn a GIF or short video into a looping, Twitch-ready animated emote at 28, 56 and 112 px — without After Effects, right in your browser.",
    date: "2026-02-03",
    readMinutes: 5,
    tag: "Tutorials",
    hero: "🎞️",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "Animated emotes are a Tier 1/2/3 sub perk and a great way to make your channel feel premium. The hard part is hitting Twitch's strict size limits while keeping the animation smooth. Here's how to do it without paid software.",
      },
      { t: "h2", text: "Animated emote requirements" },
      {
        t: "ul",
        items: [
          "Sizes: 28×28, 56×56 and 112×112 px.",
          "Format: animated GIF.",
          "File size: under 1 MB per size.",
          "Frame rate: keep it at or below 60 fps; lower fps helps you fit the size limit.",
        ],
      },
      { t: "h2", text: "Step by step" },
      {
        t: "ul",
        items: [
          "Start from a short GIF or video clip (1–3 seconds works best).",
          "Open the Twitch Emote Maker and switch to the animated tab.",
          "Trim, add padding and pick a fit mode so the subject is centred.",
          "Export — the tool reduces colours and frame rate just enough to stay under 1 MB.",
        ],
      },
      { t: "h2", text: "Tips for smooth, small GIFs" },
      {
        t: "ul",
        items: [
          "Shorter loops compress far better than long ones.",
          "Solid or transparent backgrounds shrink the file dramatically.",
          "Avoid heavy gradients and noise — they bloat GIF size.",
          "If a size is over the limit, drop the fps to 24 or 30.",
        ],
      },
      {
        t: "p",
        text: "EmoteForge processes everything locally with a WebAssembly build of FFmpeg, so your clip never leaves your device and there are no upload queues.",
      },
    ],
    faq: [
      {
        q: "Do I need After Effects to make animated emotes?",
        a: "No. You can convert a GIF or short video directly in the browser with EmoteForge — no installs, no account.",
      },
      {
        q: "Why is my animated emote rejected by Twitch?",
        a: "Usually it is over the 1 MB limit or not exactly 28/56/112 px. EmoteForge auto-optimises frame rate and colours to fit the limit at every size.",
      },
    ],
    cta: { label: "Make an animated emote", href: "/twitch-emote-maker" },
  },
  {
    slug: "twitch-vs-kick-emote-specs",
    title: "Twitch vs Kick Emotes: Sizes, Limits & Reuse Guide",
    description:
      "A side-by-side comparison of Twitch and Kick emote specifications, and how to export one piece of art for both platforms in seconds.",
    date: "2026-03-09",
    readMinutes: 4,
    tag: "Guides",
    hero: "🟢",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "Streaming on both Twitch and Kick? You can reuse the same artwork — you just need the right sizes for each platform. Here's how they compare.",
      },
      { t: "h2", text: "Side-by-side specs" },
      {
        t: "table",
        head: ["Spec", "Twitch", "Kick"],
        rows: [
          ["Emote sizes", "28, 56, 112 px", "28, 56, 112 px"],
          ["Format", "PNG / GIF", "PNG / GIF"],
          ["Transparency", "Yes", "Yes"],
          ["Max size", "1 MB", "Optimised for chat"],
        ],
      },
      { t: "h2", text: "Reusing one design for both" },
      {
        t: "p",
        text: "Because both platforms use the same 28/56/112 px sizes, a single transparent PNG export works almost everywhere. Design once, export the standard set, and upload to each platform's creator dashboard.",
      },
      {
        t: "ul",
        items: [
          "Keep a transparent background so the emote sits cleanly on any chat colour.",
          "Use the live preview to confirm it reads at 28px.",
          "Export a ZIP so you have every size organised and ready.",
        ],
      },
      {
        t: "p",
        text: "Use the Kick Emote Maker for Kick-tuned output, or the Twitch Emote Maker for Twitch — both run fully in your browser.",
      },
    ],
    faq: [
      {
        q: "Can I use the same emote on Twitch and Kick?",
        a: "Yes. Both use 28, 56 and 112 px transparent emotes, so the same export works on both platforms.",
      },
    ],
    cta: { label: "Open the Kick Emote Maker", href: "/kick-emote-maker" },
  },
  // ─── 10 new E-E-A-T articles ─────────────────────────────────────────────
  {
    slug: "twitch-sub-badge-guide",
    title: "Twitch Sub Badge: Complete Design & Upload Guide (2026)",
    description:
      "Everything you need to know about Twitch sub badges — exact sizes, design tips, how to upload them, and how to make all three tiers look great at 18 px.",
    date: "2026-03-20",
    readMinutes: 7,
    tag: "Guides",
    hero: "🎖️",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "A Twitch sub badge is the small icon displayed next to a subscriber's username in chat. It signals loyalty and tenure — viewers earn different badge tiers at 1, 3, 6, 12, 24 and 36 months. Getting those badges right, especially at the tiny 18 px size, is one of the most important visual tasks a new streamer faces.",
      },
      { t: "h2", text: "Twitch sub badge size requirements" },
      {
        t: "p",
        text: "Twitch requires every sub badge to be uploaded at three pixel sizes. Each must be a transparent PNG and stay under 25 KB per file.",
      },
      {
        t: "table",
        head: ["Size", "Dimensions", "Format", "Max file size"],
        rows: [
          ["Small", "18 × 18 px", "PNG (transparent)", "25 KB"],
          ["Medium", "36 × 36 px", "PNG (transparent)", "25 KB"],
          ["Large", "72 × 72 px", "PNG (transparent)", "25 KB"],
        ],
      },
      { t: "h2", text: "Why 18 px is the size that matters most" },
      {
        t: "p",
        text: "18 × 18 pixels is tiny — smaller than most emoji on your screen. At that size, a badge must be immediately readable with no fine detail. Think of it like a logo that has to work on a ballpoint pen cap. Most bad sub badges fail because the designer never tested them at actual display size before uploading.",
      },
      {
        t: "ul",
        items: [
          "Use simple, bold shapes. A sword, a crown, or a face silhouette reads far better than an intricate crest.",
          "Avoid text. Letters become unreadable at 18 px unless you're using a single large character.",
          "Strong contrast. Your badge must stand out against both dark and light chat themes.",
          "Keep the subject centred with a few pixels of breathing room around the edges.",
          "Design on a transparent background — white backgrounds look terrible in dark chat.",
        ],
      },
      { t: "h2", text: "How to create sub badge tier variants" },
      {
        t: "p",
        text: "Twitch lets you set different badges for Tier 1, Tier 2, and Tier 3 subscribers. A common approach is to keep the same icon shape but change the colour or add an accent. For example: a plain sword for Tier 1, a golden sword for Tier 2, and a glowing sword with an aura for Tier 3. This creates instant visual hierarchy.",
      },
      {
        t: "ul",
        items: [
          "Tier 1 — base colour, simple design.",
          "Tier 2 — add a metallic or gold colour shift.",
          "Tier 3 — add a glow, sparkle, or animated outline (if supported).",
          "Keep the core silhouette consistent across all three so the progression is obvious.",
        ],
      },
      { t: "h2", text: "Tenure badges: months 3, 6, 12, 24, 36+" },
      {
        t: "p",
        text: "Beyond the tier badges, Twitch shows tenure badges to mark how long someone has been subbed. You can upload custom versions for the 3-month, 6-month, 12-month, 24-month and 36-month milestones, giving your loyal subscribers an extra reward to work toward.",
      },
      { t: "h2", text: "How to upload sub badges to Twitch" },
      {
        t: "ul",
        items: [
          "Go to your Twitch Creator Dashboard → Viewer Rewards → Subscriber Badges.",
          "Click 'Upload badge' for each tier and each size slot.",
          "Upload the 72 × 72, 36 × 36 and 18 × 18 versions for each badge.",
          "Click Save — the badge goes live for subscribers immediately.",
          "You must be a Twitch Affiliate or Partner to unlock custom sub badges.",
        ],
      },
      { t: "h2", text: "Export all three sizes in one click" },
      {
        t: "p",
        text: "The Twitch Sub Badge Maker on EmoteForge takes one high-resolution image and exports all three sizes (18, 36 and 72 px) as a ZIP. It enforces the 25 KB limit and shows you a live preview at actual chat size. Everything runs in your browser — no upload, no account.",
      },
    ],
    faq: [
      {
        q: "What size should a Twitch sub badge be?",
        a: "Twitch requires sub badges at 18×18, 36×36 and 72×72 pixels as transparent PNGs under 25 KB each.",
      },
      {
        q: "Do I need to be an affiliate to have sub badges?",
        a: "Yes. Sub badges (and emotes) unlock when you reach Twitch Affiliate status: 50 followers, 500 total broadcast minutes, 7 unique broadcast days, and 3 average concurrent viewers in the last 30 days.",
      },
      {
        q: "Can sub badges be animated?",
        a: "No. Twitch sub badges must be static PNG files. Only emotes support animated GIF format.",
      },
    ],
    cta: { label: "Open the Sub Badge Maker", href: "/twitch-sub-badge-maker" },
  },
  {
    slug: "7tv-emote-guide",
    title: "7TV Emote Guide: Sizes, Requirements & Approval Tips (2026)",
    description:
      "Complete guide to 7TV emotes — upload specifications, the approval process, personal vs channel emote sets, and how to get your first emote accepted.",
    date: "2026-04-05",
    readMinutes: 6,
    tag: "Guides",
    hero: "7️⃣",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "7TV is one of the most popular third-party emote extensions for Twitch and Kick. It lets streamers add a large personal set of emotes — up to 1,000 — beyond Twitch's native limit, and includes features like animated emotes for non-partners and a growing global emote library used by millions of viewers.",
      },
      { t: "h2", text: "What makes 7TV different from Twitch native emotes" },
      {
        t: "ul",
        items: [
          "Viewers need the 7TV browser extension (Chrome/Firefox) to see your 7TV emotes.",
          "You can add up to 1,000 emotes in your personal emote set, vs. Twitch's limited native slots.",
          "7TV supports WebP and GIF animated emotes for all users — no partnership required.",
          "7TV has its own global library with millions of emotes that any viewer can add to their personal slot.",
          "Available on both Twitch and Kick.",
        ],
      },
      { t: "h2", text: "7TV emote size and format requirements" },
      {
        t: "table",
        head: ["Spec", "Requirement"],
        rows: [
          ["Sizes", "28×28, 56×56, 112×112 px"],
          ["Format", "WebP, PNG, GIF, AVIF"],
          ["Transparency", "Supported"],
          ["Animated", "Yes (GIF or WebP)"],
          ["Max file size", "~2 MB"],
          ["Aspect ratio", "1:1 square recommended"],
        ],
      },
      { t: "h2", text: "Personal sets vs channel emote sets" },
      {
        t: "p",
        text: "Every 7TV user gets a personal emote set where they can store emotes for their own use. As a streamer, you can also connect your channel's emote set, which lets your viewers see those emotes in your chat even without being Twitch subscribers. This is a powerful way to give non-subscribers access to your emote culture.",
      },
      { t: "h2", text: "How to upload an emote to 7TV" },
      {
        t: "ul",
        items: [
          "Go to 7tv.app and sign in with your Twitch or Kick account.",
          "Click your avatar → Emote Sets → open your channel set.",
          "Click 'Upload Emote' and select your PNG, WebP or GIF file.",
          "Add a name (used as the text trigger in chat), set tags, and submit.",
          "7TV staff review emotes manually. Most decisions take 1–24 hours.",
          "Once approved, the emote is live in your set immediately.",
        ],
      },
      { t: "h2", text: "What gets an emote rejected on 7TV" },
      {
        t: "ul",
        items: [
          "Copyright violations — no recognisable brand logos, game character art, or anime screencaps without substantial transformation.",
          "Low quality — blurry, pixelated, or poorly cropped submissions are rejected.",
          "Offensive content — hate symbols, extreme violence, sexual content.",
          "Misleading names — the emote text trigger must relate to what the emote depicts.",
          "Duplicate emotes — if a nearly identical emote already exists globally, yours may be rejected.",
        ],
      },
      { t: "h2", text: "Tips for fast approval" },
      {
        t: "ul",
        items: [
          "Use original artwork or art you've commissioned yourself.",
          "Ensure clean transparent edges — no fringe pixels or partial white backgrounds.",
          "Keep the emote clearly centred with no excessive padding.",
          "Choose a distinctive, descriptive name that hasn't been used before.",
          "Make sure it reads clearly at 28 px before submitting.",
        ],
      },
    ],
    faq: [
      {
        q: "Do viewers need an extension to see 7TV emotes?",
        a: "Yes. Viewers need the free 7TV browser extension (available for Chrome and Firefox) to see 7TV emotes in chat. Without it, the emote text trigger appears as plain text.",
      },
      {
        q: "How long does 7TV emote approval take?",
        a: "Most emotes are reviewed within a few hours. During peak times it can take up to 24 hours. You will receive a notification once approved or rejected.",
      },
      {
        q: "Can I use the same emote on Twitch native and 7TV?",
        a: "Yes. Both use the same 28/56/112 px transparent format. Export once and upload to both platforms.",
      },
    ],
    cta: { label: "Open the 7TV Emote Maker", href: "/7tv-emote-maker" },
  },
  {
    slug: "bttv-emote-guide",
    title: "BTTV Emote Upload Guide: Everything You Need in 2026",
    description:
      "How to upload custom emotes to BetterTTV — exact file requirements, the approval process, shared vs personal emotes, and tips for getting approved first time.",
    date: "2026-04-18",
    readMinutes: 5,
    tag: "Guides",
    hero: "🟣",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "BetterTTV (BTTV) is one of the oldest and most widely used Twitch chat enhancement extensions. Its global emote library is iconic — emotes like OMEGALUL and PogChamp variants live here. Even in 2026, with newer platforms like 7TV gaining ground, BTTV remains a staple extension for Twitch viewers.",
      },
      { t: "h2", text: "BTTV emote specifications" },
      {
        t: "table",
        head: ["Spec", "Requirement"],
        rows: [
          ["Sizes", "28×28, 56×56, 112×112 px"],
          ["Format", "PNG, GIF (animated)"],
          ["Transparency", "Supported and recommended"],
          ["Animated", "Yes (GIF)"],
          ["Max file size", "2 MB"],
          ["Background", "Transparent preferred"],
        ],
      },
      { t: "h2", text: "Shared emotes vs channel emotes" },
      {
        t: "p",
        text: "BTTV offers two types of emotes. Shared emotes are submitted to the global library and must be approved by BTTV staff — once live, anyone can add them to their own personal set. Channel emotes are private to your channel set and only visible to viewers watching your stream with the BTTV extension.",
      },
      {
        t: "ul",
        items: [
          "Shared emotes: require manual review, higher quality bar, visible globally.",
          "Channel emotes: go live instantly, visible only in your chat, no approval needed for existing BTTV users.",
          "You can have up to 50 channel emotes on a connected BTTV account.",
        ],
      },
      { t: "h2", text: "How to upload a BTTV channel emote" },
      {
        t: "ul",
        items: [
          "Go to betterttv.com/dashboard and sign in with Twitch.",
          "Navigate to the Emotes section and click 'Upload Emote'.",
          "Upload your PNG or GIF — BTTV accepts a single file and generates all sizes internally.",
          "Set the emote name (the text trigger viewers will type).",
          "Save — channel emotes go live immediately for viewers with BTTV installed.",
        ],
      },
      { t: "h2", text: "Getting a shared emote approved" },
      {
        t: "p",
        text: "Shared emote approval is competitive. BTTV reviewers look for high quality, originality, and cultural fit. The emote must be clean at 28 px, have a transparent or simple background, and not replicate an existing popular emote.",
      },
      {
        t: "ul",
        items: [
          "Original artwork only — no game screenshots or celebrity photos without heavy editing.",
          "The name must be descriptive, unique, and not already taken.",
          "Perfect transparent background — no anti-aliasing fringe on coloured backgrounds.",
          "Expressive faces and reaction emotes tend to perform best.",
          "Avoid emotes that are too similar to existing OMEGALUL, PogChamp, or monkaS variants.",
        ],
      },
      { t: "h2", text: "BTTV vs 7TV in 2026: which should you prioritise?" },
      {
        t: "p",
        text: "Both are worth having. 7TV has grown significantly and offers more emote slots, but BTTV has a larger existing user base. Upload to both — the file format is identical.",
      },
    ],
    faq: [
      {
        q: "Do viewers need an extension for BTTV emotes?",
        a: "Yes, viewers need the BetterTTV browser extension (Chrome/Firefox/Edge). Without it, the emote code appears as plain text.",
      },
      {
        q: "How many BTTV channel emotes can I have?",
        a: "BTTV allows up to 50 channel emotes per streamer, accessible to viewers who have the BTTV extension installed.",
      },
      {
        q: "Can I use the same design for BTTV and 7TV?",
        a: "Yes. Both platforms use the same 28/56/112 px PNG or GIF format. One export from EmoteForge works for both.",
      },
    ],
    cta: { label: "Open the BTTV Emote Maker", href: "/bttv-emote-maker" },
  },
  {
    slug: "discord-sticker-guide",
    title: "Discord Sticker Size & Format: The Complete Guide (2026)",
    description:
      "Exact Discord sticker requirements for static and animated stickers — dimensions, file size limits, APNG vs GIF, and how to upload them to your server.",
    date: "2026-05-02",
    readMinutes: 6,
    tag: "Guides",
    hero: "💬",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "Discord stickers are larger, expressive images that server members can send in chat — bigger than emoji, smaller than a full image. Unlike regular emoji, stickers carry more personality and context, making them popular in community servers. Getting the format and size right is essential; Discord is strict about sticker specifications.",
      },
      { t: "h2", text: "Discord sticker requirements" },
      {
        t: "table",
        head: ["Type", "Format", "Dimensions", "Max size"],
        rows: [
          ["Static sticker", "PNG", "320 × 320 px", "512 KB"],
          ["Animated sticker", "APNG or GIF", "320 × 320 px", "512 KB"],
          ["Lottie sticker", "JSON (Lottie)", "Any", "500 KB"],
        ],
      },
      {
        t: "p",
        text: "The most important things to remember: 320 × 320 pixels exactly, under 512 KB. Discord will reject stickers that are any other size, and oversized files won't upload.",
      },
      { t: "h2", text: "APNG vs GIF for animated stickers" },
      {
        t: "p",
        text: "Discord supports both APNG (Animated PNG) and GIF for animated stickers. APNG is technically superior — it supports full RGB colour with alpha transparency, while GIF is limited to 256 colours and binary transparency (pixels are either fully transparent or fully opaque). For most sticker use cases:",
      },
      {
        t: "ul",
        items: [
          "GIF: easier to create, widely supported by design tools.",
          "APNG: better quality, especially for stickers with gradients or smooth edges.",
          "Both must stay under 512 KB after animation — keep loops short (1–2 seconds).",
          "Discord recommends APNG for the best quality result.",
        ],
      },
      { t: "h2", text: "Who can add custom stickers to a Discord server?" },
      {
        t: "p",
        text: "Custom sticker slots unlock with Server Boosts. Here's how many sticker slots each boost level gives:",
      },
      {
        t: "table",
        head: ["Boost Level", "Sticker Slots"],
        rows: [
          ["Level 0 (no boosts)", "5 default stickers only"],
          ["Level 1 (2 boosts)", "15 custom stickers"],
          ["Level 2 (7 boosts)", "30 custom stickers"],
          ["Level 3 (14 boosts)", "60 custom stickers"],
        ],
      },
      { t: "h2", text: "How to upload a sticker to your Discord server" },
      {
        t: "ul",
        items: [
          "Open your server → Server Settings → Stickers.",
          "Click 'Upload Sticker' and select your 320×320 PNG, APNG or GIF file.",
          "Add a sticker name (shown on hover) and a related emoji.",
          "Save — the sticker is immediately available to all server members.",
          "You need the Manage Emojis and Stickers permission to upload.",
        ],
      },
      { t: "h2", text: "Design tips for great Discord stickers" },
      {
        t: "ul",
        items: [
          "320 px is much larger than an emote — you have room for more detail, but keep it readable as a thumbnail.",
          "Transparent backgrounds let the sticker sit naturally in any chat theme.",
          "Bold outlines help the sticker stand out against dark and light backgrounds.",
          "Keep animations short (under 2 seconds) to hit the 512 KB limit.",
          "Expressive faces, reactions, and meme formats work especially well as stickers.",
        ],
      },
    ],
    faq: [
      {
        q: "What size are Discord stickers?",
        a: "Discord stickers must be exactly 320×320 pixels and under 512 KB. They can be PNG (static), APNG or GIF (animated).",
      },
      {
        q: "Do you need Nitro to use Discord stickers?",
        a: "You need Discord Nitro to send stickers from other servers. However, any member can send stickers uploaded to the server they're currently in without Nitro.",
      },
      {
        q: "Can I use the same design for a Discord sticker and a Twitch emote?",
        a: "You can use the same artwork, but you'll need different exports — Discord stickers are 320×320 px while Twitch emotes are 112×112 px. EmoteForge can export both sizes from one source image.",
      },
    ],
    cta: { label: "Open the Discord Sticker Maker", href: "/discord-sticker-maker" },
  },
  {
    slug: "emote-background-removal-guide",
    title: "How to Remove Background from Emotes — No Photoshop Needed",
    description:
      "The complete guide to removing backgrounds from emote artwork — manual methods, AI-powered tools, and how to get clean transparent edges every time.",
    date: "2026-05-15",
    readMinutes: 6,
    tag: "Tutorials",
    hero: "✂️",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "A transparent background is non-negotiable for streaming emotes. An emote with a white or coloured background looks terrible in dark chat — it sits inside a visible box rather than floating naturally. Whether you're working from a commissioned illustration, a photo, or a piece of clipart, removing the background cleanly is the first step before resizing and uploading.",
      },
      { t: "h2", text: "Why transparent backgrounds matter" },
      {
        t: "ul",
        items: [
          "Twitch, Kick, 7TV and BTTV all display emotes on a dark chat background by default.",
          "A white-boxed emote looks unprofessional and breaks the visual flow of chat.",
          "Transparent emotes also adapt to light-mode chat for viewers who use it.",
          "Platform upload validators on Twitch and 7TV prefer or require transparent PNGs.",
        ],
      },
      { t: "h2", text: "Method 1: Magic Wand / Select Subject in Photoshop" },
      {
        t: "p",
        text: "Photoshop's Select Subject tool (powered by Adobe Sensei AI) is excellent for illustrations and art with clear edges. Select Subject → Refine Edge → Delete Background → Export as PNG-24. This gives the most control but requires a Photoshop licence.",
      },
      { t: "h2", text: "Method 2: Background Eraser tool (free software)" },
      {
        t: "p",
        text: "GIMP (free) includes a Fuzzy Select and Eraser approach. It works well for solid-colour backgrounds (white, green, solid colour). Select the background with Fuzzy Select, grow the selection by 1–2 px, delete, then export as PNG.",
      },
      { t: "h2", text: "Method 3: AI background removal in the browser" },
      {
        t: "p",
        text: "The fastest and most accessible method in 2026 is using AI background removal directly in your browser. EmoteForge's Background Remover uses a locally-run AI model (powered by @imgly/background-removal) that processes entirely in your browser — no upload, no account, no waiting.",
      },
      {
        t: "ul",
        items: [
          "Works on photos, illustrations, clipart, and complex hair/fur edges.",
          "No image ever leaves your device — the model runs via WebAssembly.",
          "Produces a clean alpha mask that you can download as a transparent PNG.",
          "No paid account needed.",
        ],
      },
      { t: "h2", text: "Getting clean edges: tips and tricks" },
      {
        t: "ul",
        items: [
          "Start from the highest resolution source image — AI models produce cleaner edges on larger files.",
          "If there is fringe/halo around the edges, try the 'contract selection by 1 px' technique in your image editor.",
          "For emotes with outlines, make sure the outline thickness is consistent before removing the background.",
          "After removal, zoom in to 400% and check corners and fine details before exporting.",
          "For complex backgrounds (e.g. a character against a detailed scene), AI tools outperform manual selection every time.",
        ],
      },
      { t: "h2", text: "After background removal: resize for your platform" },
      {
        t: "p",
        text: "Once you have a clean transparent PNG, drop it directly into the appropriate EmoteForge tool — the Twitch Emote Maker, 7TV Emote Maker, or any other platform tool — to resize to all required dimensions and download a platform-ready ZIP.",
      },
    ],
    faq: [
      {
        q: "What is the best free tool to remove background from an emote?",
        a: "The EmoteForge Background Remover uses an AI model that runs entirely in your browser — no upload, no account, and free. It handles complex edges including hair and fur.",
      },
      {
        q: "Why does my emote have a white fringe after background removal?",
        a: "White fringe happens when the original image had anti-aliased edges against a white background. The solution is to use 'contract selection by 1 px' or use a tool that performs alpha-matting rather than hard masking.",
      },
      {
        q: "Can I remove the background from a GIF emote?",
        a: "GIFs only support binary transparency (each pixel is fully transparent or fully opaque), so background removal on GIFs is harder than PNG. For best results, start from a PNG source and add animation after removing the background.",
      },
    ],
    cta: { label: "Remove emote background free", href: "/emote-background-remover" },
  },
  {
    slug: "twitch-bit-badge-guide",
    title: "Twitch Bits Badge: Requirements, Design Tips & Upload Guide",
    description:
      "Everything you need to know about Twitch bits badges — what they are, who gets them, exact size specs, design best practices, and how to upload them.",
    date: "2026-05-28",
    readMinutes: 6,
    tag: "Guides",
    hero: "💎",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "Twitch bits badges are the small icons displayed next to a viewer's name when they cheer (donate bits) in your channel. Unlike sub badges that show subscription duration, bits badges show cheering milestones — the more bits a viewer has cheered in your channel, the higher-tier badge they unlock. They're an important part of rewarding your most generous viewers.",
      },
      { t: "h2", text: "How bits badges work" },
      {
        t: "p",
        text: "Bits badges are cumulative — they track the total lifetime bits cheered in your channel by each viewer. Twitch has default badge tiers at 1, 100, 1,000, 5,000, 10,000, 25,000, 50,000 and 100,000 bits. As an affiliate or partner, you can upload custom designs for any or all of these tiers.",
      },
      {
        t: "table",
        head: ["Cheer Milestone", "Default Badge"],
        rows: [
          ["1 bit", "Grey bits badge"],
          ["100 bits", "Purple bits badge"],
          ["1,000 bits", "Green bits badge"],
          ["5,000 bits", "Blue bits badge"],
          ["10,000 bits", "Red bits badge"],
          ["25,000 bits", "Gold bits badge"],
          ["100,000 bits", "Diamond bits badge"],
        ],
      },
      { t: "h2", text: "Bits badge size requirements" },
      {
        t: "p",
        text: "Bits badges use the same dimensions as sub badges: three transparent PNG files per tier, all under 25 KB each.",
      },
      {
        t: "table",
        head: ["Size", "Dimensions", "Format", "Max file size"],
        rows: [
          ["Small", "18 × 18 px", "PNG (transparent)", "25 KB"],
          ["Medium", "36 × 36 px", "PNG (transparent)", "25 KB"],
          ["Large", "72 × 72 px", "PNG (transparent)", "25 KB"],
        ],
      },
      { t: "h2", text: "Design tips for bits badges" },
      {
        t: "ul",
        items: [
          "Create a visual progression across tiers. Viewers should be able to tell at a glance which tier someone has.",
          "Use colour progression: grey → purple → green → blue → red → gold → diamond mirrors Twitch's defaults and is intuitive.",
          "Keep it simple at 18 px — a gem shape, star, crown or symbol works well.",
          "Add sparkle or glow effects for higher tiers to convey prestige.",
          "Consider a thematic badge that fits your channel brand (e.g. a potion bottle for a fantasy-themed stream).",
        ],
      },
      { t: "h2", text: "How to unlock and upload bits badges" },
      {
        t: "ul",
        items: [
          "You must be a Twitch Affiliate or Partner to upload custom bits badges.",
          "Go to Creator Dashboard → Viewer Rewards → Bits Badges.",
          "Select the tier you want to customise and upload the 18, 36 and 72 px versions.",
          "Click Save — the custom badge is live immediately for viewers who have hit that bits milestone.",
          "You only need to customise the tiers relevant to your community — lower tiers see the most use.",
        ],
      },
    ],
    faq: [
      {
        q: "What size are Twitch bits badges?",
        a: "Twitch bits badges must be uploaded at 18×18, 36×36 and 72×72 pixels as transparent PNGs under 25 KB each — identical specs to sub badges.",
      },
      {
        q: "Can I create bits badges without being an affiliate?",
        a: "No. Bits badges (like sub badges and emotes) are a perk for Twitch Affiliates and Partners. You must reach affiliate status first.",
      },
      {
        q: "Do I need custom badges for every tier?",
        a: "No. Twitch provides default bits badge designs for all tiers. You can customise whichever tiers you want; the rest will use Twitch's defaults.",
      },
    ],
    cta: { label: "Open the Bit Badge Maker", href: "/twitch-bit-badge-maker" },
  },
  {
    slug: "streaming-emote-design-tips",
    title: "What Makes a Good Streaming Emote? Design Tips for Twitch & Kick",
    description:
      "Expert design tips for creating emotes that are readable at 28 px, expressive, and work well in dark and light chat. Covers shapes, contrast, colour and common mistakes.",
    date: "2026-06-03",
    readMinutes: 7,
    tag: "Tutorials",
    hero: "🎨",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "A good emote isn't just a small image — it's a communication tool. Viewers use emotes to react, celebrate, express frustration, and bond over shared references. An emote that nobody uses is a missed opportunity; an emote that goes viral in your community can define your channel's identity. The difference usually comes down to craft at 28 pixels.",
      },
      { t: "h2", text: "The 28 px constraint" },
      {
        t: "p",
        text: "Twitch chat shows emotes at 28 × 28 pixels by default. That's roughly the size of a grain of rice on a standard monitor. Everything in your design must be readable at that size. If you can't tell what it is at 28 px, neither can your viewers — and they won't use it.",
      },
      {
        t: "ul",
        items: [
          "Design your emote at 112 px or higher, but evaluate every decision at 28 px.",
          "Use EmoteForge's live 28 px chat preview while designing to catch problems early.",
          "Print it at actual size or view it next to a real chat screenshot.",
          "If you squint and can't read it, your viewers can't either.",
        ],
      },
      { t: "h2", text: "Silhouette is everything" },
      {
        t: "p",
        text: "The most iconic emotes (think PogChamp, LUL, OMEGALUL) have instantly recognisable silhouettes. At 28 px, fine detail vanishes — but a strong silhouette survives. Ask yourself: if I removed all the colour, would the shape alone still communicate the emotion?",
      },
      {
        t: "ul",
        items: [
          "Bold, thick shapes over fine lines.",
          "Exaggerated expressions over realistic proportions — big eyes, big mouth, clear emotion.",
          "Simple backgrounds or no background at all.",
          "Avoid symmetrical compositions — a slight angle makes emotes more dynamic.",
        ],
      },
      { t: "h2", text: "Colour and contrast" },
      {
        t: "p",
        text: "Chat is dark. Your emote competes with text, usernames, and other emotes. High contrast between your subject and the transparent background (or dark background you're targeting) is essential.",
      },
      {
        t: "ul",
        items: [
          "Add a 2–4 px outline in a contrasting colour (usually near-black or dark complementary) around the subject.",
          "Test on both dark (#0e0e10 Twitch dark) and light white backgrounds.",
          "Avoid light pastel colours as dominant fills — they disappear on dark chat.",
          "Saturated, vivid colours read better at small sizes than muted or desaturated ones.",
        ],
      },
      { t: "h2", text: "Expressiveness and emotion" },
      {
        t: "p",
        text: "The most-used emotes express a clear emotion — joy, rage, sadness, hype, cringe. They're single-use tools that viewers reach for in the moment. An emote that could mean five different things usually means nothing. Commit to one clear emotional note.",
      },
      {
        t: "ul",
        items: [
          "Joyful: wide mouth, crinkled eyes, raised cheeks.",
          "Hype: leaning forward, arms up, eyes wide.",
          "Sad: drooping mouth, shiny eyes.",
          "Cringe: one eye squinted, teeth clenched.",
          "Rage: furrowed brow, clenched jaw, steam.",
        ],
      },
      { t: "h2", text: "Common mistakes to avoid" },
      {
        t: "ul",
        items: [
          "Too much detail — fine crosshatching, texture, and complex backgrounds disappear at 28 px.",
          "Text in the emote — unless it's a single large letter, it will be unreadable.",
          "Thin lines — anything under 2 px wide at 112 px scale vanishes when downscaled.",
          "Non-transparent background — makes the emote look like it's in a box in dark chat.",
          "Copying existing popular emotes too closely — platforms will reject them and your community won't adopt them.",
        ],
      },
      { t: "h2", text: "Platform-specific differences" },
      {
        t: "table",
        head: ["Platform", "Display size", "Notes"],
        rows: [
          ["Twitch", "28 px (default)", "Also shown at 56 px in subscriptions page"],
          ["Kick", "28 px", "Same specs as Twitch"],
          ["7TV", "28 px", "WebP/GIF animated supported"],
          ["BTTV", "28 px", "GIF animated supported"],
          ["Discord", "22 px (server emoji)", "Larger in emoji picker"],
        ],
      },
    ],
    faq: [
      {
        q: "Should I design emotes in Photoshop, Illustrator or Procreate?",
        a: "Any tool works as long as you export a transparent PNG. Vector tools like Illustrator give infinitely scalable results, while Procreate and Photoshop are excellent for painterly or detailed emotes. The output format matters more than the tool.",
      },
      {
        q: "How do I test my emote at 28 px before uploading?",
        a: "Drop your image into EmoteForge — it shows a live chat preview at actual 28 px size alongside the design. You can immediately see if details disappear or the emote is unclear.",
      },
      {
        q: "Why do some emotes have a black outline?",
        a: "An outline ensures the emote reads well on both dark and light chat backgrounds. Without it, light-coloured subjects can blend into white backgrounds and dark subjects into dark backgrounds.",
      },
    ],
    cta: { label: "Preview your emote at 28 px", href: "/twitch-emote-maker" },
  },
  {
    slug: "twitch-affiliate-emote-guide",
    title: "How to Become a Twitch Affiliate and Unlock Emotes (2026 Guide)",
    description:
      "Step-by-step guide to reaching Twitch Affiliate status, what emote and badge perks you unlock, and how to make the most of them from day one.",
    date: "2026-06-08",
    readMinutes: 7,
    tag: "Guides",
    hero: "🏆",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "Twitch Affiliate status is the first major milestone for any streamer. It unlocks subscriptions, bits, and — most excitingly — the ability to upload custom emotes and badges. Understanding the path to Affiliate and how to make the most of the emote perks is essential for building a loyal community.",
      },
      { t: "h2", text: "Twitch Affiliate requirements (2026)" },
      {
        t: "p",
        text: "To receive an Affiliate invitation, you must meet all four of these criteria within a rolling 30-day period:",
      },
      {
        t: "table",
        head: ["Requirement", "Target"],
        rows: [
          ["Followers", "50 unique followers"],
          ["Stream days", "At least 8 broadcasts"],
          ["Broadcast minutes", "500+ total minutes"],
          ["Average viewers", "3 average concurrent viewers"],
        ],
      },
      {
        t: "p",
        text: "Once you meet all requirements, Twitch sends an invitation to the email on your account. The invitation expires after a few days, so check your email regularly.",
      },
      { t: "h2", text: "What you unlock as an Affiliate" },
      {
        t: "ul",
        items: [
          "Subscriptions: viewers can subscribe for $4.99, $9.99 or $24.99/month.",
          "Custom sub badges: upload unique icons for 1, 3, 6, 12, 24 and 36-month subs.",
          "Custom sub emotes: 1 emote slot at Tier 1, expanding with subscriber count.",
          "Bits: viewers can cheer bits in your chat; custom bit badges unlock.",
          "Hype Train: a community engagement event triggered by viewer activity.",
          "Channel Points: a custom rewards system for your viewers.",
        ],
      },
      { t: "h2", text: "Emote slots for Affiliates" },
      {
        t: "p",
        text: "Affiliates start with 1 emote slot and unlock more as their subscriber count grows. The current emote slot progression is:",
      },
      {
        t: "table",
        head: ["Subscriber count", "Emote slots"],
        rows: [
          ["0–24 subs", "1 slot"],
          ["25–49 subs", "2 slots"],
          ["50–99 subs", "3 slots"],
          ["100–499 subs", "4 slots"],
          ["500–999 subs", "5 slots"],
          ["1,000+ subs", "Up to 50+ (Tier escalation)"],
        ],
      },
      { t: "h2", text: "What to prepare before reaching Affiliate" },
      {
        t: "p",
        text: "Don't wait until you receive the Affiliate invitation to start working on your emotes. Prepare everything in advance so you can upload on day one — it signals to new subscribers that you're serious and professional.",
      },
      {
        t: "ul",
        items: [
          "Design your core emote — ideally a face/reaction that fits your channel personality.",
          "Create matching sub badges at 18, 36 and 72 px for at least the first few tenure tiers.",
          "Prepare bit badges if you want to reward cheering immediately.",
          "Use EmoteForge to export everything in the right sizes before your Affiliate approval arrives.",
          "Write a brief channel panel explaining your emotes so new subscribers know they exist.",
        ],
      },
      { t: "h2", text: "From Affiliate to Partner" },
      {
        t: "p",
        text: "Twitch Partnership is the next tier. Partners unlock more emote slots, ad revenue share, and a verified badge. The path requires sustained viewership (usually 75+ average concurrent viewers, consistent streaming schedule, and strong community engagement). Your emote set quality plays a role in viewer retention — compelling emotes give subscribers a reason to stay.",
      },
    ],
    faq: [
      {
        q: "How long does it take to reach Twitch Affiliate?",
        a: "It varies hugely. Streamers who network, play trending games, and stream consistently can reach Affiliate in 1–3 months. Others take longer. Focus on the metrics: 50 followers, 8 broadcasts, 500 minutes, 3 average viewers.",
      },
      {
        q: "Can I upload emotes before becoming an Affiliate?",
        a: "Not to Twitch native. However, you can upload emotes to 7TV and BTTV before Affiliate status, which lets your community use them in your chat immediately via third-party extensions.",
      },
      {
        q: "How many emotes do Twitch Affiliates get?",
        a: "Affiliates start with 1 custom emote slot and unlock additional slots as their subscriber base grows — up to around 5 slots for 500–999 subscribers.",
      },
    ],
    cta: { label: "Prepare your emotes now", href: "/twitch-emote-maker" },
  },
  {
    slug: "best-free-streaming-tools-2026",
    title: "Best Free Tools for Twitch Streamers in 2026 (Emotes, Overlays & More)",
    description:
      "A curated list of the best free tools for streamers in 2026 — covering emote creation, overlays, alerts, audio, scheduling and stream management.",
    date: "2026-06-13",
    readMinutes: 8,
    tag: "Resources",
    hero: "🛠️",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "Starting a stream from scratch doesn't require a big budget. In 2026 there's a strong ecosystem of free tools covering every aspect of a stream setup — from channel graphics to audio processing to scheduling. Here's a practical list of the best free tools, categorised by use case.",
      },
      { t: "h2", text: "Emotes and channel graphics" },
      {
        t: "ul",
        items: [
          "EmoteForge (emoteforge.app) — free browser-based emote resizer, background remover, sub badge maker and bulk pack exporter. No upload, no signup.",
          "Canva — for creating emote artwork and channel banners with templates. Free tier is generous.",
          "GIMP — open-source Photoshop alternative for pixel-level emote editing.",
          "Inkscape — free vector editor, great for creating scalable emote artwork.",
        ],
      },
      { t: "h2", text: "Streaming software (OBS and alternatives)" },
      {
        t: "ul",
        items: [
          "OBS Studio — the industry-standard free, open-source streaming and recording software. Available for Windows, Mac and Linux.",
          "Streamlabs (free tier) — OBS-based with built-in alerts, overlays and chat widget. Beginner-friendly.",
          "Twitch Studio — Twitch's own beginner streaming app, free and optimised for the platform.",
          "Prism Live Studio — lightweight alternative for lower-spec machines.",
        ],
      },
      { t: "h2", text: "Overlays and alerts" },
      {
        t: "ul",
        items: [
          "Streamelements (free tier) — browser-based overlay builder, alert boxes, chatbot and tipping page.",
          "Nerd or Die — free overlay templates with clean, modern designs.",
          "Own3D (free tier) — overlay and alert templates with easy OBS integration.",
          "Giphy Capture / ScreenToGif — for creating GIF overlay assets and animations.",
        ],
      },
      { t: "h2", text: "Audio and microphone" },
      {
        t: "ul",
        items: [
          "Krisp (free tier) — AI noise cancellation that removes background noise and echo from your microphone. Free plan covers 60 minutes per week.",
          "Voicemeeter Banana (free) — Windows virtual audio mixer for routing game, mic and desktop audio separately.",
          "NVIDIA RTX Voice / Broadcast (free with RTX GPU) — AI noise removal and virtual backgrounds.",
          "Audacity (free) — for recording, editing and post-processing audio clips for your stream.",
        ],
      },
      { t: "h2", text: "Chat bots and moderation" },
      {
        t: "ul",
        items: [
          "Nightbot (free) — fully hosted chatbot for commands, timers, spam filters and giveaways.",
          "Moobot (free tier) — Twitch-focused bot with chat moderation and follower alerts.",
          "StreamElements Chatbot — integrated with their overlay and loyalty point system.",
        ],
      },
      { t: "h2", text: "Analytics and growth" },
      {
        t: "ul",
        items: [
          "Sullygnome (free) — detailed Twitch stream analytics, game popularity trends and competitor research.",
          "Twitch Tracker (free) — historical channel stats, sub count trends and peak viewer data.",
          "TwitchStrike (free) — game popularity and viewer-to-streamer ratio data to find the best games to stream.",
        ],
      },
      { t: "h2", text: "Third-party emote extensions" },
      {
        t: "ul",
        items: [
          "7TV (free) — browser extension for custom emotes, channel emote sets, and animated emotes for all users.",
          "BetterTTV / BTTV (free) — classic extension with a large global emote library.",
          "FrankerFaceZ / FFZ (free) — emote extension with custom chat features and channel emote sets.",
        ],
      },
    ],
    faq: [
      {
        q: "What is the most important tool for a new Twitch streamer?",
        a: "OBS Studio for streaming, and some form of alert/overlay tool like StreamElements or Streamlabs. For channel graphics, a free browser-based tool like EmoteForge handles emotes and badges without needing Photoshop.",
      },
      {
        q: "Do I need paid tools to look professional on stream?",
        a: "No. The tools listed here are all free and used by successful streamers at every level. Clean, consistent design matters more than expensive software.",
      },
    ],
    cta: { label: "Browse more EmoteForge guides", href: "/blog" },
  },
  {
    slug: "twitch-emote-pack-guide",
    title: "How to Create a Full Twitch Emote Pack: Step-by-Step Guide",
    description:
      "How to plan, design and export a complete Twitch emote pack — from choosing an art style to batch-exporting every emote at all required sizes.",
    date: "2026-06-19",
    readMinutes: 8,
    tag: "Tutorials",
    hero: "📦",
    author: "Arvindesh Malhotra",
    body: [
      {
        t: "p",
        text: "A full emote pack is a set of 5–10 custom emotes that work together visually and give your community a complete range of reactions. Having a cohesive pack — rather than a random collection of individual emotes — makes your channel feel polished and gives subscribers a stronger reason to stick around. Here's how to plan and produce one from scratch.",
      },
      { t: "h2", text: "Step 1: Define your emote pack concept" },
      {
        t: "p",
        text: "Before opening any design software, decide on the visual language of your pack. The most successful emote packs have a single consistent art style, colour palette, and a character or mascot as their centrepiece.",
      },
      {
        t: "ul",
        items: [
          "Choose a style: cartoon, chibi, pixel art, or flat illustration. Pick one and stick to it.",
          "Pick a colour palette of 3–5 main colours. Consistent colours tie the pack together visually.",
          "Decide on a mascot or central character — this could be your avatar, a game character, or an original creation.",
          "Identify the 5 core emotions you want to cover: hype, laugh, cry, lurk, and rage cover most chat scenarios.",
        ],
      },
      { t: "h2", text: "Step 2: Plan your emote lineup" },
      {
        t: "p",
        text: "A typical starter pack of 5 emotes covers the highest-use reactions in chat. Here's a proven lineup:",
      },
      {
        t: "table",
        head: ["Slot", "Emote type", "When viewers use it"],
        rows: [
          ["1", "Hype / celebration", "Big plays, wins, epic moments"],
          ["2", "Laugh / LUL", "Funny moments, streamer fails"],
          ["3", "Sad / cry", "Bad luck, losses, sad news"],
          ["4", "Lurk", "Viewer is watching but not chatting"],
          ["5", "Rage", "Frustrating moments, bad RNG"],
        ],
      },
      { t: "h2", text: "Step 3: Commission or create the artwork" },
      {
        t: "p",
        text: "You have two options: create the artwork yourself or commission an artist. If creating yourself, vector tools like Adobe Illustrator or Inkscape give the best results for clean downscaling. If commissioning, platforms like Fiverr and ArtStation have many artists specialising in Twitch emotes.",
      },
      {
        t: "ul",
        items: [
          "Request artwork at 1000 × 1000 px minimum, on a transparent background.",
          "Ask for the full set in one order — a single artist ensures visual consistency.",
          "Brief the artist with your colour palette, style reference, and the 5 emotions you need.",
          "Review each emote at 28 px (using EmoteForge's preview) before approving the commission.",
        ],
      },
      { t: "h2", text: "Step 4: Export all sizes with bulk processing" },
      {
        t: "p",
        text: "Once you have all your emote artwork, you need to export every emote at 28, 56 and 112 px — that's 15 files for a 5-emote pack. Doing this manually is tedious and error-prone. EmoteForge's Bulk Emote Pack tool lets you upload all your emotes at once and exports a single ZIP containing every file at every size, named correctly, ready to upload.",
      },
      {
        t: "ul",
        items: [
          "Open the Bulk Emote Pack tool and drop all your source PNG files.",
          "The tool processes each one to 28, 56 and 112 px.",
          "Download the ZIP — files are organised per emote with correct naming.",
          "Upload each set to Twitch Creator Dashboard → Emotes.",
          "Also upload to 7TV and BTTV for extended reach.",
        ],
      },
      { t: "h2", text: "Step 5: Write great emote names" },
      {
        t: "p",
        text: "Emote names are how viewers trigger them in chat. A good emote name is short (under 12 characters), memorable, descriptive, and includes your channel name as a prefix to avoid conflicts. For example: YourNameHype, YourNameLUL, YourNameRage.",
      },
      { t: "h2", text: "Step 6: Announce your emotes to the community" },
      {
        t: "ul",
        items: [
          "Announce in a stream with a screen showing all emotes and their names.",
          "Pin a chat message with emote names during the reveal stream.",
          "Add a channel panel showing all subscriber emotes.",
          "Post a preview image on social media to attract new subscribers.",
        ],
      },
    ],
    faq: [
      {
        q: "How many emotes should I have as a new Twitch Affiliate?",
        a: "Affiliates start with 1 emote slot. Design your single best emote first — the one that represents your channel most. You'll unlock more slots as your subscriber count grows.",
      },
      {
        q: "What art style works best for Twitch emotes?",
        a: "Flat, cartoon, and chibi styles with bold outlines tend to read best at small sizes. Highly detailed realistic styles are difficult to make readable at 28 px.",
      },
      {
        q: "How do I batch export an emote pack?",
        a: "Use EmoteForge's Bulk Emote Pack tool — upload all your source images at once and download a single ZIP with every emote at 28, 56 and 112 px.",
      },
    ],
    cta: { label: "Export your emote pack in bulk", href: "/bulk-emote-pack" },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export const POSTS_SORTED = [...POSTS].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);
