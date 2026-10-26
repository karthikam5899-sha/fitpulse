import { useEffect, useMemo, useState } from 'react'
import { Activity, Footprints, Flame, Clock3, HeartPulse, TrendingUp, CalendarDays } from 'lucide-react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { weeklyActivity } from '../data/fitnessData.js'
import StatCard from './StatCard.jsx'

const monthlyActivity = [
  { day: 'W1', calories: 2100, minutes: 210 },
  { day: 'W2', calories: 2450, minutes: 255 },
  { day: 'W3', calories: 1980, minutes: 190 },
  { day: 'W4', calories: 2890, minutes: 290 },
]
const tooltipStyle = { background: '#20251d', border: '1px solid #3a4232', borderRadius: 12, color: '#f4f5f0' }

export default function ProgressSection({ completedWorkouts }) {
  const [period, setPeriod] = useState('Week')
  const [steps, setSteps] = useState(7340)
  const [extraMinutes, setExtraMinutes] = useState(0)
  const [extraCalories, setExtraCalories] = useState(0)
  const [heartRate, setHeartRate] = useState('72')
  const parsedHeartRate = Number(heartRate)
  const validHeartRate = Number.isInteger(parsedHeartRate) && parsedHeartRate >= 30 && parsedHeartRate <= 240
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    function updateMotionPreference() { setPrefersReducedMotion(mediaQuery.matches) }
    mediaQuery.addEventListener('change', updateMotionPreference)
    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])
  const loggedMinutes = completedWorkouts.reduce((total, workout) => total + workout.duration, 0)
  const loggedCalories = completedWorkouts.reduce((total, workout) => total + workout.calories, 0)
  const today = new Date().toLocaleDateString('en-US', { weekday: 'short' })
  const chartData = period === 'Week'
    ? weeklyActivity.map(day => day.day === today
      ? { ...day, calories: day.calories + loggedCalories + extraCalories, minutes: day.minutes + loggedMinutes + extraMinutes }
      : day)
    : monthlyActivity
  const stats = useMemo(() => [
    { icon: Footprints, label: 'Daily steps', value: steps.toLocaleString('en-US'), unit: 'steps', change: 'Active', progress: Math.min(steps / 100, 100) },
    { icon: Flame, label: 'Calories burned', value: (420 + loggedCalories + extraCalories).toLocaleString('en-US'), unit: 'kcal', change: 'Today', progress: Math.min((420 + loggedCalories + extraCalories) / 600 * 100, 100) },
    { icon: Clock3, label: 'Workout time', value: 45 + loggedMinutes + extraMinutes, unit: 'min', change: 'Today', progress: Math.min((45 + loggedMinutes + extraMinutes) / 60 * 100, 100) },
    { icon: HeartPulse, label: 'Heart rate', value: validHeartRate ? parsedHeartRate : 72, unit: 'bpm', change: 'Manual', progress: Math.min((validHeartRate ? parsedHeartRate : 72) / 2.4, 100) },
  ], [steps, loggedMinutes, loggedCalories, extraMinutes, extraCalories, validHeartRate, parsedHeartRate])
  return (
    <section id="dashboard" className="section-space border-t border-white/[0.06]">
      <div className="section-wrap scroll-reveal">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><span className="eyebrow"><Activity size={15} /> Your health at a glance</span><h2 className="section-title mt-4">Your fitness dashboard.</h2><p className="mt-3 text-sm text-[#94998e]">Sample activity plus workouts you complete here. Use the controls to update steps and activity.</p></div>
          <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">{['Week', 'Month'].map(value => <button key={value} type="button" onClick={() => setPeriod(value)} className={`rounded-full px-4 py-2 text-sm transition ${period === value ? 'bg-[#c4f56b] font-semibold text-[#10130f]' : 'text-[#94998e]'}`}>{value}</button>)}</div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map((stat, index) => <StatCard key={stat.label} {...stat} index={index} />)}</div>
        <div className="mt-5 grid gap-5 lg:grid-cols-5">
          <div className="scroll-reveal dashboard-chart surface surface-hover p-5 sm:p-7 lg:col-span-3" style={{ animationDelay: '120ms' }}>
            <div className="flex items-center justify-between gap-3"><div><h3 className="font-display text-xl font-semibold">Activity overview</h3><p className="mt-1 text-sm text-[#94998e]">Calories burned · completed workouts are added to today</p></div><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#c4f56b]/10 text-[#c4f56b]"><TrendingUp size={20} /></span></div>
            <div className="mt-6 h-[270px] w-full"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData} margin={{ top: 8, right: 5, left: -18, bottom: 0 }}><defs><linearGradient id="calorieFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c4f56b" stopOpacity={0.3} /><stop offset="100%" stopColor="#c4f56b" stopOpacity={0} /></linearGradient></defs><CartesianGrid stroke="#30352d" strokeDasharray="4 4" vertical={false} /><XAxis dataKey="day" tick={{ fill: '#94998e', fontSize: 12 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: '#94998e', fontSize: 11 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={tooltipStyle} /><Area type="monotone" dataKey="calories" name="Calories" stroke="#c4f56b" strokeWidth={3} fill="url(#calorieFill)" activeDot={{ r: 5 }} isAnimationActive={!prefersReducedMotion} animationDuration={900} animationEasing="ease-out" /></AreaChart></ResponsiveContainer></div>
          </div>
          <div className="scroll-reveal dashboard-chart surface surface-hover p-5 sm:p-7 lg:col-span-2" style={{ animationDelay: '220ms' }}>
            <div className="flex items-center justify-between"><div><h3 className="font-display text-xl font-semibold">Active minutes</h3><p className="mt-1 text-sm text-[#94998e]">Movement through the {period.toLowerCase()}</p></div><CalendarDays className="text-[#c4f56b]" /></div>
            <div className="mt-6 h-[270px] w-full"><ResponsiveContainer width="100%" height="100%"><BarChart data={chartData} margin={{ top: 8, right: 0, left: -20, bottom: 0 }}><CartesianGrid stroke="#30352d" strokeDasharray="4 4" vertical={false} /><XAxis dataKey="day" tick={{ fill: '#94998e', fontSize: 11 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: '#94998e', fontSize: 11 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={tooltipStyle} /><Bar dataKey="minutes" name="Minutes" fill="#c4f56b" radius={[6, 6, 0, 0]} maxBarSize={34} isAnimationActive={!prefersReducedMotion} animationDuration={900} animationEasing="ease-out" /></BarChart></ResponsiveContainer></div>
          </div>
        </div>
        <div className="scroll-reveal dashboard-goal surface surface-hover mt-5 flex flex-col justify-between gap-5 p-5 sm:flex-row sm:items-center sm:p-7" style={{ animationDelay: '300ms' }}>
          <div><span className="eyebrow">Live activity tracker</span><h3 className="mt-2 font-display text-xl font-semibold">Update your daily activity.</h3><p className="mt-1 text-sm text-[#94998e]">{Math.max(0, 10000 - steps).toLocaleString('en-US')} steps to your 10,000-step target. Values update the cards and weekly chart.</p></div>
          <div className="w-full space-y-5 sm:max-w-md">
            <div>
            <div className="mb-2 flex justify-between text-sm"><span className="text-[#94998e]">Daily steps</span><strong>{Math.min(100, Math.round(steps / 100))}%</strong></div>
            <div className="progress-track h-3"><div className="progress-fill" style={{ width: `${Math.min(100, steps / 100)}%` }} /></div>
            <div className="mt-4 flex gap-2"><button className="btn-secondary flex-1" type="button" onClick={() => setSteps(s => Math.max(0, s - 500))}>− 500</button><button className="btn-primary flex-1" type="button" onClick={() => setSteps(s => s + 500)}>+ 500 steps</button></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white/[0.035] p-4">
                <label htmlFor="live-heart-rate" className="mb-2 block text-sm text-[#a2a69c]">Heart rate · manual entry</label>
                <div className="flex items-center gap-2">
                  <input id="live-heart-rate" type="number" min="30" max="240" step="1" value={heartRate} onChange={event => setHeartRate(event.target.value)} aria-invalid={!validHeartRate} aria-describedby="heart-rate-help" className="w-full rounded-lg border border-white/10 bg-[#10130f] px-3 py-2 text-sm outline-none focus:border-[#c4f56b]" />
                  <span className="text-xs text-[#94998e]">bpm</span>
                </div>
                <p id="heart-rate-help" className={`mt-2 text-xs ${validHeartRate ? 'text-[#73796d]' : 'text-red-300'}`}>{validHeartRate ? 'Enter a measured reading (30–240 bpm).' : 'Enter a whole number from 30 to 240.'}</p>
              </div>
              <div className="rounded-xl bg-white/[0.035] p-4">
                <p className="mb-2 text-sm text-[#a2a69c]">Workout time</p>
                <p className="font-display text-lg font-semibold">{45 + loggedMinutes + extraMinutes} <span className="text-sm font-normal text-[#94998e]">min today</span></p>
                <div className="mt-3 flex gap-2"><button className="btn-secondary flex-1 px-3" type="button" onClick={() => { setExtraMinutes(m => Math.max(0, m - 5)); setExtraCalories(c => Math.max(0, c - 40)) }} disabled={extraMinutes === 0}>− 5 min</button><button className="btn-primary flex-1 px-3" type="button" onClick={() => { setExtraMinutes(m => m + 5); setExtraCalories(c => c + 40) }}>+ 5 min</button></div>
              </div>
            </div>
            <div className="flex justify-end"><button className="btn-secondary" type="button" onClick={() => { setSteps(7340); setExtraMinutes(0); setExtraCalories(0); setHeartRate('72') }}>Reset tracker</button></div>
          </div>
        </div>
      </div>
    </section>
  )
}