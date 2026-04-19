import { resumeData } from '../../data/resume'

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: '2rem 0',
      }}
    >
      <div
        className="container flex items-center justify-between flex-wrap gap-4"
        style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}
      >
        <span>
          © 2025 <span style={{ color: 'var(--accent)' }}>{resumeData.name}</span>. All rights reserved.
        </span>
        <span>
          Built with React + Framer Motion + Bun · Hyderabad, India
        </span>
      </div>
    </footer>
  )
}
