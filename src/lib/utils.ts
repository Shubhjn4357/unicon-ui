import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names and merges Tailwind CSS classes
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get CSS variable value from document
 * @param variable - CSS variable name (without --)
 * @returns CSS variable value
 */
export function getCSSVariable(variable: string): string {
  if (typeof window === "undefined") return ""
  return getComputedStyle(document.documentElement).getPropertyValue(`--${variable}`).trim()
}

/**
 * Check if user prefers reduced motion
 * @returns True if prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Generate unique ID
 * @param prefix - Optional prefix
 * @returns Unique ID string
 */
export function generateId(prefix = "unicorn"): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}
