# Unicorn UI - Management Scripts

This directory contains scripts to help manage the component library.

## Available Scripts

### 1. Create Component
Creates a new component with proper structure and template.

```bash
pnpm create-component <name> <type>
```

**Example:**
```bash
pnpm create-component glow-card card
pnpm create-component animated-text text
pnpm create-component ripple-button button
```

**Available Types:**
- `button` → components/buttons
- `card` → components/layout
- `text` → components/text
- `layout` → components/layout
- `feedback` → components/feedback
- `animation` → components/special
- `background` → components/backgrounds
- `core` → components/core
- `misc` → components/misc

### 2. Update Exports
Automatically scans all components and updates `src/index.ts` with exports.

```bash
pnpm update-exports
```

**What it does:**
- Scans all component directories
- Generates organized exports by category
- Creates backup of existing index.ts
- Updates index.ts with all component exports

### 3. Verify Build
Runs comprehensive checks before deployment.

```bash
pnpm verify
```

**Checks performed:**
- ✅ Required files exist
- ✅ TypeScript type checking
- ✅ Build succeeds
- ✅ Output files generated
- ✅ Lint check (if available)

### 4. Generate Documentation
Auto-generates markdown documentation for all components.

```bash
pnpm generate-docs
```

**Output:**
- Creates `COMPONENTS.md` with all component docs
- Extracts descriptions, features, and props
- Includes usage examples

## Workflow

### Adding a New Component

1. **Create the component:**
   ```bash
   pnpm create-component my-component button
   ```

2. **Implement the component logic** in the generated file

3. **Update exports:**
   ```bash
   pnpm update-exports
   ```

4. **Build and verify:**
   ```bash
   pnpm build
   pnpm verify
   ```

5. **Generate documentation:**
   ```bash
   pnpm generate-docs
   ```

6. **Test in docs app:**
   ```bash
   cd ../../apps/docs
   pnpm dev
   ```

### Before Deployment

Always run the verification script:

```bash
pnpm verify
```

This ensures:
- No TypeScript errors
- Build succeeds
- All files are generated
- Code passes linting

## Script Details

### create-component.js
- Generates component template with proper TypeScript types
- Uses framer-motion for animations
- Includes forwardRef pattern
- Adds proper displayName

### update-exports.js
- Scans component directories
- Organizes exports by category
- Creates backup before updating
- Maintains utility exports

### verify-build.js
- Comprehensive pre-deployment checks
- Colored output for easy reading
- Exits with error code if checks fail
- Summary report at the end

### generate-docs.js
- Parses component files
- Extracts JSDoc comments
- Generates usage examples
- Creates comprehensive markdown docs

## Tips

1. **Always update exports** after creating new components
2. **Run verify** before committing changes
3. **Generate docs** to keep documentation in sync
4. **Use consistent naming** for components (kebab-case for files, PascalCase for exports)

## Troubleshooting

**Script not found:**
```bash
# Make sure you're in the packages/ui directory
cd packages/ui
pnpm create-component my-component button
```

**Permission denied:**
```bash
# On Unix systems, make scripts executable
chmod +x scripts/*.js
```

**Build fails:**
```bash
# Clean and rebuild
pnpm clean
pnpm build
```
