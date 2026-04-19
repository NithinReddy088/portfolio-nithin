import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 glass-card rounded-full text-sm"
        style={{ color: 'var(--accent)', fontSize: '0.8rem' }}
      >
        <Palette size={14} />
        <span className="font-mono hidden sm:block">{theme.emoji}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 z-50 glass-card rounded-xl overflow-hidden"
              style={{ minWidth: 220 }}
            >
              <div className="p-1">
                {themes.map(t => (
                  <motion.button
                    key={t.id}
                    onClick={() => { setTheme(t.id); setOpen(false) }}
                    whileHover={{ x: 4 }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors"
                    style={{
                      background: t.id === theme.id ? 'var(--accent-glow)' : 'transparent',
                      color: t.id === theme.id ? 'var(--accent)' : 'var(--text-secondary)',
                    }}
                  >
                    <span style={{ fontSize: '1rem', lineHeight: 1 }}>{t.emoji}</span>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: '0.65rem', opacity: 0.7 }}>{t.description}</div>
                    </div>
                    {t.id === theme.id && (
                      <div className="ml-auto w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
