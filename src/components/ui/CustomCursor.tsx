"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [variant, setVariant] = useState<"default" | "button" | "text">("default");
  
  // Start offscreen
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setVariant("button");
      } else if (target.closest('p, h1, h2, h3, span, li')) {
        setVariant("text");
      } else {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block" // Hidden on mobile
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%"
      }}
      initial="default"
      animate={variant}
      variants={{
        default: { width: 12, height: 12, borderRadius: "50%", backgroundColor: "#00d4aa", border: "0px solid transparent" },
        button: { width: 48, height: 48, borderRadius: "50%", backgroundColor: "transparent", border: "2px solid #00d4aa" },
        text: { width: 4, height: 28, borderRadius: "2px", backgroundColor: "#00f2c3", border: "0px solid transparent" }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
