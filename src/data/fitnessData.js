export const workouts = [
  {
    id: 1, title: 'Morning Cardio', category: 'Cardio', duration: 30, difficulty: 'Beginner', calories: 280, progress: 0,
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85',
    description: 'Build stamina with an energizing cardio session.',
    exercises: [
      { title: 'Brisk walk or easy jog', duration: '5 min', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=85', alt: 'Runner warming up on a path', instruction: 'Start at an easy pace. Keep your shoulders relaxed and let your arms swing naturally.' },
      { title: 'Jumping jacks', duration: '3 sets · 30 sec', image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1000&q=85', alt: 'Athlete doing a bodyweight cardio exercise', instruction: 'Stand tall, jump your feet apart as your arms rise overhead, then return softly to the start.' },
      { title: 'Mountain climbers', duration: '3 sets · 20 reps', image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=1000&q=85', alt: 'Person exercising on a fitness mat', instruction: 'From a high plank, bring one knee toward your chest at a time. Keep your hips steady.' },
      { title: 'Cool-down walk', duration: '5 min', image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1000&q=85', alt: 'Person walking outdoors after a workout', instruction: 'Slow your pace gradually and take relaxed breaths to bring your heart rate down.' },
    ],
  },
  {
    id: 2, title: 'Strength Builder', category: 'Strength Training', duration: 45, difficulty: 'Intermediate', calories: 360, progress: 0,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85',
    description: 'Build strength with a full-body resistance workout.',
    exercises: [
      { title: 'Bodyweight squats', duration: '3 sets · 12 reps', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=85', alt: 'Athlete practicing a lower-body strength exercise', instruction: 'Stand with feet about shoulder-width apart. Sit your hips back, keep your chest lifted, then press through your feet to stand.' },
      { title: 'Incline push-ups', duration: '3 sets · 8–12 reps', image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1000&q=85', alt: 'Person performing a controlled push-up', instruction: 'Place your hands on a sturdy raised surface. Keep your body in a straight line as you lower your chest and press back up.' },
      { title: 'Reverse lunges', duration: '3 sets · 10 each side', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85', alt: 'Athlete training with a controlled lunge movement', instruction: 'Step one foot back and lower both knees comfortably. Push through the front foot to return, then switch sides.' },
      { title: 'Forearm plank', duration: '3 sets · 20–40 sec', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85', alt: 'Person holding a forearm plank on a mat', instruction: 'Rest on your forearms and toes, brace your middle, and keep your body in a long straight line. Stop if your form changes.' },
    ],
  },
  {
    id: 3, title: 'Mindful Yoga', category: 'Yoga', duration: 25, difficulty: 'Beginner', calories: 140, progress: 0,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85',
    description: 'Improve flexibility, balance, and recovery.',
    exercises: [
      { title: 'Mountain pose', duration: '5 breaths', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=85', alt: 'Person standing calmly on a yoga mat', instruction: 'Stand tall with feet grounded. Relax your shoulders, lengthen your spine, and breathe slowly.' },
      { title: 'Downward-facing dog', duration: '5 breaths', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85', alt: 'Yoga practitioner holding a floor pose', instruction: 'From hands and knees, tuck your toes and lift your hips. Bend your knees as needed and keep your breathing easy.' },
      { title: 'Warrior II', duration: '5 breaths each side', image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1000&q=85', alt: 'Person practicing a standing yoga pose', instruction: 'Step your feet wide, bend the front knee gently, and extend your arms. Keep the knee tracking in line with your toes.' },
      { title: 'Child’s pose', duration: '8 slow breaths', image: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?auto=format&fit=crop&w=1000&q=85', alt: 'Yoga practitioner resting in a gentle floor stretch', instruction: 'Kneel and fold forward comfortably, resting your hands or forehead. Use a cushion if that feels better.' },
    ],
  },
  {
    id: 4, title: 'HIIT Burn', category: 'HIIT', duration: 20, difficulty: 'Advanced', calories: 320, progress: 0,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85',
    description: 'Short, high-intensity intervals to challenge yourself.',
    exercises: [
      { title: 'Squat to reach', duration: '3 rounds · 30 sec', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=85', alt: 'Athlete practicing a squat exercise', instruction: 'Sit your hips back into a comfortable squat, then stand and reach overhead. Move briskly while keeping control.' },
      { title: 'High knees', duration: '3 rounds · 20 sec', image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=85', alt: 'Runner moving at a quick pace', instruction: 'Jog in place, lifting your knees only as high as feels comfortable. Keep your steps light.' },
      { title: 'Mountain climbers', duration: '3 rounds · 20 sec', image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=1000&q=85', alt: 'Person exercising on a fitness mat', instruction: 'From a high plank, alternate bringing your knees forward. Slow down or pause to keep your back steady.' },
      { title: 'Recovery breathing', duration: '60 sec', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=85', alt: 'Person taking a mindful recovery moment', instruction: 'Walk slowly or stand comfortably. Take steady breaths and rest fully before repeating the circuit.' },
    ],
  },
]

export const weeklyActivity = [
  { day: 'Mon', calories: 320, minutes: 35 },
  { day: 'Tue', calories: 450, minutes: 48 },
  { day: 'Wed', calories: 280, minutes: 30 },
  { day: 'Thu', calories: 520, minutes: 55 },
  { day: 'Fri', calories: 390, minutes: 42 },
  { day: 'Sat', calories: 610, minutes: 65 },
  { day: 'Sun', calories: 350, minutes: 38 },
]

export const meals = [
  { id: 1, name: 'Power Breakfast Bowl', type: 'Breakfast', calories: 420, protein: 24, carbs: 48, fat: 14, image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&q=85' },
  { id: 2, name: 'Green Protein Plate', type: 'Lunch', calories: 560, protein: 42, carbs: 52, fat: 18, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=85' },
  { id: 3, name: 'Balanced Dinner', type: 'Dinner', calories: 490, protein: 36, carbs: 44, fat: 16, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=85' },
]

export const initialGoals = [
  { id: 1, title: 'Daily steps', current: 7340, target: 10000, unit: 'steps' },
  { id: 2, title: 'Workout sessions', current: 4, target: 5, unit: 'sessions' },
  { id: 3, title: 'Water intake', current: 5, target: 8, unit: 'glasses' },
]