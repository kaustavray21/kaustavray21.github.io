import { Archive } from './components/Archive'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { BentoGrid } from './components/grid/BentoGrid'
import { Hero } from './components/hero/Hero'
import { ImpactPanel } from './components/ImpactPanel'
import { Bar } from './components/layout/Bar'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { LiveStrip } from './components/LiveStrip'
import { Statement } from './components/Statement'
import { FlagshipStack } from './components/work/FlagshipStack'

export default function App() {
  return (
    <SmoothScroll>
      <Hero />
      <main>
        <Bar />
        <Statement />
        <Experience />
        <FlagshipStack />
        <BentoGrid />
        <LiveStrip />
        <ImpactPanel />
        <Education />
        <Archive />
      </main>
      <Contact />
    </SmoothScroll>
  )
}
