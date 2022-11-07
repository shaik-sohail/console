import { createTheme, Color } from '@mui/material'
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    template: true
    createTemplate: true
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#2da6ca',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'template' },
          style: {
            textTransform: 'none',
            border: `4px solid`,
            borderRadius: '24px',
            color: '#2da6ca',
          },
        },
        {
          props: { variant: 'createTemplate' },
          style: {
            textTransform: 'none',
            borderRadius: '24px',
            backgroundColor: '#2da6ca',
            color: '#fff',
          },
        },
      ],
    },
  },
})

export default theme
