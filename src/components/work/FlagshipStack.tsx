import { motion, useInView, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useRef } from 'react'
import { REC } from '../../hooks/useRecorder'
import { flagships, type Flagship } from '../../data/projects'
import { Counter } from '../ui/Counter'
import { MetricValue } from '../ui/MetricValue'
import { VISUALS } from './visuals'

function Card({ p, i, total, progress }: { p: Flagship; i: number; total: number; progress: MotionValue<number> }) {
  const wrap = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const on = useInView(wrap, { amount: 0.35 }) || REC
  // Older cards shrink and dim as later ones slide over them.
  const target = 1 - (total - 1 - i) * 0.035
  const scale = useTransform(progress, [i / total, 1], [1, reduced ? 1 : target])
  const dim = useTransform(progress, [i / total, (i + 1) / total], [0, i === total - 1 ? 0 : 0.45])
  // Inner parallax from the shared stack progress: the visual moves against the card while it slides in.
  const vy = useTransform(progress, [Math.max(0, (i - 1) / total), i / total], reduced || i === 0 ? [0, 0] : [70, 0])
  const Vis = VISUALS[p.visual]

  return (
    <div ref={wrap} className="fs-slot" style={{ paddingTop: `calc(96 * var(--u) + ${i} * 14 * var(--u))` }}>
      <motion.article className="fs-card" style={{ scale }} aria-labelledby={`fs-${p.id}`}>
        <motion.div className="fs-dim" style={{ opacity: dim }} aria-hidden />
        <div className="fs-info">
          <div className="fs-top">
            <span className="fs-index wide">({String(i + 1).padStart(2, '0')})</span>
            <span className="fs-kicker">{p.kicker}</span>
            <span className="fs-year">{p.year}</span>
          </div>
          <h3 id={`fs-${p.id}`} className="fs-title display">{p.title}</h3>
          <p className="fs-summary">{p.summary}</p>
          <dl className="fs-metrics">
            {p.metrics.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>
                  <MetricValue m={m} onView />
                </dd>
              </div>
            ))}
          </dl>
          <ul className="fs-stack" aria-label="Tech stack">
            {p.stack.map((s) => <li key={s}>{s}</li>)}
          </ul>
          <div className="fs-cta">
            {p.link ? (
              <a className="btn btn-light" href={p.link.href} target="_blank" rel="noreferrer">
                {p.link.label} <span aria-hidden>↗</span>
              </a>
            ) : (
              <span className="fs-tag"><span className="dot" aria-hidden /> {p.tag}</span>
            )}
          </div>
        </div>
        <motion.div className="fs-visual" style={{ y: vy }} aria-hidden>
          <Vis on={on} />
        </motion.div>
      </motion.article>
    </div>
  )
}

export function FlagshipStack() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  return (
    <section id="work" className="fs" aria-labelledby="work-h">
      <header className="sec-head">
        <p className="sec-label"><span className="dot" aria-hidden /> (SELECTED WORK)</p>
        <h2 id="work-h" className="sec-title display">Flagship<br />builds</h2>
        <p className="sec-count wide">
          <Counter to={flagships.length} onView /> <span className="text-grey">/ PROJECTS</span>
        </p>
      </header>
      <div ref={ref} className="fs-list">
        {flagships.map((p, i) => (
          <Card key={p.id} p={p} i={i} total={flagships.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}
