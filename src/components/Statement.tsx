import { animate, motion, useMotionValue, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useEffect, useRef } from 'react'
import { REC, REC_TIMING } from '../hooks/useRecorder'

const LINES = [
  'I find slow, manual processes',
  'and replace them with working AI.',
  'Agents that reason, pipelines that',
  'scale, and tools that real teams',
  'rely on every single day.',
]
const WORDS = LINES.flatMap((l, li) => l.split(' ').map((w, wi) => ({ w, br: wi === 0 && li > 0 })))
const N = WORDS.length
const EDGE = 3 // soft edge, in words

function Word({ w, i, p }: { w: string; i: number; p: MotionValue<number> }) {
  const start = i / (N + EDGE)
  const end = (i + EDGE) / (N + EDGE)
  const color = useTransform(p, [start, end], ['#6f6f6f', '#f4f4f4'])
  return <motion.span style={{ color }}>{w} </motion.span>
}

/** Black manifesto: every word fills grey → white in reading order as the section scrolls by. */
export function Statement() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.85'] })
  const timed = useMotionValue(0)
  useEffect(() => {
    if (!REC) return
    const c = animate(timed, 1, { ...REC_TIMING.statement, ease: 'linear' })
    return () => c.stop()
  }, [timed])
  const progress = REC ? timed : scrollYProgress

  return (
    <section id="statement" ref={ref} className="statement" aria-label="About me">
      <p className="statement-text">
        {WORDS.map((x, i) => (
          <span key={i}>
            {x.br && <br className="hide-sm" />}
            {reduced ? <span className="text-text">{x.w} </span> : <Word w={x.w} i={i} p={progress} />}
          </span>
        ))}
      </p>
      <p className="statement-sub">
        Production AI, from first prototype
        <br /> to production fixes. <span className="text-grey">Built for real teams.</span>
      </p>
    </section>
  )
}
