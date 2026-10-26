import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [['Home', '#home'], ['Workouts', '#workouts'], ['Nutrition', '#nutrition'], ['Progress', '#dashboard'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#10130f]/90 backdrop-blur-xl">
      <nav className="section-wrap flex min-h-[76px] items-center justify-between gap-4">
        <a href="#home" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/FitPulse.png" alt="FitPulse home" className="h-14 w-14 rounded-full object-cover" />
          <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">Fit<span className="text-[#c4f56b]">Pulse</span></span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="nav-link text-sm text-[#a2a69c]">{label}</a>)}
        </div>
        <button type="button" className="rounded-xl border border-white/10 p-2 transition duration-200 hover:border-[#c4f56b]/60 hover:bg-[#c4f56b]/10 hover:text-[#c4f56b] md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="section-wrap grid gap-1 pb-5 md:hidden">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="mobile-nav-link rounded-xl px-4 py-3 text-[#d1d5ca]">{label}</a>)}
      </div>}
    </header>
  )
}