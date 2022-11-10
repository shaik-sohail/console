import React from 'react'
import ReactDOM from 'react-dom'
import { StyledEngineProvider } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import App from './App'
import theme from './theme/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </ThemeProvider>,

  document.getElementById('root')
)
