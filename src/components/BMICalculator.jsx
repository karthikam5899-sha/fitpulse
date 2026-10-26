import { useState } from 'react'
import { Calculator, RotateCcw } from 'lucide-react'

export default function BMICalculator() {
  const [height, setHeight] = useState('170')
  const [weight, setWeight] = useState('70')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  function calculateBMI(event) {
    event.preventDefault()
    const h = Number(height), w = Number(weight)
    if (!Number.isFinite(h) || !Number.isFinite(w) || h < 50 || h > 250 || w < 10 || w > 500) {
      setError('Enter a height of 50–250 cm and weight of 10–500 kg.')
      setResult(null)
      return
    }
    const bmi = w / ((h / 100) ** 2)
    const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy weight' : bmi < 30 ? 'Overweight' : 'Obesity range'
    setError('')
    setResult({ bmi: bmi.toFixed(1), category })
  }
  function reset() { setHeight('170'); setWeight('70'); setResult(null); setError('') }
  return (
    <section id="bmi" className="section-space border-t border-white/[0.06]">
      <div className="section-wrap scroll-reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div><span className="eyebrow"><Calculator size={15} /> Know your numbers</span><h2 className="section-title mt-4">A little insight.<br />A healthier you.</h2><p className="mt-4 max-w-lg leading-7 text-[#94998e]">Calculate your Body Mass Index using your height and weight. Use it as one small part of your overall health picture.</p>
          <div className="mt-7 space-y-4 text-sm text-[#b7bbae]">{[['Below 18.5', 'Underweight'], ['18.5 – 24.9', 'Healthy weight'], ['25 – 29.9', 'Overweight'], ['30 and above', 'Obesity range']].map(([range, label]) => <div key={range} className="flex items-center justify-between border-b border-white/[0.07] pb-3"><span>{range}</span><span>{label}</span></div>)}</div>
        </div>
        <div className="surface surface-hover p-6 sm:p-9">
          <div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#c4f56b]/10 text-[#c4f56b]"><Calculator size={23} /></span><div><h3 className="font-display text-xl font-semibold">BMI calculator</h3><p className="mt-1 text-sm text-[#94998e]">Enter your measurements</p></div></div>
          <form onSubmit={calculateBMI} className="mt-7 space-y-5">
            <div><label htmlFor="height" className="mb-2 block text-sm text-[#c4c8bd]">Height (cm)</label><input id="height" type="number" min="50" max="250" step="0.1" required value={height} onChange={e => setHeight(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#10130f] px-4 py-3.5 outline-none transition focus:border-[#c4f56b]" /></div>
            <div><label htmlFor="weight" className="mb-2 block text-sm text-[#c4c8bd]">Weight (kg)</label><input id="weight" type="number" min="10" max="500" step="0.1" required value={weight} onChange={e => setWeight(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#10130f] px-4 py-3.5 outline-none transition focus:border-[#c4f56b]" /></div>
            {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
            <div className="flex flex-wrap gap-3"><button type="submit" className="btn-primary flex-1">Calculate BMI</button><button type="button" onClick={reset} className="btn-secondary" aria-label="Reset BMI calculator"><RotateCcw size={17} /></button></div>
          </form>
          {result && <div role="status" className="mt-6 rounded-2xl border border-[#c4f56b]/20 bg-[#c4f56b]/[0.07] p-5 reveal"><p className="text-sm text-[#94998e]">Your BMI result</p><p className="mt-1 font-display text-4xl font-bold text-[#c4f56b]">{result.bmi}</p><p className="mt-2 font-semibold">{result.category}</p><p className="mt-3 text-xs leading-5 text-[#94998e]">Adult BMI categories are general screening guidelines. BMI does not directly measure body fat or account for every individual difference.</p></div>}
        </div>
      </div>
    </section>
  )
}