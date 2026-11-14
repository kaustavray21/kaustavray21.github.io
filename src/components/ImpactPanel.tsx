import { motion, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { REC, REC_TIMING } from '../hooks/useRecorder'
import { siDjango, siFastapi, siGooglegemini, siLangchain, siNeo4j, siPython, siReact, siRedis } from 'simple-icons'
import { Counter } from './ui/Counter'
import { Icon } from './ui/Icon'

const base = import.meta.env.BASE_URL
const TECH = [siPython, siDjango, siFastapi, siLangchain, siReact, siNeo4j, siRedis, siGooglegemini]

function Laurel() {
  const leaves = Array.from({ length: 7 }, (_, i) => i)
  return (
    <svg viewBox="0 0 200 120" className="laurel" aria-hidden>
      {[-1, 1].map((side) => (
        <g key={side} transform={`translate(100 0) scale(${side} 1)`}>
          <path d="M-18 108 C -70 96, -86 50, -66 14" fill="none" stroke="currentColor" strokeOpacity=".7" />
          {leaves.map((i) => {
            const t = i / 6
            const x = -18 - 62 * Math.sin(t * 1.3) - 2
            const y = 106 - 92 * t
            return <ellipse key={i} cx={x} cy={y} rx="9" ry="4" fill="currentColor" opacity=".85" transform={`rotate(${-50 + t * 70} ${x} ${y})`} />
          })}
        </g>
      ))}
      <text x="100" y="52" textAnchor="middle" fontSize="11" letterSpacing=".14em" fill="currentColor" fontFamily="Archivo Variable" style={{ fontVariationSettings: '"wdth" 125' }}>CKAD · AWS</text>
      <text x="100" y="70" textAnchor="middle" fontSize="8" letterSpacing=".2em" fill="currentColor" opacity=".75">CERTIFIED</text>
      <text x="100" y="86" textAnchor="middle" fontSize="8" letterSpacing=".2em" fill="currentColor" opacity=".55">2026</text>
    </svg>
  )
}

/** The spec's "Trusted by" panel, re-cast as impact proof. */
export function ImpactPanel() {
  const ref = useRef<HTMLDivElement>(null)
  const seen = useInView(ref, { once: true, amount: 0.35 })
  const reduced = useReducedMotion()
  const [recStage, setRecStage] = useState(0) // 1 = counters/avatars, 2 = awards lift
  useEffect(() => {
    if (!REC) return
    const a = setTimeout(() => setRecStage(1), REC_TIMING.impact * 1000)
    const b = setTimeout(() => setRecStage(2), REC_TIMING.awardsLift * 1000)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [])
  const inView = REC ? recStage >= 1 : seen
  return (
    <section className="impact" aria-labelledby="impact-h">
      <motion.div
        ref={ref}
        className="impact-panel"
        initial={reduced ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="impact-left">
          <h2 id="impact-h" className="impact-title">
            Shipped to<br />real users<br />and real<br />teams
          </h2>
          <span className="glass glass-1" aria-hidden>✳</span>
          <span className="glass glass-2" aria-hidden><i /><i /><i /><i /></span>
          <p className="impact-copy">
            Not demos: tools that audit every call, tutor thousands of learners and run on schedules with retries, monitoring and alerts.
          </p>
        </div>
        <div className="impact-cards">
          <article className="ic ic-light">
            <ul className="ic-avatars" aria-label="Core stack">
              {TECH.map((t, i) => (
                <motion.li key={t.slug} title={t.title}
                  initial={reduced ? false : { scale: 0.4, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.15 + i * 0.07, type: 'spring', stiffness: 320, damping: 18 }}>
                  <Icon icon={t} size="46%" />
                </motion.li>
              ))}
            </ul>
            <div>
              <Counter to={1985} suffix="+" onView className="ic-num" />
              <p className="ic-label">Learners on shipped AI</p>
            </div>
          </article>
          <article className={`ic ic-dark ${recStage >= 2 ? 'is-lifted' : ''}`}>
            <div>
              <Counter to={2} onView className="ic-num" />
              <p className="ic-label">Industry certifications</p>
            </div>
            <Laurel />
            <p className="ic-note">Kubernetes application developer and AWS cloud, applied to running AI in production.</p>
          </article>
          <article className="ic ic-portrait" aria-hidden>
            <img src={`${base}me-800.webp`} alt="" loading="lazy" />
          </article>
        </div>
      </motion.div>
    </section>
  )
}
