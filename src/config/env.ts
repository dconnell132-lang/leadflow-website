const trimSlash = (value: string) => value.replace(/\/$/, '')

const defaultAppUrl = 'https://followup-web-3tr7.onrender.com'

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
