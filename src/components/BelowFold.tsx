import { Archive } from './Archive'
import { Education } from './Education'
import { Experience } from './Experience'
import { BentoGrid } from './grid/BentoGrid'
import { ImpactPanel } from './ImpactPanel'
import { LiveStrip } from './LiveStrip'
import { FlagshipStack } from './work/FlagshipStack'

export { Contact } from './Contact'

const SECTIONS = [Experience, FlagshipStack, BentoGrid, LiveStrip, ImpactPanel, Education, Archive]

/** Everything below the statement, split into its own chunk so first paint is lighter. */
export function Sections() {
  return (
    <>
      {SECTIONS.map((S, i) => (
        <S key={i} />
      ))}
    </>
  )
}
