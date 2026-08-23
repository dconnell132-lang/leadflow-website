import { CalendarCheck, Check, Mail, MessageSquare, Phone, Send, Sparkles } from 'lucide-react'
import { features } from '../../data/site'
import { Reveal } from '../animations/Motion'
import { Container, SectionHeading } from '../ui/Primitives'

export function Features() {
  return <section className="section features-section"><Container><SectionHeading eyebrow="Built for the whole follow-up" title="More than an automatic text." text="LeadFlow helps move the conversation forward—from the first response to the next booked job." /><div className="feature-grid">{features.map(({ icon: Icon, title, text }, i) => <Reveal className={`feature-card feature-${i + 1}`} delay={(i % 3) * .07} key={title}><span className="feature-icon"><Icon /></span><h3>{title}</h3><p>{text}</p>{i === 0 && <div className="feature-visual call-visual"><span><Phone size={16} /> Missed call · 10:42</span><i /><span className="auto-response"><Sparkles size={14} /> Reply sent in 4 sec</span></div>}{i === 1 && <div className="feature-visual mini-chat"><span>Can you come tomorrow?</span><span>Yes—9:00 AM is available.</span></div>}{i === 3 && <div className="feature-visual date-visual"><span><CalendarCheck size={18} /> Tue, 9:00 AM</span><Check size={17} /></div>}</Reveal>)}</div></Container></section>
}

export function Integrations() {
  const nodes = [{ icon: Phone, label: 'Phone' }, { icon: MessageSquare, label: 'SMS' }, { icon: Mail, label: 'Email' }, { icon: Send, label: 'Social' }, { icon: CalendarCheck, label: 'Calendar' }]
  return <section className="section integrations-section"><Container><div className="integration-layout"><SectionHeading eyebrow="Connected conversations" align="left" title={<>Bring your lead <span className="no-wrap">channels together.</span></>} text="Build one clear path from customer inquiry to appointment across the channels your business uses. Channel availability will depend on your LeadFlow setup." /><div className="integration-diagram" aria-label="LeadFlow connected to lead channels"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="integration-center"><span><Sparkles /></span><b>LeadFlow</b><small>Response engine</small></div>{nodes.map(({ icon: Icon, label }, i) => <div className={`integration-node node-${i + 1}`} key={label}><Icon size={19} /><span>{label}</span></div>)}</div></div></Container></section>
}
