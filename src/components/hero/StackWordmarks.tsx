import { Reveal } from '../ui/Reveal'

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
