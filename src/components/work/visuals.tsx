import { motion, useReducedMotion } from 'motion/react'
import type { Visual } from '../../data/projects'

/* All visuals: 400×300 viewBox, monochrome, animate only while `on` (card in view). */
const W = '#f4f4f4'
const G = '#6f6f6f'
const ease = [0.22, 1, 0.36, 1] as const

type P = { on: boolean }

function useLoop(on: boolean) {
  const reduced = useReducedMotion()
  return !reduced && on
}

function Label({ x, y, children, anchor = 'middle', size = 9, fill = W }: { x: number; y: number; children: React.ReactNode; anchor?: 'start' | 'middle' | 'end'; size?: number; fill?: string }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fill={fill} fontSize={size} letterSpacing=".06em" fontFamily="Inter Tight Variable, sans-serif">
      {children}
    </text>
  )
}

/* 01 — PBX → Transcribe → Classify → Audit → Report, packets flowing; 5% vs 100% bars */
function QaPipeline({ on }: P) {
  const loop = useLoop(on)
  const stages = ['PBX', 'DRIVE', 'TRANSCRIBE', 'CLASSIFY', 'AUDIT', 'REPORT']
  const xs = stages.map((_, i) => 36 + i * 65.6)
  return (
    <svg viewBox="0 0 400 300" className="vis">
      <line x1={36} y1={110} x2={364} y2={110} stroke={G} strokeDasharray="3 5" />
      {[0, 1, 2].map((k) => (
        <motion.circle key={k} r={3.5} cy={110} fill={W}
          initial={{ cx: 36, opacity: 0 }}
          animate={loop ? { cx: [36, 364], opacity: [0, 1, 1, 0] } : { cx: 36, opacity: 0 }}
          transition={{ duration: 3, repeat: Infinity, delay: k, ease: 'linear' }} />
      ))}
      {stages.map((s, i) => (
        <g key={s}>
          <motion.rect x={xs[i] - 14} y={96} width={28} height={28} rx={7} fill="#000" stroke={W}
            initial={{ opacity: 0, y: 8 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.6, ease }} />
          <Label x={xs[i]} y={114} size={8}>{String(i + 1).padStart(2, '0')}</Label>
          <Label x={xs[i]} y={142} size={7} fill={G}>{s}</Label>
        </g>
      ))}
      <Label x={36} y={200} anchor="start" size={8} fill={G}>MANUAL SAMPLING</Label>
      <rect x={36} y={208} width={328} height={10} rx={5} fill="#1a1a1a" />
      <motion.rect x={36} y={208} height={10} rx={5} fill={G} initial={{ width: 0 }} animate={on ? { width: 16.4 } : {}} transition={{ duration: 1, delay: 0.4 }} />
      <Label x={364} y={200} anchor="end" size={8} fill={G}>5%</Label>
      <Label x={36} y={244} anchor="start" size={8}>AI PIPELINE</Label>
      <rect x={36} y={252} width={328} height={10} rx={5} fill="#1a1a1a" />
      <motion.rect x={36} y={252} height={10} rx={5} fill={W} initial={{ width: 0 }} animate={on ? { width: 328 } : {}} transition={{ duration: 1.6, delay: 0.6, ease }} />
      <Label x={364} y={244} anchor="end" size={8}>100%</Label>
    </svg>
  )
}

