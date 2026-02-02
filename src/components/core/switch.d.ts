import type * as React from "react"
export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  size?: "sm" | "md" | "lg"
  label?: string
}
/**
 * Native Switch Component
 * Built without shadcn/Radix - pure CSS with Framer Motion animation
 */
export declare const Switch: React.ForwardRefExoticComponent<
  SwitchProps & React.RefAttributes<HTMLInputElement>
>
//# sourceMappingURL=switch.d.ts.map
