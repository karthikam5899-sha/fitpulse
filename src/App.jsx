import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import WorkoutSection from './components/WorkoutSection.jsx'
import ProgressSection from './components/ProgressSection.jsx'
import BMICalculator from './components/BMICalculator.jsx'
import NutritionSection from './components/NutritionSection.jsx'
import GoalsSection from './components/GoalsSection.jsx'
import Footer from './components/Footer.jsx'
import PageIntro from './components/PageIntro.jsx'
import { workouts } from './data/fitnessData.js'

export default function App() {
  const [completedWorkoutIds, setCompletedWorkoutIds] = useState([])
  const completedWorkouts = workouts.filter(workout => completedWorkoutIds.includes(workout.id))

  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal')
    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => element.setAttribute('data-revealed', 'true'))
      return undefined
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-revealed', 'true')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -8% 0px' })

    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <PageIntro />
      <Navbar />
      <main>
        <Hero />
        <ProgressSection completedWorkouts={completedWorkouts} />
        <WorkoutSection
          onWorkoutComplete={workoutId => setCompletedWorkoutIds(ids => ids.includes(workoutId) ? ids : [...ids, workoutId])}
          onWorkoutReset={workoutId => setCompletedWorkoutIds(ids => ids.filter(id => id !== workoutId))}
        />
        <BMICalculator />
        <NutritionSection />
        <GoalsSection />
      </main>
      <Footer />
    </>
  )
}