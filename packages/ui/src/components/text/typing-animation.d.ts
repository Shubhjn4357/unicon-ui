import type * as React from "react"
export interface TypingAnimationProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  duration?: number
  delay?: number
  cursor?: boolean
}
/**
 * Native TypingAnimation - Typewriter effect
 */
export declare const TypingAnimation: React.ForwardRefExoticComponent<
  TypingAnimationProps & React.RefAttributes<HTMLSpanElement>
>
//# sourceMappingURL=typing-animation.d.ts.map
