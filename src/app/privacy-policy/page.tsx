import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "EmoteForge privacy policy — what data we collect, how we use it, and your rights under GDPR and CCPA.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    title: "Who We Are",
    content: [
      'EmoteForge ("we", "our", "us") is a free browser-based emote and badge creation tool for streamers, operated by Arvindesh Malhotra. Our website is located at https://www.emoteforge.app.',
      "Your privacy is important to us. This policy explains what information we collect, how we use it, and the choices you have.",
    ],
  },
  {
    title: "Information We Collect",
    subsections: [
      {
        heading: "Information You Provide",
        items: [
          "Contact form submissions (name, email, message) — only if you contact us.",
          "We do NOT require account creation. All tools work without signup.",
        ],
      },
      {
        heading: "Automatically Collected Information",
        items: [
          "Standard web server logs: IP address, browser type, pages visited, timestamps. These logs are retained for up to 30 days for security purposes.",
          "Analytics events (tool usage, page views) sent to Supabase if analytics is configured — these events contain no personally identifiable information.",
        ],
      },
      {
        heading: "What We Do NOT Collect",
        items: [
          "Your images, GIFs, or video files. All processing happens entirely in your browser using WebAssembly and the Canvas API. Your files never leave your device.",
          "Payment information. We do not currently process payments through the website.",
        ],
      },
    ],
  },
  {
    title: "Cookies",
    content: [
      "We use a minimal number of browser storage features necessary for the site to function, such as saving your theme preference and local editing state in your browser.",
      "EmoteForge does not use account cookies for login because the site does not require user accounts.",
    ],
  },
  {
    title: "Google AdSense and Advertising",
    content: [
      "We use Google AdSense to display advertisements on this site. Google AdSense is operated by Google LLC.",
      "Google AdSense may use cookies and web beacons to serve ads based on your prior visits to our website and other websites on the internet. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and other sites on the internet.",
      "You may opt out of personalised advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads. Alternatively, you can opt out of a third-party vendor's use of cookies for personalised advertising by visiting www.aboutads.info.",
      "For more information about Google's privacy practices, see the Google Privacy Policy at https://policies.google.com/privacy.",
    ],
  },
  {
    title: "Affiliate Links",
    content: [
      "EmoteForge is currently applying a reduced-monetization setup while the site is reviewed for advertising approval. If affiliate links are introduced or reintroduced in the future, they will be clearly disclosed on the relevant page.",
    ],
  },
  {
    title: "Third-Party Services",
    rows: [
      ["Google AdSense", "Ad serving", "https://policies.google.com/privacy"],
      ["Google Fonts", "Typography", "https://policies.google.com/privacy"],
      ["Supabase", "Anonymous analytics", "https://supabase.com/privacy"],
      ["Vercel", "Web hosting", "https://vercel.com/legal/privacy-policy"],
    ],
  },
  {
    title: "How We Use Your Information",
    items: [
      "To operate and improve the EmoteForge tools.",
      "To respond to your contact form messages.",
      "To show relevant advertisements via Google AdSense.",
      "To detect and prevent abuse or security incidents.",
      "To analyse aggregate, anonymised usage trends.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "Contact form messages are retained for up to 12 months.",
      "Server logs are retained for up to 30 days.",
      "Anonymous analytics events have no personally identifiable data and are retained indefinitely for product improvement.",
    ],
  },
  {
    title: "Your Rights (GDPR — EEA/UK Residents)",
    items: [
      "Right to access — you can request a copy of the personal data we hold about you.",
      "Right to rectification — you can ask us to correct inaccurate data.",
      "Right to erasure — you can ask us to delete your personal data.",
      "Right to restrict processing — you can ask us to stop using your data.",
      "Right to data portability — you can ask for your data in a machine-readable format.",
      "Right to object — you can object to processing based on legitimate interests.",
    ],
  },
  {
    title: "Your Rights (CCPA — California Residents)",
    content: [
      "California residents have the right to know what personal information we collect, the right to delete personal information, the right to opt-out of the sale of personal information (we do not sell personal information), and the right to non-discrimination for exercising these rights.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "EmoteForge is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us and we will promptly delete it.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. When we do, we will update the 'Last updated' date below. Continued use of EmoteForge after any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have questions about this Privacy Policy or want to exercise your data rights, please visit our contact page or email us via the address listed there.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-400">
          Legal
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-zinc-400">
          Last updated: <time dateTime="2026-06-21">21 June 2026</time>
        </p>
        <p className="mt-2 text-zinc-400">
          This Privacy Policy explains how EmoteForge collects, uses, and
          protects your information when you use our website and tools.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {SECTIONS.map((section, i) => (
          <section
            key={i}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
          >
            <h2 className="text-lg font-semibold text-zinc-100">
              {section.title}
            </h2>

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
                    <span className="mt-0.5 text-violet-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {"subsections" in section &&
              Array.isArray(section.subsections) &&
              section.subsections.map((sub, j) => (
                <div key={j} className="mt-4">
                  <h3 className="text-sm font-semibold text-zinc-200">
                    {sub.heading}
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {sub.items.map((item, k) => (
                      <li key={k} className="flex gap-2 text-sm text-zinc-400">
                        <span className="mt-0.5 text-violet-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            {"rows" in section && Array.isArray(section.rows) && (
              <div className="mt-4 overflow-hidden rounded-xl border border-zinc-800">
                <table className="w-full text-left text-sm">
                  <thead className="bg-zinc-900 text-zinc-400">
                    <tr>
                      <th className="px-4 py-2 font-medium">Service</th>
                      <th className="px-4 py-2 font-medium">Purpose</th>
                      <th className="px-4 py-2 font-medium">Privacy Policy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 text-zinc-300">
                    {section.rows.map((row, j) => (
                      <tr key={j}>
                        <td className="px-4 py-2">{row[0]}</td>
                        <td className="px-4 py-2">{row[1]}</td>
                        <td className="px-4 py-2">
                          <a
                            href={row[2]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-violet-400 underline underline-offset-2 hover:text-violet-300"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Footer nav */}
      <div className="mt-12 flex flex-wrap gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-400">
        <Link href="/terms" className="hover:text-violet-400">
          Terms of Service
        </Link>
        <Link href="/contact" className="hover:text-violet-400">
          Contact Us
        </Link>
        <Link href="/about" className="hover:text-violet-400">
          About EmoteForge
        </Link>
      </div>
    </div>
  );
}
