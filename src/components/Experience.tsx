import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import { MetricValue } from './ui/MetricValue'

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.6', 'end 0.6'] })
  const line = useTransform(scrollYProgress, [0, 1], [reduced ? 1 : 0, 1])

  return (
    <section id="experience" ref={ref} className="xp" aria-labelledby="xp-h">
      <div className="xp-side">
        <p className="sec-label"><span className="dot" aria-hidden /> (EXPERIENCE)</p>
        <h2 id="xp-h" className="xp-role display">{experience.role}</h2>
        <p className="xp-co wide">{experience.company}</p>
        <p className="xp-meta">{experience.period} · {experience.place}</p>
        <p className="xp-certs">
          {profile.certs.map((c) => <span key={c}>{c}</span>)} <span className="text-grey">certified</span>
        </p>
      </div>

      <div className="xp-main">
        <div className="xp-rail" aria-hidden>
          <motion.i style={{ scaleY: line }} />
        </div>
        {experience.streams.map((s, i) => (
          <motion.article
            key={s.title}
            className="xp-item"
            initial={reduced ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="xp-node" aria-hidden />
            <p className="xp-kind">
              <span className="wide">{String(i + 1).padStart(2, '0')}</span> {s.kind}
            </p>
            <h3 className="xp-title">{s.title}</h3>
            <ul className="xp-points">
              {s.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            {s.metrics.length > 0 && (
              <dl className="xp-metrics">
                {s.metrics.map((m) => (
                  <div key={m.label}>
                    <dd><MetricValue m={m} onView /></dd>
                    <dt>{m.label}</dt>
                  </div>
                ))}
              </dl>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
