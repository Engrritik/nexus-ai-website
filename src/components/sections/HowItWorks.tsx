"use client";

import { motion } from "framer-motion";
import { PhoneCall, Bot, CalendarDays } from "lucide-react";

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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-medium tracking-wide">
            How It Works
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            From missed call to <span className="gradient-text">booked patient</span>
          </h2>
          <p className="text-lg text-gray-400">
            Three simple steps that happen automatically in under two minutes.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-12 max-w-6xl mx-auto relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-teal/0 via-teal/50 to-teal/0 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="flex flex-col items-center text-center flex-1 w-full"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 glass flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,212,170,0.15)] group-hover:shadow-[0_0_40px_rgba(0,212,170,0.3)] transition-shadow">
                  {step.icon}
                </div>
                <div className="absolute -inset-2 bg-teal/20 blur-xl rounded-full -z-10" />
                <div className="absolute top-0 right-0 -mr-3 -mt-3 w-8 h-8 rounded-full bg-teal flex items-center justify-center text-black font-bold border-4 border-black z-20">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
