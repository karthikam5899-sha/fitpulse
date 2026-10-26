import { useEffect, useState } from 'react'
import { Activity, ArrowDown, Dumbbell, HeartPulse } from 'lucide-react'

function shouldShowIntro() {
  if (typeof window === 'undefined') return false
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function PageIntro() {
  const [visible, setVisible] = useState(shouldShowIntro)

  useEffect(() => {
    if (!visible) return undefined
    const timeout = window.setTimeout(() => setVisible(false), 10000)
    return () => window.clearTimeout(timeout)
  }, [visible])

  if (!visible) return null

  return (
    <div className="page-intro" role="dialog" aria-modal="true" aria-label="Welcome to FitPulse">
      <svg className="intro-ecg" viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true">
        <path className="intro-ecg-glow" d="M0 150 H500 L535 150 L565 92 L592 215 L625 112 L655 150 H820 L850 150 L880 92 L907 215 L940 112 L970 150 H1440" />
        <path className="intro-ecg-line" d="M0 150 H500 L535 150 L565 92 L592 215 L625 112 L655 150 H820 L850 150 L880 92 L907 215 L940 112 L970 150 H1440" />
      </svg>
      <div className="intro-heartbeat" aria-hidden="true"><HeartPulse /></div>
      <div className="intro-orbit intro-orbit-one" aria-hidden="true" />
      <div className="intro-orbit intro-orbit-two" aria-hidden="true" />
      <div className="intro-fitness-icon intro-icon-one" aria-hidden="true"><Activity size={22} /></div>
      <div className="intro-fitness-icon intro-icon-two" aria-hidden="true"><Dumbbell size={22} /></div>
      <div className="intro-fitness-icon intro-icon-three" aria-hidden="true"><HeartPulse size={22} /></div>
      <div className="page-intro-content">
        <img src="/FitPulse.png" alt="" className="intro-logo" />
        <p className="intro-overline"><span className="dot" /> YOUR HEALTHIER ROUTINE STARTS HERE</p>
        <h1 className="intro-brand">Fit<span>Pulse</span></h1>
        <p className="intro-tagline">Move with purpose. Get stronger every day.</p>
        <div className="intro-progress" aria-hidden="true"><span /></div>
        <button type="button" className="intro-skip" onClick={() => setVisible(false)}>Explore FitPulse <ArrowDown size={15} /></button>
      </div>
    </div>
  )
}
