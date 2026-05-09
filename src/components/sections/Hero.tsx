"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroSceneDynamic = dynamic(() => import('./HeroScene'), { ssr: false });

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent w-full" style={{ position: 'relative' }}>
      <HeroSceneDynamic />
      
      {/* Black gradient mapping up from bottom */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/60 to-black pointer-events-none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,_rgba(0,240,255,0.04)_0%,_transparent_70%)]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-[#00f0ff] rounded-full opacity-[0.03] blur-[120px] animate-[floating-drift_15s_ease-in-out_infinite_alternate] pointer-events-none z-0"></div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        <div className="max-w-4xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] uppercase tracking-[0.08em] font-mono text-[11px] font-medium"
          >
            Deterministic Voice Architecture
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block w-full"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05] font-sans">
              Stop Missing $5,000 Patient Bookings 
              <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="text-[#00f0ff] animate-slow-pulse-glow mr-1 inline-block">After Hours.</span>
                <div className="absolute inset-0 z-20 animate-shimmer-fast bg-gradient-to-r from-transparent via-white/30 to-transparent w-[50%] h-[150%] pointer-events-none mix-blend-overlay -skew-x-12 translate-x-[-200%]"></div>
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-[#A1A1AA] mb-10 max-w-2xl mx-auto leading-[1.7] font-sans"
          >
            Nexus AI is a deterministic voice architecture that answers calls instantly, qualifies patients, and books directly into your Cal.com calendar. 24/7.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="text-lg px-8 h-14 font-sans font-semibold tracking-wide btn-glass" asChild>
              <a href="#contact">
                <span className="relative z-10 flex items-center">
                  Book a Technical Review
                </span>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 h-14 font-sans tracking-wide border-white/10 text-white hover:bg-white/5" asChild>
              <Link href="#demo">
                <Play className="w-5 h-5 mr-2 text-[#00f0ff]" />
                Watch Architecture Demo
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
