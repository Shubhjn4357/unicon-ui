"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

/**
 * Native Button Component
 * Built without shadcn/Radix - pure TypeScript with Framer Motion
 * Uses theme variables: brand, accent, radius, spacing
 */
export const buttonVariants = {
  default: "bg-brand text-white hover:bg-brand/90 active:scale-[0.98]",
  secondary: "bg-surface-elevated text-foreground hover:bg-surface-elevated/80",
  outline: "border-2 border-border bg-transparent hover:bg-surface-elevated",
  ghost: "hover:bg-surface-elevated hover:text-foreground",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  link: "text-brand underline-offset-4 hover:underline",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const sizeStyles = {
      sm: "h-8 px-3 text-sm rounded-[calc(var(--radius)*0.75)]",
      md: "h-10 px-4 text-base rounded-[var(--radius)]",
      lg: "h-12 px-6 text-lg rounded-[calc(var(--radius)*1.25)]",
    }

    const glassStyles = "glass-button backdrop-blur-md"

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseStyles,
          buttonVariants[variant],
          sizeStyles[size],
          className?.includes("glass") && glassStyles,
          className
        )}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </motion.button>
    )
  }
)

Button.displayName = "Button"
