import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { archive } from '../data/more'

const LANG: Record<string, string> = { Java: '#b07219', Kotlin: '#a97bff', TypeScript: '#3178c6', Python: '#3572a5', HTML: '#e34c26', Jupyter: '#da5b0b' }

export function Archive() {
  const [open, setOpen] = useState(false)
  const rows = open ? archive : archive.slice(0, 5)
  return (
    <section className="arch" aria-labelledby="arch-h">
      <div className="arch-head">
        <p className="sec-label"><span className="dot" aria-hidden /> (ARCHIVE)</p>
        <h2 id="arch-h" className="arch-title">Earlier work <span className="text-grey">— {archive.length} repos</span></h2>
      </div>
      <ul className="arch-list">
        <AnimatePresence initial={false}>
          {rows.map((r) => (
            <motion.li key={r.repo} layout initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35 }}>
              <a href={`https://github.com/kaustavray21/${r.repo}`} target="_blank" rel="noreferrer">
                <span className="arch-name">{r.name}</span>
                <span className="arch-lang"><i style={{ background: LANG[r.lang] ?? '#888' }} /> {r.lang}</span>
                <span className="arch-year">{r.year}</span>
                <span className="arch-arrow" aria-hidden>↗</span>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <button className="arch-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {open ? 'Show less' : `Show all ${archive.length}`} <span aria-hidden>{open ? '−' : '+'}</span>
      </button>
    </section>
  )
}
