import type { HTMLMotionProps } from "framer-motion"
import type * as React from "react"
export interface AuroraTextProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode
}
/**
 * Native AuroraText - Aurora borealis gradient effect
 */
export declare const AuroraText: React.ForwardRefExoticComponent<
  Omit<AuroraTextProps, "ref"> & React.RefAttributes<HTMLSpanElement>
>
//# sourceMappingURL=aurora-text.d.ts.map
