"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface LightboxItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
}

interface LightboxContextType {
  isOpen: boolean;
  currentIndex: number;
  items: LightboxItem[];
  openLightbox: (items: LightboxItem[], index?: number) => void;
  closeLightbox: () => void;
  nextItem: () => void;
  prevItem: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState<LightboxItem[]>([]);

  const openLightbox = useCallback((items: LightboxItem[], index = 0) => {
    setItems(items);
    setCurrentIndex(index);
    setIsOpen(true);
    // Prevent scroll on body
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    // Restore scroll
    document.body.style.overflow = "unset";
  }, []);

  const nextItem = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevItem = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  return (
    <LightboxContext.Provider
      value={{
        isOpen,
        currentIndex,
        items,
        openLightbox,
        closeLightbox,
        nextItem,
        prevItem,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (context === undefined) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context;
}
