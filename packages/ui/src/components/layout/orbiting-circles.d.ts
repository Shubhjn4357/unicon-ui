import type * as React from "react"
export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  radius?: number
  duration?: number
  delay?: number
  reverse?: boolean
  icons?: React.ReactNode[]
}
/**
 * Native OrbitingCircles - Animated orbiting elements
 * Pure CSS animations + Framer Motion
 */
export declare const OrbitingCircles: React.ForwardRefExoticComponent<
  OrbitingCirclesProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=orbiting-circles.d.ts.map
