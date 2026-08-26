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
}
