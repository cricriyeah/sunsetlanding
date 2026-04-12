"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLightbox } from "@/context/LightboxContext";

export function Lightbox() {
  const { isOpen, items, currentIndex, closeLightbox, nextItem, prevItem } = useLightbox();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextItem();
      if (e.key === "ArrowLeft") prevItem();
    },
    [isOpen, closeLightbox, nextItem, prevItem]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[1010] p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation - Prev */}
          {items.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevItem();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[1010] p-2 sm:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
            </button>
          )}

          {/* Content Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full h-full max-w-6xl max-h-[85vh] p-4 md:p-12 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {currentItem.type === "video" ? (
                <video
                  src={currentItem.src}
                  controls
                  autoPlay
                  loop
                  muted
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt}
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </div>
            
            {/* Caption */}
            {currentItem.alt && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={currentItem.alt}
                className="mt-6 font-montserrat text-white/70 text-sm md:text-base font-light tracking-wide text-center"
              >
                {currentItem.alt}
              </motion.p>
            )}

            {/* Counter */}
            {items.length > 1 && (
              <p className="mt-2 font-montserrat text-white/40 text-xs uppercase tracking-widest">
                {currentIndex + 1} / {items.length}
              </p>
            )}
          </motion.div>

          {/* Navigation - Next */}
          {items.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextItem();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[1010] p-2 sm:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
            </button>
          )}
          
          {/* Mobile Swipe Simulation / Tap áreas if needed, but for now buttons work */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
