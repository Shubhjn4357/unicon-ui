"use client"

import * as React from "react"

export type DesignStyle = "clay" | "glass" | "liquid-glass" | "skeu" | "minimal" | "none"

interface DesignStyleContextType {
  designStyle: DesignStyle
  setDesignStyle: (style: DesignStyle) => void
}

const DesignStyleContext = React.createContext<DesignStyleContextType | undefined>(undefined)

export interface DesignStyleProviderProps {
  children: React.ReactNode
  defaultStyle?: DesignStyle
  storageKey?: string
}

/**
 * DesignStyleProvider - Global design style management
 *
 * Provides a context for managing design styles across your application.
 * Supports localStorage persistence and includes 5 beautiful style presets.
 *
 * @example
 * ```tsx
 * import { DesignStyleProvider } from '@unicorn-ui/ui'
 *
 * export default function App({ children }) {
 *   return (
 *     <DesignStyleProvider defaultStyle="glass" storageKey="my-app-style">
 *       {children}
 *     </DesignStyleProvider>
 *   )
 * }
 * ```
 */
export function DesignStyleProvider({
  children,
  defaultStyle = "none",
  storageKey = "unicorn-ui-design-style",
}: DesignStyleProviderProps) {
  const [designStyle, setDesignStyleState] = React.useState<DesignStyle>(defaultStyle)

  // Load style from localStorage on mount
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey) as DesignStyle
      if (stored && ["clay", "glass", "liquid-glass", "skeu", "minimal", "none"].includes(stored)) {
        setDesignStyleState(stored)
      }
    } catch (error) {
      // localStorage might not be available
      console.warn("Failed to load design style from localStorage:", error)
    }
  }, [storageKey])

  // Save to localStorage when changed
  const setDesignStyle = React.useCallback(
    (style: DesignStyle) => {
      setDesignStyleState(style)
      try {
        localStorage.setItem(storageKey, style)
      } catch (error) {
        console.warn("Failed to save design style to localStorage:", error)
      }
    },
    [storageKey]
  )

  return (
    <DesignStyleContext.Provider value={{ designStyle, setDesignStyle }}>
      {children}
    </DesignStyleContext.Provider>
  )
}

/**
 * useDesignStyle - Access and update the current design style
 *
 * Hook to access the current design style and change it programmatically.
 * Must be used within a DesignStyleProvider.
 *
 * @returns Object with current designStyle and setDesignStyle function
 *
 * @example
 * ```tsx
 * import { useDesignStyle } from '@unicorn-ui/ui'
 *
 * export function StyleSwitcher() {
 *   const { designStyle, setDesignStyle } = useDesignStyle()
 *
 *   return (
 *     <div className={designStyle !== 'none' ? designStyle : ''}>
 *       <button onClick={() => setDesignStyle('glass')}>
 *         Apply Glass Style
 *       </button>
 *       <p>Current: {designStyle}</p>
 *     </div>
 *   )
 * }
 * ```
 */
export function useDesignStyle() {
  const context = React.useContext(DesignStyleContext)
  if (context === undefined) {
    throw new Error("useDesignStyle must be used within a DesignStyleProvider")
  }
  return context
}
