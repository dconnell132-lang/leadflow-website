import { useEffect } from 'react'
import { Check, HardHat, MessageSquareText, PhoneCall, Wrench } from 'lucide-react'
import { Reveal } from '../components/animations/Motion'
import { FinalCta, Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Primitives'
import { appLinks } from '../config/env'

const principles = [
  {
    icon: HardHat,
    title: 'The work has to come first',
    text: 'When you are in a crawlspace, under a sink, or talking with the customer in front of you, you cannot always stop to answer the next call.',
  },
  {
    icon: PhoneCall,
    title: 'A fast response builds trust',
    text: 'People call because they need help. A quick, thoughtful response lets them know somebody is there—even when the crew is still on a job.',
  },
  {
    icon: MessageSquareText,
    title: 'Follow-up should not rely on memory',
    text: 'Busy days make it easy for a callback or message to slip through. The right system keeps following up so a real opportunity does not disappear.',
  },
]

export function AboutPage() {
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = description?.content

    document.title = 'About LeadFlow — From plumbing to better lead follow-up'
    if (description) description.content = 'The founder of LeadFlow worked in plumbing, saw how easily busy service businesses miss new opportunities, and built a better way to respond.'

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
            <div className="eyebrow">A founder story from the field</div>
            <h1>I worked in plumbing. Then I built <span>LeadFlow.</span></h1>
            <p>Before I ever built software for the trades, I worked in one. Plumbing taught me that a great service business can lose its next customer for one simple reason: everyone is busy taking care of the customer already in front of them.</p>
            <div className="about-hero-actions">
              <Button href="/#how-it-works" arrow>See how it works</Button>
              <Button href={appLinks.signup} variant="secondary">Get started</Button>
            </div>
          </Reveal>
          <Reveal className="founder-visual" delay={.12}>
            <div className="founder-visual-glow" />
            <div className="founder-card">
              <div className="founder-card-top"><span><Wrench size={22} /></span><div><small>From plumbing to LeadFlow</small><b>Built from firsthand experience</b></div></div>
              <blockquote>“The problem wasn’t that we didn’t care about the call. We were already taking care of the customer in front of us.”</blockquote>
              <div className="founder-path" aria-label="The path from a plumbing job to a LeadFlow response">
                <div><span><Wrench size={17} /></span><p><small>In the field</small><b>Plumbing job in progress</b></p><Check size={15} /></div>
                <div><span><PhoneCall size={17} /></span><p><small>Meanwhile</small><b>A new customer calls</b></p><i>Missed</i></div>
                <div className="is-active"><span><MessageSquareText size={17} /></span><p><small>With LeadFlow</small><b>The conversation starts</b></p><i>Replied</i></div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section founder-story">
        <Container className="founder-story-grid">
          <Reveal className="founder-story-heading">
            <div className="eyebrow">Why I built it</div>
            <h2>I learned the problem on the job—not from a spreadsheet.</h2>
          </Reveal>
          <Reveal className="founder-story-copy" delay={.08}>
            <p>I know what it is like to be in the middle of a plumbing job when the phone rings. Your hands are full, the customer standing in front of you deserves your attention, and stopping is not always an option.</p>
            <p>But the person calling does not see any of that. They only know they need help. If nobody answers—or the callback comes too late—they move on. I watched good tradespeople lose good opportunities for reasons that had nothing to do with the quality of their work.</p>
            <aside>LeadFlow did not come from a theory about the trades. It came from working in one.</aside>
            <p>That is why I built LeadFlow: to respond while interest is high, keep the conversation moving, follow up consistently, and help get the appointment on the calendar. It gives a busy service business a reliable front line without asking the people doing the work to become full-time receptionists.</p>
          </Reveal>
        </Container>
      </section>

      <section className="section about-principles">
        <Container>
          <Reveal className="about-principles-heading">
            <div className="eyebrow">What plumbing taught me</div>
            <h2>Built around how the trades actually work.</h2>
            <p>Those days in the field still shape every part of LeadFlow—from the speed of the first response to the follow-up that happens after a long day.</p>
          </Reveal>
          <div className="principles-grid">
            {principles.map(({ icon: Icon, title, text }, index) => <Reveal className="principle-card" delay={index * .07} key={title}><span><Icon size={21} /></span><h3>{title}</h3><p>{text}</p></Reveal>)}
          </div>
        </Container>
      </section>

      <section className="founder-close">
        <Container>
          <Reveal><Wrench size={25} /><p>I built LeadFlow for the businesses doing the work—because I know what that workday feels like.</p></Reveal>
        </Container>
      </section>
      <FinalCta />
    </main>
    <Footer />
  </>
}
