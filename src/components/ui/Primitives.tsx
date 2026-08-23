import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>
}

export function Badge({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'success' | 'warning' }) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}

export function SectionHeading({ eyebrow, title, text, align = 'center' }: { eyebrow: string; title: ReactNode; text?: string; align?: 'left' | 'center' }) {
  return <div className={`section-heading align-${align}`}><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

export function BrowserFrame({ children, title = 'LeadFlow' }: { children: ReactNode; title?: string }) {
  return <div className="browser-frame"><div className="browser-bar"><span className="browser-dots"><i /><i /><i /></span><span className="browser-title">{title}</span><span /></div>{children}</div>
}
