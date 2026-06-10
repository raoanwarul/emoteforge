import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Providers from "@/components/Providers";
import ClientInit from "@/components/ClientInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL("https://emoteforge.app"),
  title: {
    default: "EmoteForge — Free Twitch & Kick Emote and Badge Maker",
    template: "%s | EmoteForge",
  },
  description:
    "Create perfectly-sized Twitch and Kick emotes and sub badges for free. 100% browser-based, private, and instant. Auto-export all required sizes.",
  keywords: [
    "twitch emote maker",
    "twitch emote maker free",
    "twitch emote size",
    "twitch emote dimensions",
    "twitch emote resizer",
    "twitch sub badge maker",
    "twitch bit badge maker",
    "kick emote maker",
    "kick emote size",
    "emote resizer",
    "emote maker online",
    "emote creator",
    "emote background remover",
    "7tv emote maker",
    "bttv emote maker",
    "ffz emote maker",
    "discord sticker maker",
    "discord sticker size",
    "animated emote maker",
    "animated twitch emote",
    "emote transparent background",
    "make twitch emotes",
    "resize emotes",
    "emote size guide",
    "twitch emote requirements",
    "free emote maker",
    "emote generator",
    "streaming emotes",
    "twitch badge size",
    "emote maker no signup",
    "browser emote maker",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EmoteForge — Free Twitch & Kick Emote and Badge Maker",
    description:
      "Create perfectly-sized Twitch and Kick emotes and badges for free. 100% browser-based and private.",
    type: "website",
    siteName: "EmoteForge",
    url: "https://emoteforge.app",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmoteForge — Free Twitch & Kick Emote and Badge Maker",
    description:
      "Create perfectly-sized Twitch and Kick emotes and badges for free. 100% browser-based and private.",
  },
  ...(GOOGLE_VERIFICATION && {
    verification: {
      google: GOOGLE_VERIFICATION,
    },
  }),
  authors: [{ name: "EmoteForge", url: "https://emoteforge.app" }],
  creator: "EmoteForge",
  publisher: "EmoteForge",
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className="flex min-h-full flex-col bg-zinc-950 text-zinc-100">
        <ClientInit />
        <Providers>
          <SiteNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </Providers>
        {ADSENSE_CLIENT && (
          <Script
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}
      </body>
    </html>
  );
}
