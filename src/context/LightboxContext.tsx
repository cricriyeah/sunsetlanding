"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxContextType {
  isOpen: boolean;
  currentIndex: number;
  images: LightboxImage[];
  openLightbox: (images: LightboxImage[], index?: number) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  prevImage: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<LightboxImage[]>([]);

  const openLightbox = useCallback((images: LightboxImage[], index = 0) => {
    setImages(images);
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

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <LightboxContext.Provider
      value={{
        isOpen,
        currentIndex,
        images,
        openLightbox,
        closeLightbox,
        nextImage,
        prevImage,
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
