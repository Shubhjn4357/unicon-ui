"use client"

import type * as React from "react"

export interface UserConfig {
  colors?: Record<string, any>
  radius?: Record<string, string>
  shadows?: Record<string, string>
  spacing?: Record<string, string>
  transitions?: Record<string, any>
  typography?: Record<string, any>
}

export interface UnicornProviderProps {
  children?: React.ReactNode
  config?: UserConfig
}

export const UnicornProvider = ({ children, config }: UnicornProviderProps) => {
  return <>{children}</>
}

UnicornProvider.displayName = "UnicornProvider"
