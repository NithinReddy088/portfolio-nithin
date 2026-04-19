import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Layers, Cpu, Rocket } from 'lucide-react'
import { resumeData } from '../../data/resume'

const traits = [
  {
    icon: <Code2 size={20} />,
    title: 'Full Stack First',
    desc: 'Comfortable owning entire product verticals — from database schema to pixel-perfect UI.',
  },
  {
    icon: <Layers size={20} />,
    title: 'Production-Grade',
    desc: '7+ systems shipped to real clients, real users. Not just tutorials — actual live traffic.',
  },
  {
    icon: <Cpu size={20} />,
    title: 'AI Native',
    desc: 'Integrating LLMs, RAG pipelines, and AI agents into real business workflows is my specialty.',
  },
  {
    icon: <Rocket size={20} />,
    title: 'Ship Fast',
    desc: 'Agile, independent, and pragmatic. I deliver working software, not just plans.',
  },
]

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          className="grid gap-16"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <p
                className="font-mono"
                style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '0.75rem', textTransform: 'uppercase' }}
              >
                01 / About Me
              </p>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem',
                }}
              >
                I build things<br />
                <span className="gradient-text">that ship.</span>
              </h2>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                I'm a Full Stack Engineer based in Hyderabad, currently at <strong style={{ color: 'var(--text-primary)' }}>Rootlex Technologies</strong>. I've independently shipped 7 production systems — from headless e-commerce storefronts to AI-powered analyzers — and I'm deeply comfortable across the entire stack.
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                What sets me apart: I don't just write code — I architect solutions. I've built ERP modules serving active clients, integrated Gemini + LangChain into real financial tooling, and automated entire job search workflows with AI agents.
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                I thrive in environments that demand ownership, speed, and craft — where "good enough" isn't the bar.
              </p>

              {/* Resume download */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full glass-card font-medium"
                style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.85rem', border: '1px solid var(--border-hover)' }}
              >
                Let's Work Together →
              </motion.a>
            </motion.div>
          </div>

          {/* Right: trait cards */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card rounded-xl p-5"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}
                >
                  {trait.icon}
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                >
                  {trait.title}
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
