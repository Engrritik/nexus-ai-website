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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black w-full" style={{ position: 'relative' }}>
      <HeroSceneDynamic />
      
      {/* Black gradient mapping up from bottom */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,170,0.06) 0%, transparent 70%)' }}></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-teal rounded-full opacity-[0.04] blur-[120px] animate-[floating-drift_15s_ease-in-out_infinite_alternate] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-blue-500 rounded-full opacity-[0.04] blur-[120px] animate-[floating-drift-reverse_20s_ease-in-out_infinite_alternate] pointer-events-none z-0"></div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal uppercase tracking-[0.08em] font-mono text-[11px] font-medium">
            The #1 AI Receptionist for US Dental Clinics
          </div>
          <div className="relative inline-block w-full">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.03em] text-white mb-6 leading-[1.05] font-bricolage">
              <span className="inline-flex flex-wrap justify-center gap-[0.25em]">
                {words.map((word, index) => (
                  <motion.span
                    key={`word-${index}`}
                    initial={{ clipPath: "inset(0 100% 0 0)", filter: "blur(4px)", y: 15 }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)", filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, duration: 0.7, ease: "easeOut" }}
                    className="inline-block leading-[1.05]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="text-blue-500 animate-slow-pulse-glow mr-1 inline-block" style={{ paddingRight: "0.1em" }}>24/7.</span>
                <div className="absolute inset-0 z-20 animate-shimmer-fast bg-gradient-to-r from-transparent via-white/30 to-transparent w-[50%] h-[150%] pointer-events-none mix-blend-overlay -skew-x-12 translate-x-[-200%]"></div>
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-[#a0a0a0] mb-10 max-w-2xl mx-auto leading-[1.7] font-inter">
            Nexus AI picks up when your front desk can't. Qualify patients and book appointments directly into your calendar—even at 2 AM.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="text-lg px-8 h-14 font-inter font-semibold tracking-[0.01em] bg-[#3182CE] hover:bg-[#2b6cb0] text-white border-none" asChild>
              <a href="#contact">Book a Free 15-Min Demo</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 h-14 font-inter tracking-[0.01em]" asChild>
              <Link href="#demo">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
