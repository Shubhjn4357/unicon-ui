"use client"

import * as React from "react"
import { type LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The lucide icon component to render
   */
  icon?: LucideIcon
  /**
   * Size preset for the icon
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  /**
   * Custom className
   */
  className?: string
}

const sizeStyles = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
  "2xl": "w-10 h-10",
} as const

/**
 * Icon Wrapper Component
 * 
 * Provides consistent sizing for Lucide React icons with theme color support.
 * Icons automatically use `currentColor` for theming.
 * 
 * @example
 * ```tsx
 * import { Mail } from "lucide-react"
 * 
 * <Icon icon={Mail} size="md" />
 * <Icon icon={Mail} size="lg" className="text-primary" />
 * ```
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size = "md", className, ...props }, ref) => {
    if (!IconComponent) {
      return null
    }

    return (
      <IconComponent
        ref={ref}
        className={cn(sizeStyles[size], className)}
        {...props}
      />
    )
  }
)

Icon.displayName = "Icon"
