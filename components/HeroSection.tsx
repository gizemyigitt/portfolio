"use client";

import { motion } from "framer-motion";
import { siteConfig, getLang } from "@/lib/data";
import { useLang } from "@/components/LanguageContext";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function HeroSection() {
  const { lang, t } = useLang();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/4 w-[600px] h-[420px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse, rgba(196,100,127,0.18) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-[360px] h-[360px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(ellipse, rgba(111,158,130,0.14) 0%, transparent 70%)" }} />
        <div className="absolute top-2/3 left-1/4 w-[240px] h-[240px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(ellipse, rgba(168,125,196,0.10) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span
            className="inline-block text-xs font-medium tracking-widest uppercase mb-6 border px-4 py-1.5 rounded-full"
            style={{ color: "var(--rose-bright)", borderColor: "var(--border-rose)", background: "var(--rose-faint)", fontFamily: "var(--font-dm-sans)" }}
          >
            {t("hero_greeting")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-3xl font-medium mb-6"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          <span className="gradient-text">{getLang(siteConfig.title, lang)}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}
        >
          {getLang(siteConfig.bio, lang)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projeler"
            className="px-8 py-3 rounded-full font-medium text-white transition-all duration-200 hover:opacity-85 hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, var(--rose), var(--mauve))", fontFamily: "var(--font-dm-sans)" }}
          >
            {t("hero_cta_projects")}
          </a>
          <a
            href="#iletisim"
            className="border px-8 py-3 rounded-full font-medium transition-all duration-200"
            style={{ borderColor: "var(--border)", color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--rose)"; e.currentTarget.style.color = "var(--fg)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--fg-muted)"; }}
          >
            {t("hero_cta_contact")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.55 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { href: siteConfig.github, icon: GithubIcon, label: "GitHub" },
            { href: siteConfig.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors duration-200"
              style={{ color: "var(--fg-subtle)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--rose-bright)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-subtle)")}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#hakkimda"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 transition-colors"
        style={{ color: "var(--fg-subtle)" }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
