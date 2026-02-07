"use client"

import { Badge, BlurFade, Button, FlipText3D, UnicornThemeProvider } from "@unicorn-ui/ui"
import type { UserConfig } from "@unicorn-ui/ui"
import { Book, ChevronRight, Code, Download, Palette, Sparkles } from "lucide-react"
import Link from "next/link"

export default function MigrationGuidePage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <BlurFade delay={0.1}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Migration Guide</h1>
            <Badge>Step-by-Step</Badge>
          </div>
          <p className="text-lg text-foreground-secondary">
            Learn how to customize Unicorn UI with your own brand theme in just a few steps.
          </p>
        </div>
      </BlurFade>

      {/* Overview */}
      <BlurFade delay={0.2}>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Book className="h-6 w-6 text-brand" />
            Overview
          </h2>
          <p className="text-foreground-secondary">
            Unicorn UI uses a configuration system that lets you customize all design tokens
            (colors, spacing, shadows, etc.) from a single{" "}
            <code className="px-2 py-1 rounded bg-surface-elevated text-sm">unicorn.config.js</code>{" "}
            file. This guide shows you how to migrate from the default theme to your custom brand.
          </p>
        </div>
      </BlurFade>

      {/* Step 1: Create Config File */}
      <BlurFade delay={0.3}>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white text-sm font-bold">
              1
            </div>
            <h2 className="text-2xl font-bold">Create Your Config File</h2>
          </div>

          <p className="text-foreground-secondary">
            Start by creating a{" "}
            <code className="px-2 py-1 rounded bg-surface-elevated text-sm">unicorn.config.js</code>{" "}
            file in your project root. You can start with the example template:
          </p>

          <div className="rounded-lg border border-border bg-surface overflow-hidden">
            <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-2">
              <span className="text-xs font-medium text-foreground-secondary">
                unicorn.config.js
              </span>
              <Download className="h-4 w-4 text-foreground-secondary" />
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono">
                <code>{`/** @type {import('@unicorn-ui/ui').UserConfig} */
module.exports = {
  colors: {
    primary: {
      DEFAULT: '#6366f1', // Your brand color
      50: '#eef2ff',
      500: '#6366f1',
      600: '#4f46e5',
    },
  },
  radius: {
    md: '0.5rem',
  },
}`}</code>
              </pre>
            </div>
          </div>

          <div className="rounded-lg border border-brand/20 bg-brand/5 p-4">
            <p className="text-sm">
              <strong className="text-brand">💡 Tip:</strong> You only need to specify the values
              you want to customize. Everything else falls back to defaults.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Step 2: Wrap Your App */}
      <BlurFade delay={0.4}>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white text-sm font-bold">
              2
            </div>
            <h2 className="text-2xl font-bold">Wrap Your App</h2>
          </div>

          <p className="text-foreground-secondary">
            Import your config and wrap your application with the{" "}
            <code className="px-2 py-1 rounded bg-surface-elevated text-sm">UnicornProvider</code>:
          </p>

          <div className="rounded-lg border border-border bg-surface overflow-hidden">
            <div className="border-b border-border bg-surface-elevated px-4 py-2">
              <span className="text-xs font-medium text-foreground-secondary">app/layout.tsx</span>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono">
                <code>{`import { UnicornProvider } from '@unicorn-ui/ui'
import '@unicorn-ui/ui/styles'
import config from '../unicorn.config'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <UnicornProvider config={config}>
          {children}
        </UnicornProvider>
      </body>
    </html>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Step 3: See Changes */}
      <BlurFade delay={0.5}>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white text-sm font-bold">
              3
            </div>
            <h2 className="text-2xl font-bold">See Your Theme in Action</h2>
          </div>

          <p className="text-foreground-secondary">
            That's it! All Unicorn UI components will now use your custom theme. Here's a
            before/after example:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before: Default Theme */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground-secondary">
                Before (Default Theme)
              </h3>
              <div className="rounded-lg border border-border bg-surface p-4 space-y-3">
                <Button className="bg-[hsl(142,76%,36%)] hover:bg-[hsl(142,76%,30%)]">
                  Default Brand
                </Button>
                <Badge className="bg-[hsl(142,76%,36%)]">Nature Green</Badge>
              </div>
            </div>

            {/* After: Custom Theme */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-brand flex items-center gap-1">
                After (Custom Theme) <Sparkles className="h-4 w-4" />
              </h3>
              <UnicornThemeProvider config={{ colors: { primary: { DEFAULT: "#6366f1" } } }}>
                <div className="rounded-lg border border-border bg-surface p-4 space-y-3">
                  <Button>Your Brand Color</Button>
                  <Badge>Indigo Blue</Badge>
                </div>
              </UnicornThemeProvider>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Advanced Customization */}
      <BlurFade delay={0.6}>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Code className="h-6 w-6 text-brand" />
            Advanced Customization
          </h2>

          <p className="text-foreground-secondary">
            You can customize much more than just colors. Here's a comprehensive example:
          </p>

          <div className="rounded-lg border border-border bg-surface overflow-hidden">
            <div className="border-b border-border bg-surface-elevated px-4 py-2">
              <span className="text-xs font-medium text-foreground-secondary">
                unicorn.config.js (Advanced)
              </span>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono">
                <code>{`/** @type {import('@unicorn-ui/ui').UserConfig} */
module.exports = {
  colors: {
    primary: { DEFAULT: '#6366f1' },
    secondary: { DEFAULT: '#8b5cf6' },
    success: { DEFAULT: '#10b981' },
    error: { DEFAULT: '#ef4444' },
  },
  spacing: {
    md: '1rem',
    lg: '1.5rem',
  },
  radius: {
    md: '0.5rem',
    lg: '1rem',
  },
  shadows: {
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
  typography: {
    fontFamily: {
      sans: '"Inter", ui-sans-serif, system-ui',
    },
  },
  transitions: {
    duration: {
      fast: '150ms',
      normal: '300ms',
    },
  },
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Common Patterns */}
      <BlurFade delay={0.7}>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Common Patterns</h2>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-surface-elevated p-4">
              <h3 className="font-semibold mb-2">Multiple Brand Color Shades</h3>
              <p className="text-sm text-foreground-secondary mb-3">
                For hover states and variations, define multiple shades:
              </p>
              <pre className="text-xs font-mono bg-surface p-3 rounded overflow-x-auto">
                <code>{`colors: {
  primary: {
    DEFAULT: '#6366f1',
    50: '#eef2ff',    // Light backgrounds
    500: '#6366f1',   // Main brand color
    600: '#4f46e5',   // Hover states
    900: '#312e81',   // Dark text
  },
}`}</code>
              </pre>
            </div>

            <div className="rounded-lg border border-border bg-surface-elevated p-4">
              <h3 className="font-semibold mb-2">Consistent Spacing Scale</h3>
              <p className="text-sm text-foreground-secondary mb-3">
                Use multiples of 4 or 8 for visual harmony:
              </p>
              <pre className="text-xs font-mono bg-surface p-3 rounded overflow-x-auto">
                <code>{`spacing: {
  xs: '0.5rem',   // 8px
  sm: '0.75rem',  // 12px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Next Steps */}
      <BlurFade delay={0.8}>
        <div className="rounded-lg border-2 border-brand/20 bg-brand/5 p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Palette className="h-5 w-5 text-brand" />
            Next Steps
          </h3>
          <div className="grid gap-3">
            <Link
              href="/docs/configuration"
              className="flex items-center justify-between p-3 rounded-lg bg-surface-elevated hover:bg-surface transition-colors"
            >
              <span className="font-medium">View all configuration options</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs/configuration/examples"
              className="flex items-center justify-between p-3 rounded-lg bg-surface-elevated hover:bg-surface transition-colors"
            >
              <span className="font-medium">Browse theme templates</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </BlurFade>
    </div>
  )
}
