"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhoneCall, Bot, CalendarDays } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <PhoneCall className="w-8 h-8 text-[#00f0ff]" />,
      title: "Patient Calls",
      description: "Custom clinical greeting triggered.",
    },
    {
      icon: <Bot className="w-8 h-8 text-[#00f0ff]" />,
      title: "Intent Evaluation",
      description: "Differentiates emergencies from new bookings.",
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-[#00f0ff]" />,
      title: "Deterministic Logic",
      description: "n8n checks Cal.com availability in real-time.",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  
  const pathLength = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-transparent border-y border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] text-[11px] font-mono tracking-[0.08em] font-medium uppercase">
            Fully Automated Workflow
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6 text-white leading-[1.1] tracking-tight">
            From missed call to <span className="text-[#00f0ff]">booked patient</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] font-sans">
            Three simple steps that happen automatically in under two minutes.
          </p>
        </motion.div>

        <div ref={ref} className="relative w-full max-w-5xl mx-auto pb-20">
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {steps.map((step, index) => {
              const springDelay = 0.2 + (index * 0.2);

              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: springDelay }}
                className="w-full"
              >
                <div className="h-[380px] rounded-3xl premium-glass-card group relative overflow-hidden flex flex-col justify-between p-8 border border-white/5 bg-[#0f0f15]/80 hover:bg-[#1a1a24]/80 transition-colors">
                  
                  {/* Dotted Grid Background */}
                  <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-70 mask-image-[linear-gradient(to_bottom,white,transparent)]" style={{ WebkitMaskImage: 'radial-gradient(circle_at_center, white, transparent 80%)' }} />

                  {/* Top: Centered Floating Icon */}
                  <div className="relative z-10 flex-1 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: springDelay + 0.2 }}
                      className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_10px_40px_rgba(0,240,255,0.1)] group-hover:-translate-y-2 transition-transform duration-500"
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  
                  {/* Bottom: Left-aligned Text */}
                  <div className="relative z-10 mt-8">
                    <h3 className="text-2xl font-sans font-bold mb-3 text-white tracking-tight leading-[1.1]">{step.title}</h3>
                    <p className="text-[#A1A1AA] leading-relaxed text-sm font-sans">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
