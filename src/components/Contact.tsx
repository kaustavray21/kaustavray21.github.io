import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/profile'
import { Arrow, Button } from './ui/Button'

export function Contact() {
  const reduced = useReducedMotion()
  const slide = (from: string) => ({
    initial: reduced ? false : ({ x: from, opacity: 0 } as const),
    whileInView: { x: '0%', opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
  })
  return (
    <footer id="contact" className="contact">
      <p className="sec-label contact-label"><span className="dot" aria-hidden /> (CONTACT)</p>
      <h2 className="contact-title display">
        <motion.span {...slide('-12%')}>LET’S</motion.span>
        <motion.span {...slide('12%')}>BUILD</motion.span>
      </h2>
      <div className="contact-row">
        <p className="contact-copy">Open to AI engineering roles: LLM agents, RAG and automation. Based in {profile.location}.</p>
        <div className="contact-actions">
          <Button href={`mailto:${profile.email}`}>{profile.email} <Arrow /></Button>
          <Button variant="light" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></Button>
          <Button variant="light" href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></Button>
          <Button variant="light" href={profile.resume} target="_blank" rel="noreferrer">CV <Arrow /></Button>
        </div>
      </div>
      <div className="contact-foot wide">
        <span>© 2026 {profile.name}</span>
        <span className="text-grey-ink">React · Motion · Lenis</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
