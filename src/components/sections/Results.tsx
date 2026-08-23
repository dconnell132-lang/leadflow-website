import { CalendarCheck, Clock3, DollarSign, PhoneForwarded } from 'lucide-react'
import { AnimatedNumber, Reveal } from '../animations/Motion'
import { ResultsChart } from '../charts/ResultsChart'
import { Container, SectionHeading } from '../ui/Primitives'

const metrics = [{ icon: DollarSign, label: 'Revenue recovered', value: 24620, prefix: '$' }, { icon: PhoneForwarded, label: 'Leads captured', value: 126 }, { icon: Clock3, label: 'Missed calls recovered', value: 42 }, { icon: CalendarCheck, label: 'Appointments booked', value: 38 }]

const funnel = [
  { label: 'Missed calls detected', value: 68, width: '100%' },
  { label: 'Recovery texts sent', value: 61, width: '90%' },
  { label: 'Missed calls recovered', value: 42, width: '70%' },
  { label: 'Appointments booked', value: 38, width: '56%' },
  { label: 'Appointments confirmed', value: 31, width: '43%' },
]

export function Results() {
  return <section className="section results-section" id="results"><Container><SectionHeading eyebrow="Clarity, not guesswork" title="See the opportunities your team is recovering." text="LeadFlow’s Results view connects calls, replies, appointments, and attributed outcomes—without hiding how the numbers are calculated." /><Reveal className="analytics-card"><div className="analytics-top"><div><span className="demo-kicker">Illustrative account · Sample data</span><h3>Results · August</h3></div><select aria-label="Chart date range" defaultValue="8"><option value="8">Last 8 weeks</option></select></div><div className="metric-grid">{metrics.map(({ icon: Icon, ...metric }) => <div className="metric-card" key={metric.label}><span><Icon size={17} /></span><small>{metric.label}</small><strong><AnimatedNumber {...metric} /></strong></div>)}</div><div className="results-detail-grid"><div><div className="chart-header"><div><small>Recovered leads</small><b>Consistent response turns into momentum</b></div><span><i /> Recovered</span></div><ResultsChart /></div><div className="recovery-funnel"><div><small>Lead recovery funnel</small><b>See every step behind the result</b></div>{funnel.map(row => <div className="funnel-row" key={row.label} style={{ width: row.width }}><span>{row.label}</span><b>{row.value}</b></div>)}</div></div><p className="data-note">Demo visualization only. These figures do not represent customer results or a guarantee of performance.</p></Reveal></Container></section>
}
