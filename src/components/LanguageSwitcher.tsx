"use client";

import React, { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang: "es" | "en") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-[120]" ref={menuRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-0 mb-3 w-36 rounded-2xl shadow-sm overflow-hidden flex flex-col font-montserrat bg-black/10 backdrop-blur-2xl border border-black/5"
          >
            <button 
              onClick={() => changeLanguage("es")}
              className={`flex items-center justify-between w-full px-4 py-3 text-sm text-left transition-colors hover:bg-black/10 ${language === "es" ? "text-page-text font-medium" : "text-page-text/70"}`}
            >
              Español
              {language === "es" && <Check className="w-4 h-4 ml-2" />}
            </button>
            <div className="h-px w-full bg-black/5" />
            <button 
              onClick={() => changeLanguage("en")}
              className={`flex items-center justify-between w-full px-4 py-3 text-sm text-left transition-colors hover:bg-black/10 ${language === "en" ? "text-page-text font-medium" : "text-page-text/70"}`}
            >
              English
              {language === "en" && <Check className="w-4 h-4 ml-2" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-black/10 backdrop-blur-md border border-black/5 px-4 py-2 text-sm font-medium text-page-text/90 shadow-sm transition-all hover:bg-black/20 hover:scale-105 font-montserrat"
      >
        <Globe className="h-4 w-4 opacity-70" />
        <span className="w-5 text-center uppercase">{language}</span>
      </button>
    </div>
  );
}
