"use client";

import { useRef } from "react";
import { TiltCardWrapper } from "@/components/ui/TiltCardWrapper";
import { useCustomGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useCustomGSAP(() => {
    // Headline animation
    gsap.from('h2', {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      }
    });


  }, [containerRef]);

  return (
    <section id="how-it-works" className="py-24 bg-transparent relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1000px]">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-[56px] font-bold text-white font-serif tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Fully Automated Workflow
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 workflow-grid">
          
          {/* Card 1 */}
          <motion.div 
            className="workflow-card-left h-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCardWrapper className="bg-white/5 border border-white/10 rounded-[16px] overflow-hidden group backdrop-blur-md">
              <div className="absolute -right-4 -top-8 text-[120px] font-bold text-white/5 pointer-events-none font-serif transition-colors group-hover:text-[#9333ea]/10">01</div>
              <div className="relative z-10 p-[28px] h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-3">Patient Calls After Hours</h3>
                </div>
                <p className="text-[#a1a1aa] leading-relaxed">
                  The AI receptionist answers instantly and understands patient needs through natural conversation.
                </p>
              </div>
            </TiltCardWrapper>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="workflow-card-right h-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCardWrapper className="bg-white/5 border border-white/10 rounded-[16px] overflow-hidden group backdrop-blur-md">
              <div className="absolute -right-4 -top-8 text-[120px] font-bold text-white/5 pointer-events-none font-serif transition-colors group-hover:text-[#00d4aa]/10">02</div>
              <div className="relative z-10 p-[28px] h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-3">Intelligent Intent Routing</h3>
                </div>
                <p className="text-[#a1a1aa] leading-relaxed">
                  Calls are smartly routed — appointments scheduled, inquiries answered, emergencies escalated instantly.
                </p>
              </div>
            </TiltCardWrapper>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="workflow-card-left h-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCardWrapper className="bg-white/5 border border-white/10 rounded-[16px] overflow-hidden group backdrop-blur-md">
              <div className="absolute -right-4 -top-8 text-[120px] font-bold text-white/5 pointer-events-none font-serif transition-colors group-hover:text-[#f59e0b]/10">03</div>
              <div className="relative z-10 p-[28px] h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-3">Seamless Integration</h3>
                </div>
                <p className="text-[#a1a1aa] leading-relaxed">
                  All interactions sync with your calendar, update your CRM, and provide actionable insights automatically.
                </p>
              </div>
            </TiltCardWrapper>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            className="workflow-card-right h-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCardWrapper className="bg-white/5 border border-white/10 rounded-[16px] overflow-hidden group backdrop-blur-md">
              <div className="absolute -right-4 -top-8 text-[120px] font-bold text-white/5 pointer-events-none font-serif transition-colors group-hover:text-[#ec4899]/10">04</div>
              <div className="relative z-10 p-[28px] h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-3">Continuous Improvement</h3>
                </div>
                <p className="text-[#a1a1aa] leading-relaxed">
                  Your AI agent keeps improving with ongoing call analysis, feedback loops, and monthly optimizations.
                </p>
              </div>
            </TiltCardWrapper>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
