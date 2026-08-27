import { Check } from 'lucide-react'
import { appLinks } from '../../config/env'
import { plan } from '../../data/site'
import { Reveal } from '../animations/Motion'
import { Button } from '../ui/Button'
import { Container, SectionHeading } from '../ui/Primitives'

/**
 * One plan, one price. This replaced a three-tier "Coming soon" grid — there
 * is only one product and inventing tiers around it made the page ask a
 * question the visitor cannot answer.
 *
 * The trial length and price here are marketing copy; the app is what actually
 * charges (BILLING_TRIAL_DAYS / the Stripe Price). If they ever disagree, this
 * page is the one that is wrong.
 */
export function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="One plan. Everything included."
          text={`Try it free for ${plan.trialDays} days. No setup fees, no per-message charges, and no contract to get out of.`}
        />
        <div className="pricing-single">
          <Reveal className="pricing-card featured">
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <div className="plan-price">
              {plan.price} <span className="plan-cadence">{plan.cadence}</span>
            </div>
            <small className="pricing-note">
              Free for your first {plan.trialDays} days · card required to start
            </small>
            <Button href={appLinks.signup} variant="primary" arrow>
              Start your free trial
            </Button>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
