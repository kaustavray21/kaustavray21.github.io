import { Reveal } from '../ui/Reveal'

/** Dark glass plate on the chest: monogram, wide wordmark, two-line menu icon. */
export function BrandPlate() {
  return (
    <Reveal i={9} className="brand-plate">
      <svg viewBox="0 0 34 30" className="brand-mark" aria-hidden>
        <path d="M2 28 L15 2 L15 28 Z" fill="currentColor" />
        <path d="M19 28 L19 9 L32 28 Z" fill="currentColor" opacity=".55" />
      </svg>
      <span className="brand-word wide">KAUSTAV.AI</span>
      <span className="brand-menu" aria-hidden>
        <i />
        <i />
      </span>
    </Reveal>
  )
}

export function StackWordmarks() {
  return (
    <Reveal i={10} className="hero-logos wide" aria-label="Core stack">
      <span>Python</span>
      <span aria-hidden>·</span>
      <span>LangGraph</span>
      <span aria-hidden>·</span>
      <span>Django</span>
      <span aria-hidden>·</span>
      <span>React</span>
    </Reveal>
  )
}
