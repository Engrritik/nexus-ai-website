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
    <section id="problem" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bricolage font-bold mb-6 text-white tracking-[-0.02em] leading-[1.1]">
            You&apos;re losing patients every day and <span className="text-teal">you don&apos;t know it</span>
          </h2>
          <p className="text-lg text-[#a0a0a0] font-inter">
            When your clinic is busy, closed, or understaffed, missed calls mean missed revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" style={{ perspective: "800px" }}>
          <motion.div 
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <Card className="flex flex-col items-center text-center hover:border-red-500/30 transition-colors duration-300 h-full">
              <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                <PhoneMissed className="w-7 h-7 text-red-400" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={25} suffix="%" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Missed Calls</h3>
              <p className="text-gray-400">Industry data shows 1 in 4 calls to dental clinics go unanswered.</p>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card className="flex flex-col items-center text-center hover:border-red-500/30 transition-colors duration-300 h-full">
              <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                <TrendingDown className="w-7 h-7 text-red-400" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={5000} prefix="$" suffix="+" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lost Revenue</h3>
              <p className="text-gray-400">The average monthly revenue lost to competitors from missing just one new patient a day.</p>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="flex flex-col items-center text-center hover:border-red-500/30 transition-colors duration-300 h-full">
              <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                <Voicemail className="w-7 h-7 text-red-400" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={85} suffix="%" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Voicemail</h3>
              <p className="text-gray-400">Of new patients will just hang up and call the next dentist on Google instead of leaving a message.</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
