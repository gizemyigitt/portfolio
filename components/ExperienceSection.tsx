"use client";

import { motion } from "framer-motion";
import { experiences, getLang } from "@/lib/data";
import { useLang } from "@/components/LanguageContext";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const { lang, t } = useLang();

  return (
    <section id="deneyim" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--rose-bright)", fontFamily: "var(--font-dm-sans)" }}>
            {t("exp_label")}
          </span>
          <h2 className="text-4xl font-bold mt-3"
            style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
            {t("exp_title")}
          </h2>
          <div className="divider-gradient mt-5 max-w-xs mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--rose), var(--sage))", opacity: 0.3 }} />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 hidden md:flex w-10 h-10 rounded-full items-center justify-center border"
                  style={{
                    background: i === 0 ? "var(--bg-card-rose)" : "var(--bg-card-sage)",
                    borderColor: i === 0 ? "var(--border-rose)" : "var(--border-sage)",
                  }}>
                  <Briefcase className="w-4 h-4"
                    style={{ color: i === 0 ? "var(--rose-bright)" : "var(--sage-bright)" }} />
                </div>

                {/* Card */}
                <div className="border rounded-2xl p-6 card-glow"
                  style={{
                    background: i === 0 ? "var(--bg-card-rose)" : "var(--bg-card-sage)",
                    borderColor: i === 0 ? "var(--border-rose)" : "var(--border-sage)",
                  }}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-bold"
                      style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
                      {getLang(exp.title, lang)}
                    </h3>
                    <span className="text-xs shrink-0 border px-2.5 py-1 rounded-full self-start"
                      style={{
                        color: i === 0 ? "var(--rose-bright)" : "var(--sage-bright)",
                        borderColor: i === 0 ? "var(--border-rose)" : "var(--border-sage)",
                        background: "transparent",
                        fontFamily: "var(--font-dm-sans)",
                      }}>
                      {getLang(exp.period, lang)}
                    </span>
                  </div>

                  <p className="text-sm font-medium mb-4"
                    style={{ color: i === 0 ? "var(--rose-bright)" : "var(--sage-bright)", fontFamily: "var(--font-dm-sans)" }}>
                    {exp.company}
                  </p>

                  <ul className="space-y-2">
                    {getLang(exp.bullets, lang).map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed"
                        style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}>
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0"
                          style={{ color: i === 0 ? "var(--rose)" : "var(--sage)" }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
