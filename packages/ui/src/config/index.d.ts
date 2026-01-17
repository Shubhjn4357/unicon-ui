import type { UnicornConfig, UserConfig } from "./types"
/**
 * Resolve user config with defaults
 */
export declare function resolveConfig(userConfig?: UserConfig): UnicornConfig
/**
 * Generate CSS custom properties from config
 */
export declare function generateCSSVariables(config: UnicornConfig): string
export type { UnicornConfig, UserConfig } from "./types"
export { defaultConfig } from "./default-config"
//# sourceMappingURL=index.d.ts.map
