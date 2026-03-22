"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeAndRiseRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeAndRiseReveal({
  children,
  className = "",
  delay = 0,
}: FadeAndRiseRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
