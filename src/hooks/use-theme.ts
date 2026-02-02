"use client"

import { createContext, createElement, useContext, useEffect, useState } from "react"
import { useLocalStorage } from "./use-async"

export type Theme = "light" | "dark" | "system"

export interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "unicorn-ui-theme",
}: {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}) {
  const [theme, setTheme] = useLocalStorage<Theme>(storageKey, defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
      setResolvedTheme(systemTheme)
      return
    }

    root.classList.add(theme)
    setResolvedTheme(theme)
  }, [theme])

  return createElement(
    ThemeContext.Provider,
    { value: { theme, setTheme, resolvedTheme } },
    children
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
