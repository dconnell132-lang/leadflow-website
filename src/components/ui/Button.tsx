import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { href?: string; variant?: 'primary' | 'secondary' | 'tertiary'; children: ReactNode; arrow?: boolean }

export function Button({ href, variant = 'primary', children, arrow, className = '', ...props }: Props) {
  const content = <>{children}{arrow && <ArrowRight size={16} aria-hidden="true" />}</>
  if (href) return <a className={`button button-${variant} ${className}`} href={href}>{content}</a>
  return <button className={`button button-${variant} ${className}`} {...props}>{content}</button>
}
