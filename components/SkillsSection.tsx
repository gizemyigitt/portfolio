"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { useLang } from "@/components/LanguageContext";

const extraTags = ["REST API", "GraphQL", "Prisma ORM", "Jest", "Playwright", "AWS S3", "Vercel", "Linux"];

export default function SkillsSection() {
  const { lang, t } = useLang();

  return (
    <section id="beceriler" className="py-28 px-6" style={{ background: "var(--sage-faint)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--sage-bright)", fontFamily: "var(--font-dm-sans)" }}>
            {t("skills_label")}
          </span>
          <h2 className="text-4xl font-bold mt-3"
            style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
            {t("skills_title")}
          </h2>
          <div className="divider-gradient mt-5 max-w-xs mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((skill, i) => {
            const isEven = i % 2 === 0;
            const barFrom = isEven ? "var(--rose)" : "var(--sage)";
            const barTo   = isEven ? "var(--mauve)" : "var(--sage-bright)";
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm" style={{ color: "var(--fg)" }}>
                      {skill.name}
                    </span>
                    <span className="text-xs border px-2 py-0.5 rounded-full"
                      style={{
                        color: isEven ? "var(--rose-bright)" : "var(--sage-bright)",
                        borderColor: isEven ? "var(--border-rose)" : "var(--border-sage)",
                        background: isEven ? "var(--rose-faint)" : "var(--sage-faint)",
                        fontFamily: "var(--font-dm-sans)",
                      }}>
                      {skill.category[lang]}
                    </span>
                  </div>
                  <span className="text-xs" style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(196,160,122,0.10)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.05 + 0.2, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${barFrom}, ${barTo})` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-2 justify-center"
        >
          {extraTags.map((tag, i) => (
            <span key={tag} className="text-xs border px-3 py-1.5 rounded-full"
              style={{
                color: i % 3 === 0 ? "var(--rose-bright)" : i % 3 === 1 ? "var(--sage-bright)" : "var(--bej)",
                borderColor: "var(--border)",
                background: "var(--bg-card)",
                fontFamily: "var(--font-dm-sans)",
              }}>
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
