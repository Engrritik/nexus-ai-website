"use client";

import { motion } from "framer-motion";
import { PhoneCall, Bot, CalendarDays } from "lucide-react";
import { FadeAndRiseReveal } from "@/components/ui/FadeAndRiseReveal";

export function HowItWorks() {
  const steps = [
    {
      icon: <PhoneCall className="w-8 h-8 text-white" />,
      title: "Patient calls after hours",
      description: "A patient experiences a dental emergency or simply wants to book at 8 PM.",
      delay: 0.1,
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: "Nexus AI answers instantly",
      description: "Our AI converses naturally, qualifying the patient and finding the right open slot in your system.",
      delay: 0.3,
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-white" />,
      title: "Appointment booked",
      description: "The patient is booked directly into your existing scheduling software. No manual work required.",
      delay: 0.5,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-black/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <FadeAndRiseReveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-medium tracking-wide">
            How It Works
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            From missed call to <span className="gradient-text">booked patient</span>
          </h2>
          <p className="text-lg text-gray-400">
            Three simple steps that happen automatically in under two minutes.
          </p>
        </FadeAndRiseReveal>

        <div className="flex flex-col relative w-full max-w-4xl mx-auto space-y-24 pb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="sticky w-full"
              style={{ top: `calc(15vh + ${index * 40}px)` }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 md:gap-12 p-8 md:p-12 rounded-[2rem] mint-glass-card shadow-2xl relative overflow-hidden group">
                {/* Number Watermark */}
                <div className="absolute -right-8 -top-12 text-[15rem] font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-teal/[0.05] transition-colors duration-500">
                  {index + 1}
                </div>

                <div className="shrink-0 relative">
                  <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,212,170,0.15)] group-hover:shadow-[0_0_50px_rgba(0,212,170,0.3)] transition-shadow duration-500">
                    {step.icon}
                  </div>
                  <div className="absolute -inset-2 bg-teal/20 blur-xl rounded-full -z-10" />
                  <div className="absolute top-0 right-0 -mr-3 -mt-3 w-8 h-8 rounded-full bg-teal flex items-center justify-center text-black font-bold border-4 border-black z-20">
                    {index + 1}
                  </div>
                </div>
                
                <div className="relative z-10 pt-2">
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-teal-50 transition-colors">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
