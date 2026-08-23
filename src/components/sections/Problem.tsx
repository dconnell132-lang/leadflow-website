import { CalendarCheck, Check, Clock, MessageSquare, PhoneIncoming, PhoneMissed, UserRoundX, Zap } from 'lucide-react'
import { Reveal } from '../animations/Motion'
import { Container, SectionHeading } from '../ui/Primitives'

const withoutFlow = [{ icon: PhoneIncoming, text: 'Incoming call' }, { icon: PhoneMissed, text: 'Call missed' }, { icon: Clock, text: 'Customer waits' }, { icon: UserRoundX, text: 'Lead lost' }]
const withFlow = [{ icon: PhoneIncoming, text: 'Incoming call' }, { icon: Zap, text: 'Instant response' }, { icon: MessageSquare, text: 'Conversation' }, { icon: CalendarCheck, text: 'Job booked' }]

export function Problem() {
  return <section className="section problem-section" id="problem"><Container><SectionHeading eyebrow="The missed-call gap" title={<>Every missed call can be a <span className="accent-text">missed job.</span></>} text="Customers rarely wait around. LeadFlow keeps the opportunity alive from the moment your team can’t answer." /><div className="flow-comparison"><FlowCard label="Without LeadFlow" items={withoutFlow} danger /><FlowCard label="With LeadFlow" items={withFlow} /></div></Container></section>
}

function FlowCard({ label, items, danger = false }: { label: string; items: typeof withoutFlow; danger?: boolean }) {
  return <Reveal className={`flow-card ${danger ? 'danger' : 'success'}`}><div className="flow-label"><span>{danger ? <PhoneMissed size={16} /> : <Check size={16} />}</span>{label}</div><div className="flow-items">{items.map(({ icon: Icon, text }, index) => <div className="flow-step" key={text}><span className="flow-icon"><Icon size={20} /></span><b>{text}</b>{index < items.length - 1 && <i className="flow-line" />}</div>)}</div><div className="flow-outcome">{danger ? 'Opportunity gone' : 'Lead recovered'}<span>{danger ? '×' : '✓'}</span></div></Reveal>
}
