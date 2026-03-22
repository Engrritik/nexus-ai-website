'use client';
import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const moveDot = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = 
          `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animateRing = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = 
          `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', moveDot, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', moveDot);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          background: '#00d4aa',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: -16,
          left: -16,
          width: 32,
          height: 32,
          border: '1px solid rgba(0,212,170,0.6)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
      />
    </>
  );
}
