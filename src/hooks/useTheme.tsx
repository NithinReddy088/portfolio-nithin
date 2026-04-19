import React, { createContext, useContext, useEffect, useState } from 'react'
import { Theme, ThemeId, themes } from '../types/theme'

interface ThemeContextValue {
  theme: Theme
  setTheme: (id: ThemeId) => void
  themes: Theme[]
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    return (localStorage.getItem('portfolio-theme') as ThemeId) || 'neo-dark'
  })

  const theme = themes.find(t => t.id === themeId) || themes[0]

  useEffect(() => {
    const root = document.documentElement
    Object.entries(theme.vars).forEach(([key, val]) => {
      root.style.setProperty(key, val)
    })
    root.setAttribute('data-theme', theme.id)
    localStorage.setItem('portfolio-theme', theme.id)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeId, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider')
  return ctx
}
