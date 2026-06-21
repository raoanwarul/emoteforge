import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact EmoteForge",
  description:
    "Get in touch with the EmoteForge team — bug reports, feature requests, business enquiries, and general questions.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
};

const TOPICS = [
  {
    icon: "🐛",
    title: "Bug Report",
    desc: "Found something broken? Tell us the tool you were using, your browser, and what happened vs. what you expected.",
  },
  {
    icon: "💡",
    title: "Feature Request",
    desc: "Have an idea for a new tool or improvement? We'd love to hear it — many of our best features came from user suggestions.",
  },
  {
    icon: "🤝",
    title: "Business / Partnership",
    desc: "Affiliate partnerships, sponsorships, or collaboration opportunities for the streaming community.",
  },
  {
    icon: "⚖️",
    title: "Legal / Privacy",
    desc: "Data removal requests, GDPR/CCPA enquiries, or other legal matters.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-700 dark:text-violet-400">
          Get in touch
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Contact EmoteForge
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-zinc-400">
          We read every message. Whether it&apos;s a bug, an idea, or a business
          enquiry — reach out and we&apos;ll get back to you.
        </p>
      </div>

      {/* Email contact */}
      <section className="mb-10 rounded-2xl border border-violet-500/30 bg-violet-600/5 p-6 sm:p-8">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-600/20 text-xl">
            ✉️
          </div>
          <div>
            <p className="font-semibold text-zinc-100">Email Us</p>
            <p className="mt-0.5 text-sm text-zinc-400">
              The fastest way to reach us is by email. We typically respond
              within 24–48 hours on weekdays.
            </p>
            <a
              href="mailto:hello@emoteforge.app"
              className="mt-2 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300"
            >
              hello@emoteforge.app
            </a>
          </div>
        </div>
      </section>

      {/* Creator link */}
      <section className="mb-10 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
        <h2 className="mb-3 text-base font-semibold text-zinc-100">
          Built by Arvindesh Malhotra
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          EmoteForge is an independent project by Arvindesh Malhotra. For
          project-related enquiries, feedback, privacy requests, or business
          communication, use the email above and include as much detail as you can.
        </p>
      </section>

      {/* Topic guide */}
      <section className="mb-12">
        <h2 className="mb-5 text-xl font-semibold text-zinc-100">
          What to Include in Your Message
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {TOPICS.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-5"
            >
              <div className="text-xl">{t.icon}</div>
              <h3 className="mt-2 text-sm font-semibold text-zinc-100">
                {t.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Response time note */}
      <div className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900/20 px-5 py-4 text-sm text-zinc-400">
        <span className="font-medium text-zinc-200">Response time:</span>{" "}
        We aim to reply within 1–2 business days. For urgent issues (tool
        completely broken), include &quot;URGENT&quot; in the subject line.
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4 text-sm">
        <Link href="/about" className="text-violet-700 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300">
          About EmoteForge
        </Link>
        <Link
          href="/privacy-policy"
          className="text-zinc-400 hover:text-zinc-200"
        >
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-zinc-400 hover:text-zinc-200">
          Terms of Service
        </Link>
      </div>
    </div>
  );
}
