const trimSlash = (value: string) => value.replace(/\/$/, '')

// The app lives on its own subdomain; this marketing site is what serves the
// apex. Never point these at theleadflowpros.com — that is this site, so the
// login link would loop back here and the signup form would POST at itself.
//
// These are Vite variables, which means they are compiled into the bundle at
// BUILD time. Changing them in the Cloudflare Pages dashboard does nothing
// until the site is rebuilt, so the default below is the value that actually
// ships unless a build overrides it.
const defaultAppUrl = 'https://app.theleadflowpros.com'

export const appConfig = {
  appUrl: trimSlash(import.meta.env.VITE_LEADFLOW_APP_URL || defaultAppUrl),
  apiUrl: trimSlash(import.meta.env.VITE_LEADFLOW_API_URL || `${defaultAppUrl}/api`),
}

export const appLinks = {
  login: `${appConfig.appUrl}/login`,
  // The signup form now lives ON this site (src/pages/Signup.tsx) and
  // talks to the app's API; login still links through to the app.
  signup: '/signup',
  demo: '#contact',
  // Legal and compliance pages are served by the APP, not this site — it has
  // no routes for them. These were '#legal' placeholders, which is a problem
  // once this site owns the apex: carrier (A2P/TCR), Meta and Google reviewers
  // land on theleadflowpros.com and look for exactly these three.
  privacy: `${appConfig.appUrl}/privacy`,
  terms: `${appConfig.appUrl}/terms`,
  smsConsent: `${appConfig.appUrl}/sms-consent`,
}

// The address that actually exists: Namecheap forwards it to the owner's
// inbox, and SendGrid sends as it. Previously hello@leadflow.com — a domain
// we do not own, so every demo request sent from this site went nowhere.
export const contactEmail = 'hello@theleadflowpros.com'
