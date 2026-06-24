"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useLang } from "@/components/LanguageContext";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

function openEmail(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const email = siteConfig.email;
  let opened = false;
  const onBlur = () => { opened = true; };
  window.addEventListener("blur", onBlur, { once: true });
  window.location.href = `mailto:${email}`;
  setTimeout(() => {
    window.removeEventListener("blur", onBlur);
    if (!opened) {
      window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, "_blank");
    }
  }, 600);
}

export default function ContactSection() {
  const { t } = useLang();

  const contacts = [
    {
      icon: Mail,
      label: t("contact_email_label"),
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      rose: true,
      onClick: openEmail,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "gizemyigitt",
      href: siteConfig.github,
      rose: false,
      onClick: undefined,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "gizem-yigit",
      href: siteConfig.linkedin,
      rose: true,
      onClick: undefined,
    },
  ];

  return (
    <section id="iletisim" className="py-28 px-6" style={{ background: "var(--sage-faint)" }}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
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

        <div className="space-y-4">
          {contacts.map(({ icon: Icon, label, value, href, rose, onClick }, i) => (
            <motion.a
              key={label}
              href={href}
              onClick={onClick}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 border rounded-2xl p-5 group transition-all duration-200 card-glow"
              style={{
                background: rose ? "var(--bg-card-rose)" : "var(--bg-card-sage)",
                borderColor: rose ? "var(--border-rose)" : "var(--border-sage)",
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: rose ? "var(--rose-faint)" : "var(--sage-faint)" }}>
                <Icon className="w-5 h-5"
                  style={{ color: rose ? "var(--rose-bright)" : "var(--sage-bright)" }} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-0.5"
                  style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
                  {label}
                </p>
                <p className="text-sm group-hover:opacity-70 transition-opacity"
                  style={{ color: "var(--fg)", fontFamily: "var(--font-dm-sans)" }}>
                  {value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
