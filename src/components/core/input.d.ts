import type { HTMLMotionProps } from "framer-motion"
import type * as React from "react"
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
export declare const Input: React.ForwardRefExoticComponent<
  Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>
>
export interface TextareaProps extends Omit<HTMLMotionProps<"textarea">, "rows"> {
  rows?: number
  error?: string
  label?: string
  autoResize?: boolean
}
/**
 * Native Textarea Component
 */
export declare const Textarea: React.ForwardRefExoticComponent<
  Omit<TextareaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>
>
//# sourceMappingURL=input.d.ts.map
