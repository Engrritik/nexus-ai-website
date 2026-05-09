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

      <div className="container relative z-10 px-6 mx-auto pt-20">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
          <div className="md:col-span-7 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] uppercase tracking-[0.08em] font-mono text-[11px] font-medium"
            >
              Deterministic Voice Architecture
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative inline-block w-full"
            >
              <h1 className="text-5xl md:text-[80px] font-extrabold tracking-tight text-white mb-6 leading-[1.05] font-sans">
                Stop Missing $5,000 Patient Bookings 
                <br className="hidden md:block" />
                <span className="relative inline-block mt-2">
                  <span className="text-white/40 inline-block">After Hours.</span>
                  <div className="absolute inset-0 z-20 animate-shimmer-fast bg-gradient-to-r from-transparent via-white/10 to-transparent w-[50%] h-[150%] pointer-events-none mix-blend-overlay -skew-x-12 translate-x-[-200%]"></div>
                </span>
              </h1>
            </motion.div>
          </div>
          
          <div className="md:col-span-5 text-left flex flex-col justify-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-[#A1A1AA] mb-10 leading-[1.7] font-sans"
            >
              Nexus AI is a deterministic voice architecture that answers calls instantly, qualifies patients, and books directly into your Cal.com calendar. 24/7.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 font-sans font-semibold tracking-wide btn-glass" asChild>
                <a href="#contact">
                  <span className="relative z-10 flex items-center">
                    Book a Technical Review
                  </span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 font-sans tracking-wide border-white/10 text-white hover:bg-white/5" asChild>
                <Link href="#demo">
                  <Play className="w-5 h-5 mr-2 text-[#00f0ff]" />
                  Watch Demo
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats Row matching Image 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10 max-w-4xl"
        >
          <div>
            <div className="text-3xl font-bold text-white mb-2">&lt; 1s</div>
            <div className="text-[#A1A1AA] text-xs font-mono uppercase tracking-widest">Latency for natural response</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-[#A1A1AA] text-xs font-mono uppercase tracking-widest">Calendar Sync Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">1 Mission</div>
            <div className="text-[#A1A1AA] text-xs font-mono uppercase tracking-widest">Zero missed calls for clinics</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
