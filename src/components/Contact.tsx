import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { profile } from '../data/profile'
import { Arrow, Button } from './ui/Button'

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const x1 = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-12%', '0%'])
  const x2 = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['12%', '0%'])
  return (
    <footer id="contact" ref={ref} className="contact">
      <p className="sec-label contact-label"><span className="dot" aria-hidden /> (CONTACT)</p>
      <h2 className="contact-title display">
        <motion.span style={{ x: x1 }}>LET’S</motion.span>
        <motion.span style={{ x: x2 }}>BUILD</motion.span>
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
