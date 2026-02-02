# 🦄 Unicorn UI

A modern, production-ready React component library with **131 components** featuring advanced design styles including Claymorphism, Liquid Glass, Glassmorphism, Skeuomorphism, and Minimalism. Built with TypeScript, Tailwind CSS v4, and Framer Motion.

[![npm version](https://img.shields.io/npm/v/@unicorn-ui/ui.svg)](https://www.npmjs.com/package/@unicorn-ui/ui)
[![License](https://img.shields.io/npm/l/@unicorn-ui/ui.svg)](https://github.com/yourusername/unicorn-ui/blob/main/LICENSE)
[![CI](https://github.com/yourusername/unicorn-ui/workflows/CI/badge.svg)](https://github.com/yourusername/unicorn-ui/actions)

## ✨ Features

- 🎨 **5 Design Styles** - Claymorphism, Liquid Glass, Glassmorphism, Skeuomorphism, Minimalism
- 📱 **Mobile-First** - Responsive utilities, touch-friendly (44px targets), safe area support
- 🎭 **131 Components** - Buttons, layouts, animations, backgrounds, text effects, and more
- 🌙 **Dark Mode** - Built-in theme support
- ⚡ **Performance** - Optimized animations, tree-shakeable, minimal bundle size
- 🔒 **Type-Safe** - Full TypeScript support with declarations
- 🎯 **Tailwind v4** - Latest Tailwind CSS with CSS variables
- 🎬 **Framer Motion** - Smooth, production-ready animations
- 📦 **ESM + CJS** - Dual format support (236KB ESM, 251KB CJS)

## 📦 Installation

```bash
npm install @unicorn-ui/ui
# or
pnpm add @unicorn-ui/ui
# or
yarn add @unicorn-ui/ui
```

### Peer Dependencies

```bash
npm install react react-dom framer-motion tailwindcss
```

## 🚀 Quick Start

### 1. Import Styles

Add to your `app/layout.tsx` or `_app.tsx`:

```tsx
import '@unicorn-ui/ui/dist/styles.css'
```

### 2. Configure Tailwind

Update your `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@unicorn-ui/ui/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
  plugins: [],
}

export default config
```

### 3. Use Components

```tsx
import { Button, Card, AnimatedGradientText } from '@unicorn-ui/ui'

export default function App() {
  return (
    <Card className="clay">
      <AnimatedGradientText>
        Welcome to Unicorn UI
      </AnimatedGradientText>
      <Button variant="glow">Get Started</Button>
    </Card>
  )
}
```

## 📚 Component Categories

### Animation (1)
`FadeIn`

### Backgrounds (14)
`AnimatedGridPattern`, `AuroraBackground`, `BackgroundBeams`, `Beams`, `DotPattern`, `FlickeringGrid`, `GridPattern`, `InteractiveGridPattern`, `RetroGrid`, `Ripple`, `ShootingStars`, `Stars`, `StripedPattern`, `WarpBackground`

### Buttons (12)
`AnimatedButton`, `CreepyButton`, `GlowButton`, `GooeyButton`, `InteractiveHoverButton`, `MagneticButton`, `PulsatingButton`, `RainbowButton`, `RippleButton`, `ShimmerButton`, `ShinyButton`, `SocialFlipButton`

### Core (16)
`Accordion`, `Alert`, `Avatar`, `Badge`, `Button`, `Card`, `Checkbox`, `Input`, `Modal`, `Popover`, `Progress`, `RadioGroup`, `Slider`, `StatusIcon`, `Switch`, `Tabs`

### Feedback (6)
`AnimatedThemeToggler`, `CommandMenu`, `RevealLoader`, `Skeleton`, `SmartInput`, `ThemeToggle`

### Layout (29)
`AnimatedList`, `BentoGrid`, `BlurFade`, `CollapsibleSidebar`, `Dock`, `ExpandableBentoCard`, `ExpandableCard`, `GlassDock`, `GlowBorderCard`, `HeroVideoDialog`, `Marquee`, `OrbitingCircles`, `Pointer`, `ResizablePanel`, `SpotlightCard`, `StickyScroll`, `Terminal`, `TweetCard`, and more

### Text (30+)
`AnimatedGradientText`, `AnimatedNumber`, `AnimatedShinyText`, `AuroraText`, `BlurFadeText`, `BoxReveal`, `ComicText`, `FadeText`, `FlipText`, `FlipText3D`, `GradualSpacing`, `HyperText`, `LetterPullup`, `MorphingText`, `NumberTicker`, `RotatingText`, `SparklesText`, `TextAnimate`, `TypingAnimation`, `WavyText`, `WordRotate`, and more

### Special (16)
`3DCard`, `AnimatedBeam`, `BorderBeam`, `CanvasSmudge`, `Confetti`, `GlitchEffect`, `Gravity`, `MagicCard`, `Magnifier`, `Meteors`, `ParticleImage`, `Particles`, `RippleEffect`, `ShineBorder`, `Spotlight`, `SpotlightCard`

## 🎨 Design Styles

### Claymorphism
```tsx
<Card className="clay">Neumorphic Design</Card>
<Button className="clay-hover">Hover Effect</Button>
```

### Liquid Glass
```tsx
<div className="liquid-glass">
  Animated liquid effect
</div>
```

### Glassmorphism
```tsx
<Card className="glass">
  Frosted glass effect
</Card>
```

### Skeuomorphism
```tsx
<Button className="skeu-button">
  Realistic 3D button
</Button>
```

### Minimalism
```tsx
<Card className="minimal minimal-hover">
  Clean and simple
</Card>
```

## 🛠️ Development

### Prerequisites
- Node.js 20+
- pnpm 9+

### Setup

```bash
# Clone repository
git clone https://github.com/yourusername/unicorn-ui.git
cd unicorn-ui

# Install dependencies
pnpm install

# Start development
pnpm dev
```

### Available Scripts

```bash
# Development
pnpm dev              # Run docs + watch package
pnpm dev:docs         # Run docs only
pnpm dev:package      # Watch package only

# Building
pnpm build            # Build package + docs
pnpm build:package    # Build package only
pnpm build:docs       # Build docs only

# Quality
pnpm lint             # Check code quality
pnpm lint:fix         # Fix linting issues
pnpm typecheck        # Check types
pnpm format           # Format code
pnpm test             # Run all checks + build

# Component Management
pnpm create-component <name> <type>
pnpm update-exports
pnpm verify
pnpm generate-docs

# Version Management
pnpm changeset        # Create a changeset
pnpm version-packages # Bump versions
pnpm release          # Publish to npm
```

## 📝 Creating a Component

```bash
pnpm create-component my-button button
```

This creates:
- `src/components/buttons/my-button.tsx`
- Automatically updates exports in `src/index.ts`

## 🔄 Version Management

We use [Changesets](https://github.com/changesets/changesets) for version management:

### 1. Create a Changeset

```bash
pnpm changeset
```

Select the type of change:
- **patch** - Bug fixes (0.0.X)
- **minor** - New features (0.X.0)
- **major** - Breaking changes (X.0.0)

### 2. Version Packages

```bash
pnpm version-packages
```

This updates:
- `package.json` version
- `CHANGELOG.md` with changes

### 3. Publish

```bash
pnpm release
```

Or let GitHub Actions handle it automatically when you push to `main`.

## 🚀 CI/CD

### GitHub Actions Workflows

#### CI (`ci.yml`)
Runs on every push and PR:
- ✅ Linting
- ✅ Type checking
- ✅ Package build
- ✅ Documentation build

#### Release (`release.yml`)
Runs on push to `main`:
- 📦 Automatic version bumping
- 📝 Changelog generation
- 🚀 npm publishing
- 🏷️ GitHub releases

#### Deploy Docs (`deploy-docs.yml`)
Deploys documentation to GitHub Pages

### Setup Secrets

Add to GitHub repository secrets:
- `NPM_TOKEN` - npm authentication token

## 📖 Documentation

Visit our [documentation site](https://yourusername.github.io/unicorn-ui) for:
- Interactive component demos
- API documentation
- Design guidelines
- Usage examples

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add a changeset (`pnpm changeset`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

MIT © [Your Name](https://github.com/yourusername)

## 🙏 Acknowledgments

- Inspired by [VengenceUI](https://vengence.ui)
- Built with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Powered by [Next.js](https://nextjs.org)

## 📊 Stats

- **131 Components** across 10 categories
- **5 Design Styles** fully implemented
- **236 KB** ESM bundle (gzipped)
- **251 KB** CJS bundle (gzipped)
- **59 KB** CSS bundle
- **100%** TypeScript coverage
- **Mobile-optimized** with touch support

## 🔗 Links

- [Documentation](https://yourusername.github.io/unicorn-ui)
- [npm Package](https://www.npmjs.com/package/@unicorn-ui/ui)
- [GitHub](https://github.com/yourusername/unicorn-ui)
- [Changelog](CHANGELOG.md)
- [Issues](https://github.com/yourusername/unicorn-ui/issues)

---

Made with ❤️ by the Unicorn UI team
