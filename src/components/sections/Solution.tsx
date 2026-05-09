"use client";

import { Card } from "@/components/ui/Card";
import { Clock, CalendarCheck, UserCheck, CalendarDays, Activity } from "lucide-react";
import { FadeAndRiseReveal } from "@/components/ui/FadeAndRiseReveal";
import { BackgroundScene } from "@/components/ui/BackgroundScene";
import { motion } from "framer-motion";

export function Solution() {
  return (
    <section id="solution" className="py-24 relative overflow-hidden bg-[#050505]">
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] text-[11px] font-mono font-medium tracking-[0.08em] uppercase">
            Specialized Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6 text-white tracking-tight leading-[1.1]">
            Intelligent Automation for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7000ff]">Modern Clinics.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto overflow-visible px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            <div className="h-full rounded-2xl p-8 premium-glass-card group relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-[#00f0ff] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00f0ff]/20 to-transparent border border-[#00f0ff]/30 flex items-center justify-center mb-8 text-[#00f0ff] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white font-sans tracking-tight">Inbound Voice Receptionist</h3>
              <p className="text-[#A1A1AA] leading-relaxed font-sans">
                24/7 autonomous booking & lead qualification. Natural language intent recognition with zero-hallucination architecture.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="h-full rounded-2xl p-8 premium-glass-card group relative overflow-hidden">
              <div className="absolute bottom-0 right-0 -mr-8 -mb-8 w-32 h-32 bg-[#7000ff] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7000ff]/20 to-transparent border border-[#7000ff]/30 flex items-center justify-center mb-8 text-[#a966ff] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(112,0,255,0.15)]">
                <UserCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white font-sans tracking-tight">Custom Engineering & Logic</h3>
              <p className="text-[#A1A1AA] leading-relaxed font-sans">
                Tailored n8n workflows and custom webhook integrations. We build the plumbing that connects your voice engine to your actual business tools.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="h-full rounded-2xl p-8 premium-glass-card group relative overflow-hidden">
              <div className="absolute top-0 left-0 -ml-8 -mt-8 w-32 h-32 bg-[#00f0ff] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00f0ff]/20 to-transparent border border-[#00f0ff]/30 flex items-center justify-center mb-8 text-[#00f0ff] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                <CalendarDays className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white font-sans tracking-tight">Seamless Calendar Sync</h3>
              <p className="text-[#A1A1AA] leading-relaxed font-sans">
                Bi-directional integration with Cal.com and existing clinic CRMs. Deterministic availability checking to completely eliminate double-booking.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="h-full rounded-2xl p-8 premium-glass-card group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-[#7000ff] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7000ff]/20 to-transparent border border-[#7000ff]/30 flex items-center justify-center mb-8 text-[#a966ff] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(112,0,255,0.15)]">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white font-sans tracking-tight">Real-Time Analytics & Routing</h3>
              <p className="text-[#A1A1AA] leading-relaxed font-sans">
                Sub-second latency with full call transcripts, intent tagging, and actionable summaries pushed directly to your Slack or dashboard.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
