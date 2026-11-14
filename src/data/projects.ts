import type { Metric } from './experience'

export type Visual = 'qa' | 'graph' | 'agents' | 'feed' | 'voice' | 'gauge' | 'bridge'

export type Flagship = {
  id: string
  title: string
  kicker: string
  year: string
  summary: string
  metrics: Metric[]
  stack: string[]
  visual: Visual
  /** Only public repos the user owns get a link. Everything else shows `tag`. */
  link?: { href: string; label: string }
  tag?: string
}

export const flagships: Flagship[] = [
  {
    id: 'pcp-qa',
    title: 'PCP QA Pipeline',
    kicker: 'LLM automation',
    year: '2025—26',
    summary:
      'Every sales call, audited by AI. PBX recordings are pulled over SSH, transcribed in parallel chunks, classified, and scored against a 12-checkpoint compliance rubric, with a tool-calling agent on top for the QA team.',
    metrics: [
      { value: 100, suffix: '%', label: 'calls audited' },
      { value: 45, prefix: '<', suffix: 's', label: 'per review' },
      { value: 96, suffix: '%+', label: 'violation precision' },
    ],
    stack: ['Python', 'Django', 'Celery', 'Redis', 'Gemini', 'Pydantic'],
    visual: 'qa',
    tag: 'Private · In production',
  },
  {
    id: 'punar',
    title: 'PunarSynaptics',
    kicker: 'RAG tutor + knowledge graph',
    year: '2025—26',
    summary:
      'An AI tutor grounded in course material. Hybrid FAISS + BM25 retrieval fused with RRF, strict source citations, and a Neo4j concept graph that finds prerequisite gaps for each learner.',
    metrics: [
      { value: 1985, label: 'learners' },
      { value: 92, suffix: '%+', label: 'retrieval precision' },
      { value: 1.8, prefix: '<', suffix: 's', decimals: 1, label: 'latency' },
    ],
    stack: ['Django', 'React', 'Neo4j', 'MySQL', 'FAISS', 'BM25', 'OpenAI'],
    visual: 'graph',
    tag: 'Private · In production',
  },
  {
    id: 'architechai',
    title: 'ArchitechAI',
    kicker: 'Multi-agent co-pilot',
    year: '2026',
    summary:
      'Natural-language requirements in; system topology, database schema, API contracts and a trade-off review out. A 4-agent LangGraph workflow (PM, Architect, DSA, Critic) with a planner/critic loop, streamed live over SSE.',
    metrics: [
      { value: 4, label: 'specialist agents' },
      { value: 'SSE', label: 'live token stream' },
      { value: 'React Flow', label: 'topology canvas' },
    ],
    stack: ['Next.js', 'TypeScript', 'DRF', 'LangGraph', 'LangChain', 'OpenAI'],
    visual: 'agents',
    link: { href: 'https://github.com/kaustavray21/ArchitechAI', label: 'View on GitHub' },
  },
  {
    id: 'linkedin',
    title: 'LinkedIn AI Platform',
    kicker: 'Content automation',
    year: 'Ongoing',
    summary:
      'Finds top-performing posts on a topic, clones their structure, passes an originality gate, generates a matching image, then schedules and publishes over OAuth 2.0 with automatic token refresh.',
    metrics: [
      { value: 60, prefix: '<', suffix: 's', label: 'per post (was 45 min)' },
      { value: 99.8, suffix: '%', decimals: 1, label: 'on-time dispatch' },
      { value: 'OAuth 2.0', label: 'direct publishing' },
    ],
    stack: ['FastAPI', 'Python', 'Gemini', 'fal.ai', 'APScheduler', 'MySQL'],
    visual: 'feed',
    link: { href: 'https://github.com/kaustavray21/linkedin-bot', label: 'View on GitHub' },
  },
  {
    id: 'interview',
    title: 'AI Interview Agent',
    kicker: 'Real-time voice AI',
    year: '2026',
    summary:
      'A full-duplex voice interviewer: WebRTC audio through a Go SFU, noise suppression and turn detection, Whisper speech-to-text, GPT-4 reasoning and streamed TTS replies over WebSockets.',
    metrics: [
      { value: 'Full-duplex', label: 'voice conversation' },
      { value: 'WebRTC', label: 'Go SFU transport' },
      { value: 4, label: 'stage realtime loop' },
    ],
    stack: ['FastAPI', 'WebSockets', 'Whisper', 'GPT-4', 'TTS', 'Go', 'MySQL'],
    visual: 'voice',
    link: { href: 'https://github.com/kaustavray21/interview-agent', label: 'View on GitHub' },
  },
  {
    id: 'faculty-eval',
    title: 'AI Faculty Evaluation',
    kicker: 'Video understanding',
    year: '2026',
    summary:
      'Grades recorded classes from a Vimeo link or upload against a fixed 100-point teaching rubric, with timestamped evidence linking back to the recording, the top 3 improvements and an intervention decision.',
    metrics: [
      { value: 100, label: 'point rubric' },
      { value: 3, label: 'ranked improvements' },
      { value: 'Timestamped', label: 'evidence' },
    ],
    stack: ['Django', 'Gemini', 'Redis', 'ffmpeg', 'Vimeo API'],
    visual: 'gauge',
    tag: 'Private · Internal tool',
  },
  {
    id: 'padbridge',
    title: 'PadBridge',
    kicker: 'Systems · Rust',
    year: '2026',
    summary:
      'Turns an Android tablet into a real extended display for Ubuntu on GNOME/Wayland over a plain USB data cable, and mirrors the tablet back to the desktop. No DisplayPort Alt Mode required.',
    metrics: [
      { value: 90, suffix: ' Hz', label: 'target refresh' },
      { value: '2408×1720', label: 'tablet panel' },
      { value: 4, label: 'Rust crates' },
    ],
    stack: ['Rust', 'Android', 'Wayland', 'USB'],
    visual: 'bridge',
    tag: 'Local build · In development',
  },
]
