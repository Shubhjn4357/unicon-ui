import type * as React from "react"
export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string
}
/**
 * Native SpotlightCard - Mouse-tracking spotlight effect
 * Using Framer Motion's useMotionValue for smooth tracking
 */
export declare const SpotlightCard: React.ForwardRefExoticComponent<
  SpotlightCardProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=spotlight-card.d.ts.map
