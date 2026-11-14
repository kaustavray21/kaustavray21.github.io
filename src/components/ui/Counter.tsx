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
  const [ref, initial] = useCountUp<HTMLSpanElement>(to, { decimals, delay, onView })
  const final = to.toLocaleString('en-US', { minimumFractionDigits: decimals ?? 0, maximumFractionDigits: decimals ?? 0 })
  return (
    <span className={className}>
      <span className="sr-only">{`${prefix}${final}${suffix}`}</span>
      <span aria-hidden>
        {prefix}
        <span ref={ref}>{initial}</span>
        {suffix}
      </span>
    </span>
  )
}
