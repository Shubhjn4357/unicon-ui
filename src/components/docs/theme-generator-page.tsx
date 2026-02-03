"use client"

import { Check, Eye, Lock } from "lucide-react"
import * as React from "react"
import { useTheme } from "../../hooks/use-theme"
import { BackgroundBeams } from "../backgrounds/background-beams"
import { BentoGrid } from "../layout/bento-grid"
import { SpotlightCard } from "../layout/spotlight-card"
import { ThreeDCard } from "../special/3d-card"
import { AnimatedGradientText } from "../text/animated-gradient-text"

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
      <div className="relative overflow-hidden">
        <BackgroundBeams />
        <div className="container mx-auto py-16 px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-foreground">Theme Generator</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create beautiful themes for your Unicorn UI components with our advanced theme
              generator. Choose from presets or build your own custom themes with real-time preview.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <SpotlightCard className="p-6">
            <div className="text-center">
              <Lock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Component Registry</h3>
              <p className="text-muted-foreground">
                Auto-discover all components and extract metadata automatically
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6">
            <div className="text-center">
              <Eye className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Dynamic Documentation</h3>
              <p className="text-muted-foreground">Generate live docs from component interfaces</p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6">
            <div className="text-center">
              <Check className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Theme Customization</h3>
              <p className="text-muted-foreground">
                Advanced theme builder with color palette generator
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6">
            <div className="text-center">
              <Check className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Live Preview System</h3>
              <p className="text-muted-foreground">
                Interactive component testing with real-time updates
              </p>
            </div>
          </SpotlightCard>
        </div>
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

      {/* Demo Components Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <AnimatedGradientText className="text-4xl font-bold">
            Live Components
          </AnimatedGradientText>
          <p className="text-muted-foreground text-lg">
            Experience the power of Unicorn UI components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BentoGrid className="p-6">
            <div className="aspect-square bg-card rounded-lg border flex items-center justify-center">
              <h4 className="text-foreground font-semibold mb-2">Button</h4>
              <p className="text-muted-foreground text-sm">Primary action component</p>
            </div>
          </BentoGrid>

          <BentoGrid className="p-6">
            <div className="aspect-square bg-card rounded-lg border flex items-center justify-center">
              <h4 className="text-foreground font-semibold mb-2">Card</h4>
              <p className="text-muted-foreground text-sm">Content container component</p>
            </div>
          </BentoGrid>

          <BentoGrid className="p-6">
            <div className="aspect-square bg-card rounded-lg border flex items-center justify-center">
              <h4 className="text-foreground font-semibold mb-2">3D Card</h4>
              <p className="text-muted-foreground text-sm">Interactive 3D effects</p>
            </div>
          </BentoGrid>

          <BentoGrid className="p-6">
            <div className="aspect-square bg-card rounded-lg border flex items-center justify-center">
              <h4 className="text-foreground font-semibold mb-2">Text</h4>
              <p className="text-muted-foreground text-sm">Animated text components</p>
            </div>
          </BentoGrid>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto py-16 px-4 text-center">
        <p className="text-muted-foreground">
          Powered by Unicorn UI - The complete component system
        </p>
      </div>
    </div>
  )
}
