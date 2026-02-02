import type * as React from "react"
export interface BorderBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
}
/**
 * Native BorderBeam - Animated glowing border
 * Using conic gradient and rotation animation
 */
export declare const BorderBeam: React.ForwardRefExoticComponent<
  BorderBeamProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=border-beam.d.ts.map
