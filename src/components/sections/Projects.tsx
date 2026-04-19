import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronRight, X, Layers } from 'lucide-react'
import { resumeData } from '../../data/resume'

export function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState<string | null>(null)

  const selectedProject = resumeData.projects.find(p => p.id === selected)

  return (
    <section id="projects" className="section" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p
            className="font-mono"
            style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '0.75rem', textTransform: 'uppercase' }}
          >
            03 / Projects
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
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
              Things I've <span className="gradient-text">shipped.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', maxWidth: 300, lineHeight: 1.6 }}>
              Production systems. Real clients. Real traffic.
            </p>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
        >
          {resumeData.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group relative"
              onClick={() => setSelected(project.id)}
            >
              {/* Color accent bar */}
              <div
                style={{
                  height: 3,
                  background: `linear-gradient(90deg, ${project.color}, ${project.color}88)`,
                }}
              />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: project.color + '20', color: project.color }}
                  >
                    <Layers size={18} />
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                      View Details
                    </span>
                    <ChevronRight size={14} style={{ color: project.color }} />
                  </div>
                </div>

                <h3
                  className="font-display"
                  style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}
                >
                  {project.name}
                </h3>
                <p className="font-mono" style={{ fontSize: '0.7rem', color: project.color, marginBottom: '0.75rem' }}>
                  {project.tagline}
                </p>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1rem',
                  }}
                  className="line-clamp-3"
                >
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map(m => (
                    <span
                      key={m}
                      className="px-2 py-1 rounded-md font-mono"
                      style={{
                        background: project.color + '12',
                        color: project.color,
                        fontSize: '0.65rem',
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 5).map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded font-mono"
                      style={{
                        background: 'var(--bg-card)',
                        color: 'var(--text-muted)',
                        fontSize: '0.65rem',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span
                      className="px-2 py-0.5 rounded font-mono"
                      style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}
                    >
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-20 z-50 overflow-auto rounded-2xl"
              style={{ background: 'var(--bg)', border: `1px solid ${selectedProject.color}40` }}
            >
              <div style={{ borderTop: `4px solid ${selectedProject.color}` }} />
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="font-mono" style={{ fontSize: '0.7rem', color: selectedProject.color, marginBottom: 4 }}>
                      {selectedProject.role}
                    </p>
                    <h2 className="font-display" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {selectedProject.name}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: 4 }}>
                      {selectedProject.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {selectedProject.url !== '#' && (
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-2.5 rounded-lg"
                        style={{ color: selectedProject.color }}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    <button
                      onClick={() => setSelected(null)}
                      className="glass-card p-2.5 rounded-lg"
                      style={{ color: 'var(--text-secondary)', cursor: 'pointer', background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
                  {selectedProject.description}
                </p>

                <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                  <div>
                    <h4 className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Key Metrics
                    </h4>
                    <div className="flex flex-col gap-2">
                      {selectedProject.metrics.map(m => (
                        <div
                          key={m}
                          className="flex items-center gap-2"
                          style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: selectedProject.color }} />
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg font-mono"
                          style={{
                            background: selectedProject.color + '15',
                            color: selectedProject.color,
                            fontSize: '0.75rem',
                            border: `1px solid ${selectedProject.color}30`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
