"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && <label className="text-sm font-medium text-foreground ml-1">{label}</label>}
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-(--radius) border border-border bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all",
            error && "border-destructive focus-visible:ring-destructive/20",
            "unicorn-textarea",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-xs font-medium text-destructive ml-1">{error}</p>}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"
