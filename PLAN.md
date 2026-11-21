# Portfolio Plan — Kaustav Kumar Sinha Ray (kaustavray21)

**Status:** plan v2. Decisions locked (see §6). Ready to build on your go.

Target: **React + parallax portfolio** in the monochrome editorial style of `prompt.txt` ("Orvante"),
built from your resume (`kaustav_fde.pdf`) and project scan, hosted at the **root user site**
**`https://kaustavray21.github.io/`**.

---

## 0. Inputs

### 0.1 Resume → site content (source of truth for copy & numbers)
- **Headline:** AI Engineer · Python · LLM APIs, Agents & Workflow Automation · RAG. Bengaluru, India.
- **Experience:** Technical Research Analyst, Intellipaat, Sep 2025 – Present.
- **Education:** MCA, LPU (2024–26, CGPA 8.59) · BCA, GLA University (2021–24).
- **Certs:** CKAD, AWS.
- **Hero / counter numbers (all from resume):**
  `100%` calls audited (was 5%) · `<45s` per-call review (was 15–20 min) · `68%` lower inference cost ·
  `1,985` learners · `7,400+` Q&A interactions · `92%+` retrieval precision · `96%+` violation precision ·
  `99.8%` on-time dispatch.
- **Public contact:** kaustav.raysinha@gmail.com · linkedin.com/in/kaustav-sinha-ray · github.com/kaustavray21.
  The **phone number will not appear on the site.**

### 0.2 Photo: `Me-port.jpg.jpeg`
2481×3545 pencil-sketch portrait, front-facing, on a white background. It suits the monochrome design.
- **Crop** the bottom 8% to remove the "AI-generated content" watermark (tested: crop to 2481×3261).
- **Export** `public/me.webp` (1600 px tall, about 150 KB) and `public/me@2x.webp`.
- **Blend:** `mix-blend-mode: multiply`, so the white background turns into the `#dadada` hero paper.
  Combined with the 6% left/right mask from the spec, the sketch melts into the page.
- **Layout change from the spec:** the spec's model faces away from the camera; you face forward.
  The photo is centred (left about 360u, about 720×980u, top −40u). The glass **brand plate** sits
  over the chest at about y 640, and the tech wordmark row sits across the shoulders at y 864.

### 0.3 `prompt.txt` → design system (kept), content (replaced)
| Orvante spec | Portfolio |
|---|---|
| `u = min(100vw/1440, 1.333px)`; phone `u = 100vw/390` | Same, implemented as CSS var `--u` |
| Paper `#dadada` / ink `#111` / black / `#f4f4f4` / grey `#6f6f6f` / white hairlines | Same |
| Archivo (wdth axis) display + Inter Tight UI | Same, self-hosted via `@fontsource-variable` |
| Nav pill: Home · Studio · Works · Blog | Home · Work · Experience · Contact (sliding black pill) |
| Date + "Contact Us ↗" | "Open to roles · Bengaluru" + "Hire Me ↗" (mailto) |
| Title "PURE / DESIGN" `('25)` | **"KAUSTAV / RAY"** `('26)` |
| (ABOUT) + "Book A Call ↗" | (ABOUT) 2-line summary + **"Download CV ↗"** |
| Stats frame "400+ / 230+" | Dark card **"100% / Calls audited by AI"** + photo card **"1,985 / Learners served"** |
| "True Growth" pill | "CKAD · AWS Certified" pill |
| "We're available ● for you" | "Available ● for AI roles" |
| "Out Now / Q Industrial" card | "Latest Build / ArchitechAI / [2026]" with a live SVG preview |
| ORVANTE brand plate | "KAUSTAV.AI" plate with monogram |
| Fictional logos row | Tech wordmarks: Python · LangGraph · Django · React |
| Bar "EST 2019 · SCROLL DOWN · LIVE IN DETAILS" | "EST 2021 · SCROLL DOWN · BUILT IN BENGALURU" |
| Statement word fill | Personal statement (below) |
| "Trusted by" panel | "Impact" panel: counters, tech-avatar grid, certifications laurel |
| Motion: load stagger, 0.12× drift, count-ups, hover lifts, reduced motion, `?rec=1` | Same, plus the new project parallax sections |

