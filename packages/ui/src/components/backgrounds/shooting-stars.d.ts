import type * as React from "react"
export interface ShootingStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  minDelay?: number
  maxDelay?: number
  starColor?: string
  trailColor?: string
  starWidth?: number
  starHeight?: number
}
/**
 * Native ShootingStars - SVG animated shooting stars
 */
export declare const ShootingStars: React.ForwardRefExoticComponent<
  ShootingStarsProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=shooting-stars.d.ts.map
