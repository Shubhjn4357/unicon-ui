"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export type AriaLiveMode = "polite" | "assertive" | "off"

export interface AriaLiveRegionProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The politeness level of the live region
     * - polite: Waits for current speech to finish
     * - assertive: Interrupts current speech
     * - off: Disables live region
     */
    mode?: AriaLiveMode
    /**
     * Whether updates should be atomic (read as one unit)
     */
    atomic?: boolean
    /**
     * What changes should trigger announcements
     */
    relevant?: "additions" | "removals" | "text" | "all" | "additions text" | "additions removals" | "removals additions" | "removals text" | "text additions" | "text removals"
}

/**
 * AriaLiveRegion Component
 * 
 * A utility component for creating accessible live regions that announce
 * dynamic content changes to screen readers.
 * 
 * @example
 * ```tsx
 * // Status updates
 * <AriaLiveRegion mode="polite">
 *   {status}
 * </AriaLiveRegion>
 * 
 * // Error messages (urgent)
 * <AriaLiveRegion mode="assertive">
 *   {error}
 * </AriaLiveRegion>
 * ```
 */
export const AriaLiveRegion = React.forwardRef<HTMLDivElement, AriaLiveRegionProps>(
    ({ mode = "polite", atomic = true, relevant = "additions text", className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                role="status"
                aria-live={mode}
                aria-atomic={atomic}
                aria-relevant={relevant}
                className={cn("sr-only", className)}
                {...props}
            >
                {children}
            </div>
        )
    }
)

AriaLiveRegion.displayName = "AriaLiveRegion"

/**
 * Hook for announcing messages to screen readers
 * 
 * @example
 * ```tsx
 * const announce = useAnnouncer()
 * 
 * const handleSave = async () => {
 *   await save()
 *   announce("Data saved successfully", "polite")
 * }
 * ```
 */
export function useAnnouncer() {
    const [message, setMessage] = React.useState("")
    const [mode, setMode] = React.useState<AriaLiveMode>("polite")
    const timeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined)

    const announce = React.useCallback((text: string, announcementMode: AriaLiveMode = "polite") => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        setMode(announcementMode)
        setMessage(text)

        // Clear message after announcement to allow re-announcing the same message
        timeoutRef.current = setTimeout(() => {
            setMessage("")
        }, 1000)
    }, [])

    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    const announcer = (
        <AriaLiveRegion mode={mode}>
            {message}
        </AriaLiveRegion>
    )

    return { announce, announcer }
}