### 0.4 Hosting inputs
- `git.txt` holds no credentials, only the setup commands. `kaustavray21/portfolio-nov-2026` exists and is empty.
- `gh` is installed but **not logged in**. git identity is set. Node 26.9 / npm 11.19.
- No `kaustavray21.github.io` repo exists, so the root site is available. Your old `portfolio`
  repo (Pages on) keeps working at `/portfolio/`.

---

## 1. Project inventory & link policy

**Link rule (your decision):** work, private, other-owner and local-only projects get **no repo link**.
They are shown as case studies only, with a "Private · Production" or "Local build" tag.
Only public repos you own get GitHub / Live links.

### Tier 1: Flagship (sticky-stack parallax case studies)
| # | Project | Link | Stack | Visual |
|---|---|---|---|---|
| 01 | **PCP QA Pipeline**: sales-call audit automation | none (Intellipaat) | Python, Django, Celery, Redis, Gemini, Pydantic, SSH/PBX | Pipeline: PBX → transcribe → classify → 12-checkpoint audit → report. Counters 5%→100%, 15 min→45 s, −68% cost |
| 02 | **PunarSynaptics**: AI tutoring assistant (RAG) | none | Django, React, MySQL, Neo4j, FAISS, BM25, RRF, OpenAI, Celery | Animated knowledge graph (concept nodes + prerequisite edges) with hybrid-retrieval fusion; counters 1,985 learners · 7,400+ Q&A · 92% vs 74% precision |
| 03 | **ArchitechAI**: agentic system-design co-pilot | ✅ GitHub | Next.js, TS, React Flow, DRF, LangGraph, OpenAI, SSE | 4 agent nodes (PM → Architect → DSA → Critic) with a critic loop, streaming tokens |
| 04 | **LinkedIn AI Automation Platform** | ✅ GitHub | FastAPI, Gemini, fal.ai, OAuth 2.0, APScheduler, MySQL | Phone mock with a feed at a different scroll speed; 45 min → <60 s, 99.8% dispatch |
| 05 | **AI Interview Agent**: real-time voice | ✅ GitHub | FastAPI, WebSockets, Whisper, GPT-4, TTS, Go SFU/WebRTC | Live waveform plus a Mic→STT→LLM→TTS ring |
| 06 | **AI Faculty Evaluation** | none (work) | Django, Gemini, Redis, ffmpeg, Vimeo | Score gauge counting to /100 plus timestamp chips |
| 07 | **PadBridge**: tablet as Ubuntu display | none (local) | Rust (4 crates), Android, USB | Laptop + tablet outline with a pulsing USB data line |

### Tier 2: Featured (filterable bento grid)
| Project | Link | Category |
|---|---|---|
| IST QA Automation (lecture audit, Gemini + OCR) | none (work) | Automation |
| Webex/Vimeo Ops Dashboard | none (work) | Automation |
| IntelliAiMentor (incl. incident recovery story) | none | AI · Ops |
| SIH-2025 Jharkhand Tourism Platform (Team Ananta) | none | Hackathon |
| EDA AI Agent (LangChain + Gemini, R) | none (local) | AI/Data |
| Multivendor Marketplace (Django) | none (local) | Full-stack |
| AI Mentor landing (Next.js/Vite) | none (local) | Frontend |
| Nigrani: Risk App Monitor (Kotlin, collab) | none | Mobile |
| AI Video Engine | ✅ | AI |
| AI Dev Dashboard (AG-UI) | ✅ | AI |
| InCuiseNix 2.0 + Local LLM | ✅ | AI |
| Voice Agent Test · LLM Dashboard | ✅ | AI |

### Tier 3: Live demos (horizontal scroll strip, "Visit ↗")
🌐 simple-teleprompter · file-auditor-checklist · resume-builder-lpu · himalayan-tourism · black-hole ·
space-animation · photography-website · book-store-app · AngularProject · Web-Form-App · test (Pac-Man).
URLs are `https://kaustavray21.github.io/<repo>/`. These keep working under the new root site.

