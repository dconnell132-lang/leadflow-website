import { motion, useReducedMotion } from 'motion/react'
import { CalendarCheck, Check, PhoneMissed, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BrowserFrame } from '../ui/Primitives'

type ConversationEvent = { type: 'event'; icon: LucideIcon; text: string; time: string } | { type: 'agent' | 'customer'; text: string }

const events: ConversationEvent[] = [
  { type: 'event', icon: PhoneMissed, text: 'Missed call detected', time: '10:42 AM' },
  { type: 'agent', text: 'Hi Jacob—sorry we missed your call. How can we help?' },
  { type: 'customer', text: 'My AC stopped working. It’s getting hot in here.' },
  { type: 'agent', text: 'I can help with that. Is the system running but not cooling?' },
  { type: 'customer', text: 'Yes, exactly.' },
]

export function ConversationDemo() {
  const reduced = useReducedMotion()
  return <motion.div className="hero-product" initial={reduced ? false : { opacity: 0, y: 28, rotateX: 5 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: .8, delay: .25 }}>
    <div className="product-glow" />
    <BrowserFrame title="LeadFlow · Conversation">
      <div className="conversation-layout">
        <aside className="conversation-sidebar"><div className="sidebar-brand"><span className="avatar avatar-blue">JM</span><div><b>Jacob M.</b><small>New lead</small></div></div><div className="sidebar-meta"><span>Source</span><b>Missed call</b><span>Service</span><b>AC repair</b><span>Status</span><b className="green-text">Qualified</b></div><div className="ai-active"><Sparkles size={15} /> LeadFlow is active</div></aside>
        <div className="conversation-main"><div className="conversation-head"><div><b>Jacob Miller</b><small>SMS · (555) 014-8821</small></div><span className="live-dot">Active</span></div><div className="message-list">
          {events.map((event, index) => <motion.div key={index} className={`message-row ${event.type}`} initial={reduced ? false : { opacity: 0, y: 9, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: .65 + index * .55, duration: .4 }}>
            {event.type === 'event' ? <div className="call-event"><PhoneMissed size={14} /><span>{event.text}</span><small>{event.time}</small></div> : <div className="bubble">{event.text}</div>}
          </motion.div>)}
          <motion.div className="appointment-chip" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.7 }}><CalendarCheck size={18} /><div><b>Appointment booked</b><span>Tomorrow, 9:00–11:00 AM</span></div><Check size={16} /></motion.div>
        </div></div>
      </div>
    </BrowserFrame>
    <motion.div className="recovered-toast" initial={reduced ? false : { opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 4.15, duration: .45 }}><span><Check size={16} /></span><div><b>Lead recovered</b><small>Appointment added to calendar</small></div></motion.div>
  </motion.div>
}
