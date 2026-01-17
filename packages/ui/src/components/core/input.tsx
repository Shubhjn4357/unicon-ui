"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends Omit<HTMLMotionProps<"input">, "size"> {
  size?: "sm" | "md" | "lg"
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  label?: string
}

/**
 * Native Input Component
 * Built without shadcn/Radix - pure TypeScript with Framer Motion
 * Uses theme variables: brand, accent, radius, spacing
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = "md", error, leftIcon, rightIcon, label, className, id, ...props }, ref) => {
    const inputId = id || `input-${React.useId()}`

    const sizeStyles = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-12 px-5 text-lg",
    }

    const baseStyles =
      "w-full rounded-[var(--radius)] border-2 border-border bg-surface text-foreground transition-all duration-200 placeholder:text-foreground-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:border-brand disabled:cursor-not-allowed disabled:opacity-50"

    const errorStyles = error ? "border-red-500 focus-visible:ring-red-500" : ""

    return (
      <div className="w-full space-y-1">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-secondary">
              {leftIcon}
            </div>
          )}
          <motion.input
            ref={ref}
            id={inputId}
            className={cn(
              baseStyles,
              sizeStyles[size],
              errorStyles,
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-secondary">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Input.displayName = "Input"

export interface TextareaProps extends Omit<HTMLMotionProps<"textarea">, "rows"> {
  rows?: number
  error?: string
  label?: string
  autoResize?: boolean
}

/**
 * Native Textarea Component
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ rows = 4, error, label, autoResize = false, className, id, onChange, ...props }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)
    const textareaId = id || `textarea-${React.useId()}`

    React.useImperativeHandle(ref, () => textareaRef.current!)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (autoResize && textareaRef.current) {
        textareaRef.current.style.height = "auto"
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      }
      onChange?.(e as any)
    }

    const baseStyles =
      "w-full rounded-[var(--radius)] border-2 border-border bg-surface px-4 py-3 text-foreground transition-all duration-200 placeholder:text-foreground-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:border-brand disabled:cursor-not-allowed disabled:opacity-50 resize-y"

    const errorStyles = error ? "border-red-500 focus-visible:ring-red-500" : ""

    return (
      <div className="w-full space-y-1">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <motion.textarea
          ref={textareaRef}
          id={textareaId}
          rows={rows}
          className={cn(baseStyles, errorStyles, autoResize && "resize-none", className)}
          onChange={handleChange}
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"
