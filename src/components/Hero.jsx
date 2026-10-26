import { ArrowDown, ArrowRight, Play, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="section-wrap grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <div className="reveal">
        <div className="eyebrow mb-7"><Sparkles size={15} /> Your journey. Your pace.</div>
        <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-[-0.065em] sm:text-6xl lg:text-7xl xl:text-[82px]">Become the<br />strongest<br /><span className="text-[#c4f56b]">version of you.</span></h1>
        <p className="mt-6 max-w-lg text-base leading-8 text-[#a2a69c] sm:text-lg">Small steps. Big changes. Track your workouts, fuel your body, and celebrate every milestone along the way.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#workouts" className="btn-primary">Explore workouts <ArrowRight size={17} /></a>
          <a href="#dashboard" className="btn-secondary"><Play size={15} /> View dashboard</a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
          <div><p className="font-display text-2xl font-bold">4.9<span className="text-[#c4f56b]">/5</span></p><p className="mt-1 text-xs text-[#94998e]">Sample member rating</p></div>
          <div className="h-10 w-px bg-white/10" />
          <div><p className="font-display text-2xl font-bold">30<span className="text-[#c4f56b]"> min</span></p><p className="mt-1 text-xs text-[#94998e]">A simple daily starting point</p></div>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[540px] reveal delay-2">
        <div className="absolute -inset-y-5 inset-x-0 rounded-[40px] bg-[#c4f56b]/[0.07] blur-3xl sm:-inset-5" />
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#1a2016]">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=90" alt="Modern gym equipped for strength and fitness training" className="h-[380px] w-full object-cover sm:h-[490px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10130f] via-transparent to-black/10" />
          <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-[#10130f]/75 p-4 backdrop-blur-xl float-animation sm:left-7 sm:top-7">
            <div className="flex items-center gap-2 text-xs text-[#b9beb0]"><span className="dot" /> TODAY'S ACTIVITY</div>
            <p className="mt-2 font-display text-3xl font-bold">7,340 <span className="text-sm font-medium text-[#c4f56b]">steps</span></p>
            <div className="progress-track mt-3 w-36"><div className="progress-fill" style={{ width: '73.4%' }} /></div>
            <p className="mt-2 text-xs text-[#94998e]">73% of daily goal</p>
          </div>
          <div className="hero-heart-card" aria-label="Animated heart illustration">
            <div className="hero-heart-glow" />
            <img src="/heart.png" alt="Beating anatomical heart" className="hero-heart-image" />
            <svg className="hero-heart-ecg" viewBox="0 0 160 32" aria-hidden="true"><path d="M0 16 H45 L54 16 L62 5 L70 27 L79 10 L86 16 H160" /></svg>
            <span className="hero-heart-label">HEARTBEAT</span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#10130f]/85 p-5 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7">
            <div className="flex items-center justify-between gap-3"><div><p className="text-xs text-[#94998e]">YOUR NEXT MILESTONE</p><p className="mt-1 font-display text-lg font-semibold">Consistency is everything.</p></div><div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#c4f56b]/15 text-[#c4f56b]"><ArrowDown size={21} /></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}