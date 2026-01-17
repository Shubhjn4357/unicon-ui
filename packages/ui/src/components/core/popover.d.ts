import type * as React from "react"
export interface PopoverProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
}
export declare const Popover: React.FC<PopoverProps>
export declare const PopoverTrigger: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>
>
import type { HTMLMotionProps } from "framer-motion"
export interface PopoverContentProps extends HTMLMotionProps<"div"> {
  align?: "start" | "center" | "end"
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
}
export declare const PopoverContent: React.ForwardRefExoticComponent<
  Omit<PopoverContentProps, "ref"> & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=popover.d.ts.map
