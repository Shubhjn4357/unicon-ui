import type React from "react"
interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  squares?: [number, number][]
  className?: string
  squaresClassName?: string
}
export declare function InteractiveGridPattern({
  width,
  height,
  squares,
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps): import("react/jsx-runtime").JSX.Element
//# sourceMappingURL=interactive-grid-pattern.d.ts.map
