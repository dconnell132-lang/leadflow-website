import { Zap } from 'lucide-react'

export function Logo({ light = false }: { light?: boolean }) {
  return <a className={`logo ${light ? 'logo-light' : ''}`} href="/" aria-label="LeadFlow home"><span><Zap size={15} fill="currentColor" /></span>LeadFlow</a>
}
