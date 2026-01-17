import type * as React from "react"
export interface TweetCardProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  author?: string
  username?: string
  avatar?: string
  verified?: boolean
  timestamp?: string
  text?: string
}
/**
 * Native TweetCard -  Tweet-style card component
 */
export declare const TweetCard: React.ForwardRefExoticComponent<
  TweetCardProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=tweet-card.d.ts.map
