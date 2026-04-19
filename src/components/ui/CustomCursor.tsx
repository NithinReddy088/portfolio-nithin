import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export function CustomCursor() {
  const { theme } = useTheme()
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX = useMotionValue(-100)
  const trailY = useMotionValue(-100)

  const springX = useSpring(trailX, { damping: 25, stiffness: 200 })
  const springY = useSpring(trailY, { damping: 25, stiffness: 200 })

  const isHovering = useRef(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6)
      cursorY.set(e.clientY - 6)
      trailX.set(e.clientX - 16)
      trailY.set(e.clientY - 16)
    }

    const enterLink = () => { isHovering.current = true }
    const leaveLink = () => { isHovering.current = false }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', enterLink)
      el.addEventListener('mouseleave', leaveLink)
    })

    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [cursorX, cursorY, trailX, trailY])

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: 'var(--accent)',
          }}
        />
      </motion.div>
      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: springX, y: springY }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: `1.5px solid var(--accent)`,
            opacity: 0.4,
          }}
        />
      </motion.div>
    </>
  )
}
