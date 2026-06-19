"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageContext";
import { getLang, BlogPost } from "@/lib/data";
import { Clock, Tag } from "lucide-react";

function renderMarkdown(content: string): string {
  return content
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`\n]+)`/g, "<code>$1</code>")
    .replace(/```(\w*)\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>")
    .replace(/^\| (.+) \|$/gm, (_, row) => {
      const cells = row.split(" | ").map((c: string) => `<td>${c}</td>`).join("");
      return `<tr>${cells}</tr>`;
    })
    .replace(/(<tr>.*<\/tr>\n?)+/gs, (t) => `<table>${t}</table>`)
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/gs, (l) => `<ul>${l}</ul>`)
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hpuoltd]|$)(.+)$/gm, "<p>$1</p>")
    .replace(/<p><\/p>/g, "");
}

type Props = {
  post: BlogPost;
  related: BlogPost[];
};

export default function BlogPostClient({ post, related }: Props) {
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen pt-24 pb-20 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/blog"
          className="inline-flex items-center gap-2 text-sm transition-colors mb-10"
          style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
          {t("blog_back")}
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, j) => (
              <span key={tag}
                className="flex items-center gap-1 text-xs border px-2.5 py-1 rounded-md"
                style={{
                  color: j % 2 === 0 ? "var(--rose-bright)" : "var(--sage-bright)",
                  background: j % 2 === 0 ? "var(--rose-faint)" : "var(--sage-faint)",
                  borderColor: j % 2 === 0 ? "var(--border-rose)" : "var(--border-sage)",
                  fontFamily: "var(--font-dm-sans)",
                }}>
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>

          {lang === "en" && t("blog_tr_only") && (
            <div className="mb-4 text-xs border px-4 py-2.5 rounded-xl"
              style={{ color: "var(--bej)", borderColor: "var(--border)", background: "var(--bej-faint)", fontFamily: "var(--font-dm-sans)" }}>
              ⚠ {t("blog_tr_only")}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
            {getLang(post.title, lang)}
          </h1>
          <p className="text-lg leading-relaxed mb-5"
            style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}>
            {getLang(post.excerpt, lang)}
          </p>
          <div className="divider-gradient mb-5" />
          <div className="flex items-center gap-4 text-sm"
            style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} {t("blog_read")}
            </span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
                year: "numeric", month: "long", day: "numeric",
              })}
            </span>
          </div>
        </header>

        <div className="prose-dark"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />

        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t" style={{ borderColor: "var(--border)" }}>
            <h3 className="text-lg font-bold mb-5"
              style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
              {t("blog_related")}
            </h3>
            <div className="grid gap-4">
              {related.map((r, i) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                  <div className="border rounded-xl p-4 card-glow"
                    style={{
                      background: i % 2 === 0 ? "var(--bg-card-rose)" : "var(--bg-card-sage)",
                      borderColor: i % 2 === 0 ? "var(--border-rose)" : "var(--border-sage)",
                    }}>
                    <p className="text-sm font-medium group-hover:opacity-70 transition-opacity"
                      style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
                      {getLang(r.title, lang)}
                    </p>
                    <p className="text-xs mt-1"
                      style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                      {r.readTime} {t("blog_read")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
