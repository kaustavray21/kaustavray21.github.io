import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef } from 'react'
import { REC, REC_TIMING } from './useRecorder'

type Opts = { duration?: number; delay?: number; decimals?: number; onView?: boolean }

const fmt = (v: number, d: number) => v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d })

/**
 * Counts 0 → target by writing straight to the DOM (no React re-render per frame).
 * Starts on mount, or when the element enters the viewport if onView.
 */
export function useCountUp<T extends HTMLElement>(target: number, opts: Opts = {}) {
  const { duration = 1.4, delay = 0, decimals = 0, onView = false } = opts
  const ref = useRef<T>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduced) return void (el.textContent = fmt(target, decimals))
    if (onView && !inView) return
    const d = REC && onView ? Math.max(delay, REC_TIMING.impact) : delay
    const c = animate(0, target, { duration: REC && onView ? 1.7 : duration, delay: d, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => (el.textContent = fmt(v, decimals)) })
    return () => c.stop()
  }, [target, duration, delay, decimals, onView, inView, reduced])

  return [ref, fmt(reduced ? target : 0, decimals)] as const
}
