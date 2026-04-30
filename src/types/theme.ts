export type ThemeId = 'neo-dark'

export interface Theme {
  id: ThemeId
  name: string
  emoji: string
  description: string
  vars: Record<string, string>
}

export const themes: Theme[] = [
  {
    id: 'neo-dark',
    name: 'Neo Dark Glass',
    emoji: '🌌',
    description: 'Glassmorphism · Neon · Futuristic',
    vars: {
      '--font-display': '"Raleway"',
      '--font-body': '"Inter"',
      '--font-mono': '"Fira Code"',
      '--bg': '#060914',
      '--bg-secondary': '#0d1424',
      '--bg-card': 'rgba(255,255,255,0.04)',
      '--bg-card-hover': 'rgba(255,255,255,0.08)',
      '--border': 'rgba(100,120,255,0.2)',
      '--border-hover': 'rgba(100,120,255,0.5)',
      '--accent': '#6470ff',
      '--accent-2': '#a855f7',
      '--accent-glow': 'rgba(100,112,255,0.3)',
      '--text-primary': '#f0f4ff',
      '--text-secondary': '#8892b0',
      '--text-muted': '#4a5568',
      '--glass': 'rgba(255,255,255,0.05)',
      '--glass-blur': 'blur(20px)',
      '--shadow': '0 8px 32px rgba(100,112,255,0.15)',
      '--gradient-hero': 'radial-gradient(ellipse at 20% 50%, rgba(100,112,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.1) 0%, transparent 60%)',
      '--noise': '1',
    },
  },
]
