import { Bot, CalendarCheck, History, MessagesSquare, PhoneCall, Workflow } from 'lucide-react'

export const navigation = [
  { label: 'Product', href: '#product' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
]

export const features = [
  { icon: PhoneCall, title: 'Missed call recovery', text: 'Automatically reach out when your team can’t get to the phone.' },
  { icon: MessagesSquare, title: 'AI conversations', text: 'Keep the conversation moving with helpful, natural replies—not a one-time\u00a0auto-text.' },
  { icon: History, title: 'Smart follow-up', text: 'Stay in touch with interested leads without adding another task to your day.' },
  { icon: CalendarCheck, title: 'Appointment booking', text: 'Guide qualified customers toward an available time and put it on the calendar.' },
  { icon: Bot, title: 'Lead memory', text: 'Keep important context from past conversations together and ready when you need it.' },
  { icon: Workflow, title: 'Flexible automations', text: 'Shape how LeadFlow responds in different situations across your business.' },
]

export const plans = [
  { name: 'Starter', description: 'For small teams ready to recover more opportunities.', price: 'Coming soon', featured: false, features: ['Automated lead response', 'Conversation inbox', 'Appointment handoff'] },
  { name: 'Growth', description: 'For busy service businesses with more lead volume.', price: 'Coming soon', featured: true, features: ['Everything in Starter', 'Smart follow-up', 'Advanced automations', 'Team reporting'] },
  { name: 'Scale', description: 'For multi-location and high-volume\u00a0operations.', price: 'Let’s talk', featured: false, features: ['Everything in Growth', 'Custom workflows', 'Priority support', 'Location controls'] },
]

export const chartData = [
  { week: 'W1', leads: 8 }, { week: 'W2', leads: 17 }, { week: 'W3', leads: 25 },
  { week: 'W4', leads: 40 }, { week: 'W5', leads: 52 }, { week: 'W6', leads: 73 },
  { week: 'W7', leads: 96 }, { week: 'W8', leads: 126 },
]
