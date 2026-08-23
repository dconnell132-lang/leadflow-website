import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { chartData } from '../../data/site'

export function ResultsChart() {
  return <div className="chart-wrap" role="img" aria-label="Illustrative chart showing recovered leads increasing over eight weeks"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData} margin={{ top: 12, right: 8, left: -24, bottom: 0 }}><defs><linearGradient id="leadGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#526df5" stopOpacity={.32} /><stop offset="100%" stopColor="#526df5" stopOpacity={0} /></linearGradient></defs><CartesianGrid stroke="#e9ebf2" vertical={false} /><XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fill: '#8b91a7', fontSize: 11 }} /><YAxis tickLine={false} axisLine={false} tick={{ fill: '#8b91a7', fontSize: 11 }} /><Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e4e7f0', boxShadow: '0 8px 24px rgba(23,31,64,.1)', fontSize: 12 }} /><Area type="monotone" dataKey="leads" stroke="#526df5" strokeWidth={3} fill="url(#leadGradient)" animationDuration={1200} /></AreaChart></ResponsiveContainer></div>
}
