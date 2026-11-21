import { useReducedMotion } from 'motion/react'
import { useTypewriter } from '../../hooks/useTypewriter'

/** Types a line out under the title with a blinking cursor; screen readers get the full text at once. */
export function Typewriter({ text, startDelay = 1100 }: { text: string; startDelay?: number }) {
  const reduced = useReducedMotion()
  const { displayed, done } = useTypewriter(text, 38, startDelay, !reduced)
  return (
    <p className="hero-type">
      <span className="sr-only">{text.replace('\n', ' ')}</span>
      {/* Invisible full text reserves the final size, so typing never shifts the layout. */}
      <span className="hero-type-ghost" aria-hidden>{text}</span>
      <span className="hero-type-live" aria-hidden>
        {displayed}
        {!done && <span className="type-cursor animate-blink" />}
      </span>
    </p>
  )
}
