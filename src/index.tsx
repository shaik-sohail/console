import React from 'react'
import ReactDOM from 'react-dom'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
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
