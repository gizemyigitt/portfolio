"use client";

import { createContext, useContext, useState } from "react";
import { Lang, UIKey, ui } from "@/lib/i18n";

type CtxValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: UIKey) => string;
};

const LanguageContext = createContext<CtxValue>({
  lang: "tr",
  setLang: () => {},
  t: (key) => ui.tr[key],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");
  const t = (key: UIKey): string => ui[lang][key];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
