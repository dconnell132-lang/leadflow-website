import { appConfig } from '../config/env'

/**
 * Marketing-site calls into the LeadFlow app's public signup API. The app
 * allows these origins via CORS (MARKETING_ALLOWED_ORIGINS on the server).
 * No cookies cross this boundary: after the account is created the app hands
 * back a one-time `continueUrl` and the browser navigates there, where the
 * session is established first-party.
 */

export interface ApiResult {
  ok: boolean
  error?: string
  continueUrl?: string
}

async function post(path: string, body: Record<string, unknown>): Promise<ApiResult> {
  try {
    const res = await fetch(`${appConfig.apiUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = (await res.json().catch(() => ({}))) as { error?: string; continueUrl?: string }
    if (!res.ok) return { ok: false, error: data.error ?? 'Something went wrong — try again.' }
    return { ok: true, continueUrl: data.continueUrl }
  } catch {
    return { ok: false, error: "Couldn't reach LeadFlow — check your connection and try again." }
  }
}

/** Step 1: email a 6-digit verification code. `website` is the honeypot field. */
export function requestSignupCode(input: { email: string; website?: string }): Promise<ApiResult> {
  return post('/auth/signup/request-code', input)
}

/** Step 2: create the account with the emailed code. */
export function createAccount(input: {
  businessName: string
  name: string
  email: string
  password: string
  code: string
  website?: string
}): Promise<ApiResult> {
  return post('/auth/signup', input)
}
