import { useState } from 'react'
import { Target, Footprints, Dumbbell, GlassWater, Plus, RotateCcw, CheckCircle2 } from 'lucide-react'
import { initialGoals } from '../data/fitnessData.js'

const icons = [Footprints, Dumbbell, GlassWater]
export default function GoalsSection() {
  const [goals, setGoals] = useState(initialGoals)
  function updateGoal(id, amount) { setGoals(previous => previous.map(goal => goal.id === id ? { ...goal, current: Math.max(0, Math.min(goal.target, goal.current + amount)) } : goal)) }
  function resetGoals() { setGoals(initialGoals.map(goal => ({ ...goal }))) }
  const completed = goals.filter(goal => goal.current >= goal.target).length
  return (
    <section id="goals" className="section-space border-t border-white/[0.06]">
      <div className="section-wrap scroll-reveal">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><span className="eyebrow"><Target size={15} /> One day at a time</span><h2 className="section-title mt-4">Goals that move you.</h2><p className="mt-3 text-sm text-[#94998e]">Set your pace and celebrate your progress.</p></div><button type="button" onClick={resetGoals} className="btn-secondary self-start sm:self-auto"><RotateCcw size={15} /> Reset goals</button></div>
        <div className="surface mt-8 flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8"><div><p className="text-sm text-[#94998e]">Today's achievements</p><h3 className="mt-2 font-display text-3xl font-bold">{completed} of {goals.length} goals reached</h3></div><div className="w-full sm:max-w-xs"><div className="progress-track h-3"><div className="progress-fill" style={{ width: `${completed / goals.length * 100}%` }} /></div><p className="mt-2 text-right text-xs text-[#94998e]">{Math.round(completed / goals.length * 100)}% completed</p></div></div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">{goals.map((goal, index) => { const Icon = icons[index]; const percent = Math.round(goal.current / goal.target * 100); const done = percent >= 100; return <article key={goal.id} className="surface surface-hover p-5 sm:p-6">
          <div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#c4f56b]/10 text-[#c4f56b]"><Icon size={22} /></span>{done && <CheckCircle2 className="text-[#c4f56b]" />}</div>
          <h3 className="mt-5 font-display text-lg font-semibold">{goal.title}</h3><p className="mt-2 text-sm text-[#94998e]"><span className="font-display text-2xl font-bold text-white">{goal.current.toLocaleString()}</span>{' / '}{goal.target.toLocaleString()} {goal.unit}</p>
          <div className="progress-track mt-4 h-2"><div className="progress-fill" style={{ width: `${percent}%` }} /></div><p className="mt-2 text-right text-xs text-[#94998e]">{percent}%</p>
          <div className="mt-5 flex gap-2"><button type="button" onClick={() => updateGoal(goal.id, goal.id === 1 ? 500 : 1)} disabled={done} className="btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-40"><Plus size={16} /> Add progress</button><button type="button" onClick={() => updateGoal(goal.id, -(goal.id === 1 ? 500 : 1))} disabled={goal.current === 0} className="btn-secondary disabled:opacity-40" aria-label={`Decrease ${goal.title} progress`}>−</button></div>
        </article> })}</div>
      </div>
    </section>
  )
}