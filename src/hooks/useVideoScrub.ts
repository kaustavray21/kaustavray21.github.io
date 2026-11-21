import { useEffect, type RefObject } from 'react'

const DESKTOP = 1024
const SENSITIVITY = 0.8 // full window width of mouse travel = 0.8 × video duration

/**
 * Desktop (≥1024px): horizontal mouse movement scrubs the video.
 * Seeks are chained through `seeked`, so only one seek is in flight and the frame tracks the cursor smoothly.
 * Below 1024px scrubbing is off and the video simply autoplays on loop.
 */
export function useVideoScrub(ref: RefObject<HTMLVideoElement | null>, enabled = true) {
  useEffect(() => {
    const video = ref.current
    if (!video || !enabled) return

    let prevX: number | null = null
    let target = 0
    let seeking = false

    const seek = () => {
      if (seeking || Math.abs(video.currentTime - target) < 0.01) return
      seeking = true
      video.currentTime = target
    }
    const onSeeked = () => {
      seeking = false
      seek() // catch up if the cursor moved while the last seek was decoding
    }
    const onMove = (e: MouseEvent) => {
      if (window.innerWidth < DESKTOP) return
      const d = video.duration
      if (!d || Number.isNaN(d)) return
      if (prevX === null) {
        prevX = e.clientX
        target = video.currentTime
        return
      }
      const delta = e.clientX - prevX
      prevX = e.clientX
      target = Math.min(d, Math.max(0, target + (delta / window.innerWidth) * SENSITIVITY * d))
      seek()
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    video.addEventListener('seeked', onSeeked)
    return () => {
      window.removeEventListener('mousemove', onMove)
      video.removeEventListener('seeked', onSeeked)
    }
  }, [ref, enabled])

  // Small screens: no cursor to scrub with, so play normally.
  useEffect(() => {
    const video = ref.current
    if (!video || !enabled || window.innerWidth >= DESKTOP) return
    video.autoplay = true
    video.loop = true
    void video.play().catch(() => {})
  }, [ref, enabled])
}
