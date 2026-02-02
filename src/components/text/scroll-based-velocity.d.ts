interface VelocityScrollProps {
  text: string
  default_velocity?: number
  className?: string
}
interface ParallaxProps {
  children: string
  baseVelocity: number
  className?: string
}
export declare function ParallaxText({
  children,
  baseVelocity,
  className,
}: ParallaxProps): import("react/jsx-runtime").JSX.Element
export declare function ScrollBasedVelocity({
  text,
  default_velocity,
  className,
}: VelocityScrollProps): import("react/jsx-runtime").JSX.Element
//# sourceMappingURL=scroll-based-velocity.d.ts.map
