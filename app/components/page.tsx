"use client"

import { Badge, Button, Card, GridPattern, Input } from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import { ArrowRight, Search, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Move categories to a separate file or keep here if not too large
// Assuming previous content, duplicating for completeness with correct imports:

const categories = [
  {
    name: "Core",
    description: "Essential UI components",
    count: 17,
    components: [
      { name: "Accordion", description: "Collapsible content sections" },
      { name: "Alert", description: "Display important messages" },
      { name: "Avatar", description: "User profile images" },
      { name: "Badge", description: "Small status indicators" },
      { name: "Button", description: "Interactive buttons" },
      { name: "Card", description: "Content containers" },
      { name: "Checkbox", description: "Selection controls" },
      { name: "Dialog", description: "Modal dialogs" },
      { name: "Dropdown", description: "Dropdown menus" },
      { name: "Input", description: "Text input fields" },
      { name: "Label", description: "Form labels" },
      { name: "Progress", description: "Progress indicators" },
      { name: "Radio", description: "Radio button groups" },
      { name: "Select", description: "Selection dropdowns" },
      { name: "Slider", description: "Range sliders" },
      { name: "Switch", description: "Toggle switches" },
      { name: "Textarea", description: "Multi-line text input" },
    ],
  },
  {
    name: "Layout",
    description: "Page layout components",
    count: 15,
    components: [
      { name: "AnimatedTabs", description: "Animated tab navigation" },
      { name: "AvatarCircles", description: "Circular avatar groups" },
      { name: "BentoGrid", description: "Responsive grid layouts" },
      { name: "CollapsibleSidebar", description: "Collapsible navigation" },
      { name: "Dock", description: "macOS-style dock" },
      { name: "DottedMap", description: "Interactive world map" },
      { name: "ExpandableBentoCard", description: "Expandable grid cards" },
      { name: "FileTree", description: "File tree navigation" },
      { name: "FloatingDock", description: "Floating action dock" },
      { name: "Marquee", description: "Scrolling content" },
      { name: "Sidebar", description: "Side navigation" },
      { name: "SplitLayout", description: "Split screen layouts" },
      { name: "Tabs", description: "Tab navigation" },
      { name: "Timeline", description: "Event timelines" },
      { name: "VerticalTimeline", description: "Vertical timelines" },
    ],
  },
  {
    name: "Text",
    description: "Text effects and typography",
    count: 23,
    components: [
      { name: "AnimatedGradientText", description: "Gradient text animations" },
      { name: "AnimatedShinyText", description: "Shiny text effects" },
      { name: "BlurText", description: "Blur reveal animations" },
      { name: "BoxRevealText", description: "Box reveal effects" },
      { name: "ComicText", description: "Comic-style text" },
      { name: "FadeText", description: "Fade animations" },
      { name: "FlipText", description: "Flip animations" },
      { name: "FlipText3D", description: "3D flip effects" },
      { name: "GradualSpacing", description: "Letter spacing animations" },
      { name: "HyperText", description: "Scramble text effects" },
      { name: "LetterPullup", description: "Letter pullup animations" },
      { name: "LineShadowText", description: "Line shadow effects" },
      { name: "MorphingText", description: "Text morphing" },
      { name: "NumberTicker", description: "Number animations" },
      { name: "PulsatingText", description: "Pulsating effects" },
      { name: "RotateText", description: "Rotating text" },
      { name: "ScrollRevealText", description: "Scroll-based reveals" },
      { name: "SeparateAwayText", description: "Separation animations" },
      { name: "ShimmerText", description: "Shimmer effects" },
      { name: "SparklesText", description: "Sparkle effects" },
      { name: "TypingText", description: "Typing animations" },
      { name: "WavyText", description: "Wavy text effects" },
      { name: "WordPullUp", description: "Word pullup animations" },
    ],
  },
  {
    name: "Backgrounds",
    description: "Animated backgrounds",
    count: 11,
    components: [
      { name: "AnimatedGridPattern", description: "Animated grid backgrounds" },
      { name: "AuroraBackground", description: "Aurora effects" },
      { name: "BackgroundBeams", description: "Light beam effects" },
      { name: "DotPattern", description: "Dot patterns" },
      { name: "GridPattern", description: "Grid patterns" },
      { name: "Meteors", description: "Meteor shower effects" },
      { name: "Particles", description: "Particle systems" },
      { name: "RetroGrid", description: "Retro grid backgrounds" },
      { name: "RippleEffect", description: "Ripple animations" },
      { name: "ShootingStars", description: "Shooting star effects" },
      { name: "Stars", description: "Starfield backgrounds" },
    ],
  },
  {
    name: "Special",
    description: "Advanced effects",
    count: 20,
    components: [
      { name: "3DCard", description: "3D card effects" },
      { name: "AnimatedBeam", description: "Animated connection beams" },
      { name: "BorderBeam", description: "Border beam effects" },
      { name: "Confetti", description: "Confetti animations" },
      { name: "CoolMode", description: "Cool interaction effects" },
      { name: "GlowBorderCard", description: "Glowing border cards" },
      { name: "InteractiveHoverButton", description: "Interactive hover effects" },
      { name: "MagicCard", description: "Magic card effects" },
      { name: "OrbitingCircles", description: "Orbiting animations" },
      { name: "PulsatingButton", description: "Pulsating buttons" },
      { name: "ShimmerButton", description: "Shimmer button effects" },
      { name: "ShinyButton", description: "Shiny button effects" },
      { name: "SpotlightCard", description: "Spotlight effects" },
      { name: "TextReveal", description: "Text reveal animations" },
      { name: "VelocityScroll", description: "Velocity-based scrolling" },
    ],
  },
  {
    name: "Misc",
    description: "Utility components",
    count: 10,
    components: [
      { name: "BlurFade", description: "Blur fade transitions" },
      { name: "DeviceMockups", description: "Device mockups" },
      { name: "GradientHeading", description: "Gradient headings" },
      { name: "HeroVideoDialog", description: "Video dialog modals" },
      { name: "IconCloud", description: "Icon cloud effects" },
      { name: "MagneticButton", description: "Magnetic hover effects" },
      { name: "PixelImage", description: "Pixelated images" },
      { name: "PixelTrail", description: "Pixel trail effects" },
      { name: "ScrollProgress", description: "Scroll progress indicators" },
      { name: "Safari", description: "Safari browser mockup" },
    ],
  },
]

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      components: category.components.filter(
        (comp) =>
          comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          comp.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.components.length > 0)

  const totalComponents = categories.reduce((acc, cat) => acc + cat.count, 0)

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <GridPattern className="absolute inset-0 opacity-10" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Unicorn UI</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/components" className="text-sm font-medium text-primary">
              Components
            </Link>
            <Link
              href="/hooks"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Hooks
            </Link>
            <Link href="/docs" className="text-sm font-medium transition-colors hover:text-primary">
              Docs
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-24 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl space-y-4"
        >
          <Badge variant="outline" className="gap-2">
            <Sparkles className="h-3 w-3" />
            {totalComponents} Components
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight">Component Library</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive collection of {totalComponents} production-ready components across 6
            categories. Built with TypeScript, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative max-w-2xl"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </motion.div>
      </section>

      {/* Components Grid */}
      <section className="container pb-24 space-y-16">
        {filteredCategories.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-3xl font-bold">{category.name}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              <Badge variant="secondary">{category.components.length}</Badge>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.components.map((component) => (
                <Link
                  key={component.name}
                  href={`/docs/components/${component.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group"
                >
                  <Card className="p-6 h-full transition-all hover:shadow-lg hover:border-primary/50">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{component.name}</h3>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </div>
                      <p className="text-sm text-muted-foreground">{component.description}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No components found matching "{searchQuery}"</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <Card className="p-12 text-center space-y-6 bg-linear-to-br from-primary/5 to-primary/10">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Install Unicorn UI and start building beautiful interfaces with these components.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/docs/installation">
              <Button size="lg">Install Now</Button>
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
