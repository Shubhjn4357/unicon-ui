"use client"

import { AuroraBackground } from "@/components/backgrounds/aurora-background"
import { ShimmerButton } from "@/components/buttons/shimmer-button"
import { Badge } from "@/components/core/badge"
import { Button } from "@/components/core/button"
import { Card } from "@/components/core/card"
import { BentoCard, BentoGrid } from "@/components/layout/bento-grid"
import { AnimatedBeam } from "@/components/special/animated-beam"
import { BorderBeam } from "@/components/special/border-beam"
import { MagicCard } from "@/components/special/magic-card"
import { Meteors } from "@/components/special/meteors"
import { Particles } from "@/components/special/particles"
import { AnimatedGradientText } from "@/components/text/animated-gradient-text"
import { NumberTicker } from "@/components/text/number-ticker"
import { type DesignStyle, useDesignStyle } from "@unicorn-ui/ui"
import { Calendar, Code2, Palette, Rocket, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const { designStyle, setDesignStyle } = useDesignStyle()
  const features = [
    {
      Icon: Code2,
      name: "131+ Components",
      description: "Production-ready React components with TypeScript support",
      className: "col-span-3 lg:col-span-1",
      background: (
        <Particles
          className="absolute inset-0"
          quantity={100}
          color="var(--foreground)"
          refresh={false}
        />
      ),
    },
    {
      Icon: Palette,
      name: "5 Design Styles",
      description: "Clay, Glass, Liquid, Skeuomorphic, and Minimal aesthetics",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-pink-500/20" />
      ),
    },
    {
      Icon: Sparkles,
      name: "30+ Text Effects",
      description: "Animated typography with gradients, morphing, and more",
      className: "col-span-3 lg:col-span-2",
      background: <Meteors number={20} />,
    },
    {
      Icon: Zap,
      name: "Multi-Library Animations",
      description: "Framer Motion, GSAP, Three.js, and Lenis pre-configured",
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0">
          <BorderBeam />
        </div>
      ),
    },
  ]

  const designStyles = [
    { id: "clay", name: "Claymorphism", emoji: "🏺" },
    { id: "glass", name: "Glassmorphism", emoji: "🪟" },
    { id: "liquid-glass", name: "Liquid Glass", emoji: "💧" },
    { id: "skeu", name: "Skeuomorphism", emoji: "📦" },
    { id: "minimal", name: "Minimal", emoji: "⬜" },
    { id: "none", name: "None", emoji: "🚫" },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        color="var(--foreground)"
        refresh={false}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 text-center">
        <div className="absolute inset-0 -z-10 opacity-30">
          <AuroraBackground>
            <div />
          </AuroraBackground>
        </div>

        <Badge className="mb-4 gap-2">
          <Sparkles className="h-4 w-4" />
          131+ Components · 5 Design Styles
        </Badge>

        <h1 className="mb-6 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <AnimatedGradientText>
            Build Stunning UIs{" "}
            <span className="inline-block">
              <span className="gradient-text">Faster</span>
            </span>
          </AnimatedGradientText>
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          A modern React component library with advanced design styles, animations, and TypeScript
          support. Built for developers who demand excellence.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/docs">
            <ShimmerButton className="shadow-2xl">
              <Rocket className="mr-2 h-5 w-5" />
              Get Started
            </ShimmerButton>
          </Link>
          <Link href="/docs/components">
            <Button variant="outline" size="lg">
              <Code2 className="mr-2 h-5 w-5" />
              View Components
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Components", value: 131 },
            { label: "Design Styles", value: 5 },
            { label: "Hooks", value: 10 },
            { label: "KB (gzip)", value: 236 },
          ].map((stat, idx) => (
            <Card key={stat.label} className="relative overflow-hidden p-6 text-center">
              <div className="text-3xl font-bold ">
                <NumberTicker value={stat.value} />
                {stat.label === "KB (gzip)" && ""}
              </div>
              <BorderBeam duration={5 + (idx % 5) * 2} />
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Everything You Need</h2>
            <p className="text-lg text-muted-foreground">
              Production-ready components with stunning visual effects
            </p>
          </div>

          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Design Styles Switcher */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">5 Design Styles</h2>
            <p className="text-lg text-muted-foreground">Transform your UI with a single click</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {designStyles.map((style) => (
              <button
                key={style.id}
                type="button"
                onClick={() => setDesignStyle(style.id as DesignStyle)}
                className={`group relative overflow-hidden rounded-lg border-2 p-6 text-left transition-all ${
                  designStyle === style.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{style.emoji}</span>
                  <div>
                    <h3 className="font-semibold">{style.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {designStyle === style.id ? "Active" : "Click to apply"}
                    </p>
                  </div>
                </div>
                {designStyle === style.id && <BorderBeam />}
              </button>
            ))}
          </div>

          {/* Live Preview Card */}
          <div className="mt-12">
            <Card className="unicorn-card mx-auto max-w-md p-8 text-center">
              <h3 className="mb-2 text-2xl font-bold">Preview Card</h3>
              <p className="mb-4 text-muted-foreground">
                This card adapts to the selected design style above
              </p>
              <Button className="unicorn-button">
                <Palette className="mr-2 h-4 w-4" />
                Example Button
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">Ready to Build?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Install Unicorn UI and start creating beautiful interfaces
          </p>

          <Card className="unicorn-card relative overflow-hidden p-8">
            <BorderBeam />
            <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-left">
              <code className="text-sm">npm install @unicorn-ui/ui</code>
            </pre>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/docs/installation">
                <Button size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Installation Guide
                </Button>
              </Link>
              <Link href="https://github.com/Shubhjn4357/unicorn-ui">
                <Button variant="outline" size="lg">
                  <Code2 className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-4 py-12 text-center text-sm text-muted-foreground">
        <p>
          Built with ❤️ by the Unicorn UI team · MIT License ·{" "}
          <Link href="/docs" className="underline">
            Documentation
          </Link>
        </p>
      </footer>
    </main>
  )
}
