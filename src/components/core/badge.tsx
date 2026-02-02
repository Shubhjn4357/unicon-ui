"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "secondary" | "outline" | "destructive" | "success"
  size?: "sm" | "md" | "lg"
  dot?: boolean
  children?: React.ReactNode
}

/**
 * Native Badge Component
 * Built without shadcn/Radix - pure CSS with Framer Motion
 */
export const badgeVariants = {
  default: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-secondary text-secondary-foreground border-border",
  outline: "bg-background text-foreground border-border",
  destructive: "bg-destructive/10 text-destructive border-destructive/20",
  success: "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400",
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, variant = "default", size = "md", dot = false, className, ...props }, ref) => {
    const sizeStyles = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-sm",
      lg: "px-3 py-1.5 text-base",
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border font-medium transition-all duration-200",
          badgeVariants[variant],
          sizeStyles[size],
          className
        )}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {dot && (
          <motion.div
            className={cn("h-1.5 w-1.5 rounded-full", {
              "bg-[hsl(var(--primary))]": variant === "default",
              "bg-foreground": variant === "secondary" || variant === "outline",
              "bg-red-600": variant === "destructive",
              "bg-green-600": variant === "success",
            })}
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: [0.8, 1, 0.8], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        )}
        {children}
      </motion.div>
    )
  }
)

Badge.displayName = "Badge"
