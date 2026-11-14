import { motion } from 'motion/react'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { profile } from './data/profile'

// Phase 1 shell: verifies tokens, fonts, photo, motion and deploy.
// Sections (Hero, Statement, Work, ...) land in Phases 2-4.
export default function App() {
  return (
    <SmoothScroll>
      <main className="relative min-h-svh overflow-hidden bg-paper text-ink">
        <motion.img
          src={`${import.meta.env.BASE_URL}me.webp`}
          srcSet={`${import.meta.env.BASE_URL}me.webp 1x, ${import.meta.env.BASE_URL}me@2x.webp 2x`}
          alt={`Pencil-sketch portrait of ${profile.short}`}
          className="pointer-events-none absolute left-1/2 top-0 h-full w-auto max-w-none -translate-x-1/2 object-cover mix-blend-multiply"
          style={{ maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)' }}
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="relative z-10 p-[calc(57*var(--u))]">
          <h1 className="display u-fs" style={{ '--s': 90 } as React.CSSProperties}>
            {['KAUSTAV', 'RAY'].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.11, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <p className="mt-[calc(24*var(--u))] max-w-[calc(330*var(--u))] text-[calc(14*var(--u))]">
            {profile.about}
          </p>
          <p className="wide mt-[calc(16*var(--u))] text-[calc(13*var(--u))] uppercase text-grey">
            Portfolio in progress · {profile.location}
          </p>
        </div>
      </main>
    </SmoothScroll>
  )
}