### Tier 4: Archive (collapsible table, GitHub links)
Spring Boot (car-rental, salary-mgmt, restful-API, log-records), Event-Management (GUI/console),
Brick-breaker, Kotlin course + expense tracker, Iris classification, TiQR, MERN to-do, django, Basic-projects.

**Excluded:** forks, demo/test repos, class notes, the australia.com clone, `mmaniga/ul` repo links.

### ⚠️ Security
Local folders contain `.env` files, service-account JSONs, a Firebase admin key and
`php/vimeo-github/gittoken.txt`. **No file from any project folder is copied into the site.** All copy
is hand-written. Check that these were never committed to GitHub, and rotate any that were.

---

## 2. Stack (latest versions at install time)
Vite (react-ts) · React 19 · TypeScript · Tailwind CSS v4 (`@tailwindcss/vite`) · **Motion**
(`motion/react`: `useScroll`, `useTransform`, `useSpring`, `useInView`, `layout`) · **Lenis** smooth
scroll · `@fontsource-variable/inter-tight` + `archivo` · `lucide-react` + `simple-icons` ·
GitHub Actions → Pages. Optional (Phase 5): `@react-three/fiber` depth layer.

---

## 3. Page structure

```
[1] HERO          paper   name, sketch portrait (multiply), stats frame, Latest Build, brand plate
[2] BAR           black   EST 2021 · SCROLL DOWN · BUILT IN BENGALURU
[3] STATEMENT     black   word-by-word grey→white fill
[4] EXPERIENCE    black   Intellipaat timeline; each bullet's metric counts up; sticky left column
[5] FLAGSHIP      black   7 sticky stacked cards (scale 0.92 as the next slides over), per-project SVG visual at 0.8×/1.15× parallax
[6] GRID          #111    bento grid + filter tabs (AI · Automation · Full-stack · Mobile · Hackathon)
[7] LIVE STRIP    paper   vertical scroll → horizontal translate of browser-frame cards
[8] IMPACT PANEL  black   the "Trusted by" panel: 4×2 tech-avatar pop grid, "1,985+" counter, CKAD/AWS laurel card, portrait card (sketch crop)
[9] EDUCATION     black   MCA / BCA rows
[10] ARCHIVE      black   collapsible repo table
[11] CONTACT      paper   giant "LET'S BUILD" title, email, LinkedIn, GitHub, Download CV
```

**Statement copy:** "I find slow, manual processes / and replace them with working AI. / Agents that
reason, pipelines that / scale, and tools that real teams / use every single day."

**About (hero, 14u):** "AI engineer building LLM agents, RAG systems and automation pipelines that ship."

---

## 4. Code structure
```
portfolio/
├── .github/workflows/deploy.yml
├── public/  me.webp, me@2x.webp, Kaustav_Ray_Resume.pdf, favicon.svg, og.png
├── src/
│   ├── main.tsx, App.tsx, index.css           # tokens, --u, fonts
│   ├── data/profile.ts, experience.ts, projects.ts   # typed; link?: string optional
│   ├── hooks/useCountUp.ts, useRecorder.ts
│   └── components/
│       ├── layout/ Nav, SmoothScroll, Bar, Footer
│       ├── hero/   Hero, HeroPhoto, StatsFrame, LatestBuild, BrandPlate
│       ├── Statement.tsx, Experience.tsx, Education.tsx
│       ├── work/   FlagshipStack, FlagshipCard, visuals/{QaPipeline,KnowledgeGraph,AgentGraph,PhoneFeed,VoiceRing,ScoreGauge,PadBridge}.tsx
│       ├── grid/   BentoGrid, FilterTabs, ProjectTile
│       ├── LiveStrip.tsx, ImpactPanel.tsx, Archive.tsx
│       └── ui/     Button, GlassTile, Chip, Counter, Laurel, PrivateTag
├── PLAN.md, prompt.txt (kept, not deployed)
└── vite.config.ts                              # base: '/'
```
Source files `Me-port.jpg.jpeg`, `kaustav_fde.pdf` and `git.txt` are git-ignored. Only the processed copies go into `public/`.

---

