import type { HTMLMotionProps } from "framer-motion"
import type * as React from "react"
export interface CheckboxProps extends Omit<HTMLMotionProps<"input">, "type" | "size"> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  label?: string
  size?: "sm" | "md" | "lg"
}
/**
 * Native Checkbox Component
 * Built without shadcn/Radix - pure SVG checkmark with Framer Motion
 */
export declare const Checkbox: React.ForwardRefExoticComponent<
  Omit<CheckboxProps, "ref"> & React.RefAttributes<HTMLInputElement>
>
//# sourceMappingURL=checkbox.d.ts.map
