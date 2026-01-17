import type * as React from "react"
export interface RippleProps extends React.HTMLAttributes<HTMLDivElement> {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
}
/**
 * Native Ripple - Radial ripple wave effect
 */
export declare const Ripple: React.ForwardRefExoticComponent<
  RippleProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=ripple.d.ts.map
