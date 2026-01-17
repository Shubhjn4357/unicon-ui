"use client";

// Configuration & Theme
export { UnicornProvider, useUnicornConfig } from "./providers/unicorn-provider"
export { resolveConfig, generateCSSVariables, defaultConfig } from "./config"
export type { UnicornConfig, UserConfig } from "./config"

// Utilities
export { cn } from "./lib/utils"

// Core Components
export { PopoverTrigger, PopoverContent } from "./components/core/popover"
export { Popover } from "./components/core/popover" // Re-export for direct usage
export { Modal } from "./components/core/modal"
export { Accordion } from "./components/core/accordion"
export { StatusIcon } from "./components/core/status-icon"

// Layout Components
export { BentoGrid, BentoCard } from "./components/layout/bento-grid"
export { Dock } from "./components/layout/dock"
export { Marquee } from "./components/layout/marquee"
export { SpotlightCard } from "./components/layout/spotlight-card"
export { Terminal, AnimatedSpan, TerminalTypingAnimation } from "./components/layout/terminal"
export { HeroVideoDialog } from "./components/layout/hero-video-dialog"
export { AnimatedList } from "./components/layout/animated-list"
export { Globe } from "./components/layout/globe"
export { TweetCard } from "./components/layout/tweet-card"
export { OrbitingCircles } from "./components/layout/orbiting-circles"
export { AvatarCircles } from "./components/layout/avatar-circles"
export { IconCloud } from "./components/layout/icon-cloud"
export { Lens } from "./components/layout/lens"
export { Pointer } from "./components/layout/pointer"
export { SmoothCursor } from "./components/layout/smooth-cursor"
export { ProgressiveBlur } from "./components/layout/progressive-blur"
export { DottedMap } from "./components/layout/dotted-map"
export { DottedMap as Map } from "./components/layout/dotted-map" // Alias
export { CollapsibleSidebar } from "./components/layout/collapsible-sidebar"
export { TracingBeam } from "./components/layout/tracing-beam"
export { ResizablePanel } from "./components/layout/resizable-panel"

// Feedback Components
export { Badge, badgeVariants } from "./components/core/badge"
export { Checkbox } from "./components/core/checkbox"
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/core/card"
export { Avatar, AvatarImage, AvatarFallback } from "./components/core/avatar"
export { Slider } from "./components/core/slider"
export { RadioGroup, RadioGroupItem } from "./components/core/radio-group"
export { Input, Textarea } from "./components/core/input"
export { Switch } from "./components/core/switch"
export { Progress } from "./components/core/progress"
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/core/tabs"
export { Alert, AlertTitle, AlertDescription } from "./components/core/alert"
export { Button, buttonVariants, type ButtonProps } from "./components/core/button"
export { CommandMenu } from "./components/feedback/command-menu"
export { SmartInput } from "./components/feedback/smart-input"
export { ThemeToggle } from "./components/feedback/theme-toggle"
export { AnimatedThemeToggler } from "./components/feedback/animated-theme-toggler"

