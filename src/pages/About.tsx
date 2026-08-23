import { useEffect } from 'react'
import { HardHat, HeartHandshake, PhoneCall, Wrench } from 'lucide-react'
import { Reveal } from '../components/animations/Motion'
import { FinalCta, Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Primitives'
import { appLinks } from '../config/env'

const principles = [
  {
    icon: HardHat,
    title: 'Built around the real workday',
    text: 'LeadFlow is designed for people who are driving, working with their hands, and taking care of customers—not sitting at a desk all day.',
  },
  {
    icon: HeartHandshake,
    title: 'Technology that helps people',
    text: 'The goal is not to replace the personal side of a service business. It is to make sure a good customer never gets ignored while the team is busy.',
  },
  {
    icon: PhoneCall,
    title: 'Every opportunity deserves a response',
    text: 'A fast, thoughtful reply can be the difference between a missed call and a booked job. LeadFlow keeps that opportunity alive.',
  },
]

export function AboutPage() {
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = description?.content

    document.title = 'About LeadFlow — Built from experience in the trades'
    if (description) description.content = 'LeadFlow was inspired by firsthand experience in plumbing and built to help service businesses respond to every lead.'

    return () => {
      document.title = previousTitle
      if (description && previousDescription) description.content = previousDescription
    }
  }, [])

  return <>
    <Navbar />
    <main className="about-page">
      <section className="about-hero" id="top">
        <div className="about-grid-bg" />
        <Container className="about-hero-inner">
          <Reveal className="about-hero-copy">
            <div className="eyebrow">Our story</div>
            <h1>LeadFlow started with a <span>wrench in my hand.</span></h1>
            <p>Before I built LeadFlow, I worked as a plumber. That experience showed me how easily a great service business can lose its next customer simply because everyone is busy doing the work.</p>
            <div className="about-hero-actions">
              <Button href="/#how-it-works" arrow>See how it works</Button>
              <Button href={appLinks.signup} variant="secondary">Get started</Button>
            </div>
          </Reveal>
          <Reveal className="founder-visual" delay={.12}>
            <div className="founder-visual-glow" />
            <div className="founder-card">
              <div className="founder-card-top"><span><Wrench size={22} /></span><small>Why I built LeadFlow</small></div>
              <blockquote>“You shouldn’t have to choose between doing the job right and answering the next lead.”</blockquote>
              <div className="founder-card-call"><span><PhoneCall size={18} /></span><div><small>Missed call</small><b>Opportunity still open</b></div><i>LeadFlow replies</i></div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section founder-story">
        <Container className="founder-story-grid">
          <Reveal className="founder-story-heading">
            <div className="eyebrow">From the field</div>
            <h2>The problem I couldn’t stop thinking about.</h2>
          </Reveal>
          <Reveal className="founder-story-copy" delay={.08}>
            <p>When your hands are on a job, you cannot always stop to answer the phone. But the person calling does not know that. They only know they need help—and if nobody responds, they may call the next business on the list.</p>
            <p>I saw that good tradespeople were losing work for reasons that had nothing to do with the quality of their service. The calls, messages, and follow-up were simply too much to manage while running jobs and taking care of customers.</p>
            <p>That is what inspired me to build LeadFlow: a system that responds quickly, keeps the conversation moving, follows up, and helps turn interest into a booked appointment. It gives service businesses a reliable front line, even when the whole team is out in the field.</p>
          </Reveal>
        </Container>
      </section>

      <section className="section about-principles">
        <Container>
          <Reveal className="about-principles-heading">
            <div className="eyebrow">What guides us</div>
            <h2>Built for the people who keep things running.</h2>
            <p>LeadFlow is shaped by a simple idea: hardworking service businesses deserve technology that understands how their day actually works.</p>
          </Reveal>
          <div className="principles-grid">
            {principles.map(({ icon: Icon, title, text }, index) => <Reveal className="principle-card" delay={index * .07} key={title}><span><Icon size={21} /></span><h3>{title}</h3><p>{text}</p></Reveal>)}
          </div>
        </Container>
      </section>

      <section className="founder-close">
        <Container>
          <Reveal><Wrench size={25} /><p>Built from firsthand experience. Focused on helping the trades grow.</p></Reveal>
        </Container>
      </section>
      <FinalCta />
    </main>
    <Footer />
  </>
}
