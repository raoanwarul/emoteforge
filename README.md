# EmoteForge 🛠️

EmoteForge is a free, 100% browser-based tool to create perfectly-sized Twitch & Kick emotes, sub badges, and bit badges. All image processing runs locally in your browser, ensuring complete privacy.

## Features

- **Platform Presets**: Custom specs for Twitch Emotes, Sub Badges, Bit Badges, Kick Emotes, 7TV, BTTV, and Discord Stickers.
- **Seamless Editing**: Live interactive adjustments (brightness, contrast, saturation, scaling, rotation) with a real-time Twitch chat mockup preview.
- **Animated Emote Support**: Convert and export animated GIFs.
- **No Watermarks**: Clean, platform-ready exports.
- **Background Removal**: Remove background and add stickers borders instantly.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Affiliate links

Recommended-partner links are config-driven. The partner list lives in
`src/lib/affiliates.ts`, and they surface in three places: a contextual strip on
every tool page, a compact row in the downloads card after export, and the
`/recommended` page (also linked in the footer).

To use real tracking links, set the matching environment variables (e.g. in
`.env.local`). When a variable is unset, the partner's normal homepage is used as
a fallback, so links keep working before you enroll in each program:

```bash
NEXT_PUBLIC_AFF_PLACEIT=https://1.envato.market/your-id
NEXT_PUBLIC_AFF_FIVERR=https://www.fiverr.com/?your-id
NEXT_PUBLIC_AFF_OWN3D=https://www.own3d.tv/?ref=your-id
NEXT_PUBLIC_AFF_NERDORDIE=https://nerdordie.com/?ref=your-id
NEXT_PUBLIC_AFF_CANVA=https://www.canva.com/join/your-id
NEXT_PUBLIC_AFF_EPIDEMICSOUND=https://www.epidemicsound.com/referral/your-id
NEXT_PUBLIC_AFF_RESTREAM=https://restream.io/join/your-id
NEXT_PUBLIC_AFF_ELGATO=https://www.elgato.com/?your-id
```

Click events are logged via the existing analytics helper as `affiliate_click`
(with `partner` and `context`), so you can see which partners convert.

