import { useTheme } from '../../hooks/useTheme'

function NeoDarkLogo() {
  return (
    <svg width="156" height="42" viewBox="0 0 156 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nd-g1" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6470ff" stopOpacity="0.22"/>
          <stop offset="1" stopColor="#a855f7" stopOpacity="0.1"/>
        </linearGradient>
        <linearGradient id="nd-g2" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6470ff"/>
          <stop offset="1" stopColor="#a855f7"/>
        </linearGradient>
        <linearGradient id="nd-g3" x1="50" y1="5" x2="156" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6470ff"/>
          <stop offset="1" stopColor="#a855f7"/>
        </linearGradient>
        <filter id="nd-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Hexagon */}
      <polygon
        points="21,3 36.6,12 36.6,30 21,39 5.4,30 5.4,12"
        fill="url(#nd-g1)" stroke="url(#nd-g2)" strokeWidth="1.2"
      />
      {/* N inside hex */}
      <text
        x="21" y="28"
        fontFamily="Raleway, sans-serif" fontSize="19" fontWeight="800"
        fill="url(#nd-g2)" textAnchor="middle" filter="url(#nd-glow)"
      >N</text>
      {/* Wordmark */}
      <text
        x="50" y="23"
        fontFamily="Raleway, sans-serif" fontSize="17" fontWeight="700"
        fill="url(#nd-g3)"
      >NRS</text>
      <text
        x="50" y="34"
        fontFamily="'Fira Code', monospace" fontSize="7" fontWeight="400"
        fill="#a855f7" fillOpacity="0.6" letterSpacing="2.5"
      >PORTFOLIO</text>
    </svg>
  )
}

function LuxuryLogo() {
  return (
    <svg width="156" height="42" viewBox="0 0 156 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lx-g1" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c9a84c"/>
          <stop offset="0.5" stopColor="#b49b5a"/>
          <stop offset="1" stopColor="#8b7240"/>
        </linearGradient>
        <linearGradient id="lx-g2" x1="50" y1="5" x2="156" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c9a84c"/>
          <stop offset="1" stopColor="#8b7240"/>
        </linearGradient>
      </defs>
      {/* Diamond outer */}
      <polygon points="21,4 38,21 21,38 4,21" fill="none" stroke="url(#lx-g1)" strokeWidth="1"/>
      {/* Diamond inner subtle */}
      <polygon points="21,11 31,21 21,31 11,21" fill="none" stroke="url(#lx-g1)" strokeWidth="0.3" strokeOpacity="0.4"/>
      {/* N inside */}
      <text
        x="21" y="27"
        fontFamily="'Playfair Display', serif" fontSize="17" fontWeight="700"
        fill="url(#lx-g1)" textAnchor="middle"
      >N</text>
      {/* Vertical separator */}
      <line x1="48" y1="10" x2="48" y2="32" stroke="url(#lx-g2)" strokeWidth="0.5" strokeOpacity="0.35"/>
      {/* Wordmark */}
      <text
        x="57" y="20"
        fontFamily="'Playfair Display', serif" fontSize="14" fontWeight="600"
        fill="url(#lx-g2)" letterSpacing="2"
      >NRS</text>
      {/* Thin underline */}
      <line x1="57" y1="24" x2="132" y2="24" stroke="url(#lx-g2)" strokeWidth="0.4" strokeOpacity="0.3"/>
      {/* Subtitle */}
      <text
        x="57" y="34"
        fontFamily="Lato, sans-serif" fontSize="7" fontWeight="300"
        fill="#b49b5a" fillOpacity="0.7" letterSpacing="3.5"
      >PORTFOLIO</text>
    </svg>
  )
}

