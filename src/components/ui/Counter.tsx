import { useCountUp } from '../../hooks/useCountUp'

type Props = {
  to: number
  prefix?: string
  suffix?: string
  decimals?: number
  delay?: number
  onView?: boolean
  className?: string
}

export function Counter({ to, prefix = '', suffix = '', decimals, delay, onView, className }: Props) {
  const [ref, text] = useCountUp<HTMLSpanElement>(to, { decimals, delay, onView })
  return (
    <span ref={ref} className={className} aria-label={`${prefix}${to.toLocaleString('en-US')}${suffix}`}>
      <span aria-hidden>
        {prefix}
        {text}
        {suffix}
      </span>
    </span>
  )
}
