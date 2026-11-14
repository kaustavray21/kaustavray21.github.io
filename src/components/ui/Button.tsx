import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'dark' | 'light'
  children: ReactNode
}

/** Pill link-button with the spec's 1px hover lift. */
export function Button({ variant = 'dark', className = '', children, ...rest }: Props) {
  return (
    <a className={`btn btn-${variant} ${className}`} {...rest}>
      {children}
    </a>
  )
}

export const Arrow = () => <span aria-hidden className="btn-arrow">↗</span>
