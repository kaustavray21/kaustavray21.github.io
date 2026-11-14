import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

/** Hero load-in: rise 14px + fade, staggered 55 ms by index. */
export function Reveal({
  i = 0,
  children,
  className,
  style,
}: {
  i?: number
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduced ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.45 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
