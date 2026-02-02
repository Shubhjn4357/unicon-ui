import type { HTMLMotionProps } from "framer-motion"
import type * as React from "react"
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
export declare const badgeVariants: {
  default: string
  secondary: string
  outline: string
  destructive: string
  success: string
}
export declare const Badge: React.ForwardRefExoticComponent<
  Omit<BadgeProps, "ref"> & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=badge.d.ts.map
