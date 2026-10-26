import { useMemo, useState } from 'react'
import { Apple, Flame, Beef, Wheat, Droplets, Check } from 'lucide-react'
import { meals } from '../data/fitnessData.js'

export default function NutritionSection() {
  const [selected, setSelected] = useState([])
  const totals = useMemo(() => meals.filter(meal => selected.includes(meal.id)).reduce((sum, meal) => ({ calories: sum.calories + meal.calories, protein: sum.protein + meal.protein, carbs: sum.carbs + meal.carbs, fat: sum.fat + meal.fat }), { calories: 0, protein: 0, carbs: 0, fat: 0 }), [selected])
  function toggleMeal(id) { setSelected(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id]) }
  const nutrients = [{ label: 'Protein', value: totals.protein, unit: 'g', icon: Beef }, { label: 'Carbs', value: totals.carbs, unit: 'g', icon: Wheat }, { label: 'Fat', value: totals.fat, unit: 'g', icon: Droplets }]
  return (
    <section id="nutrition" className="section-space border-t border-white/[0.06]">
      <div className="section-wrap scroll-reveal">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><span className="eyebrow"><Apple size={15} /> Eat well, feel well</span><h2 className="section-title mt-4">Fuel your progress.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-[#94998e]">Discover balanced meal ideas and keep track of the nutrition in your selected meals.</p></div><div className="rounded-2xl border border-[#c4f56b]/20 bg-[#c4f56b]/[0.06] px-5 py-4"><p className="text-xs text-[#94998e]">Selected meal calories</p><p className="mt-1 font-display text-3xl font-bold text-[#c4f56b]">{totals.calories.toLocaleString()} <span className="text-sm font-medium">kcal</span></p></div></div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {meals.map(meal => { const isSelected = selected.includes(meal.id); return <article key={meal.id} className="surface surface-hover overflow-hidden">
            <div className="relative h-52 overflow-hidden"><img src={meal.image} alt={meal.name} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-[#10130f]/85 px-3 py-1.5 text-xs font-semibold backdrop-blur">{meal.type}</span>{isSelected && <span className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-[#c4f56b] text-[#10130f]"><Check size={17} /></span>}</div>
            <div className="p-5"><div className="flex items-center justify-between gap-3"><h3 className="font-display text-lg font-semibold">{meal.name}</h3><span className="flex shrink-0 items-center gap-1 text-sm text-[#c4f56b]"><Flame size={15} /> {meal.calories}</span></div><p className="mt-1 text-xs text-[#94998e]">Calories per serving</p>
              <div className="mt-5 grid grid-cols-3 gap-2">{[['Protein', meal.protein], ['Carbs', meal.carbs], ['Fat', meal.fat]].map(([label, value]) => <div key={label} className="rounded-xl bg-white/[0.04] p-3"><p className="text-lg font-bold">{value}g</p><p className="mt-1 text-xs text-[#94998e]">{label}</p></div>)}</div>
              <button type="button" onClick={() => toggleMeal(meal.id)} className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition ${isSelected ? 'border border-[#c4f56b]/30 bg-[#c4f56b]/10 text-[#c4f56b]' : 'bg-white/[0.06] hover:bg-[#c4f56b] hover:text-[#10130f]'}`}>{isSelected ? <><Check size={16} /> Added to daily plan</> : 'Add to daily plan'}</button>
            </div>
          </article> })}
        </div>
        <div className="surface mt-5 p-5 sm:p-7"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#c4f56b]/10 text-[#c4f56b]"><Apple size={21} /></span><div><h3 className="font-display text-lg font-semibold">Your nutrition summary</h3><p className="text-sm text-[#94998e]">Totals from meals added above</p></div></div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">{nutrients.map(item => { const Icon = item.icon; return <div key={item.label} className="flex items-center justify-between rounded-xl bg-white/[0.035] p-4"><span className="flex items-center gap-2 text-sm text-[#a2a69c]"><Icon size={17} className="text-[#c4f56b]" /> {item.label}</span><strong>{item.value}{item.unit}</strong></div> })}</div>
          <p className="mt-4 text-xs leading-5 text-[#858a7f]">Meal values are illustrative estimates and vary by ingredients and serving size. Personal calorie and macronutrient needs depend on individual circumstances.</p>
        </div>
      </div>
    </section>
  )
}