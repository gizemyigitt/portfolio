"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";
import { useLang } from "@/components/LanguageContext";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const prefix = isHome ? "" : "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { href: `${prefix}#hakkimda`,  label: t("nav_about")    },
    { href: `${prefix}#deneyim`,   label: t("nav_exp")      },
    { href: `${prefix}#beceriler`, label: t("nav_skills")   },
    { href: `${prefix}#projeler`,  label: t("nav_projects") },
    { href: `${prefix}#blog`,      label: t("nav_blog")     },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur ${scrolled ? "border-b" : ""}`}
      style={scrolled ? { background: "rgba(17,14,11,0.82)", borderColor: "var(--border)" } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          <Sparkles className="w-4 h-4" style={{ color: "var(--rose-bright)" }} />
          <span className="gradient-text">{siteConfig.name.split(" ")[0]}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Lang toggle */}
          <button
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 flex items-center gap-1.5"
            style={{
              color: lang === "en" ? "var(--sage-bright)" : "var(--rose-bright)",
              borderColor: lang === "en" ? "var(--border-sage)" : "var(--border-rose)",
              background: lang === "en" ? "var(--sage-faint)" : "var(--rose-faint)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            <span style={{ opacity: lang === "tr" ? 1 : 0.45 }}>TR</span>
            <span style={{ color: "var(--fg-subtle)" }}>/</span>
            <span style={{ opacity: lang === "en" ? 1 : 0.45 }}>EN</span>
          </button>

          <a
            href={`${prefix}#iletisim`}
            className="text-sm px-4 py-1.5 rounded-full font-medium text-white transition-all duration-200 hover:opacity-85"
            style={{
              background: "linear-gradient(135deg, var(--rose), var(--mauve))",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            {t("nav_contact")}
          </a>
        </div>

        <button
          className="md:hidden"
          style={{ color: "var(--fg-muted)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-5 space-y-4"
          style={{ background: "rgba(17,14,11,0.96)", borderColor: "var(--border)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm py-1 transition-colors"
              style={{ color: "var(--fg-muted)", fontFamily: "var(--font-dm-sans)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="text-xs font-medium px-3 py-1.5 rounded-full border mt-2"
            style={{
              color: lang === "en" ? "var(--sage-bright)" : "var(--rose-bright)",
              borderColor: lang === "en" ? "var(--border-sage)" : "var(--border-rose)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            {lang === "tr" ? "Switch to EN" : "TR'ye Geç"}
          </button>
        </div>
      )}
    </header>
  );
}
