"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useCustomGSAP(animationCallback: () => void, dependencies: any[] = []) {
  const isReducedMotion = useRef(
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );

  useEffect(() => {
    if (isReducedMotion.current) {
      // If user prefers reduced motion, we should skip complex GSAP animations.
      // A simple way is to set elements to their final states, but here we'll just not run the animation.
      // However, typically elements start hidden (opacity 0), so we should reveal them immediately.
      return;
    }

    const ctx = gsap.context(() => {
      animationCallback();
    });

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
