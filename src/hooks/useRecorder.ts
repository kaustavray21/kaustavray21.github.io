/**
 * Recorder mode (?rec=1): the whole page is captured in one tall frame, so nothing scrolls.
 * Scroll-driven effects run on a timeline instead (spec timings).
 */
export const REC = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('rec')

export const REC_TIMING = {
  statement: { delay: 1.3, duration: 2.9 }, // 1.3 – 4.2 s
  impact: 3.5, // counters + avatars 3.5 – 5.2 s
  awardsLift: 5.3,
} as const
