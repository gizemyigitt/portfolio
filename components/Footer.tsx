"use client";

import { siteConfig } from "@/lib/data";
import { useLang } from "@/components/LanguageContext";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t py-10 px-6" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm" style={{ color: "var(--fg-subtle)" }}>
          <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--rose)" }} />
          <span>
            <span style={{ color: "var(--fg)", fontFamily: "var(--font-playfair, serif)", fontWeight: 600 }}>
              {siteConfig.name}
            </span>{" "}— {new Date().getFullYear()}
          </span>
        </div>
        <p className="text-xs" style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-dm-sans)" }}>
          {t("footer_credit")}
        </p>
      </div>
    </footer>
  );
}
