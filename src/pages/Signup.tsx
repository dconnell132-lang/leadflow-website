import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, MailCheck } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { Container } from '../components/ui/Primitives'
import { Button } from '../components/ui/Button'
import { appConfig, appLinks } from '../config/env'
import { plan } from '../data/site'
import { createAccount, requestSignupCode } from '../lib/api'

/**
 * Embedded signup: the account is created against the LeadFlow app's API
 * without leaving the marketing site. Two steps — details, then the 6-digit
 * code we email to prove the address is real. On success the browser follows
 * the app's one-time login link, which lands on the app's payment step and
 * then onboarding. The destination is the app's to decide — we just follow
 * the continueUrl it hands back.
 */
export function SignupPage() {
  const [businessName, setBusinessName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [website, setWebsite] = useState('') // honeypot — humans never see it
  const [step, setStep] = useState<'details' | 'code'>('details')
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function sendCode(e?: FormEvent) {
    e?.preventDefault()
    setError(null)
    setNotice(null)
    if (!businessName.trim() || !name.trim() || !email.trim() || password.length < 8) {
      setError('Fill in every field (password at least 8 characters) first.')
      return
    }
    setLoading(true)
    try {
      const res = await requestSignupCode({ email, website })
      if (!res.ok) {
        setError(res.error ?? "Couldn't send the code.")
        return
      }
      setStep('code')
      setNotice(`We emailed a 6-digit code to ${email.trim()}. It expires in 15 minutes.`)
    } finally {
      setLoading(false)
    }
  }

  async function submit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await createAccount({ businessName, name, email, password, code, website })
      if (!res.ok) {
        setError(res.error ?? 'Sign-up failed.')
        return
      }
      window.location.assign(res.continueUrl ?? `${appConfig.appUrl}/onboarding`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="signup-page">
      <Navbar />
      <section className="signup-section">
        <div className="hero-grid-bg" />
        <Container>
          <div className="signup-card">
            <div className="signup-head">
              <div className="eyebrow">Get started</div>
              <h1>Create your LeadFlow account</h1>
              <p>
                Free for {plan.trialDays} days. We&apos;ll ask for a card on the next step so we can set up
                your business line — you won&apos;t be charged today.
              </p>
            </div>
            <form onSubmit={step === 'details' ? sendCode : submit}>
              <input
                type="text"
                name="website"
                value={website}
                onChange={e => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="signup-trap"
              />
              <label className="signup-field">
                <span>Business name</span>
                <input value={businessName} onChange={e => setBusinessName(e.target.value)} placeholder="Smith Plumbing" autoComplete="organization" required maxLength={120} disabled={step === 'code'} />
              </label>
              <label className="signup-field">
                <span>Your name</span>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Alex Smith" autoComplete="name" required maxLength={120} disabled={step === 'code'} />
              </label>
              <label className="signup-field">
                <span>Email</span>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" required maxLength={254} disabled={step === 'code'} />
              </label>
              <label className="signup-field">
                <span>Password</span>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="new-password" required minLength={8} disabled={step === 'code'} />
                <small>At least 8 characters.</small>
              </label>

              {step === 'code' && (
                <label className="signup-field">
                  <span>Verification code</span>
                  <input
                    className="signup-code"
                    inputMode="numeric"
                    pattern="\d{6}"
                    maxLength={6}
                    value={code}
                    onChange={e => setCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="••••••"
                    autoFocus
                    required
                  />
                  <small>
                    Check your inbox (and spam folder).{' '}
                    <button type="button" className="signup-link" onClick={() => void sendCode()} disabled={loading}>Send a new code</button>
                    {' · '}
                    <button type="button" className="signup-link" onClick={() => { setStep('details'); setCode(''); setNotice(null); setError(null) }}>Edit details</button>
                  </small>
                </label>
              )}

              {notice && <p className="signup-notice"><MailCheck size={15} /> {notice}</p>}
              {error && <p className="signup-error">{error}</p>}
              <Button type="submit" arrow disabled={loading} className="signup-submit">
                {loading ? (step === 'details' ? 'Sending code…' : 'Creating your account…') : step === 'details' ? 'Email me a verification code' : 'Create account'}
              </Button>
              <p className="signup-alt">
                Already have an account? <a href={appLinks.login}>Sign in</a>
              </p>
            </form>
            <div className="signup-proof">
              <span><CheckCircle2 size={15} /> {plan.trialDays} days free</span>
              <span><CheckCircle2 size={15} /> Guided setup</span>
              <span><CheckCircle2 size={15} /> Cancel anytime</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
