"use client"

import { CheckIcon } from "lucide-react"
import * as React from "react"

export interface StatusIconProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  status: "success" | "warning" | "error" | "info"
  icon?: React.ReactNode
  size?: "sm" | "md" | "lg"
}

export const StatusIcon = React.forwardRef<HTMLDivElement, StatusIconProps>(
  ({ status, icon, size = "md", className, ...props }, ref) => {
    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    }

    const statusConfig = {
      success: { bg: "bg-success", color: "text-success-foreground" },
      warning: { bg: "bg-warning", color: "text-warning-foreground" },
      error: { bg: "bg-destructive", color: "text-destructive-foreground" },
      info: { bg: "bg-primary", color: "text-primary-foreground" },
    }

    const config = statusConfig[status]

    return (
      <div
        ref={ref}
        className={`inline-flex items-center justify-center rounded-full ${config.bg} ${config.color} ${sizeClasses[size]} ${className || ""}`}
        {...props}
      >
        {icon || <CheckIcon className="h-3 w-3" />}
      </div>
    )
  }
)

StatusIcon.displayName = "StatusIcon"
