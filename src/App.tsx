import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Hero } from './components/hero/Hero'
import { Bar } from './components/layout/Bar'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { Statement } from './components/Statement'
import { REC } from './hooks/useRecorder'

// One shared chunk for everything below the statement.
const below = () => import('./components/BelowFold')
const Sections = lazy(() => below().then((m) => ({ default: m.Sections })))
const Contact = lazy(() => below().then((m) => ({ default: m.Contact })))

/**
 * The lower sections are fetched in the background but only mounted when the visitor
 * scrolls near them (or follows an in-page link), so the hero intro runs on a quiet thread.
 */
function useBelowFold() {
  const sentinel = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(REC || window.location.hash.length > 1)
  const pendingHash = useRef<string | null>(window.location.hash || null)

  useEffect(() => {
    if (REC) document.documentElement.classList.add('rec')
    const prefetch = () => void below()
    if ('requestIdleCallback' in window) window.requestIdleCallback(prefetch, { timeout: 3000 })
    else setTimeout(prefetch, 1500)
  }, [])

  useEffect(() => {
    if (show) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShow(true), { rootMargin: '50% 0px' })
    if (sentinel.current) io.observe(sentinel.current)
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]')
      const hash = a?.getAttribute('href')
      if (!hash || hash === '#top' || hash === '#main' || document.querySelector(hash)) return
      e.preventDefault()
      pendingHash.current = hash
      setShow(true)
    }
    document.addEventListener('click', onClick, true)
    return () => {
      io.disconnect()
      document.removeEventListener('click', onClick, true)
    }
  }, [show])

  // After mounting for a link, jump to the requested section once it exists.
  const onReady = () => {
    const hash = pendingHash.current
    if (!hash) return
    pendingHash.current = null
    requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }))
  }
  return { sentinel, show, onReady }
}

function Ready({ onReady }: { onReady: () => void }) {
  useEffect(onReady, [onReady])
  return null
}

export default function App() {
  const { sentinel, show, onReady } = useBelowFold()
  return (
    <SmoothScroll>
      <a className="skip-link" href="#main">Skip to content</a>
      <Hero />
      <main id="main">
        <Bar />
        <Statement />
        <div ref={sentinel} aria-hidden />
        {show ? (
          <Suspense fallback={<div className="below-fallback" aria-busy="true" />}>
            <Sections />
            <Ready onReady={onReady} />
          </Suspense>
        ) : (
          <div className="below-fallback" />
        )}
      </main>
      {show && (
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      )}
    </SmoothScroll>
  )
}
