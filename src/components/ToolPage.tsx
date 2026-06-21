import EmoteStudio from "@/components/EmoteStudio";
import AdSlot from "@/components/AdSlot";

export interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  specId: string;
  title: string;
  subtitle: string;
  intro?: string;
  faq: FaqItem[];
}

const toolLinks: Record<string, string> = {
  "twitch-emote": "/twitch-emote-maker",
  "twitch-sub-badge": "/twitch-sub-badge-maker",
  "twitch-bit-badge": "/twitch-bit-badge-maker",
  "kick-emote": "/kick-emote-maker",
  "generic-emote": "/emote-resizer",
  "7tv-emote": "/7tv-emote-maker",
  "bttv-emote": "/bttv-emote-maker",
  "discord-sticker": "/discord-sticker-maker",
  "emote-background-remover": "/emote-background-remover",
  "emote-board": "/emote-board",
  "bulk-emote-pack": "/bulk-emote-pack",
};

export default function ToolPage({ specId, title, subtitle, intro, faq }: Props) {
  const toolUrl = `https://www.emoteforge.app${toolLinks[specId] || ""}`;

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": title,
    "description": subtitle,
    "url": toolUrl,
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  } : null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-400">{subtitle}</p>
      </div>

      <EmoteStudio specId={specId} />

      <AdSlot slot="1234567890" />

      {/* Info & FAQ Grid to save vertical space on mobile and look professional */}
      <div className="mx-auto mt-14 max-w-4xl grid gap-8 md:grid-cols-2">
        {/* Intro / How it works */}
        {intro && (
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
            <h2 className="mb-4 text-lg font-semibold text-zinc-100">
              About {title}
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              {intro}
            </p>
          </section>
        )}

        {/* Compact FAQ */}
        <section className={intro ? "" : "col-span-2 max-w-2xl mx-auto w-full"}>
          <h2 className="mb-4 text-lg font-semibold text-zinc-100">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faq.map((f) => (
              <details
                key={f.q}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4"
              >
                <summary className="cursor-pointer text-sm font-medium text-zinc-200">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-zinc-400">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


