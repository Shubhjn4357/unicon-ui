import type * as React from "react"
export interface DotPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  dotColor?: string
}
/**
 * Native DotPattern - SVG dot background pattern
 */
export declare const DotPattern: React.ForwardRefExoticComponent<
  DotPatternProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=dot-pattern.d.ts.map
