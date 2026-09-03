import { lazy, Suspense } from 'react'
import { Navbar } from './components/layout/Navbar'
import { FinalCta, Footer } from './components/layout/Footer'
import { Features, Integrations } from './components/sections/Features'
import { Hero } from './components/sections/Hero'
import { Pricing } from './components/sections/Pricing'
import { Problem } from './components/sections/Problem'
import { Product } from './components/sections/Product'
import { Roi } from './components/sections/Roi'
import { Workflow } from './components/sections/Workflow'
import { AboutPage } from './pages/About'
import { ContactPage } from './pages/Contact'
import { SignupPage } from './pages/Signup'

const Results = lazy(() => import('./components/sections/Results').then(module => ({ default: module.Results })))

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/about') return <AboutPage />
  if (path === '/contact') return <ContactPage />
  if (path === '/signup') return <SignupPage />
  return <><Navbar /><main><Hero /><Problem /><Product /><Suspense fallback={<div className="results-placeholder" aria-hidden="true" />}><Results /></Suspense><Workflow /><Features /><Integrations /><Roi /><Pricing /><FinalCta /></main><Footer /></>
}

export default App
