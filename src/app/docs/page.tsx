"use client"

import { Badge, Button, Card, GridPattern } from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import { BookOpen, Code, Package, Palette, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

const sections = [
  {
    title: "Installation",
    description: "Get started with Unicorn UI in your project",
    icon: <Package className="h-6 w-6" />,
    href: "/docs/installation",
  },
  {
    title: "Theming",
    description: "Customize colors, styles, and design tokens",
    icon: <Palette className="h-6 w-6" />,
    href: "/docs/theming",
  },
  {
    title: "Configuration",
    description: "Configure Tailwind CSS and other settings",
    icon: <Code className="h-6 w-6" />,
    href: "/docs/configuration",
  },
  {
    title: "Examples",
    description: "Real-world examples and use cases",
    icon: <Zap className="h-6 w-6" />,
    href: "/docs/examples",
  },
]

export default function DocsPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background */}

      {/* Hero */}
      <section className="container py-24 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl space-y-4"
        >
          <Badge variant="outline" className="gap-2">
            <BookOpen className="h-3 w-3" />
            Documentation
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight">Getting Started</h1>
          <p className="text-xl text-muted-foreground">
            Learn how to install, configure, and use Unicorn UI in your React projects. Built with
            TypeScript, Tailwind CSS v4, and Framer Motion.
          </p>
        </motion.div>
      </section>

      {/* Quick Links */}
      <section className="container pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={section.href}>
                <Card className="p-8 h-full transition-all hover:shadow-lg hover:border-primary/50 group">
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                      {section.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{section.title}</h3>
                      <p className="text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Installation Preview */}
      <section className="container pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Quick Install</h2>
            <p className="text-muted-foreground">Get up and running in minutes</p>
          </div>

          <Card className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">1. Install the package</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  npm install @unicorn-ui/ui
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">2. Import styles</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  import '@unicorn-ui/ui/styles'
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">3. Use components</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  {`import { Button } from '@unicorn-ui/ui'

export default function App() {
  return <Button>Click me</Button>
}`}
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Link href="/docs/installation">
                <Button>Full Installation Guide</Button>
              </Link>
              <Link href="/components">
                <Button variant="outline">Browse Components</Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Features */}
      <section className="container pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Why Unicorn UI?</h2>
            <p className="text-muted-foreground">Built for modern React applications</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 space-y-3">
              <div className="p-2 rounded-lg bg-primary/10 w-fit">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">TypeScript First</h3>
              <p className="text-sm text-muted-foreground">
                Fully typed components with excellent IntelliSense support
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <div className="p-2 rounded-lg bg-primary/10 w-fit">
                <Palette className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">5 Design Styles</h3>
              <p className="text-sm text-muted-foreground">
                Claymorphism, Liquid Glass, Glassmorphism, Skeuomorphism, and Minimalism
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <div className="p-2 rounded-lg bg-primary/10 w-fit">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">Production Ready</h3>
              <p className="text-sm text-muted-foreground">
                Battle-tested components with accessibility and performance in mind
              </p>
            </Card>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
