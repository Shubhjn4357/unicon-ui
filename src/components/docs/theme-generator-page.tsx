"use client"

import { Check, Eye, Lock } from "lucide-react"
import * as React from "react"
import { useTheme } from "../../hooks/use-theme"
import { BackgroundBeams } from "../backgrounds/background-beams"
import { SpotlightCard } from "../layout/spotlight-card"
import { ThemeEditor } from "./theme-editor"

export default function ThemeGeneratorPage() {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = React.useState(theme === "dark")

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setTheme(newTheme)
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b">
        <BackgroundBeams />
        <div className="container mx-auto py-12 px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-foreground tracking-tight">
              Theme Generator
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
              Create beautiful, accessible themes for your Unicorn UI components. Choose from our
              curated presets or build your own custom palette.
            </p>
          </div>
        </div>
      </div>

      {/* Main Editor Section */}
      <div className="container mx-auto py-8 px-4">
        <ThemeEditor />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <SpotlightCard className="p-2">
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            {isDark ? (
              <>
                <Lock className="w-4 h-4" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </SpotlightCard>
      </div>

      {/* Footer */}
      <div className="container mx-auto py-12 px-4 text-center border-t mt-12">
        <p className="text-muted-foreground">
          Powered by Unicorn UI - The complete component system
        </p>
      </div>
    </div>
  )
}
