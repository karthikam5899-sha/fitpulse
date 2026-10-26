import { useEffect, useState } from 'react'
import { ArrowRight, Check, ChevronLeft, ChevronRight, Clock3, Flame, Play, X, Zap } from 'lucide-react'
import { workouts as initialWorkouts } from '../data/fitnessData.js'

const categories = ['All', 'Cardio', 'Strength Training', 'Yoga', 'HIIT']

export default function WorkoutSection({ onWorkoutComplete, onWorkoutReset }) {
  const [filter, setFilter] = useState('All')
  const [items, setItems] = useState(initialWorkouts)
  const [activeWorkout, setActiveWorkout] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const visible = items.filter(item => filter === 'All' || item.category === filter)
  function completeWorkout(id) {
    setItems(previous => previous.map(item => item.id === id ? { ...item, progress: 100 } : item))
    onWorkoutComplete(id)
  }
  function resetWorkout(id) {
    setItems(previous => previous.map(item => item.id === id ? { ...item, progress: 0 } : item))
    onWorkoutReset(id)
  }
  function openWorkout(workout) {
    setActiveWorkout(workout)
    setActiveStep(Math.min(workout.exercises.length - 1, Math.floor(workout.progress / 100 * workout.exercises.length)))
  }
  function goToStep(step) {
    setActiveStep(step)
    setItems(previous => previous.map(item => item.id === activeWorkout.id && item.progress < 100
      ? { ...item, progress: Math.round(step / activeWorkout.exercises.length * 100) }
      : item))
  }
  useEffect(() => {
    if (!activeWorkout) return undefined
    const previousOverflow = document.body.style.overflow
    function closeOnEscape(event) {
      if (event.key === 'Escape') setActiveWorkout(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeWorkout])
  return (
    <section id="workouts" className="section-space border-t border-white/[0.06]">
      <div className="section-wrap scroll-reveal">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><span className="eyebrow"><Zap size={15} /> Find your rhythm</span><h2 className="section-title mt-4">Made for your goals.</h2><p className="mt-3 text-sm leading-7 text-[#94998e]">Different ways to move. One healthier you.</p></div>
          <a href="#dashboard" className="btn-secondary self-start sm:self-auto">Track progress <ArrowRight size={16} /></a>
        </div>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => <button type="button" key={category} onClick={() => setFilter(category)} className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition ${filter === category ? 'border-[#c4f56b] bg-[#c4f56b] text-[#10130f]' : 'border-white/10 text-[#a2a69c] hover:border-[#c4f56b]/50'}`}>{category}</button>)}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map(workout => <article key={workout.id} className="surface surface-hover overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img src={workout.image} alt={workout.title} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10130f]/80 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium backdrop-blur">{workout.category}</span>
              <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1.5 text-xs backdrop-blur">{workout.difficulty}</span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold">{workout.title}</h3><p className="mt-2 min-h-[42px] text-sm leading-6 text-[#94998e]">{workout.description}</p>
              <div className="mt-4 flex items-center justify-between gap-2 text-xs text-[#b3b8aa]"><span className="flex items-center gap-1.5"><Clock3 size={15} /> {workout.duration} min</span><span className="flex items-center gap-1.5"><Flame size={15} className="text-orange-300" /> {workout.calories} kcal</span></div>
              <div className="mt-5"><div className="mb-2 flex justify-between text-xs"><span className="text-[#94998e]">Session progress</span><span>{workout.progress}%</span></div><div className="progress-track"><div className="progress-fill" style={{ width: `${workout.progress}%` }} /></div></div>
              <button type="button" onClick={() => openWorkout(workout)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.06] px-4 py-3 text-sm font-semibold transition hover:bg-[#c4f56b] hover:text-[#10130f]"><Play size={15} /> {workout.progress === 100 ? 'Review workout' : 'Start workout'}</button>
              {workout.progress === 100 && <button type="button" onClick={() => resetWorkout(workout.id)} className="mt-3 w-full text-xs text-[#94998e] transition hover:text-[#c4f56b]">Reset completion</button>}
            </div>
          </article>)}
        </div>
      </div>
      {activeWorkout && (() => {
        const exercise = activeWorkout.exercises[activeStep]
        const isLastStep = activeStep === activeWorkout.exercises.length - 1
        return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6" onClick={event => { if (event.target === event.currentTarget) setActiveWorkout(null) }}>
            <div role="dialog" aria-modal="true" aria-labelledby="workout-dialog-title" className="max-h-[calc(100vh-1.5rem)] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#151912] shadow-2xl sm:max-h-[calc(100vh-3rem)]">
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] p-5 sm:p-7">
                <div>
                  <p className="eyebrow">{activeWorkout.category} · {activeWorkout.duration} min</p>
                  <h2 id="workout-dialog-title" className="mt-2 font-display text-2xl font-bold sm:text-3xl">{activeWorkout.title}</h2>
                  <p className="mt-1 text-sm text-[#94998e]">Follow each movement at your own pace.</p>
                </div>
                <button type="button" onClick={() => setActiveWorkout(null)} className="rounded-xl border border-white/10 p-2 text-[#b9beb0] transition hover:border-[#c4f56b] hover:text-[#c4f56b]" aria-label="Close workout"><X size={20} /></button>
              </div>
              <div className="p-5 sm:p-7">
                <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ['Difficulty', activeWorkout.difficulty],
                    ['Duration', `${activeWorkout.duration} min`],
                    ['Calories', `${activeWorkout.calories} kcal`],
                    ['Progress', `${items.find(item => item.id === activeWorkout.id)?.progress ?? 0}%`],
                  ].map(([label, value]) => <div key={label} className="rounded-xl bg-white/[0.04] p-3">
                    <p className="text-xs text-[#94998e]">{label}</p>
                    <p className="mt-1 text-sm font-semibold">{value}</p>
                  </div>)}
                </div>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold">Step {activeStep + 1} <span className="font-normal text-[#94998e]">of {activeWorkout.exercises.length}</span></p>
                  <p className="text-sm text-[#c4f56b]">{exercise.duration}</p>
                </div>
                <div className="mb-5 flex gap-2" aria-label="Workout steps">
                  {activeWorkout.exercises.map((step, index) => <button key={step.title} type="button" onClick={() => goToStep(index)} aria-label={`Go to step ${index + 1}: ${step.title}`} aria-current={activeStep === index ? 'step' : undefined} className={`h-1.5 flex-1 rounded-full transition ${index <= activeStep ? 'bg-[#c4f56b]' : 'bg-white/10'}`} />)}
                </div>
                <div className="grid gap-6 md:grid-cols-2 md:items-center">
                  <img src={exercise.image} alt={exercise.alt} className="h-56 w-full rounded-2xl object-cover sm:h-72" />
                  <div>
                    <span className="eyebrow">Movement {activeStep + 1}</span>
                    <h3 className="mt-3 font-display text-2xl font-semibold">{exercise.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#b9beb0]">{exercise.instruction}</p>
                    <p className="mt-5 rounded-xl border border-[#c4f56b]/15 bg-[#c4f56b]/[0.06] p-4 text-sm leading-6 text-[#d5dccb]">Move comfortably and pause if anything feels painful. Adjust the pace or range to suit your ability.</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col-reverse justify-between gap-3 border-t border-white/[0.08] pt-5 sm:flex-row">
                  <button type="button" onClick={() => goToStep(Math.max(0, activeStep - 1))} disabled={activeStep === 0} className="btn-secondary justify-center disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft size={17} /> Previous</button>
                  {isLastStep
                    ? <button type="button" onClick={() => { completeWorkout(activeWorkout.id); setActiveWorkout(null) }} className="btn-primary justify-center"><Check size={17} /> Complete workout</button>
                    : <button type="button" onClick={() => goToStep(activeStep + 1)} className="btn-primary justify-center">Next step <ChevronRight size={17} /></button>}
                </div>
              </div>
            </div>
          </div>
        )
      })()}
    </section>
  )
}