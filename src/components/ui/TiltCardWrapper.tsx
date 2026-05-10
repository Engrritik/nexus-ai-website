"use client";

import React, { useRef, useState, useEffect } from "react";

interface TiltCardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCardWrapper({ children, className = "" }: TiltCardWrapperProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation (-6 to 6 degrees max)
    const rotateY = ((mouseX - width / 2) / width) * 12; // 12 is the total range (-6 to +6)
    const rotateX = -((mouseY - height / 2) / height) * 12;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    if (isReducedMotion) return;
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (isReducedMotion) return;
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full ${className}`}
      style={{
        transform: isHovering 
          ? `perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-3px)` 
          : `perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)`,
        transition: isHovering ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
        transformStyle: "preserve-3d"
      }}
    >
      {children}
    </div>
  );
}
