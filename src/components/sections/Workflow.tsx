import { Bot, CalendarCheck, CheckCircle2, PhoneCall, SearchCheck, Send } from 'lucide-react'
import { motion } from 'motion/react'
import { Reveal } from '../animations/Motion'
import { Container, SectionHeading } from '../ui/Primitives'

const stages = [{ icon: PhoneCall, title: 'Customer reaches out', text: 'A call, message, or inquiry comes in.' }, { icon: SearchCheck, title: 'Opportunity detected', text: 'LeadFlow recognizes a lead that needs a response.' }, { icon: Send, title: 'Response goes out', text: 'The conversation starts while interest is high.' }, { icon: Bot, title: 'Conversation continues', text: 'Questions are answered and the need becomes clear.' }, { icon: CheckCircle2, title: 'Lead is qualified', text: 'Useful details are collected for your team.' }, { icon: CalendarCheck, title: 'Appointment is booked', text: 'The customer chooses an available time.' }]

export function Workflow() {
  return <section className="section workflow-section" id="how-it-works"><Container><div className="workflow-layout"><SectionHeading eyebrow="How it works" align="left" title={<>From first contact to a <span className="no-wrap">booked appointment.</span></>} text="LeadFlow steps in at the right moment, keeps the customer engaged, and hands your team a clear result." /><div className="workflow-list">{stages.map(({ icon: Icon, title, text }, index) => <Reveal className="workflow-step" delay={index * .05} key={title}><span className="step-number">0{index + 1}</span><span className="step-icon"><Icon size={20} /></span><div><h3>{title}</h3><p>{text}</p></div>{index < stages.length - 1 && <motion.i className="step-connector" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: .7, delay: index * .05 }} />}</Reveal>)}</div></div></Container></section>
}
