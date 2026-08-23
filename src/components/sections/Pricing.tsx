import { Check } from 'lucide-react'
import { appLinks } from '../../config/env'
import { plans } from '../../data/site'
import { Reveal } from '../animations/Motion'
import { Button } from '../ui/Button'
import { Badge, Container, SectionHeading } from '../ui/Primitives'

export function Pricing() {
  return <section className="section pricing-section" id="pricing"><Container><SectionHeading eyebrow="Pricing" title="A plan that fits the way you grow." text="Final plan details are being prepared. Choose the conversation you’d like to start and we’ll help find the right fit." /><div className="pricing-grid">{plans.map((plan, i) => <Reveal className={`pricing-card ${plan.featured ? 'featured' : ''}`} delay={i * .07} key={plan.name}>{plan.featured && <Badge>Most popular</Badge>}<h3>{plan.name}</h3><p>{plan.description}</p><div className="plan-price">{plan.price}</div><small className="pricing-note">Pricing and usage allowances to be announced</small><Button href={plan.name === 'Scale' ? appLinks.demo : appLinks.signup} variant={plan.featured ? 'primary' : 'secondary'} arrow>{plan.name === 'Scale' ? 'Book a demo' : 'Get updates'}</Button><ul>{plan.features.map(feature => <li key={feature}><Check size={16} />{feature}</li>)}</ul></Reveal>)}</div></Container></section>
}
