import * as React from "react"
import { cn } from "@/lib/utils"

// We will implement a simpler custom button instead to reduce dependencies,
// or actually just use standard HTML button with cn.

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    let variantStyles = "";
    if (variant === "default") {
      variantStyles = "bg-teal text-black hover:bg-teal/90 shadow-[0_0_15px_rgba(0,212,170,0.4)] hover:shadow-[0_0_25px_rgba(0,212,170,0.6)] font-semibold";
    } else if (variant === "outline") {
      variantStyles = "border border-teal text-teal hover:bg-teal/10";
    } else if (variant === "ghost") {
      variantStyles = "hover:bg-white/5 text-gray-300 hover:text-white";
    } else if (variant === "glass") {
      variantStyles = "glass hover:bg-white/5 text-white";
    }

    let sizeStyles = "";
    if (size === "default") sizeStyles = "h-11 px-6 py-2";
    if (size === "sm") sizeStyles = "h-9 rounded-md px-3";
    if (size === "lg") sizeStyles = "h-14 rounded-md px-8 text-lg";
    if (size === "icon") sizeStyles = "h-10 w-10";

    const baseStyles = "inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    return (
      <button
        className={cn(baseStyles, variantStyles, sizeStyles, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
