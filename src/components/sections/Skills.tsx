import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { resumeData } from '../../data/resume'

const categoryColors: Record<string, string> = {
  Languages: '#6470ff',
  Frontend: '#00c896',
  Backend: '#f59e0b',
  Databases: '#a855f7',
  'Cloud & DevOps': '#06b6d4',
  'AI & LLM': '#ff6b6b',
  'System Design': '#ec4899',
  Security: '#84cc16',
}

export function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const categories = Object.keys(resumeData.skills)
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <section id="skills" className="section" ref={ref} style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p
            className="font-mono"
            style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '0.75rem', textTransform: 'uppercase' }}
          >
            02 / Skills
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
            }}
          >
            Tech I work with <span className="gradient-text">daily.</span>
          </h2>
        </motion.div>

        <div className="grid gap-8" style={{ gridTemplateColumns: '1fr 2fr' }}>
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            {categories.map(cat => {
              const color = categoryColors[cat] || 'var(--accent)'
              const isActive = activeCategory === cat
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all"
                  style={{
                    background: isActive ? 'var(--bg-card-hover)' : 'transparent',
                    border: `1px solid ${isActive ? color + '60' : 'transparent'}`,
                    cursor: 'pointer',
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: isActive ? color : 'var(--text-muted)' }}
                  />
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.8rem',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {cat}
                  </span>
                  <span
                    className="ml-auto font-mono"
                    style={{ fontSize: '0.65rem', color: isActive ? color : 'var(--text-muted)' }}
                  >
                    {resumeData.skills[cat as keyof typeof resumeData.skills].length}
                  </span>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Skills grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3
                className="font-display mb-5"
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: categoryColors[activeCategory] || 'var(--accent)',
                }}
              >
                {activeCategory}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {resumeData.skills[activeCategory as keyof typeof resumeData.skills].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 rounded-lg font-mono"
                    style={{
                      background: (categoryColors[activeCategory] || 'var(--accent)') + '15',
                      border: `1px solid ${(categoryColors[activeCategory] || 'var(--accent)') + '30'}`,
                      color: 'var(--text-primary)',
                      fontSize: '0.78rem',
                      cursor: 'default',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* All skills overview bar */}
            <div className="mt-4 glass-card rounded-2xl p-5">
              <p className="font-mono mb-3" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                COVERAGE ACROSS {categories.length} DOMAINS
              </p>
              <div className="flex gap-1 h-2 rounded-full overflow-hidden">
                {categories.map(cat => {
                  const skills = resumeData.skills[cat as keyof typeof resumeData.skills]
                  const total = Object.values(resumeData.skills).flat().length
                  const pct = (skills.length / total) * 100
                  return (
                    <motion.div
                      key={cat}
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      style={{
                        width: `${pct}%`,
                        background: categoryColors[cat] || 'var(--accent)',
                        borderRadius: 2,
                        transformOrigin: 'left',
                        minWidth: 4,
                      }}
                      title={`${cat}: ${skills.length} skills`}
                    />
                  )
                })}
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                {categories.map(cat => (
                  <div key={cat} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: categoryColors[cat] || 'var(--accent)' }} />
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
