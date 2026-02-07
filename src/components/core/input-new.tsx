"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"
import { useId } from "../../hooks/use-id-new"
import { useReducedMotion } from "../../hooks/use-reduced-motion"

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg"
  /**
   * Error message to display below the input
   * When set, automatically applies error styling and aria-invalid
   */
  error?: string
  /**
   * Helper text to display below the input
   * Automatically generates aria-describedby for accessibility
   */
  description?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  label?: string
}

/**
 * Native Input Component with Enhanced Accessibility
 * 
 * Features:
 * - Auto-generated IDs for label association
 * - Proper ARIA attributes (aria-invalid, aria-describedby)
 * - Error and description text linking
 * - Reduced motion support
 * - Screen reader friendly error messages
 * 
 * @example
 * ```tsx
 * // Basic input
 * <Input label="Email" placeholder="you@example.com" />
 * 
 * // With error
 * <Input label="Password" error="Password must be at least 8 characters" />
 * 
 * // With description
 * <Input label="Username" description="This will be your public display name" />
 * 
 * // With icons
 * <Input leftIcon={<SearchIcon />} placeholder="Search..." />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      error,
      description,
      leftIcon,
      rightIcon,
      label,
      className,
      id,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = id || generatedId
    const errorId = `${inputId}-error`
    const descriptionId = `${inputId}-description`
    const reducedMotion = useReducedMotion()

    // Build aria-describedby from error and description
    const describedByIds = [
      error ? errorId : null,
      description ? descriptionId : null,
      ariaDescribedBy,
    ]
      .filter(Boolean)
      .join(" ")

    const sizeStyles = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-12 px-5 text-lg",
    }

    const baseStyles =
      "w-full rounded-md border-2 border-input bg-background text-foreground " +
      "transition-colors duration-200 " +
      "placeholder:text-muted-foreground " +
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
      "ring-offset-background " +
      "disabled:cursor-not-allowed disabled:opacity-50 " +
      "file:border-0 file:bg-transparent file:text-sm file:font-medium"

    const errorStyles = error
      ? "border-destructive focus-visible:ring-destructive"
      : ""

    const motionProps = !reducedMotion
      ? {
        whileFocus: { scale: 1.005 },
        transition: { type: "spring" as const, stiffness: 400, damping: 17 },
      }
      : {}

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              baseStyles,
              sizeStyles[size],
              errorStyles,
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              "unicorn-input",
              className
            )}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={describedByIds || undefined}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>

        {description && !error && (
          <p
            id={descriptionId}
            className="text-sm text-muted-foreground"
          >
            {description}
          </p>
        )}

        {error && (
          <p
            id={errorId}
            className="text-sm text-destructive font-medium"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"
