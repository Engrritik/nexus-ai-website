"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { PhoneMissed, TrendingDown, Voicemail } from "lucide-react";
import { FadeAndRiseReveal } from "@/components/ui/FadeAndRiseReveal";
import { BackgroundScene } from "@/components/ui/BackgroundScene";

// Helper component for animated numbers
function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, (current) => 
    `${prefix}${Math.round(current).toLocaleString()}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.span ref={ref}>
      {displayValue}
    </motion.span>
  );
}

export function Problem() {
  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      <BackgroundScene variant="fall" color="#ff4444" count={800} />
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <FadeAndRiseReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            You&apos;re losing patients every day and <span className="text-red-400">you don&apos;t know it</span>
          </h2>
          <p className="text-lg text-gray-400">
            When your clinic is busy, closed, or understaffed, missed calls mean missed revenue.
          </p>
        </FadeAndRiseReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FadeAndRiseReveal delay={0.1}>
            <Card className="flex flex-col items-center text-center hover:border-red-500/30 transition-colors duration-300">
              <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                <PhoneMissed className="w-7 h-7 text-red-400" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={25} suffix="%" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Missed Calls</h3>
              <p className="text-gray-400">Industry data shows 1 in 4 calls to dental clinics go unanswered.</p>
            </Card>
          </FadeAndRiseReveal>

          <FadeAndRiseReveal delay={0.2}>
            <Card className="flex flex-col items-center text-center hover:border-red-500/30 transition-colors duration-300">
              <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                <TrendingDown className="w-7 h-7 text-red-400" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={5000} prefix="$" suffix="+" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lost Revenue</h3>
              <p className="text-gray-400">The average monthly revenue lost to competitors from missing just one new patient a day.</p>
            </Card>
          </FadeAndRiseReveal>

          <FadeAndRiseReveal delay={0.3}>
            <Card className="flex flex-col items-center text-center hover:border-red-500/30 transition-colors duration-300">
              <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                <Voicemail className="w-7 h-7 text-red-400" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={85} suffix="%" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Voicemail</h3>
              <p className="text-gray-400">Of new patients will just hang up and call the next dentist on Google instead of leaving a message.</p>
            </Card>
          </FadeAndRiseReveal>
        </div>
      </div>
    </section>
  );
}
