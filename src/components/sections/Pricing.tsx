"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BackgroundScene } from "@/components/ui/BackgroundScene";

export function Pricing() {
  const features = [
    "24/7 AI Voice Receptionist",
    "Natural, human-like conversations",
    "Intelligent patient qualification",
    "Direct calendar booking integration",
    "Emergency call routing",
    "Customizable clinic knowledge base",
    "Call recordings and analytics dashboard"
  ];

  return (
    <section id="pricing" className="py-[100px] relative overflow-hidden bg-transparent border-y border-white/5">
      {/* Dynamic Background */}
      <BackgroundScene variant="wave" color="#00f0ff" count={800} />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00f0ff]/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[48px] md:text-5xl font-bold mb-6 text-white font-sans tracking-tight">
            Custom AI Solutions,<br />Tailored to Your Clinic
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Inbound */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-3xl border border-white/10 bg-[#0f0f15]/80 shadow-2xl p-8 md:p-10 relative overflow-hidden premium-glass-card"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-8 flex flex-wrap gap-1 shrink-0 pt-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#7000ff]/60" />
                ))}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2"><span className="text-[#7000ff]">Inbound</span> AI Receptionist</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
                  Engage patients instantly, answer clinical inquiries, and resolve standard booking requests entirely on autopilot.
                </p>
              </div>
            </div>

            <Button className="w-full h-14 bg-black text-white border border-white/10 hover:bg-white/5 transition-all duration-300 font-mono tracking-widest text-sm uppercase mb-8 rounded-xl" asChild>
              <a href="#contact">Book A Call</a>
            </Button>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">24/7 autonomous lead qualification & support.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Natural language intent recognition and routing.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Real-time handoff to human agents when needed.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2: Custom Engineering */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-[#0f0f15]/80 shadow-2xl p-8 md:p-10 relative overflow-hidden premium-glass-card"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-8 flex flex-wrap gap-1 shrink-0 pt-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#00f0ff]/60" />
                ))}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2"><span className="text-[#00f0ff]">Automated</span> Workflow Engineering</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
                  Automate your clinical pipelines, CRM syncs, and securely handle patient data directly into your existing dashboard.
                </p>
              </div>
            </div>

            <Button className="w-full h-14 bg-black text-white border border-white/10 hover:bg-white/5 transition-all duration-300 font-mono tracking-widest text-sm uppercase mb-8 rounded-xl" asChild>
              <a href="#contact">Book A Call</a>
            </Button>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Multi-channel intelligent patient follow-ups.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Custom logic builder for deterministic booking checks.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Automated EHR syncing and appointment logging.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
