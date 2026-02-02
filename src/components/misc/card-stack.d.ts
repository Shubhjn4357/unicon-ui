import type * as React from "react"
interface Card {
  id: number
  content: React.ReactNode
}
export interface CardStackProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Card[]
  offset?: number
  scaleFactor?: number
}
/**
 * Native CardStack - Stacked swipeable cards
 */
export declare const CardStack: React.ForwardRefExoticComponent<
  CardStackProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=card-stack.d.ts.map
