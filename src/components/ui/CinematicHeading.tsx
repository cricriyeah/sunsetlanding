"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface CinematicHeadingProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  type?: "char" | "word";
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
  hidden: { opacity: 0, filter: "blur(12px)", y: 15 },
  visible: (i: { duration: number }) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: i.duration,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

/**
 * Optimized and reusable Hero Animation component.
 * Splits text into characters or words and animates them sequencially.
 */
export function CinematicHeading({
  text,
  className = "",
  as: Component = "h1",
  type = "char",
  delayChildren = 0.4,
  staggerChildren = 0.03,
  duration = 0.8,
}: CinematicHeadingProps) {
  // Use words for longer sentences (performance optimization)
  const items = type === "word" ? text.split(" ") : text.split("");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      custom={{ delayChildren, staggerChildren }}
      variants={containerVariants}
    >
      <Component className={className}>
        {items.map((item, index) => (
          <motion.span
            key={`${item}-${index}`}
            custom={{ duration }}
            variants={itemVariants}
            style={{ 
              display: "inline-block", 
              whiteSpace: "pre",
              willChange: "opacity, filter, transform" // GPU Acceleration
            }}
          >
            {/* If it's a word, add a space back in (except for the last word) */}
            {type === "word" ? `${item}${index === items.length - 1 ? "" : " "}` : item}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}
