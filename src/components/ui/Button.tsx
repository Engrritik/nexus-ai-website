"use client";
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, onClick, children, ...props }, ref) => {
    const [coords, setCoords] = React.useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = React.useState(false);

    let variantStyles = "";
    if (variant === "default") {
      variantStyles = "bg-teal/80 text-black button-liquid shadow-[0_0_15px_rgba(0,212,170,0.4)] hover:shadow-[0_0_25px_rgba(0,212,170,0.6)] font-semibold border border-transparent";
    } else if (variant === "outline") {
      variantStyles = "border border-teal text-teal button-liquid shadow-[0_0_10px_rgba(0,212,170,0.1)] hover:text-black";
    } else if (variant === "ghost") {
      variantStyles = "hover:bg-white/5 text-gray-300 hover:text-white";
    } else if (variant === "glass") {
      variantStyles = "glass hover:bg-white/5 text-white button-liquid hover:text-black hover:border-teal";
    }

    let sizeStyles = "";
    if (size === "default") sizeStyles = "h-11 px-6 py-2";
    if (size === "sm") sizeStyles = "h-9 rounded-md px-3";
    if (size === "lg") sizeStyles = "h-14 rounded-md px-8 text-lg";
    if (size === "icon") sizeStyles = "h-10 w-10";

    const baseStyles = "relative overflow-hidden inline-flex items-center justify-center rounded-full text-sm font-semibold tracking-[0.01em] font-inter ring-offset-background disabled:pointer-events-none disabled:opacity-50 z-10 button-agency";

    React.useEffect(() => {
      if (coords.x !== -1 && coords.y !== -1) {
        setIsRippling(true);
        setTimeout(() => setIsRippling(false), 500);
      }
    }, [coords]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      if (onClick) onClick(e);
    };

    return (
      <button
        className={cn(baseStyles, variantStyles, sizeStyles, className)}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-20 flex items-center justify-center w-full h-full gap-2 text-[inherit]">
          {children}
        </span>
        
        {isRippling && (
          <span
            className="absolute bg-white/40 rounded-full animate-ripple pointer-events-none"
            style={{
              left: coords.x,
              top: coords.y,
              transform: "translate(-50%, -50%)",
              width: "20px",
              height: "20px"
            }}
          />
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
