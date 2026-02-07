"use client"

import { APP_CONSTANTS } from "@/constants/constants"
import { Badge, Button, Card, GridPattern } from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import { Check, Package, Terminal } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    title: "Install the package",
    description: `Add ${APP_CONSTANTS.name} to your project using your preferred package manager`,
    commands: [
      { label: "npm", code: `npm install ${APP_CONSTANTS.package.name}` },
      { label: "pnpm", code: `pnpm add ${APP_CONSTANTS.package.name}` },
      { label: "yarn", code: `yarn add ${APP_CONSTANTS.package.name}` },
    ],
  },
  {
    title: "Install peer dependencies",
    description: `${APP_CONSTANTS.name} requires these packages to work properly`,
    commands: [
      {
        label: "npm",
        code: "npm install framer-motion lucide-react tailwindcss@next @tailwindcss/vite@next",
      },
      {
        label: "pnpm",
        code: "pnpm add framer-motion lucide-react tailwindcss@next @tailwindcss/vite@next",
      },
      {
        label: "yarn",
        code: "yarn add framer-motion lucide-react tailwindcss@next @tailwindcss/vite@next",
      },
    ],
  },
  {
    title: "Import styles",
    description: `Add the ${APP_CONSTANTS.name} styles to your root layout or main CSS file`,
    code: `// app/layout.tsx or pages/_app.tsx
import '${APP_CONSTANTS.package.name}/styles'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`,
  },
  {
    title: "Configure Tailwind CSS",
    description: "Update your Tailwind configuration to use v4 syntax",
    code: `// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`,
  },
  {
    title: "Start using components",
    description: `Import and use ${APP_CONSTANTS.name} components in your application`,
    code: `import { Button, Card, Badge } from '${APP_CONSTANTS.package.name}'

export default function App() {
  return (
    <Card className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to ${APP_CONSTANTS.name}
      </h1>
      <Badge>New</Badge>
      <Button className="mt-4">Get Started</Button>
    </Card>
  )
}`,
  },
]

export default function InstallationPage() {
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
            <Package className="h-3 w-3" />
            Installation
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight">Installation Guide</h1>
          <p className="text-xl text-muted-foreground">
            Get started with {APP_CONSTANTS.name} in your React project. Follow these simple steps to
            install and configure the library.
          </p>
        </motion.div>
      </section>

      {/* Installation Steps */}
      <section className="container pb-24 space-y-12">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {idx + 1}
              </div>
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">{step.title}</h2>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {step.commands ? (
                  <div className="space-y-2">
                    {step.commands.map((cmd) => (
                      <div key={cmd.label} className="space-y-1">
                        <div className="text-sm text-muted-foreground">{cmd.label}</div>
                        <div className="flex items-center gap-2 bg-muted p-4 rounded-lg font-mono text-sm">
                          <Terminal className="h-4 w-4 text-muted-foreground shrink-0" />
                          <code className="flex-1">{cmd.code}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Requirements */}
      <section className="container pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Requirements</h2>
            <p className="text-muted-foreground">Make sure your project meets these requirements</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold">React 18+</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {APP_CONSTANTS.name} requires React 18 or higher for concurrent features
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold">TypeScript 5+</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Full TypeScript support with type definitions included
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold">Tailwind CSS v4</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Uses the latest Tailwind CSS v4 with modern syntax
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold">Framer Motion</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Smooth animations powered by Framer Motion
              </p>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Next Steps */}
      <section className="container pb-24">
        <Card className="p-12 text-center space-y-6 bg-linear-to-br from-primary/5 to-primary/10">
          <h2 className="text-3xl font-bold">Next Steps</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Now that you've installed {APP_CONSTANTS.name}, explore the components and start building!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/components">
              <Button size="lg">Browse Components</Button>
            </Link>
            <Link href="/hooks">
              <Button size="lg" variant="outline">
                Explore Hooks
              </Button>
            </Link>
            <Link href="/docs/theming">
              <Button size="lg" variant="outline">
                Customize Theme
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  )
}
