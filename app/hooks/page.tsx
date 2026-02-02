"use client"

import { Badge, Button, Card, GridPattern } from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import { ArrowRight, Code, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

const hooks = [
  {
    category: "Responsive",
    description: "Hooks for responsive design and breakpoint detection",
    items: [
      { name: "useMediaQuery", description: "Custom media query hook with SSR support" },
      { name: "useMobile", description: "Detect mobile devices (< 768px)" },
      { name: "useTablet", description: "Detect tablets (768px - 1024px)" },
      { name: "useDesktop", description: "Detect desktop (≥ 1024px)" },
      { name: "useWindowSize", description: "Track window dimensions" },
      { name: "useScrollPosition", description: "Track scroll position" },
    ],
  },
  {
    category: "Async",
    description: "Hooks for async operations and state management",
    items: [
      { name: "useAsync", description: "Automatic async execution with loading/error states" },
      { name: "useAsyncFn", description: "Manual async execution control" },
      { name: "useAsyncCallback", description: "Async callback with state management" },
      { name: "useDebounce", description: "Debounce values for performance" },
      { name: "useThrottle", description: "Throttle callbacks to limit execution" },
      { name: "useInterval", description: "Interval management with cleanup" },
    ],
  },
  {
    category: "State & Utilities",
    description: "Hooks for state management and common utilities",
    items: [
      { name: "useTheme", description: "Theme management with system preference detection" },
      { name: "useLocalStorage", description: "Persistent localStorage state" },
      { name: "useSessionStorage", description: "Session storage state management" },
      { name: "useToggle", description: "Boolean toggle with helper functions" },
      { name: "usePrevious", description: "Track previous value of state" },
      { name: "useCopyToClipboard", description: "Clipboard operations with feedback" },
    ],
  },
]

export default function HooksPage() {
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
            <Zap className="h-3 w-3" />
            18 Production-Ready Hooks
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight">Powerful React Hooks</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive collection of custom hooks for responsive design, async operations, and
            state management. Built with TypeScript and optimized for performance.
          </p>
        </motion.div>
      </section>

      {/* Hooks Grid */}
      <section className="container pb-24 space-y-16">
        {hooks.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">{category.category}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((hook) => (
                <Link
                  key={hook.name}
                  href={`/docs/hooks/${hook.name.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`).replace(/^-/, "")}`}
                  className="group"
                >
                  <Card className="p-6 h-full transition-all hover:shadow-lg hover:border-primary/50">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <code className="text-sm font-mono font-semibold text-primary">
                          {hook.name}
                        </code>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </div>
                      <p className="text-sm text-muted-foreground">{hook.description}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <Card className="p-12 text-center space-y-6 bg-linear-to-br from-primary/5 to-primary/10">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Install Unicorn UI and start using these powerful hooks in your project today.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/docs/installation">
              <Button size="lg" className="gap-2">
                <Code className="h-5 w-5" />
                Install Now
              </Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  )
}
