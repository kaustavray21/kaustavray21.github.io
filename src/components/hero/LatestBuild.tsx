import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { Reveal } from '../ui/Reveal'

const NODES = [
  { x: 34, y: 28, label: "PM" },
  { x: 120, y: 28, label: "ARCH" },
  { x: 120, y: 92, label: "DSA" },
  { x: 34, y: 92, label: "CRITIC" },
]

/** "Latest Build" card: live SVG of ArchitechAI's 4-agent LangGraph loop. */
export function LatestBuild() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLAnchorElement>(null)
  const loop = useInView(ref) && !reduced
  return (
    <Reveal i={8} className="latest">
      <div className="latest-head">
        <span>Latest Build</span>
        <span className="latest-title wide">ArchitechAI</span>
        <span className="text-grey-ink">[2026]</span>
      </div>
      <a
        className="latest-card"
        href="https://github.com/kaustavray21/ArchitechAI"
        target="_blank"
        rel="noreferrer"
        ref={ref}
      >
        <span className="sr-only">ArchitechAI on GitHub</span>
        <svg className="latest-art" viewBox="0 0 154 160" aria-hidden>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M10 0H0V10" fill="none" stroke="#fff" strokeOpacity=".06" />
            </pattern>
          </defs>
          <rect width="154" height="160" fill="url(#grid)" />
          <path
            className={loop ? "latest-flow" : undefined}
            d="M34 28 H120 V92 H34 Z"
            fill="none"
            stroke="#f4f4f4"
            strokeOpacity=".7"
            strokeDasharray="4 5"
          />
          <path d="M34 92 L120 28" stroke="#f4f4f4" strokeOpacity=".2" strokeDasharray="2 4" />
          {NODES.map((n, i) => (
            <g key={n.label}>
              <motion.circle
                cx={n.x}
                cy={n.y}
                r="13"
                fill="#000"
                stroke="#f4f4f4"
                initial={false}
                animate={loop ? { strokeOpacity: [0.35, 1, 0.35] } : { strokeOpacity: 1 }}
                transition={loop ? { duration: 2.4, repeat: Infinity, delay: i * 0.6 } : { duration: 0.3 }}
              />
              <text x={n.x} y={n.y + 26} textAnchor="middle" fill="#f4f4f4" fontSize="7" letterSpacing=".08em">
                {n.label}
              </text>
              <text x={n.x} y={n.y + 3} textAnchor="middle" fill="#f4f4f4" fontSize="8">
                {i + 1}
              </text>
            </g>
          ))}
        </svg>
        <span className="latest-tags" aria-hidden>LangGraph · SSE · React Flow</span>
        <span className="latest-btn" aria-hidden>
          ↗
        </span>
        <span className="latest-progress" aria-hidden>
          <motion.i
            initial={reduced ? false : { scaleX: 0 }}
            animate={{ scaleX: 0.62 }}
            transition={{ duration: 1.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </span>
      </a>
    </Reveal>
  )
}
