import { useMemo, useState } from 'react'
import { Calculator, Info, TrendingUp } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Container, SectionHeading } from '../ui/Primitives'

export function Roi() {
  const [jobValue, setJobValue] = useState(500); const [leads, setLeads] = useState(30); const [rate, setRate] = useState(40)
  const total = useMemo(() => jobValue * leads * (rate / 100), [jobValue, leads, rate]); const reduced = useReducedMotion()
  return <section className="section roi-section"><Container><div className="roi-shell"><div className="roi-intro"><span className="roi-icon"><Calculator /></span><SectionHeading eyebrow="Opportunity calculator" align="left" title="What could missed leads be worth?" text="Use your own numbers to estimate the monthly opportunity sitting behind unanswered calls and messages." /><div className="estimate-note"><Info size={16} /> This is an estimate—not a promise of revenue or LeadFlow performance.</div></div><div className="calculator-card"><Field label="Average job value" value={jobValue} setValue={setJobValue} min={100} max={5000} step={50} prefix="$" /><Field label="Missed leads per month" value={leads} setValue={setLeads} min={1} max={150} /><Field label="Estimated close rate" value={rate} setValue={setRate} min={5} max={100} suffix="%" /><div className="roi-result"><span>Potential missed opportunity</span><motion.strong key={total} initial={reduced ? false : { opacity: .5, y: 5 }} animate={{ opacity: 1, y: 0 }}>${Math.round(total).toLocaleString()}<small>/month</small></motion.strong><p><TrendingUp size={15} /> Based on {leads} leads × ${jobValue.toLocaleString()} × {rate}%</p></div></div></div></Container></section>
}

function Field({ label, value, setValue, min, max, step = 1, prefix, suffix }: { label: string; value: number; setValue: (v: number) => void; min: number; max: number; step?: number; prefix?: string; suffix?: string }) {
  return <label className="calc-field"><span><b>{label}</b><output>{prefix}{value.toLocaleString()}{suffix}</output></span><input type="range" value={value} min={min} max={max} step={step} onChange={e => setValue(Number(e.target.value))} aria-label={label} /></label>
}
