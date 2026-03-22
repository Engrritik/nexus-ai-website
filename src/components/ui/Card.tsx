"use client";
import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);
  const [mouseX, setMouseX] = React.useState(-1000);
  const [mouseY, setMouseY] = React.useState(-1000);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -8;
    const rotateYValue = ((x - centerX) / centerX) * 8;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setMouseX(x);
    setMouseY(y);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setMouseX(-1000);
    setMouseY(-1000);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl mint-glass-card p-6 relative group transition-all duration-200 ease-out",
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl overflow-hidden"
        style={{
          background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0,212,170,0.15), transparent 40%)`
        }}
      />
      
      <div 
        className="absolute inset-0 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl border border-transparent overflow-hidden"
        style={{
          background: `radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.08), transparent 40%)`
        }}
      />
      
      <div className="relative z-20 h-full flex flex-col">
        {children}
      </div>
    </div>
  )
})
Card.displayName = "Card"

export { Card }
