import { animate, motion, useMotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, type ReactNode } from 'react'
import { REC } from '../../hooks/useRecorder'
import { useVideoScrub } from '../../hooks/useVideoScrub'

// Re-encoded from the prompt-2 source: cropped to the figure, greyscale, every frame a keyframe
// so mouse scrubbing can jump to any frame without decoding from the start.
const HERO_VIDEO = `${import.meta.env.BASE_URL}hero.mp4`

/**
 * 3D figure video, rendered in greyscale and multiply-blended into the paper.
 * Desktop: scrubbed by horizontal mouse movement. Phone: autoplays. Drifts at 0.12× scroll.
 */
export function HeroPhoto({ children }: { children?: ReactNode }) {
  const reduced = useReducedMotion()
  const video = useRef<HTMLVideoElement>(null)
  useVideoScrub(video, !reduced)

  const { scrollY } = useScroll()
  const scrollDrift = useTransform(scrollY, (v) => (reduced ? 0 : v * 0.12))
  // Recorder: no scrolling, so drift slowly on a timer and let the video play.
  const timeDrift = useMotionValue(0)
  useEffect(() => {
    if (!REC || reduced) return
    void video.current?.play().catch(() => {})
    const c = animate(timeDrift, 70, { duration: 14, ease: 'linear' })
    return () => c.stop()
  }, [reduced, timeDrift])

  return (
    <motion.div className="hero-photo" style={{ y: REC ? timeDrift : scrollDrift }}>
      <motion.video
        ref={video}
        src={HERO_VIDEO}
        muted
        playsInline
        loop={REC}
        preload="auto"
        aria-hidden
        tabIndex={-1}
        initial={reduced ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </motion.div>
  )
}
