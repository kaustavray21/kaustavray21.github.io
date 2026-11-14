import { AnimatePresence, LayoutGroup, motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useState } from 'react'
import { featured, type Category, type Featured } from '../../data/more'

const FILTERS: ('All' | Category)[] = ['All', 'AI', 'Automation', 'Full-stack', 'Hackathon', 'Mobile']

function Tile({ f, i }: { f: Featured; i: number }) {
  const reduced = useReducedMotion()
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const move = (e: React.PointerEvent<HTMLElement>) => {
    if (reduced || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 7)
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 7)
  }
  const leave = () => { rx.set(0); ry.set(0) }
  const Inner = (
    <>
      <div className="bt-top">
        <span className="bt-cat">{f.category}</span>
        <span className="bt-num wide">{String(i + 1).padStart(2, '0')}</span>
      </div>
      <h3 className="bt-title">{f.title}</h3>
      <p className="bt-blurb">{f.blurb}</p>
      <ul className="bt-stack">{f.stack.map((s) => <li key={s}>{s}</li>)}</ul>
      <div className="bt-foot">
        {f.link ? <span className="bt-link">GitHub <span className="bt-arrow" aria-hidden>↗</span></span>
          : <span className="bt-tag"><span className="dot" aria-hidden /> {f.tag}</span>}
      </div>
    </>
  )
  return (
    <motion.li
      layout={!reduced}
      initial={reduced ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`bt ${f.size === 'wide' ? 'bt-wide' : ''}`}
    >
      <motion.div className="bt-card" style={{ rotateX: rx, rotateY: ry }} onPointerMove={move} onPointerLeave={leave}>
        {f.link ? (
          <a className="bt-inner" href={f.link} target="_blank" rel="noreferrer">{Inner}</a>
        ) : (
          <div className="bt-inner">{Inner}</div>
        )}
      </motion.div>
    </motion.li>
  )
}

export function BentoGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const list = featured.filter((f) => filter === 'All' || f.category === filter)
  return (
    <section className="bento" aria-labelledby="more-h">
      <header className="sec-head">
        <p className="sec-label"><span className="dot" aria-hidden /> (MORE WORK)</p>
        <h2 id="more-h" className="sec-title display">Featured<br />projects</h2>
        <LayoutGroup id="filters">
          <div className="bt-filters" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button key={f} role="tab" aria-selected={filter === f} className={`bt-filter ${filter === f ? 'is-on' : ''}`} onClick={() => setFilter(f)}>
                {filter === f && <motion.span layoutId="bt-pill" className="bt-pill" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>
      </header>
      <motion.ul layout className="bt-grid">
        <AnimatePresence mode="popLayout">
          {list.map((f) => <Tile key={f.title} f={f} i={featured.indexOf(f)} />)}
        </AnimatePresence>
      </motion.ul>
    </section>
  )
}
