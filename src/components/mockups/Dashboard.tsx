import { CalendarCheck, ChevronDown, Clock3, MessageSquare, MoreHorizontal, PhoneCall, Search, Sparkles, Star, Zap } from 'lucide-react'
import { BrowserFrame, Badge } from '../ui/Primitives'

const activity = [
  { icon: PhoneCall, title: 'Missed-call text-back', detail: 'Completed · Taylor Morgan', time: 'Now', color: 'blue' },
  { icon: MessageSquare, title: 'SMS lead auto-response', detail: 'Completed · AI reply sent', time: '8 sec', color: 'violet' },
  { icon: CalendarCheck, title: 'Appointment booked', detail: 'Jordan Lee · AC repair', time: '12 min', color: 'green' },
]

export function Dashboard() {
  return <BrowserFrame title="app.leadflow.com"><div className="dash-shell"><aside className="dash-nav"><div className="dash-logo">L</div>{['Overview', 'Inbox', 'Appointments', 'Results', 'Contacts', 'Knowledge Base', 'Activity', 'Settings'].map((x, i) => <div className={i === 0 ? 'active' : ''} key={x}><i />{x}</div>)}</aside><main className="dash-main"><header className="dash-header"><div><small>Overview</small><h3>Welcome back, Alex</h3></div><div className="dash-tools"><Search size={17} /><span className="avatar">AS</span><ChevronDown size={14} /></div></header><div className="dash-metrics">
    <MiniMetric icon={MessageSquare} label="Open conversations" value="14" trend="Awaiting a reply" />
    <MiniMetric icon={MessageSquare} label="Messages sent today" value="32" trend="Across all channels" />
    <MiniMetric icon={Zap} label="Automations fired" value="47" trend="Last 7 days" />
    <MiniMetric icon={Star} label="Review requests" value="9" trend="Last 30 days" />
  </div><div className="dash-grid"><section className="activity-panel"><div className="panel-title"><div><b>Recent automation decisions</b><small>Every decision is logged with a reason</small></div><Badge tone="success"><span className="pulse-dot" /> Live</Badge></div><div>{activity.map(({ icon: Icon, ...item }) => <div className="activity-item" key={item.title}><span className={`activity-icon ${item.color}`}><Icon size={16} /></span><div><b>{item.title}</b><small>{item.detail}</small></div><time>{item.time}</time></div>)}</div></section><section className="lead-panel"><div className="panel-title"><div><b>Upcoming appointments</b><small>Booked and confirmed</small></div><MoreHorizontal size={18} /></div><div className="appointment-list"><div><span>18</span><p><b>Jordan Lee</b><small>AC repair · 9:00 AM</small></p></div><div><span>18</span><p><b>Casey Rivera</b><small>Estimate · 1:30 PM</small></p></div></div><div className="automation-note"><Sparkles size={16} /><span>Reminders schedule automatically for <b>24h &amp; 1h before</b></span></div></section></div></main></div></BrowserFrame>
}

function MiniMetric({ icon: Icon, label, value, trend }: { icon: typeof Clock3; label: string; value: string; trend: string }) {
  return <div className="mini-metric"><span><Icon size={16} /></span><small>{label}</small><b>{value}</b><em>{trend}</em></div>
}