/* 02 — concept graph with prerequisite edges; query lights a retrieval path */
function KnowledgeGraph({ on }: P) {
  const loop = useLoop(on)
  const N = [
    [200, 150, 'QUERY'], [110, 80, ''], [290, 80, ''], [70, 170, ''], [330, 170, ''], [140, 240, ''],
    [260, 240, ''], [200, 50, ''], [40, 90, ''], [360, 90, ''], [200, 270, ''], [100, 140, ''], [300, 140, ''],
  ] as const
  const E = [[0, 1], [0, 2], [0, 5], [0, 6], [1, 7], [2, 7], [1, 3], [2, 4], [3, 8], [4, 9], [5, 10], [6, 10], [1, 11], [2, 12], [3, 11], [4, 12], [5, 3], [6, 4]]
  const hot = new Set([0, 1, 7, 2, 12])
  return (
    <svg viewBox="0 0 400 300" className="vis">
      {E.map(([a, b], i) => (
        <motion.line key={i} x1={N[a][0]} y1={N[a][1]} x2={N[b][0]} y2={N[b][1]}
          stroke={hot.has(a) && hot.has(b) ? W : G} strokeOpacity={hot.has(a) && hot.has(b) ? 0.9 : 0.4}
          initial={{ pathLength: 0 }} animate={on ? { pathLength: 1 } : {}} transition={{ duration: 0.9, delay: 0.2 + i * 0.04 }} />
      ))}
      {N.map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r={i === 0 ? 16 : hot.has(i) ? 8 : 5}
          fill={i === 0 ? W : '#000'} stroke={W} strokeOpacity={hot.has(i) ? 1 : 0.45}
          initial={{ scale: 0 }} animate={on ? { scale: 1 } : {}} transition={{ delay: 0.1 + i * 0.05, type: 'spring', stiffness: 260, damping: 18 }}
          style={{ transformOrigin: `${x}px ${y}px` }} />
      ))}
      {loop && [1, 2, 12].map((t, k) => (
        <motion.circle key={k} r={2.5} fill={W}
          animate={{ cx: [N[0][0], N[t][0]], cy: [N[0][1], N[t][1]], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: k * 0.5 }} />
      ))}
      <Label x={200} y={154} size={7} fill="#000">Q</Label>
      <Label x={20} y={22} anchor="start" size={8} fill={G}>FAISS ⨉ BM25 → RRF</Label>
      <Label x={380} y={22} anchor="end" size={8} fill={G}>NEO4J PREREQS</Label>
    </svg>
  )
}

/* 03 — PM → Architect → DSA → Critic loop, streaming tokens */
function AgentGraph({ on }: P) {
  const loop = useLoop(on)
  const A = [[110, 70, 'PM'], [290, 70, 'ARCHITECT'], [290, 200, 'DSA'], [110, 200, 'CRITIC']] as const
  return (
    <svg viewBox="0 0 400 300" className="vis">
      <defs>
        <pattern id="vgrid" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0H0V16" fill="none" stroke="#fff" strokeOpacity=".05" /></pattern>
      </defs>
      <rect width="400" height="300" fill="url(#vgrid)" />
      <motion.path d="M110 70 H290 V200 H110 Z" fill="none" stroke={W} strokeOpacity=".7" strokeDasharray="5 6"
        animate={loop ? { strokeDashoffset: [0, -44] } : {}} transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }} />
      <path d="M110 200 Q 40 135 110 70" fill="none" stroke={G} strokeDasharray="2 4" />
      <Label x={46} y={138} size={7} fill={G}>REVISE</Label>
      {A.map(([x, y, l], i) => (
        <g key={l}>
          <motion.rect x={x - 34} y={y - 18} width={68} height={36} rx={9} fill="#000" stroke={W}
            initial={{ opacity: 0, scale: 0.8 }} animate={on ? { opacity: 1, scale: 1, strokeOpacity: loop ? [0.35, 1, 0.35] : 1 } : {}}
            transition={{ delay: i * 0.12, duration: 0.5, strokeOpacity: { duration: 2.4, repeat: Infinity, delay: i * 0.6 } }}
            style={{ transformOrigin: `${x}px ${y}px` }} />
          <Label x={x} y={y + 3} size={8}>{l}</Label>
        </g>
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <motion.rect key={i} x={150 + i * 13} y={262} width={9} height={6} rx={2} fill={W}
          initial={{ opacity: 0.1 }} animate={loop ? { opacity: [0.1, 1, 0.1] } : {}} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.12 }} />
      ))}
      <Label x={200} y={250} size={7} fill={G}>SSE STREAM</Label>
    </svg>
  )
}

