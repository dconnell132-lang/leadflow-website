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

// ONE plan. Keep `trialDays` in step with BILLING_TRIAL_DAYS in the app
// (packages/config/src/env.ts) — the app is what actually sets the trial
// length at checkout, so if these disagree, this page is the one that is lying.
export const plan = {
  name: 'LeadFlow',
  price: '$99',
  cadence: 'per month',
  trialDays: 30,
  description: 'Everything you need to stop losing customers to missed calls.',
  features: [
    'AI receptionist that texts back every missed call',
    'Your own business line with voicemail and transcripts',
    'Appointment booking, reminders and review requests',
    'Shared inbox for texts, Facebook and Instagram',
    'Unlimited messages \u2014 no per-text charges',
    'Cancel any time, yourself, in two clicks',
  ],
}

export const chartData = [
  { week: 'W1', leads: 8 }, { week: 'W2', leads: 17 }, { week: 'W3', leads: 25 },
  { week: 'W4', leads: 40 }, { week: 'W5', leads: 52 }, { week: 'W6', leads: 73 },
  { week: 'W7', leads: 96 }, { week: 'W8', leads: 126 },
]
