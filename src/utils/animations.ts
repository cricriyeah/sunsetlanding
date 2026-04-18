import { Variants } from "framer-motion";

export const standardFadeUp: Variants = {
  hidden: { opacity: 0, filter: "none" },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    filter: "none",
    transition: {
      duration: 0.8,
      delay: customDelay,
      ease: "easeOut"
    }
  })
};

export const standardViewport = { once: true, amount: 0.1, margin: "-50px" };
