import type * as React from "react"
export interface TextRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string
}
/**
 * Native TextReveal - Scroll-based text reveal animation
 * Using Framer Motion's useInView hook
 */
export declare const TextReveal: React.ForwardRefExoticComponent<
  TextRevealProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=text-reveal.d.ts.map
