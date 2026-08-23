# LeadFlow marketing website

Public marketing site for LeadFlow, built as a separate project from the LeadFlow SaaS application.

## Local development

Requires a current Node.js version supported by Vite 8.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Vite prints the local URL (normally `http://localhost:5173`). The default URL configuration works without an `.env.local`; app CTAs then point to the live LeadFlow SaaS deployment.

## Production build

```bash
npm run lint
npm run build
```

Deploy the generated `dist/` directory to any static host. No server runtime is required for the marketing site.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_LEADFLOW_APP_URL` | Base URL for Log In and Get Started destinations in the separate SaaS app. |
| `VITE_LEADFLOW_API_URL` | Public API base reserved for future demo, contact, signup, and onboarding requests. |

All `VITE_` values are exposed to the browser. Never place tokens, private credentials, or other secrets in these variables. URL handling lives in `src/config/env.ts`; the future request boundary is isolated in `src/lib/api.ts`. No API calls are currently made.

## Domain architecture

- `leadflow.com` → this static marketing website
- `app.leadflow.com` → the separate LeadFlow SaaS application

Set the final URLs in the hosting provider's production environment. DNS and the SaaS repository are intentionally outside this project's scope.

## Demo and placeholder content

Dashboard metrics and chart data are illustrative and labeled in the interface. Pricing is intentionally marked “Coming soon” and is configured in `src/data/site.ts`. The demo CTA currently opens an email draft; replace it with a real form/API flow when the public endpoint is available. Privacy and Terms links are placeholders until real legal pages are supplied.
