import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Logo } from '../ui/Logo'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navLinks.map(l => document.querySelector(l.href))
      let idx = -1
      sections.forEach((s, i) => {
        if (s && s.getBoundingClientRect().top <= 120) idx = i
      })
      setActive(idx >= 0 ? navLinks[idx].href : '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
      style={{
        height: 64,
        background: scrolled ? 'rgba(var(--bg-rgb, 6,9,20),0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <motion.div whileHover={{ scale: 1.02 }}>
          <Logo />
        </motion.div>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            style={{
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: active === link.href ? 'var(--accent)' : 'var(--text-secondary)',
              transition: 'color 0.2s',
              letterSpacing: '0.01em',
              position: 'relative',
            }}
            className="group"
          >
            {link.label}
            <span
              style={{
                position: 'absolute',
                bottom: -4,
                left: 0,
                right: active === link.href ? 0 : '100%',
                height: 1,
                background: 'var(--accent)',
                transition: 'right 0.3s ease',
              }}
            />
          </a>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium magnetic"
          style={{
            background: 'var(--accent)',
            color: 'var(--bg)',
            textDecoration: 'none',
            fontSize: '0.8rem',
            fontWeight: 600,
          }}
        >
          Hire Me
        </a>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              animate={{
                rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                y: menuOpen && i === 0 ? 8 : menuOpen && i === 2 ? -8 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: 'var(--text-primary)',
                borderRadius: 2,
                transformOrigin: 'center',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 right-0 glass-card border-b"
          style={{ borderColor: 'var(--border)' }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4"
              style={{
                color: active === link.href ? 'var(--accent)' : 'var(--text-primary)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
                fontSize: '0.9rem',
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
