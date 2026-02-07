# 🦄 Unicorn UI

A modern, production-ready React component library with **134+ components** featuring advanced design styles including Claymorphism, Liquid Glass, Glassmorphism, Skeuomorphism, and Minimalism. Fully accessible with WCAG 2.1 AA compliance. Built with TypeScript, Tailwind CSS v4, and Framer Motion.

[![npm version](https://img.shields.io/npm/v/@unicorn-ui/ui.svg)](https://www.npmjs.com/package/@unicorn-ui/ui)
[![License](https://img.shields.io/npm/l/@unicorn-ui/ui.svg)](https://github.com/Shubhjn4357/unicorn-ui/blob/main/LICENSE)
[![CI](https://github.com/Shubhjn4357/unicorn-ui/workflows/CI/badge.svg)](https://github.com/Shubhjn4357/unicorn-ui/actions)

## ✨ Features

- 🎨 **5 Design Styles** - Claymorphism, Liquid Glass, Glassmorphism, Skeuomorphism, Minimalism
- 📱 **Mobile-First** - Responsive utilities, touch-friendly (44px targets), safe area support
- 🎭 **134+ Components** - Buttons, layouts, animations, backgrounds, text effects, data tables, and more
- ♿ **Accessibility-First** - WCAG 2.1 AA compliant with screen reader support, ARIA labels, keyboard navigation
- 🌙 **Dark Mode** - Built-in theme support with next-themes
- ⚡ **Performance** - React.memo optimizations, tree-shakeable, minimal bundle size
- 🔒 **Type-Safe** - Full TypeScript support with declarations
- 🎯 **Tailwind v4** - Latest Tailwind CSS with CSS variables
- 🎬 **Multi-Library Animations** - Framer Motion, GSAP, Three.js, Lenis
- 📦 **Dual Format** - ESM + CJS support (236KB ESM, 251KB CJS)
- 🎨 **Variable-Based Theming** - Customize colors, radius, sizes, animations via CSS variables

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
    <Card className="unicorn-card">
      <AnimatedGradientText>
        Welcome to Unicorn UI
      </AnimatedGradientText>
      <Button variant="glow">Get Started</Button>
    </Card>
  )
}
```

### 4. Enable Design Styles (Optional)

```tsx
import { DesignStyleProvider } from '@unicorn-ui/ui'

export default function RootLayout({ children }) {
  return (
    <DesignStyleProvider defaultStyle="glass">
      {children}
    </DesignStyleProvider>
  )
}
```

## 📁 What's Inside?

This package includes:

```
@unicorn-ui/ui/
├── dist/
│   ├── index.js       # CommonJS bundle
│   ├── index.mjs      # ES Module bundle
│   ├── index.d.ts     # TypeScript types
│   ├── styles.css     # All component styles
│   └── cli/           # CLI tools
├── README.md
└── CHANGELOG.md
```

**Bundle Sizes:**
- ESM: ~236 KB (gzipped)
- CJS: ~251 KB (gzipped)
- CSS: ~59 KB

**See [docs/STRUCTURE.md](./docs/STRUCTURE.md) for complete package structure**

## 📚 Component Categories

<details>
<summary><b>Core Components (16)</b></summary>

Essential building blocks:
- `Accordion`, `Alert`, `Avatar`, `Badge`, `Button`, `Card`
- `Checkbox`, `Dialog`, `Input`, `Popover`, `Progress`, `RadioGroup`
- `Select`, `Slider`, `Switch`, `Table`, `Tabs`, `Textarea`
- `DataTable`, `DatePicker`, `Combobox` (NEW)
- `AriaLiveRegion`, `FocusTrap`, `VisuallyHidden` (Accessibility)

</details>

<details>
<summary><b>Background Components (14)</b></summary>

Visual effects:
- `AuroraBackground`, `BackgroundBeams`, `BeamSpotlight`, `DotPattern`
- `FlickeringGrid`, `GridPattern`, `InteractiveGridPattern`, `Meteors`
- `RetroGrid`, `Ripple`, `ShootingStars`, `Stars`, `WarpBackground`

</details>

<details>
<summary><b>Button Variants (12)</b></summary>

Enhanced buttons:
- `AnimatedButton`, `CreepyButton`, `GlowButton`, `GooeyButton`
- `InteractiveHoverButton`, `MagneticButton`, `PulsatingButton`
- `RainbowButton`, `RippleButton`, `ShimmerButton`, `ShinyButton`

</details>

<details>
<summary><b>Text Effects (30+)</b></summary>

Animated text:
- `AnimatedGradientText`, `AnimatedNumber`, `AnimatedShinyText`
- `AuroraText`, `BlurText`, `BoxReveal`, `FlipText`, `FlipText3D`
- `GradualSpacing`, `HyperText`, `MorphingText`, `NumberTicker`
- `SparklesText`, `TypewriterEffect`, `WavyText`, `WordRotate`
- And 15+ more...

</details>

<details>
<summary><b>Layout Components (29)</b></summary>

Complex patterns:
- `BentoGrid`, `Dock`, `GlassDock`, `Sheet`, `Marquee`
- `AnimatedList`, `CollapsibleSidebar`, `ExpandableCard`
- `HeroVideoDialog`, `Terminal`, `TweetCard`, `SpotlightCard`

</details>

<details>
<summary><b>Special Components (16)</b></summary>

3D, particles, effects:
- `Scene3D`, `Confetti`, `Particles`, `ParticleImage`
- `BorderBeam`, `MagicCard`, `Spotlight`, `GlitchEffect`
- `RippleEffect`, `ShineBorder`, `Magnifier`

</details>

## 🎨 Design Styles

Unicorn UI features **5 global design styles** that transform your entire UI:

```tsx
import { useDesignStyle } from '@unicorn-ui/ui'

function StyleSwitcher() {
  const { setDesignStyle } = useDesignStyle()
  
  return (
    <>
      <button onClick={() => setDesignStyle('clay')}>Clay</button>
      <button onClick={() => setDesignStyle('glass')}>Glass</button>
      <button onClick={() => setDesignStyle('liquid-glass')}>Liquid</button>
      <button onClick={() => setDesignStyle('skeu')}>Skeuomorphic</button>
      <button onClick={() => setDesignStyle('minimal')}>Minimal</button>
    </>
  )
}
```

**See [docs/THEMING.md](./docs/THEMING.md) for complete customization guide**

## 🎬 Animation Libraries

Pre-configured and ready to use:

- **Framer Motion** - Declarative animations
- **GSAP** - Professional timelines
- **Three.js + R3F** - 3D graphics
- **Lenis** - Smooth scroll

```tsx
import { motion } from 'framer-motion'
import { Scene3D } from '@unicorn-ui/ui'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <Scene3D modelUrl="/model.glb" autoRotate />
</motion.div>
```

**See [docs/ANIMATIONS.md](./docs/ANIMATIONS.md) for animation guide**

## 🎨 Theme Customization

Customize via CSS variables:

```css
/* app/globals.css */
:root {
  /* Colors (HSL format) */
  --primary: 262 83% 58%;
  --secondary: 220 14% 96%;
  --accent: 340 82% 52%;
  
  /* Radius */
  --radius: 1rem;
  --radius-sm: 0.5rem;
  --radius-lg: 1.5rem;
  
  /* Sizes */
  --size-md: 1rem;
  --size-lg: 1.25rem;
  
  /* Animations */
  --duration-normal: 300ms;
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

**See [docs/THEMING.md](./docs/THEMING.md) for full customization**

## 🛠️ Development

### Prerequisites

- Node.js 20+
- pnpm 9+

### Setup

```bash
# Clone repository
git clone https://github.com/Shubhjn4357/unicorn-ui.git
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
pnpm test             # Run tests
pnpm check            # Lint + typecheck + build

### Publishing
pnpm changeset        # Create a changeset
pnpm version-packages # Bump versions
pnpm release          # Publish to npm
\`\`\`

## 🛠️ CLI

Unicorn UI comes with a powerful CLI to manage components.

\`\`\`bash
# Initialize project
npx @unicorn-ui/ui init

# Add specific component
npx @unicorn-ui/ui add button

# Create new component template
npx @unicorn-ui/ui create my-component
\`\`\`

See [Documentation](https://unicorn-ui.vercel.app/docs/cli) for full CLI reference.

## 📚 Documentation

Visit our [documentation site](https://Shubhjn4357.github.io/unicorn-ui) for:
- Interactive component demos
- API documentation
- Design guidelines
- Usage examples

**Additional Docs:**
- [docs/STRUCTURE.md](./docs/STRUCTURE.md) - Package organization
- [docs/THEMING.md](./docs/THEMING.md) - Theme customization
- [docs/ANIMATIONS.md](./docs/ANIMATIONS.md) - Animation guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Publishing guide
- [SCRIPTS.md](./SCRIPTS.md) - Development scripts

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

MIT © [Shubhjn4357](https://github.com/Shubhjn4357)

## 🙏 Acknowledgments

- Built with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Powered by [Next.js](https://nextjs.org)
- 3D with [Three.js](https://threejs.org) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

## 📊 Stats

- **134+ Components** across 10 categories
- **5 Design Styles** fully implemented
- **WCAG 2.1 AA** accessibility compliance
- **236 KB** ESM bundle (gzipped)
- **251 KB** CJS bundle (gzipped)
- **59 KB** CSS bundle
- **100%** TypeScript coverage
- **Mobile-optimized** with touch support

## 🔗 Links

- [Documentation](https://Shubhjn4357.github.io/unicorn-ui)
- [npm Package](https://www.npmjs.com/package/@unicorn-ui/ui)
- [GitHub](https://github.com/Shubhjn4357/unicorn-ui)
- [Changelog](CHANGELOG.md)
- [Issues](https://github.com/Shubhjn4357/unicorn-ui/issues)

---

Made with ❤️ by the Unicorn UI team
