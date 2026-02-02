import type * as React from "react"
export interface FlipTextProps extends React.HTMLAttributes<HTMLDivElement> {
  word: string
  duration?: number
  delayMultiple?: number
}
/**
 * Native FlipText - Flip text animation
 */
export declare const FlipText: React.ForwardRefExoticComponent<
  FlipTextProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=flip-text.d.ts.map
