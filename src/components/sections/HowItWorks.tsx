"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  
  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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

        <div ref={ref} className="relative w-full max-w-4xl mx-auto space-y-16 pb-20">
          
          {/* Vertical central line timeline mapping */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/5 rounded-full z-0 overflow-hidden">
            <motion.div 
              className="w-full bg-teal"
              style={{ height: pathHeight, transformOrigin: "top" }} 
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, type: "spring" }}
              className={`flex flex-col md:flex-row relative z-10 items-center md:items-start text-center md:text-left gap-8 p-8 md:p-12 rounded-[2rem] mint-glass-card hover:border-teal/50 shadow-2xl transition-all duration-300 w-full md:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
              }`}
            >
              <div className="shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,212,170,0.15)] transition-shadow duration-500">
                  {step.icon}
                </div>
                <div className="absolute -inset-2 bg-teal/20 blur-xl rounded-full -z-10" />
                <div className={`absolute top-0 w-8 h-8 rounded-full bg-teal flex items-center justify-center text-black font-bold border-4 border-black z-20 ${
                  index % 2 === 0 ? "right-0 -mr-3 -mt-3 md:-right-6 md:-mt-4" : "right-0 -mr-3 -mt-3 md:-left-6 md:-mt-4"
                }`}>
                  {index + 1}
                </div>
              </div>
              
              <div className="relative z-10 pt-2">
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
