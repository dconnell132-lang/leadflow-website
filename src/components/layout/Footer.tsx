import { ArrowUpRight } from 'lucide-react'
import { appLinks, contactEmail } from '../../config/env'
import { navigation } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Primitives'
import { Logo } from '../ui/Logo'

export function FinalCta() {
  return <section className="final-cta" id="contact"><div className="cta-grid" /><Container><span className="cta-orb" /><div><p>Ready when the next lead calls.</p><h2>Your next missed call doesn’t have to become a <span className="no-wrap">missed customer.</span></h2><div><Button href={appLinks.signup} arrow>Get started</Button><Button href={`mailto:${contactEmail}?subject=LeadFlow%20demo`} variant="secondary">Book a demo</Button></div></div></Container></section>
}

export function Footer() {
  return <footer><Container><div className="footer-top"><div className="footer-brand"><Logo /><p>Faster responses. Better follow-up.<br />More chances to book the job.</p></div><div className="footer-links"><div><b>Product</b>{navigation.map(x => <a key={x.href} href={`/${x.href}`}>{x.label}</a>)}</div><div><b>Company</b><a href="/about">About</a><a href={`mailto:${contactEmail}`}>Contact <ArrowUpRight size={12} /></a><a href={appLinks.login}>Log in <ArrowUpRight size={12} /></a></div><div><b>Legal</b><a href={appLinks.privacy}>Privacy</a><a href={appLinks.terms}>Terms</a><a href={appLinks.smsConsent}>SMS consent</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} LeadFlow. All rights reserved.</span><span>Built for businesses that keep the world running.</span></div></Container></footer>
}
