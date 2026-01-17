import type * as React from "react"
export interface ParticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}
/**
 * Native Particles - Canvas particle system
 * Optimized with requestAnimationFrame
 */
export declare const Particles: React.ForwardRefExoticComponent<
  ParticlesProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=particles.d.ts.map
