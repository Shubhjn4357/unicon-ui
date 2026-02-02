import type * as React from "react"
export interface NeonGradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  borderSize?: number
  borderRadius?: number
  neonColors?: {
    firstColor: string
    secondColor: string
  }
}
/**
 * Native NeonGradientCard - Animated neon border effect
 */
export declare const NeonGradientCard: React.ForwardRefExoticComponent<
  NeonGradientCardProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=neon-gradient-card.d.ts.map
