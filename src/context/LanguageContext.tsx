"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  /**
   * Helper function to return inline translations effortlessly.
   * Usage: l("Español", "English")
   */
  l: <T extends React.ReactNode>(esText: T, enText: T) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language | null;
    if (saved === "es" || saved === "en") {
      setLanguageState(saved);
    } else {
      const browserLang = navigator.language.startsWith("en") ? "en" : "es";
      setLanguageState(browserLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const l = <T extends React.ReactNode>(esText: T, enText: T): T => {
    // Avoid hydration issues by defaulting to ES until client mounts
    if (!mounted) return esText;
    return language === "en" ? enText : esText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, l }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
