import type * as React from "react"
export interface TextHighlighterProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  highlight: string | string[]
  highlightClassName?: string
}
/**
 * Native TextHighlighter - Highlight specific words in text
 */
export declare const TextHighlighter: React.ForwardRefExoticComponent<
  TextHighlighterProps & React.RefAttributes<HTMLSpanElement>
>
//# sourceMappingURL=text-highlighter.d.ts.map
