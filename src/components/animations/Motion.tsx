import { motion, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode } from 'react'

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(reduced ? value : 0)
  useEffect(() => {
    if (!inView || reduced) return
    const start = performance.now(); const duration = 1100
    const tick = (now: number) => { const progress = Math.min((now - start) / duration, 1); setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) requestAnimationFrame(tick) }
    const frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame)
  }, [inView, reduced, value])
  return <span ref={ref}>{prefix}{display.toLocaleString()}{suffix}</span>
}
