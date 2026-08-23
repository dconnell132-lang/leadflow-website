import { Reveal } from '../animations/Motion'
import { Dashboard } from '../mockups/Dashboard'
import { Badge, Container, SectionHeading } from '../ui/Primitives'

export function Product() {
  return <section className="section product-section" id="product"><Container><SectionHeading eyebrow="One place to run lead response" title="See every opportunity. Know what happens next." text="A clear workspace for conversations, follow-up, appointments, and the work LeadFlow is handling for you." /><Reveal className="dashboard-stage"><div className="dashboard-label"><Badge tone="success">● Example LeadFlow workspace</Badge><span>Illustrative product data</span></div><Dashboard /></Reveal></Container></section>
}
