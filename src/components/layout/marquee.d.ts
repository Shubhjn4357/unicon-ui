import type * as React from "react"
export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean
  reverse?: boolean
  fade?: boolean
  speed?: "slow" | "normal" | "fast"
  repeat?: number
}
/**
 * Native Marquee - Infinite horizontal scrolling
 * Pure CSS + Framer Motion, no dependencies
 */
export declare const Marquee: React.ForwardRefExoticComponent<
  MarqueeProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=marquee.d.ts.map
