import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { demos } from '../data/more'

const base = import.meta.env.BASE_URL

/** Sticky section: vertical scroll drives the horizontal track. */
export function LiveStrip() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const track = useRef<HTMLUListElement>(null)
  const [dist, setDist] = useState(0)
  useEffect(() => {
    const el = track.current
    if (!el) return
    // ResizeObserver reports after layout, so measuring never forces a synchronous reflow.
    const ro = new ResizeObserver(([e]) => setDist(Math.max(0, e.target.scrollWidth - document.documentElement.clientWidth)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  const x = useTransform(scrollYProgress, [0.08, 0.95], [0, reduced ? 0 : -dist])
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={ref} className="live" aria-labelledby="live-h">
      <div className="live-sticky">
        <header className="live-head">
          <p className="sec-label live-label"><span className="dot" aria-hidden /> (LIVE DEMOS)</p>
          <h2 id="live-h" className="sec-title display">Click &amp;<br />try them</h2>
          <div className="live-progress" aria-hidden><motion.i style={{ scaleX: bar }} /></div>
        </header>
        <motion.ul ref={track} className="live-track" style={{ x }}>
          {demos.map((d, i) => (
            <li key={d.repo} className="live-card">
              <a href={`https://kaustavray21.github.io/${d.repo}/`} target="_blank" rel="noreferrer">
                <div className="live-frame">
                  <div className="live-chrome" aria-hidden>
                    <i /><i /><i />
                    <span>kaustavray21.github.io/{d.repo}</span>
                  </div>
                  <div className="live-shot">
                    {d.shot ? (
                      <img src={`${base}shots/${d.shot}.webp`} alt={`Screenshot of ${d.title}`} loading="lazy" width={720} height={450} />
                    ) : (
                      <div className="live-poster" aria-label={d.title}>
                        <span className="live-hole" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="live-meta">
                  <span className="wide live-i">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{d.title}</h3>
                    <p>{d.note} · <span className="text-grey-ink">{d.stack}</span></p>
                  </div>
                  <span className="live-visit">Visit <span aria-hidden>↗</span></span>
                </div>
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
