

## Integration Plan: Spline 3D Scene with Spotlight Effect

### Overview
Add an interactive 3D Spline scene component to the homepage, featuring a spotlight effect and a split-layout hero card with text on the left and a 3D robot scene on the right.

### Components to Add

1. **SplineScene component** (`src/components/ui/splite.tsx`)
   - Lazy-loaded Spline 3D viewer with a loading fallback spinner

2. **Spotlight component** (`src/components/ui/spotlight.tsx`)
   - Aceternity-style SVG spotlight effect with the `animate-spotlight` animation

3. **Demo section on Index page**
   - Dark card with spotlight overlay
   - Left side: gradient text heading ("Interactive 3D") + description paragraph
   - Right side: embedded Spline 3D robot scene
   - Responsive layout (stacks on mobile)

### Dependencies to Install
- `@splinetool/runtime` — Spline engine
- `@splinetool/react-spline` — React wrapper for Spline scenes
- `framer-motion` — animation library (available for future spotlight variants)

### Style Updates
- Add `animate-spotlight` keyframe animation to the Tailwind config for the spotlight SVG fade-in/scale effect
- Add a simple CSS `.loader` spinner for the Spline loading fallback

### Pages Updated
- **Index page**: Replace the current placeholder content with the Spline 3D hero card demo

