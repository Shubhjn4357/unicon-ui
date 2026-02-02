import type * as React from "react"
export interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  maxOpacity?: number
}
/**
 * Native FlickeringGrid - Randomized flickering grid squares
 */
export declare const FlickeringGrid: React.ForwardRefExoticComponent<
  FlickeringGridProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=flickering-grid.d.ts.map
