import { Bar } from './components/layout/Bar'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { Hero } from './components/hero/Hero'
import { Statement } from './components/Statement'
import { profile } from './data/profile'

export default function App() {
  return (
    <SmoothScroll>
      <Hero />
      <main>
        <Bar />
        <Statement />
        {/* Phase 3: Experience + Flagship work. Phase 4: grid, live strip, impact, archive. */}
        <section id="work" aria-hidden />
        <section id="experience" aria-hidden />
      </main>
      <footer id="contact" className="footer-stub">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </footer>
    </SmoothScroll>
  )
}
