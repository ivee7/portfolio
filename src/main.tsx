import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'hooks/useTheme.tsx'
import { LocalizationProvider } from 'hooks/useLocalization.tsx'
import { App } from './App.tsx'
import './assets/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalizationProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>,
)