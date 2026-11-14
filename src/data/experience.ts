export type Metric = { value: number | string; prefix?: string; suffix?: string; decimals?: number; label: string }

export type Workstream = { title: string; kind: string; points: string[]; metrics: Metric[] }

export const experience = {
  role: 'Technical Research Analyst',
  company: 'Intellipaat',
  place: 'Bengaluru, India',
  period: 'Sep 2025 — Present',
  streams: [
    {
      title: 'PCP QA Pipeline',
      kind: 'Sales-call audit automation · LLM',
      points: [
        'Replaced 5% manual sampling with a pipeline that pulls PBX recordings over SSH, transcribes, classifies and audits every sales call against compliance rubrics.',
        'Built a tool-calling agent so non-technical users can query evaluations, surface compliance issues, get coaching feedback and schedule QA runs.',
        'Staged validation + Gemini model routing with Pydantic structured outputs; Django, Celery and Redis jobs with retries, rate limits and alerts.',
      ],
      metrics: [
        { value: 100, suffix: '%', label: 'calls audited (was 5%)' },
        { value: 45, prefix: '<', suffix: 's', label: 'per call (was 15–20 min)' },
        { value: 68, suffix: '%', label: 'lower inference cost' },
        { value: 0.2, prefix: '<', suffix: '%', decimals: 1, label: 'unhandled failures' },
      ],
    },
    {
      title: 'PunarSynaptics',
      kind: 'AI tutoring assistant · RAG',
      points: [
        'Shipped a full-stack RAG tutor (Django, React, MySQL, Neo4j) with hybrid FAISS + BM25 retrieval fused by Reciprocal Rank Fusion.',
        'Source-citation constraints keep ungrounded answers rare; a Neo4j + MySQL knowledge graph maps concept prerequisites and learning gaps.',
        'Async Celery ingestion for PDFs, docs and slides, plus ops scripts for retries, vector rebuilds and stuck-job repair.',
      ],
      metrics: [
        { value: 1985, label: 'learners served' },
        { value: 7400, suffix: '+', label: 'Q&A interactions' },
        { value: 92, suffix: '%+', label: 'precision (vs 74% dense-only)' },
        { value: 65, suffix: '%', label: 'less embedding compute' },
      ],
    },
    {
      title: 'IntelliAiMentor',
      kind: 'Incident recovery · Ops',
      points: [
        'Owned recovery after a security breach and total data loss: restored data from a snapshot and rebuilt the production server from the latest code.',
      ],
      metrics: [],
    },
  ] satisfies Workstream[],
}

export const education = [
  { degree: 'Master of Computer Applications (MCA)', school: 'Lovely Professional University', period: '2024 — 2026', note: 'CGPA 8.59 · AI Systems, Distributed Systems' },
  { degree: 'Bachelor of Computer Applications (BCA)', school: 'GLA University', period: '2021 — 2024', note: 'CGPA 7.1 · Software Engineering, DSA' },
]
