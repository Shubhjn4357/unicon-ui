#!/usr/bin/env node

/**
 * Build Verification Script
 * Runs comprehensive checks before deployment
 */

import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const checks = []
let hasErrors = false

function runCommand(command, description) {
  console.log(`\n🔍 ${description}...`)
  try {
    execSync(command, { stdio: "inherit", cwd: path.join(__dirname, "..") })
    checks.push({ name: description, status: "✅ PASSED" })
    return true
  } catch (error) {
    checks.push({ name: description, status: "❌ FAILED" })
    hasErrors = true
    return false
  }
}

function checkFileExists(filePath, description) {
  console.log(`\n🔍 ${description}...`)
  const fullPath = path.join(__dirname, "..", filePath)
  if (fs.existsSync(fullPath)) {
    checks.push({ name: description, status: "✅ EXISTS" })
    return true
  }
  checks.push({ name: description, status: "❌ MISSING" })
  hasErrors = true
  return false
}

function printSummary() {
  console.log(`\n${"=".repeat(60)}`)
  console.log("BUILD VERIFICATION SUMMARY")
  console.log("=".repeat(60))

  checks.forEach(({ name, status }) => {
    console.log(`${status.padEnd(12)} ${name}`)
  })

  console.log("=".repeat(60))

  if (hasErrors) {
    console.log("\n❌ Build verification FAILED")
    console.log("Please fix the errors above before deploying.\n")
    process.exit(1)
  } else {
    console.log("\n✅ All checks PASSED")
    console.log("Ready for deployment!\n")
    process.exit(0)
  }
}

async function verify() {
  console.log("🚀 Starting build verification...\n")

  // Check required files
  checkFileExists("package.json", "Check package.json exists")
  checkFileExists("tsconfig.json", "Check tsconfig.json exists")
  checkFileExists("src/index.ts", "Check entry point exists")
  checkFileExists("src/app/globals.css", "Check global styles exist")

  // TypeScript type checking
  runCommand("pnpm tsc --noEmit", "TypeScript type checking")

  // Build the package
  runCommand("pnpm build", "Build package")

  // Check dist folder was created
  checkFileExists("dist/index.js", "Check CJS build output")
  checkFileExists("dist/index.mjs", "Check ESM build output")
  checkFileExists("dist/index.d.ts", "Check TypeScript declarations")
  checkFileExists("dist/styles.css", "Check CSS output")

  // Lint check (if available)
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf-8")
  )

  if (packageJson.scripts?.lint) {
    runCommand("pnpm lint", "Lint check")
  }

  printSummary()
}

verify()
