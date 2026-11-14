import { Experience } from './components/Experience'
import { Hero } from './components/hero/Hero'
import { Bar } from './components/layout/Bar'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { Statement } from './components/Statement'
import { FlagshipStack } from './components/work/FlagshipStack'
import { profile } from './data/profile'

export default function App() {
  return (
    <SmoothScroll>
      <Hero />
      <main>
        <Bar />
        <Statement />
        <Experience />
        <FlagshipStack />
        {/* Phase 4: bento grid, live strip, impact panel, education, archive, contact. */}
      </main>
      <footer id="contact" className="footer-stub">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </footer>
    </SmoothScroll>
  )
}
