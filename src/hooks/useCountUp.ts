import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

type Opts = { duration?: number; delay?: number; decimals?: number; onView?: boolean }

/** Counts 0 → target. Starts on mount, or when the element enters the viewport if onView. */
export function useCountUp<T extends Element>(target: number, opts: Opts = {}) {
  const { duration = 1.4, delay = 0, decimals = 0, onView = false } = opts
  const ref = useRef<T>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduced = useReducedMotion()
  const [value, setValue] = useState(reduced ? target : 0)

  useEffect(() => {
    if (reduced) return setValue(target)
    if (onView && !inView) return
    const c = animate(0, target, { duration, delay, ease: [0.16, 1, 0.3, 1], onUpdate: setValue })
    return () => c.stop()
  }, [target, duration, delay, onView, inView, reduced])

  const text = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
  return [ref, text] as const
}