/* 04 — phone with an endlessly scrolling feed of drafted posts */
function PhoneFeed({ on }: P) {
  const loop = useLoop(on)
  const Post = ({ y }: { y: number }) => (
    <g transform={`translate(0 ${y})`}>
      <circle cx={170} cy={14} r={7} fill={G} />
      <rect x={182} y={9} width={50} height={4} rx={2} fill={W} />
      <rect x={182} y={16} width={30} height={3} rx={1.5} fill={G} />
      <rect x={163} y={28} width={74} height={3} rx={1.5} fill={W} opacity=".8" />
      <rect x={163} y={35} width={60} height={3} rx={1.5} fill={W} opacity=".8" />
      <rect x={163} y={46} width={74} height={40} rx={4} fill="#222" />
      <path d="M171 80 l12 -14 l9 9 l6 -6 l12 11 Z" fill={G} />
    </g>
  )
  return (
    <svg viewBox="0 0 400 300" className="vis">
      <defs><clipPath id="screen"><rect x={158} y={30} width={84} height={240} rx={10} /></clipPath></defs>
      <rect x={150} y={18} width={100} height={264} rx={18} fill="none" stroke={W} />
      <rect x={185} y={24} width={30} height={4} rx={2} fill={G} />
      <g clipPath="url(#screen)">
        <motion.g animate={loop ? { y: [0, -200] } : {}} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
          {[0, 1, 2, 3, 4, 5].map((i) => <Post key={i} y={38 + i * 100} />)}
        </motion.g>
      </g>
      {[['DISCOVER', 70], ['CLONE STRUCTURE', 120], ['ORIGINALITY GATE', 170], ['SCHEDULE', 220]].map(([t, y], i) => (
        <motion.g key={t} initial={{ opacity: 0, x: -10 }} animate={on ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.15 }}>
          <Label x={124} y={Number(y)} anchor="end" size={8} fill={i === 2 ? W : G}>{t}</Label>
          <line x1={128} y1={Number(y) - 3} x2={148} y2={Number(y) - 3} stroke={G} />
        </motion.g>
      ))}
      <Label x={276} y={90} anchor="start" size={8} fill={G}>45 MIN</Label>
      <Label x={276} y={104} anchor="start" size={8}>→ &lt;60 S</Label>
      <Label x={276} y={200} anchor="start" size={8} fill={G}>OAUTH 2.0</Label>
      <Label x={276} y={214} anchor="start" size={8}>99.8% ON TIME</Label>
    </svg>
  )
}

/* 05 — waveform + realtime loop Mic → STT → LLM → TTS */
function VoiceRing({ on }: P) {
  const loop = useLoop(on)
  const steps = ['MIC', 'STT', 'LLM', 'TTS']
  const r = 92
  return (
    <svg viewBox="0 0 400 300" className="vis">
      <circle cx={200} cy={150} r={r} fill="none" stroke={G} strokeDasharray="2 6" />
      <motion.circle cx={200} cy={150} r={r} fill="none" stroke={W} strokeWidth={1.5} strokeDasharray="40 538"
        animate={loop ? { strokeDashoffset: [0, -578] } : {}} transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }} />
      {steps.map((s, i) => {
        const a = -Math.PI / 2 + (i * Math.PI) / 2
        const x = 200 + r * Math.cos(a)
        const y = 150 + r * Math.sin(a)
        return (
          <g key={s}>
            <circle cx={x} cy={y} r={18} fill="#000" stroke={W} />
            <Label x={x} y={y + 3} size={8}>{s}</Label>
          </g>
        )
      })}
      {Array.from({ length: 15 }, (_, i) => {
        const h = 10 + ((i * 37) % 26)
        return (
          <motion.rect key={i} x={158 + i * 6} width={3} rx={1.5} fill={W}
            initial={{ height: 4, y: 148 }}
            animate={loop ? { height: [4, h * 1.6, 6, h, 4], y: [148, 150 - h * 0.8, 147, 150 - h / 2, 148] } : { height: 4, y: 148 }}
            transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.06 }} />
        )
      })}
      <Label x={20} y={286} anchor="start" size={8} fill={G}>WEBRTC · GO SFU</Label>
      <Label x={380} y={286} anchor="end" size={8} fill={G}>FULL-DUPLEX</Label>
    </svg>
  )
}

