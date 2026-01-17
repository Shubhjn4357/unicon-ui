import type { ClassValue } from "clsx"
/**
 * Combines multiple class names and merges Tailwind CSS classes
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export declare function cn(...inputs: ClassValue[]): string
/**
 * Get CSS variable value from document
 * @param variable - CSS variable name (without --)
 * @returns CSS variable value
 */
export declare function getCSSVariable(variable: string): string
/**
 * Check if user prefers reduced motion
 * @returns True if prefers reduced motion
 */
export declare function prefersReducedMotion(): boolean
/**
 * Generate unique ID
 * @param prefix - Optional prefix
 * @returns Unique ID string
 */
export declare function generateId(prefix?: string): string
//# sourceMappingURL=utils.d.ts.map
