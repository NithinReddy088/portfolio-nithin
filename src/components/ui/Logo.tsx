export function Logo() {
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
