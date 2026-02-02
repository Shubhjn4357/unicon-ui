# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial release of Unicorn UI component library
- 131 production-ready components across 10 categories
- 5 comprehensive design styles: Claymorphism, Liquid Glass, Glassmorphism, Skeuomorphism, Minimalism
- Mobile-first responsive utilities with touch optimization
- Full TypeScript support with type declarations
- Tailwind CSS v4 compatibility
- Framer Motion animations
- Dark mode support

### Components
- **Animation** (1): FadeIn
- **Backgrounds** (14): AnimatedGridPattern, AuroraBackground, BackgroundBeams, Beams, DotPattern, FlickeringGrid, GridPattern, InteractiveGridPattern, RetroGrid, Ripple, ShootingStars, Stars, StripedPattern, WarpBackground
- **Buttons** (12): AnimatedButton, CreepyButton, GlowButton, GooeyButton, InteractiveHoverButton, MagneticButton, PulsatingButton, RainbowButton, RippleButton, ShimmerButton, ShinyButton, SocialFlipButton
- **Core** (16): Accordion, Alert, Avatar, Badge, Button, Card, Checkbox, Input, Modal, Popover, Progress, RadioGroup, Slider, StatusIcon, Switch, Tabs
- **Feedback** (6): AnimatedThemeToggler, CommandMenu, RevealLoader, Skeleton, SmartInput, ThemeToggle
- **Layout** (29): AnimatedList, BentoGrid, BlurFade, Dock, ExpandableCard, GlassDock, GlowBorderCard, HeroVideoDialog, Marquee, OrbitingCircles, StickyScroll, and more
- **Misc** (17): FollowerPointer, NeonGradientCard, PixelImage, PixelTrail, ProgressiveBlur, ScrollProgress, and more
- **Mocks** (3): Android, iPhone, Safari
- **Special** (16): 3DCard, AnimatedBeam, BorderBeam, CanvasSmudge, Confetti, GlitchEffect, Gravity, MagicCard, Magnifier, Meteors, ParticleImage, Particles, RippleEffect, ShineBorder, Spotlight, SpotlightCard
- **Text** (30+): AnimatedGradientText, AnimatedNumber, AnimatedShinyText, AuroraText, BlurFadeText, BoxReveal, ComicText, FadeText, FlipText3D, FlipText, GradualSpacing, HyperText, LetterPullup, LineShadowText, MorphingText, NumberTicker, RotateText, ScrollBasedVelocity, SeparateAway, SparklesText, SpinningText, TextAnimate, TextHighlighter, TextReveal, TypingAnimation, VelocityScroll, VideoText, WavyText, WordRotate

### Design System
- Claymorphism with neumorphic shadows
- Liquid Glass with animated gradients
- Glassmorphism with backdrop blur
- Skeuomorphism with realistic 3D effects
- Minimalism with clean borders

### Mobile Features
- Touch-friendly 44px minimum targets
- Safe area insets for notched devices
- Responsive text scaling
- Responsive spacing utilities
- Optimized animations for mobile performance

### Developer Experience
- Component generation CLI
- Auto-export management
- Build verification tools
- Documentation generation
- Comprehensive TypeScript types

## [0.2.0] - 2026-01-31

### Changed
- Restructured from monorepo to unified package
- Migrated to Tailwind CSS v4
- Updated all components with CSS variable syntax
- Simplified build process

### Fixed
- Tailwind v4 compatibility issues
- CSS variable references
- Build configuration

## [0.1.0] - Initial Development

### Added
- Initial component library setup
- Basic component implementations
- Monorepo structure with Turbo

---

## Version Guidelines

We use [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality in a backward compatible manner
- **PATCH** version for backward compatible bug fixes

## Creating a Changeset

To add a changelog entry:

```bash
pnpm changeset
```

Follow the prompts to:
1. Select the type of change (major, minor, patch)
2. Describe the changes
3. Commit the generated changeset file

The changelog will be automatically updated when the version is bumped.
