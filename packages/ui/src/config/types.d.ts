export interface ColorScale {
  50?: string
  100?: string
  200?: string
  300?: string
  400?: string
  500?: string
  600?: string
  700?: string
  800?: string
  900?: string
  950?: string
  DEFAULT: string
}
export interface SimpleColor {
  DEFAULT: string
  light?: string
  dark?: string
}
export interface UnicornConfig {
  /** Color palette */
  colors?: {
    primary?: Partial<ColorScale>
    secondary?: Partial<ColorScale>
    accent?: Partial<ColorScale>
    success?: Partial<SimpleColor>
    warning?: Partial<SimpleColor>
    error?: Partial<SimpleColor>
    info?: Partial<SimpleColor>
  }
  /** Spacing scale */
  spacing?: {
    xs?: string
    sm?: string
    md?: string
    lg?: string
    xl?: string
    "2xl"?: string
    "3xl"?: string
    [key: string]: string | undefined
  }
  /** Border radius */
  radius?: {
    none?: string
    sm?: string
    md?: string
    lg?: string
    xl?: string
    "2xl"?: string
    "3xl"?: string
    full?: string
    [key: string]: string | undefined
  }
  /** Box shadows */
  shadows?: {
    sm?: string
    md?: string
    lg?: string
    xl?: string
    "2xl"?: string
    inner?: string
    none?: string
    [key: string]: string | undefined
  }
  /** Typography settings */
  typography?: {
    fontFamily?: {
      sans?: string
      serif?: string
      mono?: string
      [key: string]: string | undefined
    }
    fontSize?: {
      xs?: [
        string,
        {
          lineHeight: string
        },
      ]
      sm?: [
        string,
        {
          lineHeight: string
        },
      ]
      base?: [
        string,
        {
          lineHeight: string
        },
      ]
      lg?: [
        string,
        {
          lineHeight: string
        },
      ]
      xl?: [
        string,
        {
          lineHeight: string
        },
      ]
      "2xl"?: [
        string,
        {
          lineHeight: string
        },
      ]
      "3xl"?: [
        string,
        {
          lineHeight: string
        },
      ]
      "4xl"?: [
        string,
        {
          lineHeight: string
        },
      ]
      "5xl"?: [
        string,
        {
          lineHeight: string
        },
      ]
      [key: string]:
        | [
            string,
            {
              lineHeight: string
            },
          ]
        | undefined
    }
    fontWeight?: {
      thin?: string
      extralight?: string
      light?: string
      normal?: string
      medium?: string
      semibold?: string
      bold?: string
      extrabold?: string
      black?: string
      [key: string]: string | undefined
    }
  }
  /** Transition settings */
  transitions?: {
    duration?: {
      fast?: string
      normal?: string
      slow?: string
      [key: string]: string | undefined
    }
    timing?: {
      linear?: string
      in?: string
      out?: string
      inOut?: string
      [key: string]: string | undefined
    }
  }
  /** Opacity scale */
  opacity?: {
    subtle?: string
    light?: string
    medium?: string
    heavy?: string
    [key: string]: string | undefined
  }
  /** Z-index scale */
  zIndex?: {
    base?: number | string
    dropdown?: number | string
    sticky?: number | string
    fixed?: number | string
    modalBackdrop?: number | string
    modal?: number | string
    popover?: number | string
    tooltip?: number | string
    [key: string]: number | string | undefined
  }
}
export type UserConfig = Partial<UnicornConfig>
//# sourceMappingURL=types.d.ts.map
