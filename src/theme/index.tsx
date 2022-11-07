import {
  createTheme,
  PaletteColorOptions,
  PaletteColor,
  Color,
} from '@mui/material'
type ColorPartial = Partial<Color>
declare module '@mui/material/styles' {
  interface ButtonVariants {
    outlined: React.CSSProperties
    contained: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface ButtonVariantsOptions {
    outlined?: React.CSSProperties
    contained?: React.CSSProperties
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    outlined: true
    contained: true
  }
}

let theme = createTheme({})

export default theme
