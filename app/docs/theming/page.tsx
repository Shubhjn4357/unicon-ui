"use client"

import { Badge, Button, Card, GridPattern, useDesignStyle } from "@unicorn-ui/ui"
import type { DesignStyle } from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import { Check, Moon, Palette, Sparkles, Sun } from "lucide-react"
import Link from "next/link"

const designStyles = [
  {
    name: "Claymorphism",
    description: "Soft, tactile 3D effects with depth and shadows",
    className: "clay",
    example:
      "bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
  },
  {
    name: "Liquid Glass",
    description: "Flowing, animated gradients with transparency",
    className: "liquid-glass",
    example: "bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl",
  },
  {
    name: "Glassmorphism",
    description: "Frosted glass aesthetics with blur effects",
    className: "glass",
    example: "bg-white/10 backdrop-blur-md border border-white/20",
  },
  {
    name: "Skeuomorphism",
    description: "Realistic 3D interfaces mimicking physical objects",
    className: "skeu",
    example: "bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800",
  },
  {
    name: "Minimalism",
    description: "Clean and simple with focus on content",
    className: "minimal",
    example: "bg-background border-2 border-border",
  },
]

const colorTokens = [
  { name: "--background", light: "0 0% 100%", dark: "0 0% 3.9%" },
  { name: "--foreground", light: "0 0% 3.9%", dark: "0 0% 98%" },
  { name: "--primary", light: "0 0% 9%", dark: "0 0% 98%" },
  { name: "--primary-foreground", light: "0 0% 98%", dark: "0 0% 9%" },
  { name: "--secondary", light: "0 0% 96.1%", dark: "0 0% 14.9%" },
  { name: "--muted", light: "0 0% 96.1%", dark: "0 0% 14.9%" },
  { name: "--accent", light: "0 0% 96.1%", dark: "0 0% 14.9%" },
  { name: "--border", light: "0 0% 89.8%", dark: "0 0% 14.9%" },
]

export default function ThemingPage() {
  const { designStyle, setDesignStyle } = useDesignStyle()

  const handleStyleClick = (style: DesignStyle) => {
    setDesignStyle(style)
  }

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <GridPattern className="absolute inset-0 opacity-10" />
      </div>

      {/* Hero */}
      <section className="container py-24 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl space-y-4"
        >
          <Badge variant="outline" className="gap-2">
            <Palette className="h-3 w-3" />
            Theming
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight">Theming Guide</h1>
          <p className="text-xl text-muted-foreground">
            Customize Unicorn UI to match your brand with CSS variables, design styles, and theme
            modes.
          </p>
        </motion.div>
      </section>

      {/* Design Styles */}
      <section className="container pb-16 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Design Styles</h2>
          <p className="text-muted-foreground">Choose from 5 stunning design styles</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {designStyles.map((style, idx) => {
            const isActive = designStyle === style.className
            return (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleStyleClick(style.className as DesignStyle)}
                className="cursor-pointer"
              >
                <Card
                  className={`overflow-hidden transition-all ${isActive ? "ring-2 ring-primary" : "hover:shadow-lg"}`}
                >
                  <div className={`h-32 ${style.example} relative`}>
                    {isActive && (
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{style.name}</h3>
                      <code className="text-xs text-muted-foreground">.{style.className}</code>
                    </div>
                    <p className="text-sm text-muted-foreground">{style.description}</p>
                    {isActive && (
                      <Badge variant="default" className="mt-2">
                        Active
                      </Badge>
                    )}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Color Tokens */}
      <section className="container pb-16 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Color Tokens</h2>
          <p className="text-muted-foreground">Customize colors using CSS variables</p>
        </div>

        <Card className="p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">CSS Variables</h3>
            <p className="text-sm text-muted-foreground">
              All colors are defined as HSL values in CSS variables. Override them in your own CSS
              to customize the theme.
            </p>
          </div>

          <div className="space-y-2">
            {colorTokens.map((token) => (
              <div key={token.name} className="grid grid-cols-3 gap-4 p-3 rounded-lg bg-muted/50">
                <code className="text-sm font-mono">{token.name}</code>
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-muted-foreground" />
                  <code className="text-xs text-muted-foreground">{token.light}</code>
                </div>
                <div className="flex items-center gap-2">
                  <Moon className="h-4 w-4 text-muted-foreground" />
                  <code className="text-xs text-muted-foreground">{token.dark}</code>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Customization Example */}
      <section className="container pb-16 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Customization Example</h2>
          <p className="text-muted-foreground">Override CSS variables to create your own theme</p>
        </div>

        <Card className="p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Custom Theme</h3>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                <code>{`/* globals.css */
@layer base {
  :root {
    --primary: 262 83 % 58 %; /* Purple */
    --primary - foreground: 0 0 % 100 %;
    --secondary: 340 82 % 52 %; /* Pink */
    --accent: 199 89 % 48 %; /* Blue */
  }
  
  .dark {
    --primary: 262 83 % 58 %;
    --primary - foreground: 0 0 % 100 %;
    --secondary: 340 82 % 52 %;
    --accent: 199 89 % 48 %;
  }
} `}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      {/* Theme Mode */}
      <section className="container pb-24 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Theme Mode</h2>
          <p className="text-muted-foreground">
            Support light and dark modes with the useTheme hook
          </p>
        </div>

        <Card className="p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Using the Theme Hook</h3>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                <code>{`import { useTheme } from '@unicorn-ui/ui'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Current theme: {resolvedTheme}
    </button>
  )
} `}</code>
              </pre>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/hooks">
              <Button variant="outline">Browse Hooks</Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  )
}
