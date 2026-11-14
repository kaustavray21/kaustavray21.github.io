import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import type { ReactNode } from 'react'
import { profile } from '../../data/profile'

const base = import.meta.env.BASE_URL

/** Sketch portrait: multiply-blended into the paper, edges masked, drifts at 0.12× scroll. */
export function HeroPhoto({ children }: { children?: ReactNode }) {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const drift = useTransform(scrollY, (v) => (reduced ? 0 : v * 0.12))

  return (
    <motion.div className="hero-photo" style={{ y: drift }}>
      <motion.img
        src={`${base}me.webp`}
        srcSet={`${base}me.webp 1x, ${base}me@2x.webp 2x`}
        alt={`Pencil-sketch portrait of ${profile.short}`}
        width={1217}
        height={1600}
        fetchPriority="high"
        initial={reduced ? false : { opacity: 0, y: 40, filter: 'blur(14px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </motion.div>
  )
}
