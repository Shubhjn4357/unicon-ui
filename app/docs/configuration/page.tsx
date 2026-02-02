"use client"

import { Badge, Button, Card, GridPattern } from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import { Code, Settings, Sparkles, Terminal } from "lucide-react"
import Link from "next/link"

export default function ConfigurationPage() {
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
            <Settings className="h-3 w-3" />
            Configuration
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight">Configuration</h1>
          <p className="text-xl text-muted-foreground">
            Configure Unicorn UI to work seamlessly with your build tools and environment.
          </p>
        </motion.div>
      </section>

      {/* Tailwind Config */}
      <section className="container pb-16 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Tailwind CSS</h2>
          <p className="text-muted-foreground">Using Tailwind CSS v4 with Vite or Next.js</p>
        </div>

        <Card className="p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Vite Configuration</h3>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                <code>{`// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`}</code>
              </pre>
            </div>

            <h3 className="text-lg font-semibold">CSS Entry</h3>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                <code>{`/* index.css */
@import "tailwindcss";

@theme {
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  /* ... other theme tokens ... */
}`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      {/* Typescript Config */}
      <section className="container pb-24 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">TypeScript</h2>
          <p className="text-muted-foreground">Optimizing compiler settings for best performance</p>
        </div>

        <Card className="p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">tsconfig.json</h3>
            <p className="text-sm text-muted-foreground">
              We recommend the following compiler options for optimal type safety and compatibility.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                <code>{`{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      {/* Templates */}
      <section className="container pb-16 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Templates</h2>
          <p className="text-muted-foreground">
            Ready-to-use theme configurations for various use cases
          </p>
        </div>

        <Card className="p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Pre-configured Themes</h3>
            <p className="text-sm text-muted-foreground">
              Browse our collection of professionally designed themes including Corporate,
              E-commerce, and Accessibility-focused templates.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="/docs/configuration/templates">
                <Button>View Templates</Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* Next Steps */}
      {/* Next Steps */}
      <section className="container pb-24">
        <Card className="p-12 text-center space-y-6 bg-linear-to-br from-primary/5 to-primary/10">
          <h2 className="text-3xl font-bold">Need Help?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out our detailed examples or open an issue on GitHub.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/docs/examples">
              <Button size="lg">View Examples</Button>
            </Link>
            <Link href="https://github.com/yourusername/unicorn-ui/issues" target="_blank">
              <Button size="lg" variant="outline">
                Report Issue
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  )
}
