import type { RefObject } from "react"
export interface AnimatedBeamProps {
  className?: string
  containerRef: RefObject<HTMLElement>
  fromRef: RefObject<HTMLElement>
  toRef: RefObject<HTMLElement>
  curvature?: number
  reverse?: boolean
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  delay?: number
  duration?: number
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
}
export declare const AnimatedBeam: ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature,
  reverse,
  duration,
  delay,
  pathColor,
  pathWidth,
  pathOpacity,
  gradientStartColor,
  gradientStopColor,
  startXOffset,
  startYOffset,
  endXOffset,
  endYOffset,
}: AnimatedBeamProps) => import("react/jsx-runtime").JSX.Element
//# sourceMappingURL=animated-beam.d.ts.map
