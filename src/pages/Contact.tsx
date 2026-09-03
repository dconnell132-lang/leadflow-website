import { useEffect, useState, type FormEvent } from 'react'
import { ArrowUpRight, HelpCircle, Mail, MessageSquareText, Phone, Plus } from 'lucide-react'
import { Reveal } from '../components/animations/Motion'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Primitives'
import { contactEmail, contactPhone, contactPhoneDisplay } from '../config/env'

const faqs = [
  {
    question: 'What does LeadFlow do after I miss a call?',
    answer: 'LeadFlow can respond right away, begin a helpful text conversation, collect the details your team needs, continue following up, and guide the customer toward an appointment.',
  },
  {
    question: 'Is LeadFlow meant to replace my team?',
    answer: 'No. It is built to support your team when everyone is driving, on a job, or helping another customer. Your business stays in control while LeadFlow keeps new opportunities from going quiet.',
  },
  {
    question: 'What kinds of businesses is it built for?',
    answer: 'LeadFlow is designed around the day-to-day reality of plumbing and other home-service businesses where the people doing the work cannot always stop to answer every call.',
  },
  {
    question: 'Can I ask about my specific setup before signing up?',
    answer: `Absolutely. Call or text us at ${contactPhoneDisplay}, or use the question form above. Tell us how your leads arrive and what you want to improve, and we will help you think through the fit.`,
  },
]

export function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [question, setQuestion] = useState('')

  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = description?.content

    document.title = 'Contact LeadFlow — Call, text, or ask a question'
    if (description) description.content = `Questions about LeadFlow? Call or text ${contactPhoneDisplay}, email ${contactEmail}, or send us your question.`

    return () => {
      document.title = previousTitle
      if (description && previousDescription) description.content = previousDescription
    }
  }, [])

  function askQuestion(event: FormEvent) {
    event.preventDefault()
    const subject = encodeURIComponent(`LeadFlow question from ${name.trim()}`)
    const body = encodeURIComponent(`Name: ${name.trim()}\nReply email: ${email.trim()}\n\nQuestion or feedback:\n${question.trim()}`)
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return <>
    <Navbar />
    <main className="contact-page">
      <section className="contact-hero" id="top">
        <div className="hero-grid-bg" />
        <Container className="contact-grid">
          <Reveal className="contact-copy">
            <div className="eyebrow">Talk to LeadFlow</div>
            <h1>Questions? <span>Ask away.</span></h1>
            <p>Whether you want to see if LeadFlow fits your business or simply have feedback for us, reach out however is easiest. A real person will get back to you.</p>
            <div className="contact-methods">
              <a className="contact-method" href={`tel:${contactPhone}`}><span><Phone size={20} /></span><div><small>Call us</small><b>{contactPhoneDisplay}</b></div><ArrowUpRight size={16} /></a>
              <a className="contact-method" href={`sms:${contactPhone}`}><span><MessageSquareText size={20} /></span><div><small>Text us</small><b>{contactPhoneDisplay}</b></div><ArrowUpRight size={16} /></a>
              <a className="contact-method" href={`mailto:${contactEmail}`}><span><Mail size={20} /></span><div><small>Email us</small><b>{contactEmail}</b></div><ArrowUpRight size={16} /></a>
            </div>
          </Reveal>

          <Reveal className="question-panel" delay={.1}>
            <span id="ask" className="contact-anchor" aria-hidden="true" />
            <div className="question-panel-head"><span><HelpCircle size={23} /></span><div><h2>Ask us anything</h2><p>Questions, ideas, or feedback—we want to hear it.</p></div></div>
            <form className="contact-form" onSubmit={askQuestion}>
              <label className="contact-field"><span>Your name</span><input value={name} onChange={event => setName(event.target.value)} autoComplete="name" placeholder="Alex Smith" required maxLength={120} /></label>
              <label className="contact-field"><span>Your email</span><input type="email" value={email} onChange={event => setEmail(event.target.value)} autoComplete="email" placeholder="alex@company.com" required maxLength={254} /></label>
              <label className="contact-field contact-field-full"><span>What can we help with?</span><textarea value={question} onChange={event => setQuestion(event.target.value)} placeholder="Ask a question or share your feedback..." required maxLength={3000} /></label>
              <Button type="submit" arrow className="contact-submit">Send your question</Button>
              <p className="contact-form-note"><Mail size={12} /> This opens your email app with your message ready to send.</p>
            </form>
          </Reveal>
        </Container>
      </section>

      <section className="section contact-faq">
        <Container className="contact-faq-layout">
          <Reveal className="contact-faq-heading">
            <div className="eyebrow">Quick answers</div>
            <h2>A few things people ask us.</h2>
            <p>Do not see your question here? Send it directly and we will help.</p>
            <a href="#ask"><MessageSquareText size={16} /> Ask your own question</a>
          </Reveal>
          <Reveal className="faq-list" delay={.08}>
            {faqs.map(item => <details className="faq-item" key={item.question}><summary>{item.question}<Plus size={18} /></summary><p>{item.answer}</p></details>)}
          </Reveal>
        </Container>
      </section>

      <section className="contact-direct">
        <Container>
          <div><h2>Still deciding what to ask?</h2><p>Start with what is happening in your business today. We will take it from there.</p></div>
          <div className="contact-direct-actions"><Button href={`sms:${contactPhone}`}>Text {contactPhoneDisplay}</Button><Button href={`mailto:${contactEmail}`} variant="secondary">Email us</Button></div>
        </Container>
      </section>
    </main>
    <Footer />
  </>
}
