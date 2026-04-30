import React, { createContext, useContext, useEffect } from 'react'
import { Theme, themes } from '../types/theme'

interface ThemeContextValue {
  theme: Theme
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = themes[0]

  useEffect(() => {
    const root = document.documentElement
    Object.entries(theme.vars).forEach(([key, val]) => {
      root.style.setProperty(key, val)
    })
    root.setAttribute('data-theme', theme.id)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider')
  return ctx
}
