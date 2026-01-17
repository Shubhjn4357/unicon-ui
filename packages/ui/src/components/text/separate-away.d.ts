import type * as React from "react"
export interface SeparateAwayProps extends React.HTMLAttributes<HTMLDivElement> {
  upperText: string
  lowerText: string
  duration?: number
}
/**
 * Native SeparateAway - Text separates to reveal content
 */
export declare const SeparateAway: React.ForwardRefExoticComponent<
  SeparateAwayProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=separate-away.d.ts.map
