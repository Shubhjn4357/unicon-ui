import type * as React from "react"
export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
}
/**
 * Native MagicCard - Mouse-following gradient highlight
 */
export declare const MagicCard: React.ForwardRefExoticComponent<
  MagicCardProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=magic-card.d.ts.map
