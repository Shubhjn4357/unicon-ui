import type * as React from "react"
export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  prompt?: string
  showHeader?: boolean
}
export declare const Terminal: React.ForwardRefExoticComponent<
  TerminalProps & React.RefAttributes<HTMLDivElement>
>
export interface TerminalTypingAnimationProps {
  text: string
  delay?: number
  speed?: number
}
export declare const TerminalTypingAnimation: React.FC<TerminalTypingAnimationProps>
export declare const AnimatedSpan: React.ElementType
//# sourceMappingURL=terminal.d.ts.map
