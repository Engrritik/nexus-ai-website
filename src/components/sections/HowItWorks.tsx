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
    <section id="how-it-works" className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1000px]">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-[56px] font-bold text-[#1a1a2e] font-serif tracking-tight"
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
            <TiltCardWrapper className="bg-white border border-[#e5e7eb] rounded-[16px] overflow-hidden" >
              <div 
                className="absolute inset-0 z-0 opacity-50" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }}
              />
              <div className="relative z-10 p-[28px] h-full flex flex-col">
                <div className="h-[100px] w-full mb-4 flex items-center justify-center relative">
                  <div className="absolute top-0 right-0 bg-[#f3e8ff] border border-[#d8b4fe] text-[#7e22ce] text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9333ea] animate-pulse"></div>
                    0:22
                  </div>
                  <div className="phone-ring filter drop-shadow-md">
                    <Image src="/icons/phone.svg" alt="Phone" width={48} height={48} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Patient Calls After Hours</h3>
                <p className="text-[#6b7280] leading-relaxed">
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
            <TiltCardWrapper className="bg-white border border-[#e5e7eb] rounded-[16px] overflow-hidden">
              <div 
                className="absolute inset-0 z-0 opacity-50" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }}
              />
              <div className="relative z-10 p-[28px] h-full flex flex-col">
                <div className="h-[100px] w-full mb-4 flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-[16px] shadow-sm border border-[#f0f0f0] flex items-center justify-center">
                    <Image src="/icons/routing.svg" alt="Routing" width={32} height={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Intelligent Intent Routing</h3>
                <p className="text-[#6b7280] leading-relaxed">
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
            <TiltCardWrapper className="bg-white border border-[#e5e7eb] rounded-[16px] overflow-hidden">
              <div 
                className="absolute inset-0 z-0 opacity-50" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }}
              />
              <div className="relative z-10 p-[28px] h-full flex flex-col">
                <div className="h-[100px] w-full mb-4 flex items-center justify-center">
                  <div className="flex gap-4 items-center">
                    <div className="float-app" style={{ animationDelay: '0s', width: '36px', height: '36px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#4285f4' }}>G</div>
                    <div className="float-app" style={{ animationDelay: '0.3s', width: '36px', height: '36px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111111' }}>C</div>
                    <div className="float-app" style={{ animationDelay: '0.6s', width: '36px', height: '36px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ea4b00' }}>n</div>
                    <div className="float-app" style={{ animationDelay: '0.9s', width: '36px', height: '36px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#4a154b' }}>S</div>
                    <div className="float-app" style={{ animationDelay: '1.2s', width: '36px', height: '36px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000000' }}>N</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Seamless Integration</h3>
                <p className="text-[#6b7280] leading-relaxed">
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
            <TiltCardWrapper className="bg-white border border-[#e5e7eb] rounded-[16px] overflow-hidden">
              <div 
                className="absolute inset-0 z-0 opacity-50" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }}
              />
              <div className="relative z-10 p-[28px] h-full flex flex-col">
                <div className="h-[100px] w-full mb-4 flex items-center justify-center gap-1.5">
                  <Image src="/icons/chart.svg" alt="Chart" width={48} height={48} />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Continuous Improvement</h3>
                <p className="text-[#6b7280] leading-relaxed">
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
