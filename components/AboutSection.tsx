"use client";

import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageContext";
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";

export default function AboutSection() {
  const { t } = useLang();

  const infoItems = [
    { icon: MapPin,        label: t("about_loc_label"),   value: t("about_loc"),   rose: true  },
    { icon: Briefcase,     label: t("about_exp_label"),   value: t("about_exp"),   rose: false },
    { icon: Calendar,      label: t("about_avail_label"), value: t("about_avail"), rose: true  },
    { icon: GraduationCap, label: t("about_edu_label"),   value: t("about_edu"),   rose: false },
  ];

  return (
    <section id="hakkimda" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--rose-bright)", fontFamily: "var(--font-dm-sans)" }}>
            {t("about_label")}
          </span>
          <h2 className="text-4xl font-bold mt-3"
            style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
            {t("about_title")}
          </h2>
          <div className="divider-gradient mt-5 max-w-xs mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-lg leading-relaxed" style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}>
              {t("about_p1")}
            </p>
            <p className="leading-relaxed" style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}>
              {t("about_p2")}
            </p>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["React & Next.js", "TypeScript", "Binance API", "PostgreSQL", "Docker"].map((tag, i) => (
                <span key={tag} className="text-xs border px-3 py-1 rounded-full"
                  style={{
                    color: i % 2 === 0 ? "var(--rose-bright)" : "var(--sage-bright)",
                    borderColor: i % 2 === 0 ? "var(--border-rose)" : "var(--border-sage)",
                    background: i % 2 === 0 ? "var(--rose-faint)" : "var(--sage-faint)",
                    fontFamily: "var(--font-dm-sans)",
                  }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-1">
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 text-sm border px-5 py-2.5 rounded-full transition-all duration-200"
                style={{ color: "var(--rose-bright)", borderColor: "var(--border-rose)", fontFamily: "var(--font-dm-sans)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--rose-faint)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                {t("about_cv")}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {infoItems.map(({ icon: Icon, label, value, rose }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border rounded-2xl p-5 card-glow"
                style={{
                  background: rose ? "var(--bg-card-rose)" : "var(--bg-card-sage)",
                  borderColor: rose ? "var(--border-rose)" : "var(--border-sage)",
                }}
              >
                <Icon className="w-4 h-4 mb-3"
                  style={{ color: rose ? "var(--rose-bright)" : "var(--sage-bright)" }} />
                <p className="text-xs uppercase tracking-wider mb-1"
                  style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                  {label}
                </p>
                <p className="font-medium text-sm" style={{ color: "var(--fg)" }}>
                  {value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
