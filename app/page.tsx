"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BookOpen, Code, Layers, Palette, Rocket, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import {
  AnimatedGradientText,
  AnimatedShinyText,
  AuroraBackground,
  BentoGrid,
  Button,
  GlowBorderCard,
  GridPattern,
  Marquee,
  OrbitingCircles,
  ShootingStars,
  SparklesText,
  Stars,
  Tooltip,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  useToast,
  ToastProvider,
  cn,
} from "../src"
import { useState } from "react"

const features = [
  {
    icon: <Palette className="h-6 w-6 text-primary" />,
    title: "5 Design Styles",
    description:
      "Claymorphism, Liquid Glass, Glassmorphism, Skeuomorphism, and Minimalism - all in one library",
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "TypeScript First",
    description: "Fully typed components with excellent IntelliSense support and type safety",
  },
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: "131 Components",
    description:
      "Comprehensive library covering buttons, layouts, animations, backgrounds, text effects, and more",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "Framer Motion",
    description: "Smooth, production-ready animations powered by Framer Motion",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "18 Custom Hooks",
    description: "Powerful hooks for responsive design, async operations, and state management",
  },
]

const designStyles = [
  {
    name: "Claymorphism",
    description: "Soft, tactile 3D effects",
    className:
      "clay bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
  },
  {
    name: "Liquid Glass",
    description: "Flowing, animated gradients",
    className: "liquid-glass",
  },
  {
    name: "Glassmorphism",
    description: "Frosted glass aesthetics",
    className: "glass bg-linear-to-br from-blue-500/20 to-purple-500/20",
  },
  {
    name: "Skeuomorphism",
    description: "Realistic 3D interfaces",
    className: "skeu bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800",
  },
  {
    name: "Minimalism",
    description: "Clean and simple",
    className: "minimal minimal-hover bg-background border-2 border-border",
  },
]

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <ToastProvider>
      <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-background">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10">
          <AuroraBackground className="absolute inset-0" />
          <GridPattern className="absolute inset-0 opacity-20" />
          <ShootingStars />
          <Stars />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <AnimatedGradientText className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm">131 Production-Ready Components</span>
              </AnimatedGradientText>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <SparklesText
                  text="Unicorn UI"
                  className="bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
                />
              </h1>
              <AnimatedShinyText className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                A modern React component library with 5 stunning design styles. Built with TypeScript,
                Tailwind CSS v4, and Framer Motion.
              </AnimatedShinyText>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link href="/docs">
                <Button size="lg" className="gap-2 group">
                  <BookOpen className="h-5 w-5" />
                  Get Started
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/components">
                <Button size="lg" variant="outline" className="gap-2">
                  <Code className="h-4 w-4" />
                  Browse Components
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">131</div>
                <div className="text-sm text-muted-foreground">Components</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">18</div>
                <div className="text-sm text-muted-foreground">Hooks</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Styles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">TypeScript</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="relative py-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold">Everything You Need</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built with modern technologies for high-performance applications.
              </p>
            </motion.div>

            <BentoGrid className="max-w-6xl mx-auto">
              {features.map((feature) => (
                <GlowBorderCard
                  key={feature.title}
                  className={cn("p-8 space-y-4", feature.title === "5 Design Styles" || feature.title === "Framer Motion" ? "md:col-span-2" : "")}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">{feature.icon}</div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-left">{feature.description}</p>
                </GlowBorderCard>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Interactive Playground */}
        <section className="relative py-20 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Interactive Elements</h2>
              <p className="text-muted-foreground">
                Fully interactive core components. Try them out.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 items-center bg-card p-8 rounded-xl border border-border">
              {/* Tooltip Demo */}
              <Tooltip content="This is a smooth tooltip">
                <Button variant="outline">Hover Me (Tooltip)</Button>
              </Tooltip>

              {/* Dropdown Demo */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button>Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem destructive>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Sheet Demo */}
              {/* Note: Sheet requires state, so we wrap it in a client component or use a simple demo if possible. 
                Since this is a server component file (page.tsx default), but marked 'use client' at top, we can use state. 
                But to avoid cluttering this file with state, I'll use a local component or just skip if too complex for inline.
                Actually page.tsx is 'use client', so I can use a local wrapper component defined in this file.
            */}
              <SheetDemo />

              {/* Toast Demo */}
              <ToastDemo />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-4 border-t border-border/50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Build?</h2>
            <Link href="/docs/installation">
              <Button size="lg" className="gap-2">
                <Rocket className="h-5 w-5" />
                Install Now
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </ToastProvider>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Open Sheet</Button>
      <Sheet isOpen={open} onClose={() => setOpen(false)}>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="py-8 text-center text-muted-foreground">
          Content goes here...
        </div>
        <div className="flex justify-end">
          <Button onClick={() => setOpen(false)}>Save Changes</Button>
        </div>
      </Sheet>
    </>
  )
}

function ToastDemo() {
  const { addToast } = useToast()
  return (
    <Button
      variant="ghost"
      onClick={() => addToast({
        title: "Success",
        description: "Your changes have been saved.",
        type: "success"
      })}
    >
      Trigger Toast
    </Button>
  )
}
