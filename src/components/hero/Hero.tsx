import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../../data/profile'
import { Nav } from '../layout/Nav'
import { Arrow, Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { BrandPlate, StackWordmarks } from './BrandPlate'
import { HeroPhoto } from './HeroPhoto'
import { LatestBuild } from './LatestBuild'
import { StatsFrame } from './StatsFrame'

function TitleLine({ text, i, children }: { text: string; i: number; children?: React.ReactNode }) {
  const reduced = useReducedMotion()
  return (
    <span className="title-mask">
      <motion.span
        className="block"
        initial={reduced ? false : { y: '108%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.2 + i * 0.11, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
        {children}
      </motion.span>
    </span>
  )
}

export function Hero() {
  return (
    <header id="top" className="hero">
      <HeroPhoto>
        <BrandPlate />
        <StackWordmarks />
      </HeroPhoto>

      <Nav />

      <Reveal i={0} className="hero-meta">
        <span>Open to AI roles</span>
        <span className="text-grey-ink">/</span>
        <span>{profile.location}</span>
      </Reveal>
      <Reveal i={1} className="hero-contact">
        <Button href={`mailto:${profile.email}`} aria-label="Email Kaustav">
          <span className="hide-sm">Hire Me</span> <Arrow />
        </Button>
      </Reveal>

      <div className="hero-left">
        <h1 className="hero-title display">
          <span className="sr-only">{profile.name}, </span>
          <TitleLine text="KAUSTAV" i={0} />
          <TitleLine text="RAY" i={1}>
            <sup className="hero-year">(’26)</sup>
          </TitleLine>
          <span className="sr-only">, {profile.role}</span>
        </h1>

        <Reveal i={2} className="hero-about">
          <p className="about-label">
            <span className="dot" aria-hidden /> (ABOUT)
          </p>
          <p>
            AI engineer building LLM agents, RAG systems
            <br className="hide-sm" /> and automation pipelines that real teams use.
          </p>
        </Reveal>
        <Reveal i={3}>
          <Button href={profile.resume} target="_blank" rel="noreferrer">
            Download CV <Arrow />
          </Button>
        </Reveal>
      </div>

      <Reveal i={4} className="hero-certs">
        <span className="check" aria-hidden>
          ✓
        </span>
        CKAD · AWS Certified
      </Reveal>
      <Reveal i={5} className="hero-available">
        <span>Available</span>
        <span>
          <span className="dot" aria-hidden /> for AI roles
        </span>
      </Reveal>

      <StatsFrame />
      <LatestBuild />
    </header>
  )
}