## 5. Phases
| Phase | Work | Done when |
|---|---|---|
| 1 Scaffold | Vite + deps, tokens, `--u`, fonts, photo processing, workflow, repo rename | Blank page live at kaustavray21.github.io |
| 2 Hero/Bar/Statement | Spec port with your content + load motion + drift + word fill | Matches spec at 1440 px |
| 3 Experience + Flagship | Timeline + 7 sticky cards + 7 SVG visuals | All metrics count up; no private links |
| 4 Grid/Strip/Impact/Edu/Archive/Contact | Remaining sections | Every Tier 1–4 item renders |
| 5 Polish | Phone ≤760 px, reduced motion, a11y, SEO/OG, Lighthouse ≥ 90, `?rec=1` | No horizontal scroll; Lighthouse passes |

---

## 6. Decisions (locked)
1. Photo: `Me-port.jpg.jpeg`, cropped to remove the watermark and blended with multiply. ✅
2. Work projects, Punar Synaptics and local-only projects: **shown, no repo links**. ✅
3. Resume: `kaustav_fde.pdf` is the copy source and is published as **Download CV**. ✅
   ⚠️ The PDF contains your phone number. Publishing it makes the number public. Optional:
   upload a version without the phone number instead.
4. Contact: email + LinkedIn + GitHub from the resume; phone hidden. ✅
5. URL: **root user site `kaustavray21.github.io`**. ✅

---

## 7. GitHub Pages: command list

### 7.1 Authenticate (one time)
```bash
gh auth login            # GitHub.com → HTTPS → Login with a web browser
gh auth setup-git
```

### 7.2 Rename the empty repo to the user-site name
```bash
gh repo rename kaustavray21.github.io -R kaustavray21/portfolio-nov-2026 --yes
```

### 7.3 Scaffold (in /home/ricky/VScode/projects/portfolio)
```bash
cd /home/ricky/VScode/projects/portfolio
npm create vite@latest site-tmp -- --template react-ts
cp -r site-tmp/. . && rm -rf site-tmp          # keeps PLAN.md / prompt.txt / photo / pdf
npm install
npm install motion lenis lucide-react simple-icons \
  @fontsource-variable/inter-tight @fontsource-variable/archivo
npm install -D tailwindcss @tailwindcss/vite
```

### 7.4 Process assets
```bash
mkdir -p public
python3 -c "
from PIL import Image
im=Image.open('Me-port.jpg.jpeg'); w,h=im.size
im=im.crop((0,0,w,int(h*0.92))).convert('L')
im.resize((int(w*1600/im.height),1600)).save('public/me.webp',quality=82)
im.resize((int(w*3200/im.height),3200)).save('public/me@2x.webp',quality=80)"
cp kaustav_fde.pdf public/Kaustav_Ray_Resume.pdf
```

### 7.5 `vite.config.ts`
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({ base: '/', plugins: [react(), tailwindcss()] })
```

### 7.6 `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages
on:
  push: { branches: [main] }
  workflow_dispatch:
permissions: { contents: read, pages: write, id-token: write }
concurrency: { group: pages, cancel-in-progress: true }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npm run build
      - run: cp dist/index.html dist/404.html
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: ${{ steps.deployment.outputs.page_url }} }
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### 7.7 `.gitignore` additions
```
node_modules
dist
.env*
git.txt
Me-port.jpg.jpeg
kaustav_fde.pdf
```

### 7.8 First push
```bash
git init
git add .
git commit -m "feat: scaffold React parallax portfolio"
git branch -M main
git remote add origin https://github.com/kaustavray21/kaustavray21.github.io.git
git push -u origin main
```

### 7.9 Enable Pages with Actions as the source (one time)
```bash
gh api -X POST repos/kaustavray21/kaustavray21.github.io/pages -f build_type=workflow
# fallback: repo → Settings → Pages → Source: GitHub Actions
```

### 7.10 Verify / iterate
```bash
npm run build && npm run preview                 # local prod check
gh run watch                                     # follow the deploy
gh api repos/kaustavray21/kaustavray21.github.io/pages --jq .html_url
# → https://kaustavray21.github.io/
```
Every push to `main` redeploys. Optional: archive the old `portfolio` repo once the new site is live.
