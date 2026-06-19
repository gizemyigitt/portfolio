"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts, getLang } from "@/lib/data";
import { useLang } from "@/components/LanguageContext";
import { Clock, Tag } from "lucide-react";

export default function BlogPreviewSection() {
  const { lang, t } = useLang();
  const preview = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-28 px-6" style={{ background: "var(--rose-faint)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <span className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "var(--rose-bright)", fontFamily: "var(--font-dm-sans)" }}>
              {t("blog_label")}
            </span>
            <h2 className="text-4xl font-bold mt-3"
              style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
              {t("blog_title")}
            </h2>
            <p className="mt-2 max-w-xl" style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}>
              {t("blog_sub")}
            </p>
          </div>
          <Link href="/blog"
            className="flex items-center gap-2 text-sm border px-5 py-2.5 rounded-full transition-all duration-200 shrink-0"
            style={{ color: "var(--rose-bright)", borderColor: "var(--border-rose)", fontFamily: "var(--font-dm-sans)" }}
          >
            {t("blog_all")}
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {preview.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="border rounded-2xl p-6 card-glow h-full flex flex-col"
                  style={{
                    background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg-card-sage)",
                    borderColor: i % 2 === 0 ? "var(--border)" : "var(--border-sage)",
                  }}>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 2).map((tag, j) => (
                      <span key={tag} className="flex items-center gap-1 text-xs border px-2.5 py-1 rounded-md"
                        style={{
                          color: j === 0 ? "var(--rose-bright)" : "var(--sage-bright)",
                          background: j === 0 ? "var(--rose-faint)" : "var(--sage-faint)",
                          borderColor: j === 0 ? "var(--border-rose)" : "var(--border-sage)",
                          fontFamily: "var(--font-dm-sans)",
                        }}>
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-base font-bold mb-3 group-hover:opacity-70 transition-opacity leading-snug flex-1"
                    style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
                    {getLang(post.title, lang)}
                  </h3>

                  <p className="text-sm leading-relaxed mb-5 line-clamp-3"
                    style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                    {getLang(post.excerpt, lang)}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 text-xs"
                      style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime} {t("blog_read")}
                    </div>
                    <span className="text-xs" style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                      {new Date(post.publishedAt).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
                        year: "numeric", month: "short", day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
