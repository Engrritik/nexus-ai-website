# Nexus AI Website

This is a premium, animated agency website built with Next.js 15, Tailwind CSS v4, Three.js, and Framer Motion for **Nexus AI** — an AI voice receptionist for dental clinics.

## Tech Stack Overview

- **Core Framework:** Next.js (App Router, React 19)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (Scroll animations, counting numbers)
- **3D Effects:** `@react-three/fiber` & `@react-three/drei` (Waveform Hero Background)
- **Icons:** `lucide-react`
- **Typing:** TypeScript
- **Deployment:** Vercel

## Local Development Setup

To run the application locally:

1. Clone or download the repository.
2. Ensure you have Node.js (v20+) installed.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

- `src/app/page.tsx` - Main landing page combining all sections.
- `src/components/sections/` - Individual UI sections (Hero, Problem, Solution, Pricing, Demo, Contact, etc.)
- `src/components/ui/` - Reusable UI base components (Button, Card)
- `src/components/layout/` - Global layout components (Navbar, Footer)

## Deployment to Vercel

This repository is pre-configured for deployment on Vercel with a `vercel.json` file.

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository. Vercel will automatically detect that it's a Next.js project.
4. Leave the default build settings (`npm run build`).
5. Click **Deploy**.

Within minutes, your site will be live on a global edge network.
