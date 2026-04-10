"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface CinematicHeadingProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  type?: "char" | "word";
  variant?: "fadeUp" | "typing";
  delayChildren?: number;
  staggerChildren?: number;
  duration?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: { delayChildren: number; staggerChildren: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: i.staggerChildren,
      delayChildren: i.delayChildren,
    },
  }),
};

const itemVariants: Variants = {
  hidden: (i: { variant: string }) => ({
    opacity: 0,
    y: i.variant === "typing" ? 0 : 15,
    filter: "none",
  }),
  visible: (i: { duration: number; variant: string }) => ({
    opacity: 1,
    y: 0,
    filter: "none",
    transition: {
      duration: i.variant === "typing" ? 0.05 : i.duration,
      ease: i.variant === "typing" ? "linear" : [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

/**
 * Optimized and reusable Hero Animation component.
 * Splits text into characters or words and animates them sequentially.
 * Uses whileInView for reliable viewport-triggered animation.
 */
export function CinematicHeading({
  text,
  className = "",
  as: Component = "h1",
  type = "char",
  variant = "fadeUp",
  delayChildren = 0.4,
  staggerChildren = 0.03,
  duration = 0.8,
}: CinematicHeadingProps) {
  // Always split into words first to handle proper text wrapping
  const words = text.split(" ");
  
  // Calculate total characters for cursor delay
  const totalChars = text.length;

  return (
    <motion.div
      key={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      custom={{ delayChildren, staggerChildren }}
      variants={containerVariants}
    >
      <Component className={className}>
        {words.map((word, wordIndex) => (
          <span
            key={`word-${wordIndex}`}
            className="inline-block whitespace-nowrap"
          >
            {(type === "char" ? word.split("") : [word]).map((char, charIndex) => {
              return (
                <motion.span
                  key={`${char}-${charIndex}`}
                  custom={{ duration, variant }}
                  variants={itemVariants}
                  style={{ 
                    display: "inline-block", 
                    whiteSpace: "pre",
                    willChange: "opacity, transform"
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
            {/* Add space after word if it's not the last one */}
            {wordIndex < words.length - 1 && (
              <motion.span
                custom={{ duration, variant }}
                variants={itemVariants}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {" "}
              </motion.span>
            )}
          </span>
        ))}
        {variant === "typing" && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity, 
              ease: "linear",
              delay: delayChildren + (totalChars * staggerChildren)
            }}
            className="inline-block ml-1 border-r-4 border-white h-[0.8em] align-middle"
          />
        )}
      </Component>
    </motion.div>
  );
}
