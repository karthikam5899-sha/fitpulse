# FitPulse — Fitness Tracker

A responsive fitness tracker frontend built with React, Vite, Tailwind CSS v4, Lucide React, and Recharts.

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm

## Install and run
```bash
npm install
npm run dev
```
Open the local URL Vite prints (normally http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Features
- Responsive navigation and fitness hero
- Workout categories, details, and local completion controls
- Dashboard stats and weekly/monthly Recharts visualizations
- BMI calculator with input validation
- Nutrition cards and selected meal totals
- Fitness goals with progress controls
- Responsive layout, hover transitions, and reduced-motion support

## Notes
- Fitness numbers are demo/sample values, not live wearable readings.
- React state is temporary and resets on refresh; no backend or authentication is included.
- Images and Google Fonts load from external URLs and need internet access.
- Replace the placeholder email in `src/components/Footer.jsx` before publishing.
