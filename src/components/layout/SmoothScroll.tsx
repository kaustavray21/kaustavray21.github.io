import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

const reduced =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function SmoothScroll({ children }: { children: ReactNode }) {
  if (reduced) return <>{children}</>
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
