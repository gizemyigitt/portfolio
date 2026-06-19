"use client";

import Link from "next/link";
import { blogPosts, getLang } from "@/lib/data";
import { useLang } from "@/components/LanguageContext";
import { Clock, Tag } from "lucide-react";

export default function BlogPage() {
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen pt-24 pb-20 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm transition-colors mb-8"
            style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
            {t("back_home")}
          </Link>
          <h1 className="text-4xl font-bold mb-3"
            style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
            {t("blog_page_title")}
          </h1>
          <div className="divider-gradient mt-4 mb-4 max-w-xs" />
          <p className="text-sm" style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}>
            {blogPosts.length} {t("blog_page_sub")}
          </p>
        </div>

        <div className="space-y-5">
          {blogPosts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="border rounded-2xl p-6 card-glow"
                style={{
                  background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg-card-rose)",
                  borderColor: i % 2 === 0 ? "var(--border)" : "var(--border-rose)",
                }}>
                <div className="flex flex-wrap gap-2 mb-3">
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
                <h2 className="text-xl font-bold group-hover:opacity-70 transition-opacity mb-2"
                  style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
                  {getLang(post.title, lang)}
                </h2>
                <p className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}>
                  {getLang(post.excerpt, lang)}
                </p>
                <div className="flex items-center gap-4 text-xs"
                  style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime} {t("blog_read")}
                  </span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
                      year: "numeric", month: "long", day: "numeric",
                    })}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
