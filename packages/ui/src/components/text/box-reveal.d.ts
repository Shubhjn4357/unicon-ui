import type * as React from "react"
export interface BoxRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  boxColor?: string
  duration?: number
  width?: "fit-content" | "100%"
}
/**
 * Native BoxReveal - Reveal content with a sliding box
 */
export declare const BoxReveal: React.ForwardRefExoticComponent<
  BoxRevealProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=box-reveal.d.ts.map
