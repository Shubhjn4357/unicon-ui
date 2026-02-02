# Deployment Guide

## Project Structure

Unicorn UI uses a monorepo structure with components developed in the docs app and published as a separate package:

```
unicorn-ui/
├── apps/docs/              # Documentation site (Next.js)
│   ├── components/ui/      # UI components (source of truth)
│   └── app/                # Next.js pages
└── packages/ui/            # Published npm package
    ├── src/                # Symlinked or copied from apps/docs/components/ui
    └── dist/               # Build output
```

## Development Workflow

### 1. Local Development

```bash
# Install dependencies
pnpm install

# Start docs dev server
cd apps/docs
pnpm dev

# Visit http://localhost:3000
```

Components in `apps/docs/components/ui` are automatically available in the docs app via the `@/components/ui/*` path alias.

### 2. Create New Components

```bash
cd packages/ui
pnpm create-component my-component button
```

This creates a component in the appropriate category that's immediately testable in the docs app.

### 3. Test Components

Visit `http://localhost:3000/showcase` to see all components in action.

### 4. Build for Production

```bash
# Build UI package
cd packages/ui
pnpm build

# Build docs site
cd apps/docs
pnpm build
```

## Deployment Options

### Option 1: GitHub Pages (Docs Only)

The docs site can be deployed to GitHub Pages automatically.

**Setup:**

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch

The `.github/workflows/deploy-docs.yml` workflow will:
- Build the UI package
- Build the Next.js docs site
- Deploy to GitHub Pages

**Manual Deployment:**

```bash
# Build everything
pnpm build

# Deploy docs
cd apps/docs
pnpm build
# Upload the 'out' directory to your hosting
```

### Option 2: npm Package (UI Library)

Publish the UI package to npm for others to use.

**Setup:**

1. Create npm account
2. Login: `npm login`
3. Add NPM_TOKEN to GitHub secrets

**Automated Release:**

```bash
# Update version
npm version patch  # or minor, major

# Push tag
git push --tags

# GitHub Actions will automatically publish to npm
```

**Manual Release:**

```bash
cd packages/ui
pnpm verify
pnpm build
pnpm publish --access public
```

### Option 3: Vercel (Recommended for Docs)

Deploy the docs site to Vercel for the best Next.js experience.

**Setup:**

1. Import repository to Vercel
2. Set root directory to `apps/docs`
3. Configure build settings:
   - Build Command: `cd ../.. && pnpm build --filter=docs`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

**Environment Variables:**

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Option 4: Netlify

Deploy docs to Netlify.

**netlify.toml:**

```toml
[build]
  base = "apps/docs"
  command = "cd ../.. && pnpm build --filter=docs"
  publish = "apps/docs/out"

[build.environment]
  NODE_VERSION = "20"
```

## CI/CD Workflows

### Continuous Integration

`.github/workflows/ci.yml` runs on every push and PR:

- ✅ Lint check
- ✅ Type check
- ✅ Build packages
- ✅ Build verification
- ✅ Test docs build

### Automated Release

`.github/workflows/release.yml` runs on version tags:

- ✅ Verify build
- ✅ Publish to npm
- ✅ Create GitHub release

### Docs Deployment

`.github/workflows/deploy-docs.yml` runs on main branch push:

- ✅ Build UI package
- ✅ Build docs site
- ✅ Deploy to GitHub Pages

## Pre-Deployment Checklist

### Before Committing

```bash
# Run all checks
pnpm lint
pnpm typecheck
pnpm build

# Verify UI package
cd packages/ui
pnpm verify
```

### Before Releasing

```bash
# Update version in package.json
cd packages/ui
npm version patch  # or minor, major

# Update CHANGELOG.md
# Document breaking changes
# List new features

# Test build
pnpm verify

# Commit and tag
git add .
git commit -m "chore: release v0.1.1"
git tag v0.1.1
git push --tags
```

## Environment Variables

### Docs Site

```env
# Public
NEXT_PUBLIC_SITE_URL=https://unicorn-ui.dev

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### GitHub Actions

Required secrets:

- `NPM_TOKEN` - For npm publishing
- `GITHUB_TOKEN` - Automatically provided

## Troubleshooting

### Build Fails

```bash
# Clean and rebuild
pnpm clean
pnpm install
pnpm build
```

### Type Errors

```bash
# Check types
pnpm typecheck

# Fix common issues
cd packages/ui
pnpm update-exports
```

### Import Errors in Docs

Make sure the path alias is correct:

```tsx
// Correct
import { Button } from "@/components/ui/buttons/button"

// Also correct (if using package)
import { Button } from "@unicorn-ui/ui"
```

### Deployment Fails

1. Check build logs
2. Verify environment variables
3. Ensure all dependencies are in package.json
4. Check Node.js version (should be 20+)

## Performance Optimization

### Bundle Size

```bash
# Analyze bundle
cd apps/docs
pnpm build
npx @next/bundle-analyzer
```

### Image Optimization

- Use Next.js Image component
- Optimize images before committing
- Use WebP format

### Code Splitting

Components are automatically code-split by Next.js. Ensure you're using dynamic imports for heavy components:

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/ui/heavy-component'))
```

## Monitoring

### After Deployment

- ✅ Check all pages load
- ✅ Test component interactions
- ✅ Verify responsive design
- ✅ Test dark mode
- ✅ Check accessibility
- ✅ Test on different browsers

### Analytics

Add analytics to track usage:

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## Rollback

### If Something Goes Wrong

```bash
# Revert to previous version
git revert HEAD
git push

# Or rollback npm package
npm unpublish @unicorn-ui/ui@0.1.1
npm publish  # previous version
```

## Support

- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions
- **Email**: support@unicorn-ui.dev