/* 06 — 100-pt rubric ring segments + timestamp evidence chips */
function ScoreGauge({ on }: P) {
  const segs = [25, 20, 20, 15, 10, 10] // illustrative rubric sections (sum 100)
  const C = 2 * Math.PI * 70
  let acc = 0
  return (
    <svg viewBox="0 0 400 300" className="vis">
      <g transform="rotate(-90 140 150)">
        {segs.map((s, i) => {
          const len = (s / 100) * C - 4
          const off = -(acc / 100) * C
          acc += s
          return (
            <motion.circle key={i} cx={140} cy={150} r={70} fill="none" stroke={i % 2 ? G : W} strokeWidth={12}
              strokeDasharray={`${len} ${C}`} strokeDashoffset={off}
              initial={{ opacity: 0 }} animate={on ? { opacity: 1 } : {}} transition={{ delay: 0.2 + i * 0.12 }} />
          )
        })}
      </g>
      <Label x={140} y={152} size={26}>100</Label>
      <Label x={140} y={170} size={8} fill={G}>POINT RUBRIC</Label>
      {['04:12  INTRO CLARITY', '18:40  CONCEPT CHECK', '32:05  STUDENT Q&A', '47:51  RECAP'].map((t, i) => (
        <motion.g key={t} initial={{ opacity: 0, x: 12 }} animate={on ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5 + i * 0.15 }}>
          <rect x={244} y={84 + i * 34} width={136} height={24} rx={12} fill="#141414" stroke={G} strokeOpacity=".6" />
          <circle cx={258} cy={96 + i * 34} r={3} fill={W} />
          <Label x={268} y={99 + i * 34} anchor="start" size={7.5}>{t}</Label>
        </motion.g>
      ))}
      <Label x={244} y={70} anchor="start" size={7} fill={G}>EVIDENCE (SAMPLE)</Label>
    </svg>
  )
}

/* 07 — laptop ⇄ tablet over USB, frames flowing both ways */
function PadBridge({ on }: P) {
  const loop = useLoop(on)
  return (
    <svg viewBox="0 0 400 300" className="vis">
      <rect x={30} y={90} width={150} height={96} rx={6} fill="none" stroke={W} />
      <path d="M14 196 H196 L186 186 H24 Z" fill="none" stroke={W} />
      <Label x={105} y={142} size={8} fill={G}>UBUNTU · WAYLAND</Label>
      <rect x={250} y={80} width={124} height={170} rx={10} fill="none" stroke={W} />
      <rect x={258} y={88} width={108} height={154} rx={4} fill="#111" />
      <Label x={312} y={162} size={8} fill={G}>2408×1720</Label>
      <Label x={312} y={176} size={8} fill={G}>@ 90 HZ</Label>
      <path d="M196 192 C 220 192, 226 250, 250 230" fill="none" stroke={G} strokeDasharray="3 4" />
      {loop && [0, 1, 2].map((k) => (
        <motion.rect key={k} width={8} height={5} rx={1.5} fill={W}
          animate={{ x: [192, 246], y: [190, 230], opacity: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: k * 0.45, ease: 'easeInOut' }} />
      ))}
      <Label x={222} y={272} size={8}>USB DATA</Label>
      <Label x={200} y={40} size={8} fill={G}>EXTEND  ⇄  MIRROR</Label>
    </svg>
  )
}

export const VISUALS: Record<Visual, (p: P) => React.ReactElement> = {
  qa: QaPipeline,
  graph: KnowledgeGraph,
  agents: AgentGraph,
  feed: PhoneFeed,
  voice: VoiceRing,
  gauge: ScoreGauge,
  bridge: PadBridge,
}
