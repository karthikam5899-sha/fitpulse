import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function StatCard({ icon: Icon, label, value, unit, change, progress, index = 0 }) {
  const valueRef = useRef(null)
  const previousTargetRef = useRef(null)
  const target = Number(String(value).replace(/,/g, ''))
  const canCount = Number.isFinite(target)
  const [count, setCount] = useState(canCount ? 0 : value)

  useEffect(() => {
    if (!canCount) return undefined
    const previousTarget = previousTargetRef.current
    previousTargetRef.current = target
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setCount(target)
      return undefined
    }

    let frame
    function animate(from) {
      setCount(from)
      const start = performance.now()
      const duration = 900
      function update(now) {
        const ratio = Math.min((now - start) / duration, 1)
        setCount(Math.round(from + (target - from) * ratio))
        if (ratio < 1) frame = requestAnimationFrame(update)
      }
      frame = requestAnimationFrame(update)
    }

    if (previousTarget !== null) {
      animate(previousTarget)
      return () => cancelAnimationFrame(frame)
    }

    setCount(0)
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      animate(0)
      observer.disconnect()
    }, { threshold: 0.4 })

    if (valueRef.current) observer.observe(valueRef.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [canCount, target])

  const displayedValue = canCount ? count.toLocaleString('en-US') : value
  return (
    <article className="scroll-reveal dashboard-stat-card surface surface-hover p-5 sm:p-6" style={{ animationDelay: `${index * 90}ms` }}>
      <div className="flex items-center justify-between gap-3">
        <div className="dashboard-stat-icon grid h-11 w-11 place-items-center rounded-xl bg-[#c4f56b]/10 text-[#c4f56b]"><Icon size={21} /></div>
        <span className="flex items-center gap-1 text-xs font-semibold text-[#c4f56b]"><ArrowUpRight size={14} /> {change}</span>
      </div>
      <p className="mt-5 text-sm text-[#94998e]">{label}</p>
      <p ref={valueRef} aria-label={`${label}: ${value} ${unit}`} className="mt-1 font-display text-3xl font-bold tracking-tight">{displayedValue}<span className="ml-1 text-sm font-medium text-[#94998e]">{unit}</span></p>
      <div className="progress-track mt-4"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
    </article>
  )
}