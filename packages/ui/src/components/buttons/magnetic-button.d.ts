import type { HTMLMotionProps } from "framer-motion"
import type * as React from "react"
export interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  strength?: number
  children?: React.ReactNode
}
/**
 * Native MagneticButton - Mouse attraction effect
 */
export declare const MagneticButton: React.ForwardRefExoticComponent<
  Omit<MagneticButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>
>
//# sourceMappingURL=magnetic-button.d.ts.map
