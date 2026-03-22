import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl mint-glass-card p-6 relative overflow-hidden group",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }
