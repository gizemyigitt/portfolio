"use client";

import { motion } from "framer-motion";
import { projects, getLang } from "@/lib/data";
import { useLang } from "@/components/LanguageContext";
import { ExternalLink, Star, Zap } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function ProjectsSection() {
  const { lang, t } = useLang();
  const featured = projects.filter((p) => p.featured);
  const others   = projects.filter((p) => !p.featured);

  return (
    <section id="projeler" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--rose-bright)", fontFamily: "var(--font-dm-sans)" }}>
            {t("projects_label")}
          </span>
          <h2 className="text-4xl font-bold mt-3"
            style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
            {t("projects_title")}
          </h2>
          <div className="divider-gradient mt-5 max-w-xs mx-auto" />
        </motion.div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border rounded-2xl p-6 card-glow group flex flex-col"
              style={{ background: i === 0 ? "var(--bg-card-rose)" : "var(--bg-card-sage)", borderColor: i === 0 ? "var(--border-rose)" : "var(--border-sage)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5" style={{ color: "var(--bej)" }} />
                  <span className="text-xs font-medium" style={{ color: "var(--bej)", fontFamily: "var(--font-dm-sans)" }}>
                    {t("project_featured")}
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full border"
                  style={
                    project.status === "active"
                      ? { color: "var(--sage-bright)", borderColor: "var(--border-sage)", background: "var(--sage-faint)" }
                      : { color: "var(--fg-subtle)", borderColor: "var(--border)", background: "var(--bg-card)" }
                  }>
                  {project.status === "active" ? t("project_active") : t("project_completed")}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:opacity-80 transition-opacity"
                style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4 flex-1"
                style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}>
                {getLang(project.longDescription, lang)}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, j) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-md border"
                    style={{
                      color: j % 2 === 0 ? "var(--rose-bright)" : "var(--sage-bright)",
                      background: j % 2 === 0 ? "var(--rose-faint)" : "var(--sage-faint)",
                      borderColor: j % 2 === 0 ? "var(--border-rose)" : "var(--border-sage)",
                      fontFamily: "var(--font-dm-sans)",
                    }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm transition-colors"
                  style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>
                  <GithubIcon className="w-4 h-4" />
                  {t("project_code")}
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm transition-colors"
                    style={{ color: "var(--rose-bright)", fontFamily: "var(--font-dm-sans)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--sage-bright)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--rose-bright)")}>
                    <ExternalLink className="w-4 h-4" />
                    {t("project_demo")}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border rounded-2xl p-5 card-glow group flex flex-col"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-3.5 h-3.5" style={{ color: "var(--fg-subtle)" }} />
                  <span className="text-xs" style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                    {project.year}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2 group-hover:opacity-75 transition-opacity"
                  style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                  {getLang(project.description, lang)}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded"
                      style={{ color: "var(--fg-muted)", background: "var(--bej-faint)", fontFamily: "var(--font-dm-sans)" }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs transition-colors"
                  style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-subtle)")}>
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
