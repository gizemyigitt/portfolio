"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useLang } from "@/components/LanguageContext";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/SocialIcons";

export default function ContactSection() {
  const { t } = useLang();

  const socials = [
    { icon: GithubIcon, label: "GitHub",     href: siteConfig.github,   rose: false },
    { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.linkedin, rose: true  },
    { icon: XIcon, label: "Twitter / X",     href: siteConfig.twitter,  rose: false },
  ];

  return (
    <section id="iletisim" className="py-28 px-6" style={{ background: "var(--sage-faint)" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--sage-bright)", fontFamily: "var(--font-dm-sans)" }}>
            {t("contact_label")}
          </span>
          <h2 className="text-4xl font-bold mt-3"
            style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)" }}>
            {t("contact_title")}
          </h2>
          <div className="divider-gradient mt-5 max-w-xs mx-auto" />
          <p className="mt-5 max-w-lg mx-auto"
            style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}>
            {t("contact_sub")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 border rounded-2xl p-5 card-glow group"
              style={{ background: "var(--bg-card-rose)", borderColor: "var(--border-rose)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--rose-faint)" }}>
                <Mail className="w-5 h-5" style={{ color: "var(--rose-bright)" }} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-0.5"
                  style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                  {t("contact_email_label")}
                </p>
                <p className="text-sm group-hover:opacity-70 transition-opacity"
                  style={{ color: "var(--fg)", fontFamily: "var(--font-dm-sans)" }}>
                  {siteConfig.email}
                </p>
              </div>
            </a>

            {socials.map(({ icon: Icon, label, href, rose }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 border rounded-2xl p-4 group transition-all duration-200"
                style={{ borderColor: "var(--border)", background: "var(--bg-card)", color: "var(--fg-muted)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--fg)";
                  e.currentTarget.style.borderColor = rose ? "var(--border-rose)" : "var(--border-sage)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--fg-muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}>
                <Icon className="w-4 h-4 shrink-0" />
                <span className="text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>{label}</span>
              </a>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            action={`mailto:${siteConfig.email}`}
            method="get"
            className="border rounded-2xl p-6 space-y-4"
            style={{ background: "var(--bg-card-sage)", borderColor: "var(--border-sage)" }}
          >
            {[
              { label: t("contact_name_label"), name: "subject", placeholder: t("contact_name_ph"), multiline: false },
            ].map(({ label, name, placeholder }) => (
              <div key={name}>
                <label className="block text-xs uppercase tracking-wider mb-2"
                  style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                  {label}
                </label>
                <input type="text" name={name} placeholder={placeholder}
                  className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                  style={{
                    background: "var(--bej-faint)",
                    borderColor: "var(--border)",
                    color: "var(--fg)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--sage)")}
                  onBlur={e  => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>
            ))}
            <div>
              <label className="block text-xs uppercase tracking-wider mb-2"
                style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                {t("contact_msg_label")}
              </label>
              <textarea name="body" rows={4} placeholder={t("contact_msg_ph")}
                className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                style={{
                  background: "var(--bej-faint)",
                  borderColor: "var(--border)",
                  color: "var(--fg)",
                  fontFamily: "var(--font-dm-sans)",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "var(--sage)")}
                onBlur={e  => (e.currentTarget.style.borderColor = "var(--border)")}
              />
            </div>
            <button type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:opacity-85 text-white"
              style={{
                background: "linear-gradient(135deg, var(--sage), var(--rose))",
                fontFamily: "var(--font-dm-sans)",
              }}>
              <Send className="w-4 h-4" />
              {t("contact_send")}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
