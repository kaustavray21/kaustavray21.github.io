import type { Metric } from '../../data/experience'
import { Counter } from './Counter'

export function MetricValue({ m, onView }: { m: Metric; onView?: boolean }) {
  if (typeof m.value === 'string') return <span>{m.value}</span>
  return <Counter to={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} onView={onView} />
}
