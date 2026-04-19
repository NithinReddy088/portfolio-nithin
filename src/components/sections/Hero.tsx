import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, MapPin, Zap } from 'lucide-react'
import { resumeData } from '../../data/resume'
import { useTheme } from '../../hooks/useTheme'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
  }),
}

export function Hero() {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Particle/dot grid for neo-dark / cyberpunk
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
      })
    }

    let raf: number
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = accentColor + '40'
        ctx.fill()
      })

      // Connect nearby
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = accentColor + Math.floor((1 - dist / 120) * 30).toString(16).padStart(2, '0')
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    draw()
    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [theme.id])

  const isTerminal = theme.id === 'terminal'
  const isLight = theme.id === 'minimal-luxury'

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh', background: 'var(--bg)' }}
    >
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: theme.id === 'terminal' ? 0.6 : 0.4 }}
      />

      {/* Gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-hero)' }}
      />

      {/* Grid lines for terminal */}
      {isTerminal && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,255,80,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,80,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      )}

      <div className="container relative z-10 text-center" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>

        {/* Status badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
          <MapPin size={11} />
          {resumeData.location} · {resumeData.availability}
        </motion.div>

        {/* Terminal prefix for terminal theme */}
        {isTerminal && (
          <motion.div
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-mono mb-2"
            style={{ color: 'var(--accent)', fontSize: '0.85rem' }}
          >
            $ whoami
          </motion.div>
        )}

        {/* Name */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display"
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 7rem)',
            fontWeight: isLight ? 300 : 800,
            lineHeight: 1.05,
            letterSpacing: isLight ? '-0.03em' : '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
          }}
        >
          {isTerminal ? (
            <span>
              <span style={{ color: 'var(--text-muted)' }}>{'> '}</span>
              <span className="gradient-text">Nithin Reddy</span>
              <br />
              <span className="gradient-text cursor-blink">Sunkara</span>
            </span>
          ) : (
            <span>
              <span className="gradient-text">Nithin</span>
              <br />
              <span>Reddy Sunkara</span>
            </span>
          )}
        </motion.h1>

        {/* Title */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-3 mb-6"
          style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)', fontWeight: 400 }}
        >
          <Zap size={16} style={{ color: 'var(--accent)' }} />
          <span>{resumeData.title}</span>
          <span style={{ color: 'var(--text-muted)' }}>·</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em' }}>
            {resumeData.subtitle}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{
            maxWidth: 600,
            margin: '0 auto 2.5rem',
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            lineHeight: 1.7,
          }}
        >
          {resumeData.tagline}
        </motion.p>

        {/* Stats */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-8 mb-10 flex-wrap"
        >
          {resumeData.stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display gradient-text glow"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-4 flex-wrap mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium magnetic shine relative overflow-hidden"
            style={{
              background: 'var(--accent)',
              color: 'var(--bg)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 700,
              boxShadow: `0 4px 20px var(--accent-glow)`,
            }}
          >
            View My Work
          </a>
          <a
            href={`mailto:${resumeData.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium glass-card"
            style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            <Mail size={16} />
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: resumeData.github, icon: <Github size={18} />, label: 'GitHub' },
            { href: resumeData.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
            { href: `mailto:${resumeData.email}`, icon: <Mail size={18} />, label: 'Email' },
          ].map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card p-3 rounded-full"
              style={{ color: 'var(--text-secondary)', display: 'flex' }}
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: 'var(--text-muted)' }}
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
