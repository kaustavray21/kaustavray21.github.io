import { useEffect, useState } from 'react'

/** Reveals `text` one character at a time after `startDelay` ms, `speed` ms per character. */
export function useTypewriter(text: string, speed = 38, startDelay = 600, enabled = true) {
  const [typed, setTyped] = useState({ text, count: 0 })

  useEffect(() => {
    if (!enabled) return
    let interval: ReturnType<typeof setInterval> | undefined
    const start = setTimeout(() => {
      let count = 0
      interval = setInterval(() => {
        count += 1
        setTyped({ text, count })
        if (count >= text.length) clearInterval(interval)
      }, speed)
    }, startDelay)
    return () => {
      clearTimeout(start)
      clearInterval(interval)
    }
  }, [text, speed, startDelay, enabled])

  // Disabled (reduced motion) shows everything; a new `text` restarts from empty.
  const count = !enabled ? text.length : typed.text === text ? typed.count : 0
  return { displayed: text.slice(0, count), done: count >= text.length }
}
