"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { PhoneMissed, TrendingDown, Voicemail } from "lucide-react";
import { FadeAndRiseReveal } from "@/components/ui/FadeAndRiseReveal";

// Helper component for animated numbers
function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isFinished, setIsFinished] = useState(false);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 250,
  });

  const displayValue = useTransform(springValue, (current) => 
    `${prefix}${Math.round(current).toLocaleString()}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
      setTimeout(() => setIsFinished(true), 1200);
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.span ref={ref} className={isFinished ? "text-teal drop-shadow-[0_0_15px_rgba(0,212,170,0.8)] transition-all duration-300 font-bricolage font-extrabold tracking-[-0.04em]" : "transition-all duration-300 font-bricolage font-extrabold tracking-[-0.04em]"}>
      {displayValue}
    </motion.span>
  );
}

export function Problem() {
  return (
    <section id="problem" className="py-[100px] relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-[#161618] text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer shadow-lg">
            Stop losing money everyday
            <TrendingDown className="w-4 h-4 text-gray-400" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" style={{ perspective: "800px" }}>
          <motion.div 
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <Card className="flex flex-col items-start text-left border-white/5 bg-[#121214] h-full p-8 rounded-3xl relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-[radial-gradient(rgba(255,255,255,0.15)_2px,transparent_2px)] bg-[size:16px_16px] opacity-20" style={{ WebkitMaskImage: 'linear-gradient(to top, white, transparent)' }} />
              <div className="relative z-10 w-full">
                <h3 className="text-2xl font-bold mb-4 text-white font-sans tracking-tight">Outdated Workflows</h3>
                <p className="text-[#A1A1AA] leading-relaxed font-sans mb-8">
                  Manual data entry and disjointed tools are slowing down your team's true potential.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="transform md:-translate-y-4"
          >
            <Card className="flex flex-col items-start text-left border-white/5 bg-gradient-to-b from-[#1a1435] to-[#0c091a] h-full p-8 rounded-3xl relative overflow-hidden shadow-[0_0_40px_rgba(112,0,255,0.15)] group hover:shadow-[0_0_60px_rgba(112,0,255,0.25)] transition-all">
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-[radial-gradient(rgba(112,0,255,0.5)_2px,transparent_2px)] bg-[size:16px_16px] opacity-40" style={{ WebkitMaskImage: 'linear-gradient(to top, white, transparent)' }} />
              <div className="relative z-10 w-full h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white font-sans tracking-tight">AI-Powered<br/>Efficiency</h3>
                <p className="text-[#A1A1AA] leading-relaxed font-sans mb-8 flex-1">
                  Automate repetitive tasks, sync your data seamlessly, and focus on what actually scales your business.
                </p>
                <div className="flex justify-center mt-auto pb-2">
                  <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform cursor-pointer">
                    Learn More <span className="text-black ml-1">→</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="flex flex-col items-start text-left border-white/5 bg-[#121214] h-full p-8 rounded-3xl relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-[radial-gradient(rgba(255,255,255,0.15)_2px,transparent_2px)] bg-[size:16px_16px] opacity-20" style={{ WebkitMaskImage: 'linear-gradient(to top, white, transparent)' }} />
              <div className="relative z-10 w-full">
                <h3 className="text-2xl font-bold mb-4 text-white font-sans tracking-tight">Missed Opportunities</h3>
                <p className="text-[#A1A1AA] leading-relaxed font-sans mb-8">
                  Without intelligent insights, you're leaving money on the table every single day.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
