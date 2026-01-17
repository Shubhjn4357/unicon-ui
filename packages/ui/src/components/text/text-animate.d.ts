import type * as React from "react"
export interface TextAnimateProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  type?: "popIn" | "slideUp" | "fadeIn"
  by?: "character" | "word"
  duration?: number
  delay?: number
}
/**
 * Native TextAnimate - Various text entrance animations
 */
export declare const TextAnimate: React.ForwardRefExoticComponent<
  TextAnimateProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=text-animate.d.ts.map
