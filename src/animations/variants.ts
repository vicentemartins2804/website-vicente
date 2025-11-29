// filepath: c:\Users\PC\Desktop\website-vicente\src\animations\variants.ts
import type { Variants } from "framer-motion";

export const containerStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export const cardHover: Variants = {
  rest: { scale: 1, boxShadow: "0 6px 18px rgba(10,20,40,0.06)" },
  hover: {
    scale: 1.03,
    y: -6,
    boxShadow: "0 12px 28px rgba(10,20,40,0.12)",
    transition: { duration: 0.18, ease: "easeOut" },
  },
};
