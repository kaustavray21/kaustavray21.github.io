import type { SimpleIcon } from 'simple-icons'

export function Icon({ icon, size = 12, className }: { icon: SimpleIcon; size?: number | string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} role="img" aria-label={icon.title}>
      <path d={icon.path} fill="currentColor" />
    </svg>
  )
}
