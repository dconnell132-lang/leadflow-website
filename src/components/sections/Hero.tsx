import { ArrowDown, CheckCircle2, Play } from 'lucide-react'
import { appLinks } from '../../config/env'
import { Reveal } from '../animations/Motion'
import { ConversationDemo } from '../mockups/ConversationDemo'
import { Button } from '../ui/Button'
import { Badge, Container } from '../ui/Primitives'

export function Hero() {
  return <section className="hero-section" id="top"><div className="hero-grid-bg" /><Container><div className="hero-copy"><Reveal><Badge><span className="badge-spark">✦</span> Your always-on lead response team</Badge><h1>Turn missed calls into <span>booked jobs.</span></h1><p>LeadFlow responds to new leads, continues the conversation, follows up, and helps book the appointment—while your team stays focused on the work.</p><div className="hero-actions"><Button href={appLinks.signup} arrow>Get started</Button><Button href="#product" variant="secondary"><Play size={15} fill="currentColor" /> See how it works</Button></div><div className="hero-proof"><span><CheckCircle2 size={16} /> Instant response</span><span><CheckCircle2 size={16} /> Less manual follow-up</span><span><CheckCircle2 size={16} /> More booked work</span></div></Reveal></div><ConversationDemo /><a href="#problem" className="scroll-cue" aria-label="Scroll to learn more"><ArrowDown size={17} /></a></Container></section>
}
