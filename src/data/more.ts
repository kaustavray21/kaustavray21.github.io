export type Category = 'AI' | 'Automation' | 'Full-stack' | 'Mobile' | 'Hackathon'

export type Featured = {
  title: string
  blurb: string
  category: Category
  stack: string[]
  size?: 'wide'
  /** Only public repos the user owns. */
  link?: string
  tag?: string
}

const gh = (r: string) => `https://github.com/kaustavray21/${r}`

export const featured: Featured[] = [
  { title: 'AI Video Engine', category: 'AI', size: 'wide', link: gh('ai-video-engine'),
    blurb: 'Django + Celery pipeline that turns course content into AI-generated video, with a React/Vite control dashboard.',
    stack: ['Django', 'Celery', 'LangChain', 'OpenAI', 'MySQL', 'React'] },
  { title: 'Multilingual Voice Tutor', category: 'AI', link: gh('voice-agent-test'),
    blurb: 'Voice-only Socratic tutor in Hindi, Tamil, Telugu and English with automatic language detection.',
    stack: ['Django', 'Sarvam AI', 'Gemini'] },
  { title: 'AI Dev Dashboard', category: 'AI', link: gh('ai-dev-dashbord'),
    blurb: 'Engineer-focused AG-UI workspace that traces logs, reads the codebase and proposes fixes and commands.',
    stack: ['Python', 'AG-UI', 'LLM agents'] },
  { title: 'InCuiseNix 2.0', category: 'AI', link: gh('InCuiseNix-2.0'),
    blurb: 'RAG learning backend on Django REST with LangChain, plus a fully local variant on Ollama + FAISS.',
    stack: ['Django REST', 'LangChain', 'Gemini', 'Ollama', 'FAISS'] },
  { title: 'IST Lecture QA', category: 'Automation', size: 'wide', tag: 'Private · Internal tool',
    blurb: 'Audits recorded web-dev lectures end to end: ffmpeg defect and silence checks, Gemini transcription and slide OCR, semantic QA written back to Sheets.',
    stack: ['Python', 'Gemini 2.5 Flash', 'ffmpeg', 'OCR', 'Google Sheets'] },
  { title: 'Webex · Vimeo Ops Console', category: 'Automation', tag: 'Private · Internal tool',
    blurb: 'Dashboard that schedules, monitors and auto-terminates class sessions and syncs recordings.',
    stack: ['PHP', 'Python', 'Webex API', 'Vimeo API'] },
  { title: 'SIH 2025 · Jharkhand Tourism', category: 'Hackathon', size: 'wide', tag: 'Team Ananta',
    blurb: 'AI-powered digital tourism platform: itinerary engine, feedback analyzer, blockchain-backed records and an admin dashboard.',
    stack: ['AI itinerary', 'NLP feedback', 'Blockchain', 'Dashboard'] },
  { title: 'IntelliAiMentor Web', category: 'Full-stack', tag: 'Private',
    blurb: 'Landing and product site for an AI mentorship platform.',
    stack: ['Next.js 16', 'Tailwind v4', 'shadcn/ui', 'Prisma'] },
  { title: 'Multi-Vendor Marketplace', category: 'Full-stack', tag: 'Local build',
    blurb: 'Marketplace backend with vendor onboarding, JWT auth, Razorpay payments and Gemini-assisted listings.',
    stack: ['Django REST', 'Celery', 'Razorpay', 'Gemini', 'pytest'] },
  { title: 'EDA AI Agent', category: 'AI', tag: 'Local build',
    blurb: 'Drop in any CSV: the agent profiles quality, cleans dirty rows, charts it and writes an executive report.',
    stack: ['LangChain', 'Gemini', 'Jupyter', 'R'] },
  { title: 'Nigrani', category: 'Mobile', tag: 'Collaboration',
    blurb: 'Android monitor that flags risky apps the moment they are installed and reports to a backend.',
    stack: ['Kotlin', 'Android', 'Firebase'] },
]

export type Demo = { repo: string; title: string; note: string; stack: string; shot?: string }

export const demos: Demo[] = [
  { repo: 'simple-teleprompter', title: 'Simple Teleprompter', note: 'Browser teleprompter for creators', stack: 'React · TypeScript', shot: 'simple-teleprompter' },
  { repo: 'file-auditor-checklist', title: 'File Audit Checklist', note: 'VS Code-style review tracker', stack: 'React 19 · Vite · Tailwind', shot: 'file-auditor-checklist' },
  { repo: 'resume-builder-lpu', title: 'Resu-Mate', note: 'Live-preview resume builder', stack: 'JavaScript', shot: 'resume-builder-lpu' },
  { repo: 'himalayan-tourism', title: 'Himalayan Tourism', note: 'Travel site with trip planner', stack: 'JavaScript', shot: 'himalayan-tourism' },
  { repo: 'test', title: 'Pac-Man v5.6', note: 'Canvas arcade game', stack: 'JavaScript', shot: 'test' },
  { repo: 'space-animation', title: 'Floating Through Space', note: 'Particle warp animation', stack: 'JavaScript · Canvas', shot: 'space-animation' },
  { repo: 'black-hole', title: 'Black Hole', note: 'Interactive gravity simulation', stack: 'JavaScript · WebGL' },
  { repo: 'photography-website', title: 'Photography', note: 'Portfolio for a photographer', stack: 'HTML · CSS', shot: 'photography-website' },
]

export type ArchiveRow = { name: string; repo: string; lang: string; year: number }

export const archive: ArchiveRow[] = [
  { name: 'Car Rental System', repo: 'car-rental-system-springboot', lang: 'Java', year: 2025 },
  { name: 'Salary Management', repo: 'salraly-management-springboot', lang: 'Java', year: 2025 },
  { name: 'RESTful API', repo: 'restful-API', lang: 'Java', year: 2025 },
  { name: 'Spring Boot Log Records', repo: 'springboot-log-records', lang: 'Java', year: 2025 },
  { name: 'Kotlin Expense Tracker', repo: 'kotlin-expense-tracker', lang: 'Kotlin', year: 2025 },
  { name: 'Kotlin for Java Developers', repo: 'Kotlin_for_Java_Developers._Week_5', lang: 'Kotlin', year: 2025 },
  { name: 'MERN To-Do List', repo: 'to-do-list--MERN-Stack', lang: 'TypeScript', year: 2025 },
  { name: 'Iris Flower Classification', repo: 'Iris-Flower-Classification', lang: 'Jupyter', year: 2025 },
  { name: 'Angular Project', repo: 'AngularProject', lang: 'TypeScript', year: 2025 },
  { name: 'Event Management (GUI)', repo: 'Event-Management-App-GUI-based', lang: 'Java', year: 2025 },
  { name: 'Event Management (Console)', repo: 'event-management-app-console-based', lang: 'Java', year: 2025 },
  { name: 'Django Basics', repo: 'django', lang: 'Python', year: 2025 },
  { name: 'Basic Projects', repo: 'Basic-projects', lang: 'HTML', year: 2025 },
  { name: 'InCuiseNix v1', repo: 'InCuiseNix', lang: 'HTML', year: 2025 },
  { name: 'Previous Portfolio', repo: 'portfolio', lang: 'TypeScript', year: 2025 },
  { name: 'Brick Breaker', repo: 'Brick-breaker', lang: 'Java', year: 2023 },
  { name: 'TiQR', repo: 'tiqr', lang: 'TypeScript', year: 2023 },
  { name: 'Guessing Game', repo: 'the-guessing-game-console-app', lang: 'Java', year: 2023 },
]
