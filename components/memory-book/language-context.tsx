"use client";

import { createContext, useContext, useState } from "react";

export type Language = "en" | "km";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "km" : "en"));

  return (
    <LanguageContext value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
