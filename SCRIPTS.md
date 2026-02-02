# Available Scripts Guide

Quick reference for all available pnpm commands in the Unicorn UI monorepo.

## 🚀 Quick Start Commands

### Development

```bash
# Start all dev servers (docs + UI watch mode)
pnpm dev

# Start only docs dev server
pnpm dev:docs

# Start only UI package in watch mode
pnpm dev:ui
```

### Building

```bash
# Build everything (UI package + docs)
pnpm build

# Build only UI package
pnpm build:ui

# Build only docs site
pnpm build:docs

# Build for deployment (UI first, then docs)
pnpm deploy:docs
```

### Testing & Quality

```bash
# Run all checks (lint + typecheck + build)
pnpm test

# Test only UI package
pnpm test:ui

# Run comprehensive build verification
pnpm verify

# Lint all packages
pnpm lint

# Lint and auto-fix
pnpm lint:fix

# Type check all packages
pnpm typecheck

# Format code
pnpm format

# Check formatting
pnpm format:check
```

## 🛠️ Component Development

### Create New Component

```bash
# Create a new component
pnpm create-component <name> <type>

# Examples:
pnpm create-component glow-card card
pnpm create-component animated-text text
pnpm create-component ripple-button button
```

**Available types:**
- `button` - Button components
- `card` - Card/layout components
- `text` - Text effects
- `layout` - Layout components
- `feedback` - Feedback components
- `animation` - Special effects
- `background` - Background components
- `core` - Core components
- `misc` - Miscellaneous

### Update Exports

```bash
# Auto-update all component exports
pnpm update-exports
```

### Generate Documentation

```bash
# Generate COMPONENTS.md from JSDoc
pnpm generate-docs
```

## 📦 Release & Deployment

### Version Management

```bash
# Create a new changeset
pnpm changeset

# Update versions based on changesets
pnpm version

# Publish to npm (runs tests first)
pnpm release
```

### Deployment

```bash
# Build for production deployment
pnpm deploy:docs

# Start production docs server (after build)
pnpm start:docs
```

## 🧹 Maintenance

```bash
# Clean all build artifacts and node_modules
pnpm clean

# Reinstall dependencies
pnpm install
```

## 📋 Complete Command Reference

### Root Level Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all dev servers |
| `pnpm dev:docs` | Start docs dev server only |
| `pnpm dev:ui` | Start UI watch mode only |
| `pnpm build` | Build all packages |
| `pnpm build:ui` | Build UI package only |
| `pnpm build:docs` | Build docs site only |
| `pnpm lint` | Lint all packages |
| `pnpm lint:fix` | Lint and auto-fix |
| `pnpm typecheck` | Type check all packages |
| `pnpm format` | Format all code |
| `pnpm format:check` | Check code formatting |
| `pnpm test` | Run all checks |
| `pnpm test:ui` | Test UI package only |
| `pnpm verify` | Comprehensive build verification |
| `pnpm create-component` | Create new component |
| `pnpm update-exports` | Update component exports |
| `pnpm generate-docs` | Generate documentation |
| `pnpm version` | Update package versions |
| `pnpm release` | Publish to npm |
| `pnpm deploy:docs` | Build for deployment |
| `pnpm start:docs` | Start production server |
| `pnpm clean` | Clean build artifacts |

### Package-Specific Commands

#### UI Package (`packages/ui`)

```bash
cd packages/ui

pnpm build              # Build package
pnpm dev                # Watch mode
pnpm lint               # Lint code
pnpm typecheck          # Type check
pnpm verify             # Comprehensive verification
pnpm create-component   # Create component
pnpm update-exports     # Update exports
pnpm generate-docs      # Generate docs
pnpm clean              # Clean dist
```

#### Docs App (`apps/docs`)

```bash
cd apps/docs

pnpm dev                # Start dev server
pnpm build              # Build for production
pnpm start              # Start production server
pnpm lint               # Lint code
pnpm typecheck          # Type check
```

## 🔄 Common Workflows

### Adding a New Component

```bash
# 1. Create component
pnpm create-component my-button button

# 2. Develop and test
pnpm dev:docs
# Visit http://localhost:3000/showcase

# 3. Update exports (if needed)
pnpm update-exports

# 4. Verify build
pnpm verify

# 5. Generate docs
pnpm generate-docs
```

### Before Committing

```bash
# Run all checks
pnpm test

# Or step by step:
pnpm lint:fix
pnpm typecheck
pnpm build
```

### Releasing a New Version

```bash
# 1. Create changeset
pnpm changeset
# Follow prompts to describe changes

# 2. Update versions
pnpm version

# 3. Commit changes
git add .
git commit -m "chore: release"

# 4. Publish (runs tests automatically)
pnpm release

# Or manually:
git push --tags
# CI will handle publishing
```

### Deploying Documentation

```bash
# Build for deployment
pnpm deploy:docs

# The output will be in apps/docs/out or apps/docs/.next
# Upload to your hosting provider

# Or use CI/CD (automatic on push to main)
git push origin main
```

## 💡 Tips

### Parallel Execution

Turbo automatically runs tasks in parallel when possible:

```bash
# These run in parallel across all packages
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
```

### Filtering

Run commands for specific packages:

```bash
# Using pnpm filters
pnpm --filter @unicorn-ui/ui build
pnpm --filter docs dev

# Or use the shortcuts
pnpm build:ui
pnpm dev:docs
```

### Watch Mode

For active development:

```bash
# Terminal 1: Watch UI changes
pnpm dev:ui

# Terminal 2: Run docs with hot reload
pnpm dev:docs
```

### Debugging Build Issues

```bash
# Clean everything
pnpm clean

# Reinstall
pnpm install

# Build step by step
pnpm build:ui
pnpm build:docs

# Check for errors
pnpm typecheck
pnpm lint
```

## 🚨 Troubleshooting

### Command Not Found

Make sure you're in the root directory:

```bash
cd /path/to/unicorn-ui
pnpm <command>
```

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

# Update exports if components are missing
pnpm update-exports
```

### Lint Errors

```bash
# Auto-fix most issues
pnpm lint:fix

# Check remaining issues
pnpm lint
```

## 📚 Additional Resources

- **Component Development**: See `apps/docs/components/README.md`
- **Scripts Details**: See `packages/ui/scripts/README.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Main README**: See `README.md`

---

**Pro Tip**: Add these aliases to your shell for even faster access:

```bash
# Add to ~/.bashrc or ~/.zshrc
alias pd="pnpm dev"
alias pb="pnpm build"
alias pt="pnpm test"
alias pv="pnpm verify"
alias pc="pnpm create-component"
```
