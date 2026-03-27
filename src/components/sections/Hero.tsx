"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroSceneDynamic = dynamic(() => import('./HeroScene'), { ssr: false });

export function Hero() {
  const words = "Stop Missing Patients. Start Booking Them".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent w-full" style={{ position: 'relative' }}>
      <HeroSceneDynamic />
      
      {/* Black gradient mapping up from bottom */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/60 to-black pointer-events-none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,255,163,0.04) 0%, transparent 70%)' }}></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-teal rounded-full opacity-[0.03] blur-[120px] animate-[floating-drift_15s_ease-in-out_infinite_alternate] pointer-events-none z-0"></div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        <div className="max-w-4xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal uppercase tracking-[0.08em] font-mono text-[11px] font-medium"
          >
            The #1 AI Receptionist for US Dental Clinics
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block w-full"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.03em] text-white mb-6 leading-[1.05] font-bricolage">
              <span className="inline-flex flex-wrap justify-center gap-[0.25em]">
                {words.map((word, index) => (
                  <span
                    key={`word-${index}`}
                    className="inline-block leading-[1.05]"
                  >
                    {word}
                  </span>
                ))}
              </span>
              <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="text-teal animate-slow-pulse-glow mr-1 inline-block" style={{ paddingRight: "0.1em" }}>24/7.</span>
                <div className="absolute inset-0 z-20 animate-shimmer-fast bg-gradient-to-r from-transparent via-white/30 to-transparent w-[50%] h-[150%] pointer-events-none mix-blend-overlay -skew-x-12 translate-x-[-200%]"></div>
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-[#A1A1AA] mb-10 max-w-2xl mx-auto leading-[1.7] font-inter"
          >
            Nexus AI picks up when your front desk can't. Qualify patients and book appointments directly into your calendar—even at 2 AM.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="text-lg px-8 h-14 font-inter font-semibold tracking-[0.01em] bg-teal neon-box-shadow text-black border-none transition-all duration-300 hover:scale-105" asChild>
              <a href="#contact">Book a Free 15-Min Demo</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 h-14 font-inter tracking-[0.01em] border-white/20 text-white hover:bg-white/10" asChild>
              <Link href="#demo">
                <Play className="w-5 h-5 mr-2 text-teal" />
                Watch Demo
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