// Animation Components
export { FadeIn } from "./components/animation/fade-in"
export { AnimatedBeam } from "./components/special/animated-beam"
export { BorderBeam } from "./components/special/border-beam"
export { Meteors } from "./components/special/meteors"
export { ShineBorder } from "./components/special/shine-border"
export { MagicCard } from "./components/special/magic-card"
export { Confetti, ConfettiButton } from "./components/special/confetti"
export { Card3D } from "./components/special/3d-card"
export { Card3D as ThreeDCardContainer } from "./components/special/3d-card" // Alias
export { SpotlightNew } from "./components/special/spotlight-new"
export { Particles } from "./components/special/particles"
export { HyperText } from "./components/text/hyper-text"
export { RetroGrid } from "./components/backgrounds/retro-grid"
export { FlickeringGrid } from "./components/backgrounds/flickering-grid"
export { AnimatedGridPattern } from "./components/backgrounds/animated-grid-pattern"
export { GridPattern } from "./components/backgrounds/grid-pattern"
export { DotPattern } from "./components/backgrounds/dot-pattern"
export { Ripple } from "./components/backgrounds/ripple"
export { StripedPattern } from "./components/backgrounds/striped-pattern"
export { InteractiveGridPattern } from "./components/backgrounds/interactive-grid-pattern"
export { BackgroundBeams } from "./components/backgrounds/beams"
export { WarpBackground } from "./components/backgrounds/warp-background"
export { Stars } from "./components/backgrounds/stars"
export { ShootingStars } from "./components/backgrounds/shooting-stars"
export { AuroraBackground } from "./components/backgrounds/aurora-background"
export { TypingAnimation } from "./components/text/typing-animation"
export { BlurFade } from "./components/text/blur-fade"
export { TextAnimate } from "./components/text/text-animate"
export { NumberTicker } from "./components/text/number-ticker"
export { AnimatedShinyText } from "./components/text/animated-shiny-text"
export { AnimatedGradientText } from "./components/text/animated-gradient-text"
export { WordRotate } from "./components/text/word-rotate"
export { ScrollBasedVelocity } from "./components/text/scroll-based-velocity"
export { TextReveal } from "./components/text/text-reveal"
export { SparklesText } from "./components/text/sparkles-text"
export { TextHighlighter } from "./components/text/text-highlighter"
export { LineShadowText } from "./components/text/line-shadow-text"
export { AuroraText } from "./components/text/aurora-text"
export { VideoTextSimple } from "./components/text/video-text"
export { MorphingText } from "./components/text/morphing-text"
export { SpinningText } from "./components/text/spinning-text"
export { SeparateAway } from "./components/text/separate-away"
export { BoxReveal } from "./components/text/box-reveal"
export { GradualSpacing } from "./components/text/gradual-spacing"
export { LetterPullup } from "./components/text/letter-pullup"
export { VelocityScroll } from "./components/text/velocity-scroll"
export { FadeText } from "./components/text/fade-text"
export { FlipText } from "./components/text/flip-text"
export { RotateText } from "./components/text/rotate-text"
export { WavyText } from "./components/text/wavy-text"
export { RainbowButton } from "./components/buttons/rainbow-button"
export { ShimmerButton } from "./components/buttons/shimmer-button"
export { RippleButton } from "./components/buttons/ripple-button"
export { ShinyButton } from "./components/buttons/shiny-button"
export { PulsatingButton } from "./components/buttons/pulsating-button"
export { InteractiveHoverButton } from "./components/buttons/interactive-hover-button"
export { GooeyButton } from "./components/buttons/gooey-button"
export { MagneticButton } from "./components/buttons/magnetic-button"

export { FileTree } from "./components/misc/file-tree"
export { CodeComparison } from "./components/misc/code-comparison"
export { ScrollProgress } from "./components/misc/scroll-progress"
export { NeonGradientCard } from "./components/misc/neon-gradient-card"
export { ComicText } from "./components/text/comic-text"
export { CoolMode } from "./components/misc/cool-mode"
export { PixelImage } from "./components/layout/pixel-image"
export { AnimatedCircularProgressBar } from "./components/misc/animated-circular-progress-bar"
export { FollowerPointer } from "./components/misc/follower-pointer"
export { CardStack } from "./components/misc/card-stack"
export { PixelTrail } from "./components/misc/pixel-trail"
export { ConfettiSideCannons } from "./components/misc/confetti-side-cannons"

export { SafariMockup, iPhoneMockup, AndroidMockup } from "./components/misc/device-mockups"
// Aliases for common usage
export {
  SafariMockup as Safari,
  iPhoneMockup as Iphone15Pro,
  AndroidMockup as Android,
} from "./components/misc/device-mockups"

// Additional Special Effects
export { ParticleImage } from "./components/special/particle-image"
export { RippleEffect } from "./components/special/ripple-effect"
export { Gravity } from "./components/special/gravity"
export { GlitchEffect } from "./components/special/glitch-effect"
export { CanvasSmudge } from "./components/special/canvas-smudge"
export { Magnifier } from "./components/special/magnifier"
export { Spotlight } from "./components/special/spotlight"

// Types
export type { LucideProps } from "lucide-react"
