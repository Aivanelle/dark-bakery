import { createTheme, ThemeProvider } from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import './styles.css'

const theme = createTheme({
  spacing: 4,
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'initial',
          borderRadius: 999
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#ef493c'
    },
    secondary: {
      main: '#000'
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)

