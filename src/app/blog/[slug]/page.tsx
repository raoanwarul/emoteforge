import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, POSTS, type Block } from "@/lib/blog";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function renderBlock(block: Block, i: number, isLead: boolean) {
  switch (block.t) {
    case "h2":
      {
        const id = slugify(block.text);
      return (
        <div key={i} className="mt-12 scroll-mt-28" id={id}>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-violet-500/60 to-transparent" />
            <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
              Section
            </span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[1.7rem]">
            <a href={`#${id}`} className="transition hover:text-violet-300">
              {block.text}
            </a>
          </h2>
        </div>
      );
      }
    case "p":
      return (
        <p
          key={i}
          className={isLead
            ? "mt-4 text-[1.05rem] leading-8 text-zinc-200"
            : "mt-4 leading-8 text-zinc-300"}
        >
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-5">
          {block.items.map((it, j) => (
            <li key={j} className="flex gap-3 text-zinc-300">
              <span className="mt-0.5 text-violet-400">•</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div
          key={i}
          className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
        >
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-900/90 text-zinc-300">
              <tr>
                {block.head.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold uppercase tracking-wide text-[11px]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 bg-zinc-950/70 text-zinc-300">
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c} className="px-4 py-3 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const headings = post.body
    .filter((block): block is Extract<Block, { t: "h2" }> => block.t === "h2")
    .map((block) => ({ text: block.text, id: slugify(block.text) }));
  const leadParagraphIndex = post.body.findIndex((block) => block.t === "p");
  const quickTakeaway = post.faq?.[0]?.a ?? post.description;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author
      ? { "@type": "Person", name: post.author, url: "https://www.emoteforge.app/about" }
      : { "@type": "Organization", name: "EmoteForge", url: "https://www.emoteforge.app" },
    publisher: {
      "@type": "Organization",
      name: "EmoteForge",
      url: "https://www.emoteforge.app",
      logo: { "@type": "ImageObject", url: "https://www.emoteforge.app/icon-512.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.emoteforge.app/blog/${post.slug}`,
    },
  };

  const faqJsonLd = post.faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
        <div>
          <Link href="/blog" className="text-sm text-violet-400 hover:underline">
            ← All guides
          </Link>

          <header className="mt-6 rounded-[28px] border border-zinc-800 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),_transparent_45%),linear-gradient(180deg,rgba(24,24,27,0.95),rgba(9,9,11,0.92))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.28)] sm:p-9">
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span className="rounded-full border border-violet-500/20 bg-violet-600/15 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-violet-300">
                {post.tag}
              </span>
              <span className="rounded-full border border-zinc-700/80 bg-zinc-900/70 px-3 py-1">
                {post.readMinutes} min read
              </span>
              <span>
                By{" "}
                {post.author ? (
                  <Link href="/about" className="font-medium text-violet-300 hover:underline">
                    {post.author}
                  </Link>
                ) : (
                  "Arvindesh Malhotra"
                )}
              </span>
              <span>
                Updated{" "}
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-zinc-50 sm:text-5xl sm:leading-tight">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              {post.description}
            </p>

            <div className="mt-7 rounded-2xl border border-violet-500/20 bg-violet-500/8 p-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-300">
                Short Version
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-200">
                {quickTakeaway}
              </p>
            </div>
          </header>

          <div className="mt-7 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 text-sm leading-7 text-zinc-300">
            These guides are written to solve the problems streamers usually hit
            right before an upload fails: wrong dimensions, overweight files,
            unreadable 28 px previews, or transparency issues. The goal is to
            keep the advice practical, specific, and easy to apply fast.
          </div>

          <div className="mt-8 space-y-1">
            {post.body.map((block, index) => {
              const isLead = index === leadParagraphIndex && block.t === "p";
              return renderBlock(block, index, isLead);
            })}
          </div>

          {post.faq && (
            <section className="mt-14">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-violet-500/60 to-transparent" />
                <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                  Answers
                </span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[1.7rem]">
                Frequently Asked Questions
              </h2>
              <div className="mt-5 space-y-4">
            {post.faq.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
              >
                <div className="font-medium text-zinc-100">{f.q}</div>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
          )}

          {post.cta && (
            <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-violet-500/30 bg-violet-600/10 p-8 text-center">
              <div className="text-lg font-semibold text-zinc-100">
                Ready to make yours?
              </div>
              <p className="max-w-xl text-sm leading-7 text-zinc-300">
                If you want the export side handled automatically, open the
                relevant EmoteForge tool and generate every required size in one
                pass.
              </p>
              <Link href={post.cta.href} className="btn-primary px-6 py-3 text-base">
                {post.cta.label}
              </Link>
            </div>
          )}
        </div>

        {headings.length > 0 && (
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-300">
                On This Page
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="transition hover:text-violet-300"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}
