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

        <div ref={ref} className="relative w-full max-w-5xl mx-auto pb-20 pt-10">
          
          {/* Horizontal central line timeline mapping */}
          <div className="hidden md:block absolute left-[10%] right-[10%] top-[40px] h-1 bg-white/5 rounded-full z-0 overflow-hidden transform-origin-left">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#00f0ff] to-[#7000ff]"
              style={{ width: pathLength, transformOrigin: "left" }} 
            />
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between relative z-10 gap-12 md:gap-6">
            {steps.map((step, index) => {
              // Creating a delayed pop-in mimicking line progression
              const springDelay = 0.2 + (index * 0.3);

              return (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left flex-1 relative group w-full">
                
                {/* Mobile vertical line connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute top-[80px] bottom-[-48px] left-[40px] w-[2px] bg-white/5 rounded-full z-0 overflow-hidden" />
                )}

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: springDelay }}
                  className="shrink-0 relative mb-8 flex items-center justify-center md:self-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#0f0f15] border border-white/10 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,240,255,0.15)] group-hover:border-[#00f0ff]/40 transition-colors duration-500 premium-glass-card">
                    {step.icon}
                  </div>
                  <div className="absolute inset-0 bg-[#00f0ff]/10 blur-xl rounded-full -z-10" />
                  <div className="absolute top-0 right-0 -mr-3 -mt-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#7000ff] flex items-center justify-center text-white font-bold border-4 border-[#050505] z-20 font-sans shadow-lg">
                    {index + 1}
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: springDelay + 0.1 }}
                  className="relative z-10 w-full flex flex-col items-center md:items-center text-center"
                >
                  <h3 className="text-xl md:text-2xl font-sans font-bold mb-3 text-white tracking-tight leading-[1.1]">{step.title}</h3>
                  <p className="text-[#A1A1AA] leading-[1.7] text-base font-sans">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
