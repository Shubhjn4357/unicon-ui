import type * as React from "react"
export interface GridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: string
  strokeWidth?: number
  strokeColor?: string
}
/**
 * Native GridPattern - SVG grid background pattern
 */
export declare const GridPattern: React.ForwardRefExoticComponent<
  GridPatternProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=grid-pattern.d.ts.map
