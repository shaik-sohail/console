import { ThemeProvider } from '@mui/material';
import { MemoryRouter } from 'react-router';
import theme from "../src/theme/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </ThemeProvider>
  )
];