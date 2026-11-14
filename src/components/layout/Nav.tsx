import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

/** White segmented pill; the black indicator slides to the hovered link. */
export function Nav({ active = 'Home' }: { active?: string }) {
  const [hover, setHover] = useState<string | null>(null)
  const reduced = useReducedMotion()
  const current = hover ?? active

  return (
    <motion.nav
      aria-label="Primary"
      className="nav"
      initial={reduced ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onMouseLeave={() => setHover(null)}
    >
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className={`nav-link ${current === l.label ? 'is-on' : ''}`}
          aria-current={active === l.label ? 'page' : undefined}
          onMouseEnter={() => setHover(l.label)}
          onFocus={() => setHover(l.label)}
          onBlur={() => setHover(null)}
        >
          {current === l.label && (
            <motion.span
              layoutId="nav-pill"
              className="nav-pill"
              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
            />
          )}
          <span className="relative">{l.label}</span>
        </a>
      ))}
    </motion.nav>
  )
}
