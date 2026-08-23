import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { appLinks } from '../../config/env'
import { navigation } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Primitives'
import { Logo } from '../ui/Logo'

export function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false)
  const isHome = window.location.pathname === '/'
  useEffect(() => { const update = () => setScrolled(window.scrollY > 12); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update) }, [])
  const homeHref = (href: string) => isHome ? href : `/${href}`
  return <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}><Container className="nav-inner"><Logo /><nav className="desktop-nav" aria-label="Primary">{navigation.map(item => <a key={item.href} href={homeHref(item.href)}>{item.label}</a>)}<a href="/about" aria-current={!isHome ? 'page' : undefined}>About</a></nav><div className="nav-actions"><a className="login-link" href={appLinks.login}>Log in</a><Button href={appLinks.signup} arrow>Get started</Button></div><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button></Container>{open && <nav className="mobile-nav" aria-label="Mobile">{navigation.map(item => <a key={item.href} href={homeHref(item.href)} onClick={() => setOpen(false)}>{item.label}</a>)}<a href="/about" aria-current={!isHome ? 'page' : undefined} onClick={() => setOpen(false)}>About</a><a href={appLinks.login}>Log in</a><Button href={appLinks.signup} arrow>Get started</Button></nav>}</header>
}
