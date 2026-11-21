import { siCelery, siDjango, siFastapi, siGooglegemini, siLangchain, siPython } from 'simple-icons'
import { Counter } from '../ui/Counter'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'

const GLYPHS = [siPython, siDjango, siFastapi, siCelery, siLangchain, siGooglegemini]

export function StatsFrame() {
  return (
    <Reveal i={6} className="stats-frame">
      <div className="stat-card stat-dark">
        <div>
          <Counter to={100} suffix="%" className="stat-num" />
          <p className="stat-label">Sales calls audited by AI</p>
          <p className="stat-sub">up from 5% manual sampling</p>
        </div>
        <ul className="stat-glyphs" aria-label="Pipeline stack">
          {GLYPHS.map((g) => (
            <li key={g.slug} title={g.title}>
              <Icon icon={g} size="100%" />
            </li>
          ))}
        </ul>
        <a href="#work" className="stat-bar">
          See the work <span aria-hidden>↗</span>
        </a>
      </div>

      <div className="stat-card stat-photo">
        <div className="stat-photo-top">
          <span>Live · RAG Tutor</span>
          <span>01/07</span>
        </div>
        <div className="stat-photo-bottom">
          <Counter to={1985} suffix="+" className="stat-num" />
          <p className="stat-label">Learners served across 7,400+ Q&amp;A</p>
        </div>
      </div>
    </Reveal>
  )
}
