import { animate, motion, useMotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useEffect, type ReactNode } from 'react'
import { profile } from '../../data/profile'
import { REC } from '../../hooks/useRecorder'

const base = import.meta.env.BASE_URL
// The un-blur is costly on low-end phones; keep it for desktop only.
const desktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 761px)').matches

/** Sketch portrait: multiply-blended into the paper, edges masked, drifts at 0.12× scroll. */
export function HeroPhoto({ children }: { children?: ReactNode }) {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const scrollDrift = useTransform(scrollY, (v) => (reduced ? 0 : v * 0.12))
  // Recorder: no scrolling, so drift slowly on a timer instead.
  const timeDrift = useMotionValue(0)
  useEffect(() => {
    if (!REC || reduced) return
    const c = animate(timeDrift, 70, { duration: 14, ease: 'linear' })
    return () => c.stop()
  }, [reduced, timeDrift])

  return (
    <motion.div className="hero-photo" style={{ y: REC ? timeDrift : scrollDrift }}>
      <motion.img
        src={`${base}me.webp`}
        srcSet={`${base}me-800.webp 800w, ${base}me.webp 1217w, ${base}me@2x.webp 2282w`}
        sizes="(max-width: 760px) 100vw, 53vw"
        alt={`Pencil-sketch portrait of ${profile.short}`}
        width={1217}
        height={1600}
        fetchPriority="high"
        initial={reduced ? false : desktop ? { opacity: 0, y: 40, filter: 'blur(14px)' } : { opacity: 0, y: 40 }}
        animate={desktop ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </motion.div>
  )
}
