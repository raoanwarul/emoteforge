import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "EmoteForge Terms of Service — rules for using our emote and badge creation tools, acceptable use policy, and disclaimers.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: [
      'By accessing or using EmoteForge ("the Service") at https://www.emoteforge.app, you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use the Service.',
      "These Terms apply to all users of the Service, including visitors and contributors.",
    ],
  },
  {
    title: "2. Description of Service",
    content: [
      "EmoteForge provides a suite of free, browser-based tools for creating and resizing emotes, badges, and stickers for streaming platforms including Twitch, Kick, 7TV, BTTV, FFZ, and Discord.",
      "All image processing occurs locally in your browser using WebAssembly and the HTML5 Canvas API. We do not upload, store, or process your image files on our servers.",
    ],
  },
  {
    title: "3. User Content and Intellectual Property",
    items: [
      "You retain full ownership of all images, designs, and artwork you create using EmoteForge.",
      "You must own or have the legal right to use any images you upload to the tool. Do not upload artwork, photos, or designs that you do not own or are not licensed to use.",
      "EmoteForge does not claim any ownership over your output files.",
      'The EmoteForge name, logo, website design, and software code are the intellectual property of Arvindesh Malhotra and may not be copied or reused without written permission.',
    ],
  },
  {
    title: "4. Acceptable Use",
    intro: "You agree not to use EmoteForge to:",
    items: [
      "Create content that is illegal, hateful, defamatory, obscene, or violates any third-party rights.",
      "Infringe on the intellectual property rights of others (e.g. using trademarked logos without authorisation).",
      "Attempt to reverse-engineer, copy, or redistribute the EmoteForge software.",
      "Use automated tools (bots, scrapers) to access or overload the Service.",
      "Upload malicious files intended to exploit browser vulnerabilities.",
    ],
  },
  {
    title: "5. Free Access",
    items: [
      "EmoteForge is currently offered as a free-to-use browser tool.",
      "We do not currently sell subscriptions or license keys through the website.",
      "If the product model changes in the future, these Terms will be updated before any paid offering is introduced.",
    ],
  },
  {
    title: "6. Advertising",
    content: [
      "EmoteForge displays advertisements served by Google AdSense. These ads are clearly delineated from editorial content. We are not responsible for the content of third-party advertisements.",
    ],
  },
  {
    title: "7. Disclaimers and Limitation of Liability",
    items: [
      'The Service is provided "as is" without warranty of any kind. We do not guarantee that the Service will be error-free, uninterrupted, or that output files will always meet third-party platform requirements (as those requirements may change without notice).',
      "EmoteForge is not affiliated with, endorsed by, or sponsored by Twitch, Kick, Discord, 7TV, BTTV, FFZ, or any other platform mentioned on the site.",
      "Platform specifications (sizes, file limits, formats) are maintained to the best of our knowledge but may become outdated. Always verify requirements with the relevant platform's official documentation.",
      "To the maximum extent permitted by law, EmoteForge and Arvindesh Malhotra shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.",
    ],
  },
  {
    title: "8. External Links",
    content: [
      "EmoteForge does not operate an affiliate program of its own. The website may include normal links to third-party services, tools, and documentation for convenience or reference.",
      "Following an external link does not mean EmoteForge endorses or controls that third-party website.",
    ],
  },
  {
    title: "9. Changes to the Service",
    content: [
      "We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    content: [
      "We may update these Terms from time to time. Significant changes will be communicated by updating the 'Last updated' date. Continued use of the Service after changes constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "11. Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with applicable law. Any disputes shall be subject to the exclusive jurisdiction of the courts in the territory where Arvindesh Malhotra is based.",
    ],
  },
  {
    title: "12. Contact",
    content: [
      "For questions about these Terms, please visit our contact page or email hello@emoteforge.app.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-700 dark:text-violet-400">
          Legal
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-zinc-400">
          Last updated: <time dateTime="2026-06-21">21 June 2026</time>
        </p>
        <p className="mt-2 text-zinc-400">
          Please read these Terms of Service carefully before using EmoteForge.
          By using the Service you agree to these Terms.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {SECTIONS.map((section, i) => (
          <section
            key={i}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
          >
            <h2 className="text-base font-semibold text-zinc-100">
              {section.title}
            </h2>

            {"intro" in section && (
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {section.intro}
              </p>
            )}

            {"content" in section &&
              Array.isArray(section.content) &&
              section.content.map((para, j) => (
                <p key={j} className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {para}
                </p>
              ))}

            {"items" in section && Array.isArray(section.items) && (
              <ul className="mt-3 space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm text-zinc-400">
                    <span className="mt-0.5 text-violet-600 dark:text-violet-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Footer nav */}
      <div className="mt-12 flex flex-wrap gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-400">
        <Link href="/privacy-policy" className="hover:text-violet-700 dark:hover:text-violet-400">
          Privacy Policy
        </Link>
        <Link href="/contact" className="hover:text-violet-700 dark:hover:text-violet-400">
          Contact Us
        </Link>
        <Link href="/about" className="hover:text-violet-700 dark:hover:text-violet-400">
          About EmoteForge
        </Link>
      </div>
    </div>
  );
}
