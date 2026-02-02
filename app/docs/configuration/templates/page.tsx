"use client"

import { Badge, BlurFade, Button, Input, NeonGradientCard, UnicornProvider } from "@unicorn-ui/ui"
import type { UserConfig } from "@unicorn-ui/ui"
import { Building2, Eye, Moon, Palette, ShoppingBag, Sun, Zap } from "lucide-react"

// Theme Configurations
const corporateTheme: UserConfig = {
  colors: {
    primary: {
      DEFAULT: "#1e40af",
      50: "#eff6ff",
      500: "#3b82f6",
      600: "#2563eb",
    },
  },
  radius: { md: "0.375rem" },
  shadows: { md: "0 2px 4px 0 rgb(0 0 0 / 0.08)" },
}

const ecommerceTheme: UserConfig = {
  colors: {
    primary: { DEFAULT: "#ec4899" },
    accent: { DEFAULT: "#8b5cf6" },
  },
  radius: { md: "0.75rem", lg: "1rem" },
  transitions: { duration: { fast: "100ms" } },
}

const darkOptimizedTheme: UserConfig = {
  colors: {
    primary: { DEFAULT: "#6366f1" },
    success: { DEFAULT: "#10b981" },
  },
  shadows: {
    md: "0 4px 6px -1px rgb(0 0 0 / 0.3)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.4)",
  },
}

const accessibleTheme: UserConfig = {
  colors: {
    primary: { DEFAULT: "#0369a1" },
    success: { DEFAULT: "#047857" },
    error: { DEFAULT: "#b91c1c" },
  },
  spacing: { md: "1.25rem", lg: "1.75rem" },
}

function ThemePreview({
  title,
  description,
  theme,
  icon: Icon,
  colorHex,
}: {
  title: string
  description: string
  theme: UserConfig
  icon: React.ComponentType<{ className?: string }>
  colorHex: string
}) {
  return (
    <BlurFade>
      <NeonGradientCard className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: colorHex }}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-foreground-secondary">{description}</p>
              </div>
            </div>
          </div>

          {/* Theme Preview */}
          <UnicornProvider config={theme}>
            <div className="space-y-3 rounded-lg border border-border bg-surface p-4">
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Primary</Button>
                <Button size="sm" variant="outline">
                  Outline
                </Button>
                <Button size="sm" variant="ghost">
                  Ghost
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
              </div>
              <Input placeholder="Example input field" className="text-sm" />
            </div>
          </UnicornProvider>

          {/* Config Code */}
          <details className="rounded-lg bg-surface-elevated">
            <summary className="cursor-pointer px-3 py-2 text-sm font-medium hover:bg-surface">
              View Config
            </summary>
            <div className="border-t border-border p-3">
              <pre className="text-xs overflow-x-auto">
                <code>{JSON.stringify(theme, null, 2)}</code>
              </pre>
            </div>
          </details>
        </div>
      </NeonGradientCard>
    </BlurFade>
  )
}

export default function ThemeExamplesPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <BlurFade delay={0.1}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Theme Templates</h1>
            <Badge>Ready to Use</Badge>
          </div>
          <p className="text-lg text-foreground-secondary">
            Pre-configured themes you can copy and customize for your project. Each template is
            designed for specific use cases and best practices.
          </p>
        </div>
      </BlurFade>

      {/* Corporate Theme */}
      <div className="space-y-6">
        <BlurFade delay={0.2}>
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-brand" />
            <h2 className="text-2xl font-bold">Corporate Professional</h2>
          </div>
        </BlurFade>

        <ThemePreview
          title="Corporate Blue"
          description="Professional, trustworthy, perfect for B2B and enterprise"
          theme={corporateTheme}
          icon={Building2}
          colorHex="#1e40af"
        />
      </div>

      {/* E-commerce Theme */}
      <div className="space-y-6">
        <BlurFade delay={0.3}>
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-brand" />
            <h2 className="text-2xl font-bold">Vibrant E-commerce</h2>
          </div>
        </BlurFade>

        <ThemePreview
          title="Bold Pink"
          description="Eye-catching, energetic, great for retail and consumer apps"
          theme={ecommerceTheme}
          icon={ShoppingBag}
          colorHex="#ec4899"
        />
      </div>

      {/* Dark Mode Optimized */}
      <div className="space-y-6">
        <BlurFade delay={0.4}>
          <div className="flex items-center gap-2">
            <Moon className="h-6 w-6 text-brand" />
            <h2 className="text-2xl font-bold">Dark Mode Optimized</h2>
          </div>
        </BlurFade>

        <ThemePreview
          title="Indigo Night"
          description="Enhanced shadows and contrast for dark mode interfaces"
          theme={darkOptimizedTheme}
          icon={Moon}
          colorHex="#6366f1"
        />
      </div>

      {/* Accessibility First */}
      <div className="space-y-6">
        <BlurFade delay={0.5}>
          <div className="flex items-center gap-2">
            <Eye className="h-6 w-6 text-brand" />
            <h2 className="text-2xl font-bold">Accessibility-Focused</h2>
          </div>
        </BlurFade>

        <ThemePreview
          title="High Contrast"
          description="WCAG AAA compliant colors and larger touch targets"
          theme={accessibleTheme}
          icon={Eye}
          colorHex="#0369a1"
        />
      </div>

      {/* Usage Instructions */}
      <BlurFade delay={0.6}>
        <div className="rounded-lg border-2 border-brand/20 bg-brand/5 p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
            <Zap className="h-5 w-5 text-brand" />
            How to Use These Templates
          </h3>
          <ol className="space-y-3 text-sm text-foreground-secondary">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white text-xs font-bold flex-shrink-0">
                1
              </span>
              <span>Click "View Config" on any template to see its configuration</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white text-xs font-bold flex-shrink-0">
                2
              </span>
              <span>
                Copy the config to your{" "}
                <code className="px-1.5 py-0.5 rounded bg-surface-elevated">unicorn.config.js</code>{" "}
                file
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white text-xs font-bold flex-shrink-0">
                3
              </span>
              <span>
                Wrap your app with{" "}
                <code className="px-1.5 py-0.5 rounded bg-surface-elevated">UnicornProvider</code>{" "}
                and pass the config
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white text-xs font-bold flex-shrink-0">
                4
              </span>
              <span>Customize the values to match your exact brand colors and preferences</span>
            </li>
          </ol>
        </div>
      </BlurFade>

      {/* Best Practices */}
      <BlurFade delay={0.7}>
        <div className="rounded-lg border border-border bg-surface-elevated p-6">
          <h3 className="text-lg font-semibold mb-3">💡 Theme Design Tips</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-foreground-secondary">
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Use color psychology to match your brand personality</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Test themes in both light and dark mode</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Ensure WCAG AA contrast ratios minimum</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Keep spacing scales consistent (4px or 8px multiples)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Larger radius values feel friendlier and more modern</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Faster transitions feel snappier for buttons and hovers</span>
            </li>
          </ul>
        </div>
      </BlurFade>
    </div>
  )
}