function CyberpunkLogo() {
  return (
    <svg width="156" height="42" viewBox="0 0 156 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cy-g1" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff1464"/>
          <stop offset="1" stopColor="#00f0ff"/>
        </linearGradient>
        <linearGradient id="cy-g2" x1="50" y1="5" x2="156" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff1464"/>
          <stop offset="1" stopColor="#00f0ff"/>
        </linearGradient>
        <filter id="cy-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Top-left corner bracket (pink) */}
      <path d="M2,14 L2,2 L14,2" stroke="#ff1464" strokeWidth="1.8" strokeLinecap="square" fill="none"/>
      {/* Bottom-right corner bracket (cyan) */}
      <path d="M28,40 L40,40 L40,28" stroke="#00f0ff" strokeWidth="1.8" strokeLinecap="square" fill="none"/>
      {/* N glitch shadow (cyan offset) */}
      <text
        x="23" y="29"
        fontFamily="Rajdhani, sans-serif" fontSize="23" fontWeight="700"
        fill="#00f0ff" fillOpacity="0.35" textAnchor="middle"
      >N</text>
      {/* N main (pink + glow) */}
      <text
        x="21" y="29"
        fontFamily="Rajdhani, sans-serif" fontSize="23" fontWeight="700"
        fill="#ff1464" textAnchor="middle" filter="url(#cy-glow)"
      >N</text>
      {/* Wordmark */}
      <text
        x="52" y="27"
        fontFamily="Rajdhani, sans-serif" fontSize="22" fontWeight="600"
        fill="url(#cy-g2)"
      >NRS</text>
      {/* Accent underline */}
      <line x1="52" y1="31" x2="118" y2="31" stroke="url(#cy-g2)" strokeWidth="0.6" strokeOpacity="0.5"/>
      {/* Subtitle */}
      <text
        x="52" y="39"
        fontFamily="'Source Code Pro', monospace" fontSize="7" fontWeight="400"
        fill="#ff1464" fillOpacity="0.7" letterSpacing="2"
      >PORTFOLIO</text>
    </svg>
  )
}

function TerminalLogo() {
  return (
    <svg width="156" height="42" viewBox="0 0 156 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="tm-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Terminal window */}
      <rect x="1" y="4" width="40" height="34" rx="3"
        fill="rgba(0,255,80,0.06)" stroke="rgba(0,255,80,0.4)" strokeWidth="1"/>
      {/* Title bar */}
      <rect x="1" y="4" width="40" height="10" rx="3" fill="rgba(0,255,80,0.12)"/>
      <rect x="1" y="10" width="40" height="4" fill="rgba(0,255,80,0.12)"/>
      {/* Traffic dots */}
      <circle cx="8"  cy="9" r="1.8" fill="#00ff50" fillOpacity="0.75"/>
      <circle cx="14" cy="9" r="1.8" fill="#00ff50" fillOpacity="0.35"/>
      <circle cx="20" cy="9" r="1.8" fill="#00ff50" fillOpacity="0.2"/>
      {/* $ prompt */}
      <text x="5" y="29" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fontWeight="400"
        fill="rgba(0,255,80,0.45)">$</text>
      {/* NRS text */}
      <text x="14" y="29" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fontWeight="400"
        fill="#00ff50" filter="url(#tm-glow)">NRS</text>
      {/* Block cursor */}
      <rect x="36" y="20" width="4" height="10" fill="#00ff50" fillOpacity="0.85"/>
      {/* Wordmark $ nithin */}
      <text x="52" y="21" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fontWeight="400"
        fill="rgba(0,255,80,0.45)">$_</text>
      <text x="68" y="21" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fontWeight="400"
        fill="#00ff50" filter="url(#tm-glow)">nithin</text>
      {/* Path subtitle */}
      <text x="52" y="34" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fontWeight="300"
        fill="rgba(0,255,80,0.4)" letterSpacing="0.5">~/portfolio</text>
    </svg>
  )
}

function MonochromeLogo() {
  return (
    <svg width="156" height="42" viewBox="0 0 156 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle */}
      <circle cx="21" cy="21" r="18" fill="none" stroke="white" strokeWidth="1"/>
      {/* Inner ring */}
      <circle cx="21" cy="21" r="13" fill="none" stroke="white" strokeWidth="0.3" strokeOpacity="0.25"/>
      {/* N */}
      <text
        x="21" y="28"
        fontFamily="'Libre Baskerville', serif" fontSize="18" fontWeight="700"
        fill="white" textAnchor="middle"
      >N</text>
      {/* Vertical separator */}
      <line x1="48" y1="9" x2="48" y2="33" stroke="white" strokeWidth="0.5" strokeOpacity="0.22"/>
      {/* Wordmark */}
      <text
        x="57" y="21"
        fontFamily="'Libre Baskerville', serif" fontSize="14" fontWeight="700"
        fill="white" letterSpacing="2"
      >NRS</text>
      {/* Subtitle */}
      <text
        x="57" y="33"
        fontFamily="Nunito, sans-serif" fontSize="7" fontWeight="300"
        fill="white" fillOpacity="0.4" letterSpacing="3.5"
      >PORTFOLIO</text>
    </svg>
  )
}

export function Logo() {
  const { theme } = useTheme()

  switch (theme.id) {
    case 'minimal-luxury': return <LuxuryLogo />
    case 'cyberpunk':      return <CyberpunkLogo />
    case 'terminal':       return <TerminalLogo />
    case 'monochrome':     return <MonochromeLogo />
    default:               return <NeoDarkLogo />
  }
}
