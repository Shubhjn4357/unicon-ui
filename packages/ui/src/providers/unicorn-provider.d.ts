import type * as React from "react"
import type { UnicornConfig, UserConfig } from "../config"
interface UnicornProviderProps {
  children: React.ReactNode
  config?: UserConfig
}
export declare function UnicornProvider({
  children,
  config: userConfig,
}: UnicornProviderProps): import("react/jsx-runtime").JSX.Element
export declare function useUnicornConfig(): UnicornConfig
//# sourceMappingURL=unicorn-provider.d.ts.map
