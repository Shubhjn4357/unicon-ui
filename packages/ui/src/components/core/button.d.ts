import type { HTMLMotionProps } from "framer-motion"
import type * as React from "react"
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
export declare const buttonVariants: {
  default: string
  secondary: string
  outline: string
  ghost: string
  destructive: string
  link: string
}
export declare const Button: React.ForwardRefExoticComponent<
  Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>
>
//# sourceMappingURL=button.d.ts.map
