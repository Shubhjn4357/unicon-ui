import type * as React from "react"
export interface GradualSpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  duration?: number
  delayMultiple?: number
}
/**
 * Native GradualSpacing - Animate letter spacing
 */
export declare const GradualSpacing: React.ForwardRefExoticComponent<
  GradualSpacingProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=gradual-spacing.d.ts.map
