import type * as React from "react"
export interface PulsatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string
  duration?: string
}
/**
 * Native PulsatingButton - Pulsing/ripple ring effect
 */
export declare const PulsatingButton: React.ForwardRefExoticComponent<
  PulsatingButtonProps & React.RefAttributes<HTMLButtonElement>
>
export interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export declare const RippleButton: React.ForwardRefExoticComponent<
  RippleButtonProps & React.RefAttributes<HTMLButtonElement>
>
//# sourceMappingURL=pulsating-button.d.ts.map
