import { ArrowUpRight, Camera, Clapperboard, Mail, Heart, MapPin, Phone } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '#home' }, { label: 'Workouts', href: '#workouts' },
  { label: 'Progress', href: '#dashboard' }, { label: 'Nutrition', href: '#nutrition' },
  { label: 'Goals', href: '#goals' },
  { label: 'BMI calculator', href: '#bmi' },
]
export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/[0.08] bg-[#0b0e0a]">
      <div className="section-wrap py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2"><a href="#home" aria-label="FitPulse home" className="inline-flex items-center gap-3"><img src="/FitPulse.png" alt="" className="h-20 w-20 rounded-full object-cover transition-transform duration-300 hover:scale-105" /><span className="font-display text-2xl font-bold">Fit<span className="text-[#c4f56b]">Pulse</span></span></a><p className="mt-5 max-w-sm text-sm leading-7 text-[#94998e]">Move with purpose. Eat with intention. Build habits that help you feel your best, one day at a time.</p>
            <div className="mt-6 flex gap-3"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-[#b9beb0] transition hover:border-[#c4f56b] hover:text-[#c4f56b]"><Camera size={18} /></a><a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-[#b9beb0] transition hover:border-[#c4f56b] hover:text-[#c4f56b]"><Clapperboard size={18} /></a><a href="mailto:hello@fitpulse.example" aria-label="Email FitPulse" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-[#b9beb0] transition hover:border-[#c4f56b] hover:text-[#c4f56b]"><Mail size={18} /></a></div>
          </div>
          <div><h3 className="font-display font-semibold">Quick links</h3><ul className="mt-5 space-y-3">{footerLinks.map(link => <li key={link.label}><a href={link.href} className="footer-quick-link text-sm text-[#94998e]">{link.label}</a></li>)}</ul></div>
          <div>
            <h3 className="font-display font-semibold">Contact</h3>
            <p className="mt-3 text-xs text-[#73796d]">Demo details — replace before launch</p>
            <ul className="mt-4 space-y-4 text-sm text-[#94998e]">
              <li><a href="mailto:hello@fitpulse.example" className="flex items-center gap-2 transition hover:text-[#c4f56b]"><Mail size={16} className="shrink-0 text-[#c4f56b]" /> hello@fitpulse.example</a></li>
              <li><a href="tel:+918745236589" className="flex items-center gap-2 transition hover:text-[#c4f56b]"><Phone size={16} className="shrink-0 text-[#c4f56b]" /> +91 87452 36589</a></li>
              <li className="flex items-center gap-2"><MapPin size={16} className="shrink-0 text-[#c4f56b]" /> Chennai, Tamil Nadu, India</li>
            </ul>
            <a href="#workouts" className="btn-primary mt-5">Start today <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/[0.08] pt-6 text-xs text-[#73796d] sm:flex-row sm:items-center"><p>© {new Date().getFullYear()} FitPulse. All rights reserved.</p><p className="flex items-center gap-1.5">Made for your wellness journey <Heart size={13} className="text-[#c4f56b]" /></p></div>
      </div>
    </footer>
  )
}