import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, ExternalLink, Send } from 'lucide-react'
import { resumeData } from '../../data/resume'

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const links = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: resumeData.email,
      href: `mailto:${resumeData.email}`,
      color: '#6470ff',
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/NithinReddy088',
      href: resumeData.github,
      color: '#e2e8f0',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'nithin-reddy-sunkara',
      href: resumeData.linkedin,
      color: '#0ea5e9',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: `${resumeData.location} · ${resumeData.availability}`,
      href: null,
      color: '#22c55e',
    },
  ]

  return (
    <section id="contact" className="section" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          className="grid gap-16 items-start"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p
              className="font-mono"
              style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '0.75rem', textTransform: 'uppercase' }}
            >
              05 / Contact
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              Let's build<br />
              <span className="gradient-text">something great.</span>
            </h2>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem' }}>
              I'm open to full-time roles, freelance projects, and interesting collaborations. If you're building something ambitious, I'd love to hear about it.
            </p>

            <div className="flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 glass-card rounded-xl p-4 group"
                      style={{ textDecoration: 'none' }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: link.color + '15', color: link.color }}
                      >
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {link.label}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                          {link.value}
                        </p>
                      </div>
                      <ExternalLink size={14} style={{ color: 'var(--text-muted)', opacity: 0.5 }} className="group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 glass-card rounded-xl p-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: link.color + '15', color: link.color }}
                      >
                        {link.icon}
                      </div>
                      <div>
                        <p className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {link.label}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                          {link.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="glass-card rounded-2xl p-8 relative overflow-hidden"
              style={{ border: '1px solid var(--border-hover)' }}
            >
              {/* BG accent */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'var(--accent-glow)', filter: 'blur(60px)' }}
              />

              <div className="relative">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono mb-6"
                  style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', fontSize: '0.7rem', border: '1px solid rgba(34,197,94,0.2)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                  Available for opportunities
                </div>

                <h3
                  className="font-display"
                  style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '1rem' }}
                >
                  Ready to bring your project to life?
                </h3>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '2rem' }}>
                  Whether it's a new product, a legacy system that needs modernizing, or an AI integration — I'm ready to ship.
                </p>

                <motion.a
                  href={`mailto:${resumeData.email}?subject=Opportunity - Let's talk`}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-medium magnetic"
                  style={{
                    background: 'var(--accent)',
                    color: 'var(--bg)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    boxShadow: '0 4px 20px var(--accent-glow)',
                  }}
                >
                  <Send size={16} />
                  Send me a message
                </motion.a>

                <div className="flex items-center justify-center gap-4 mt-6">
                  {[
                    { icon: <Github size={16} />, href: resumeData.github },
                    { icon: <Linkedin size={16} />, href: resumeData.linkedin },
                  ].map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2, scale: 1.1 }}
                      className="glass-card p-3 rounded-xl"
                      style={{ color: 'var(--text-secondary)', display: 'flex' }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
