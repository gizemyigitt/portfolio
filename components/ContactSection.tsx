"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useLang } from "@/components/LanguageContext";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const socials = [
    { icon: GithubIcon, label: "GitHub",   href: siteConfig.github,   rose: false },
    { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.linkedin, rose: true  },
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="border rounded-2xl p-6 space-y-4"
            style={{ background: "var(--bg-card-sage)", borderColor: "var(--border-sage)" }}
          >
            <div>
              <label className="block text-xs uppercase tracking-wider mb-2"
                style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                {t("contact_name_label")}
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={t("contact_name_ph")}
                required
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

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2"
                style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                {t("contact_msg_label")}
              </label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={4}
                placeholder={t("contact_msg_ph")}
                required
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

            {status === "success" && (
              <div className="flex items-center gap-2 text-sm rounded-xl px-4 py-3"
                style={{ background: "var(--sage-faint)", color: "var(--sage-bright)", border: "1px solid var(--border-sage)" }}>
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span style={{ fontFamily: "var(--font-dm-sans)" }}>Mesajın iletildi, teşekkürler!</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 text-sm rounded-xl px-4 py-3"
                style={{ background: "var(--rose-faint)", color: "var(--rose-bright)", border: "1px solid var(--border-rose)" }}>
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span style={{ fontFamily: "var(--font-dm-sans)" }}>Bir hata oluştu, tekrar dene.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:opacity-85 text-white disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, var(--sage), var(--rose))",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {status === "loading"
                ? <><Loader2 className="w-4 h-4 animate-spin" /> Gönderiliyor...</>
                : <><Send className="w-4 h-4" /> {t("contact_send")}</>
              }
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
