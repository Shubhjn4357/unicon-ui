import type * as React from "react"
export interface ConfettiProps {
  particleCount?: number
  spread?: number
  origin?: {
    x: number
    y: number
  }
}
/**
 * Native Confetti - Canvas confetti particles
 * Using canvas-confetti library
 */
export declare const Confetti: React.FC<ConfettiProps>
export interface ConfettiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  confettiOptions?: ConfettiProps
}
export declare const ConfettiButton: React.ForwardRefExoticComponent<
  ConfettiButtonProps & React.RefAttributes<HTMLButtonElement>
>
//# sourceMappingURL=confetti.d.ts.map
