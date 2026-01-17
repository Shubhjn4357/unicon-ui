import type * as React from "react"
export interface HyperTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  duration?: number
  delay?: number
}
/**
 * Native HyperText - Scramble text animation
 * Pure Framer Motion, no dependencies
 */
export declare const HyperText: React.ForwardRefExoticComponent<
  HyperTextProps & React.RefAttributes<HTMLSpanElement>
>
//# sourceMappingURL=hyper-text.d.ts.map
