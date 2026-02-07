"use client"

import * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "../../lib/utils"
import { TOUCH_TARGET_MIN } from "../../constants"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  /**
   * Visual variant of the button
   * @default "default"
   */
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link"
  /**
   * Size of the button
   * @default "md"
   */
  size?: "sm" | "md" | "lg" | "icon"
  /**
   * Loading state - shows spinner and disables interaction
   */
  isLoading?: boolean
  /**
   * Icon to display on the left side
   */
  leftIcon?: React.ReactNode
  /**
   * Icon to display on the right side
   */
  rightIcon?: React.ReactNode
}

/** 
 * Button variant class names
 * Uses semantic color tokens for consistency
 */
export const buttonVariants = {
  default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border-2 border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
  link: "text-primary underline-offset-4 hover:underline",
} as const

/**
 * Enhanced Button Component with Accessibility
 * 
 * Features:
 * - WCAG 2.1 compliant with 44x44px minimum touch targets
 * - Loading states with aria-busy
 * - Proper focus rings for High Contrast Mode
 * - Native CSS transitions and transforms
 * 
 * @example
 * ```tsx
 * // Standard button
 * <Button variant="default" size="md">Click me</Button>
 * 
 * // Loading state
 * <Button isLoading>Submitting...</Button>
 * 
 * // With icons
 * <Button leftIcon={<Icon />}>Save</Button>
 * ```
 */
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
    // Base styles ensure accessibility and consistency
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 " +
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
      "ring-offset-background " +
      "disabled:pointer-events-none disabled:opacity-50 " +
      "active:scale-[0.98] hover:scale-[1.02] " +
      "relative overflow-hidden"

    const sizeStyles = {
      sm: `h-9 px-3 text-sm rounded-md min-h-[${TOUCH_TARGET_MIN}]`,
      md: `h-10 px-4 text-base rounded-md min-h-[${TOUCH_TARGET_MIN}]`,
      lg: `h-12 px-6 text-lg rounded-lg min-h-[${TOUCH_TARGET_MIN}]`,
      icon: `h-10 w-10 rounded-md min-h-[${TOUCH_TARGET_MIN}] min-w-[${TOUCH_TARGET_MIN}]`,
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          buttonVariants[variant],
          sizeStyles[size],
          "unicorn-button",
          className
        )}
        disabled={disabled || isLoading}
        aria-busy={isLoading ? "true" : undefined}
        aria-live={isLoading ? "polite" : undefined}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
            leftIcon && <span aria-hidden="true">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = "Button"
