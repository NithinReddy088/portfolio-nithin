import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react'
import { resumeData } from '../../data/resume'

export function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section" ref={ref} style={{ background: 'var(--bg)' }}>
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
            04 / Experience & Education
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
            My journey <span className="gradient-text">so far.</span>
          </h2>
        </motion.div>

        <div className="grid gap-16" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}
              >
                <Briefcase size={18} />
              </div>
              <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Work Experience
              </h3>
            </motion.div>

            {resumeData.experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 relative"
              >
                {/* Live indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                  <span className="font-mono" style={{ fontSize: '0.65rem', color: '#22c55e' }}>Currently Active</span>
                </div>

                <h4 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
                  {exp.role}
                </h4>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {exp.company}
                </p>

                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <span className="flex items-center gap-1.5 font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    <Calendar size={11} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {exp.highlights.map((h, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + j * 0.05 }}
                      className="flex gap-3"
                      style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}
                    >
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.3rem' }}>▸</span>
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education + Certifications */}
          <div className="flex flex-col gap-8">
            {/* Education */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(168,85,247,0.15)', color: '#a855f7' }}
                >
                  <GraduationCap size={18} />
                </div>
                <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Education
                </h3>
              </motion.div>

              <div className="flex flex-col gap-3">
                {resumeData.education.map((edu, i) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                    className="glass-card rounded-xl p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 3 }}>
                          {edu.degree}
                        </h4>
                        <p style={{ fontSize: '0.8rem', color: '#a855f7', marginBottom: 4 }}>
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                            {edu.period}
                          </span>
                          <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                            {edu.location}
                          </span>
                        </div>
                      </div>
                      <div
                        className="px-2.5 py-1 rounded-lg font-mono flex-shrink-0"
                        style={{
                          background: 'rgba(168,85,247,0.12)',
                          color: '#a855f7',
                          fontSize: '0.65rem',
                          border: '1px solid rgba(168,85,247,0.25)',
                        }}
                      >
                        {edu.grade}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b' }}
                >
                  <Award size={18} />
                </div>
                <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Certifications
                </h3>
              </motion.div>

              <div className="flex flex-col gap-2">
                {resumeData.certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
                    className="glass-card rounded-xl p-4 flex items-center gap-4"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(245,158,11,0.12)', color: '#f59e0b', fontSize: '0.75rem', fontWeight: 800 }}
                    >
                      ✦
                    </div>
                    <div className="flex-1 min-w-0">
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                        {cert.name}
                      </p>
                      <p className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
