"use client";

import { useRef } from "react";
import Link from "next/link";
import { TiltCardWrapper } from "@/components/ui/TiltCardWrapper";
import { useCustomGSAP } from "@/hooks/useGSAP";
import { motion } from "framer-motion";
import gsap from "gsap";

export function Solution() {
  const containerRef = useRef<HTMLDivElement>(null);

  useCustomGSAP(() => {
  }, [containerRef]);

  // Card styles
  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    height: '100%',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative' as const,
    overflow: 'hidden'
  };

  return (
    <section id="solutions" className="py-24 bg-transparent relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-4xl md:text-[56px] font-bold text-white tracking-tight leading-tight"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Custom AI Solutions, Tailored to Your Business
          </motion.h2>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          
          {/* Card 1 */}
          <motion.div 
            className="solution-card-anim h-full"
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, 
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <TiltCardWrapper className="hover:border-white/20 rounded-[16px] group">
              <div style={cardStyle}>
                <div className="absolute -right-4 -top-8 text-[120px] font-bold text-white/5 pointer-events-none font-serif transition-colors group-hover:text-[#00d4aa]/10">01</div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-[22px] font-bold text-white mb-2">
                      <span style={{color:'#00d4aa'}}>Inbound</span> AI Receptionist
                    </h3>
                  </div>
                  
                  <p className="text-[#a1a1aa] leading-relaxed flex-grow">
                    Engage patients instantly, answer clinical inquiries, and resolve standard booking requests entirely on autopilot.
                  </p>

                  <div className="mt-8">
                    <ul className="space-y-3 mb-6">
                      {["24/7 autonomous booking and qualification", "Natural language intent recognition", "Real-time handoff to human agents"].map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px] text-[#a1a1aa]">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white opacity-30 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center w-full bg-white/10 text-white border border-white/5 px-6 py-3.5 rounded-[8px] text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-white/20 transition-colors"
                    >
                      BOOK A CALL →
                    </Link>
                  </div>
                </div>
              </div>
            </TiltCardWrapper>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="solution-card-anim h-full"
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, 
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <TiltCardWrapper className="hover:border-white/20 rounded-[16px] group">
              <div style={cardStyle}>
                <div className="absolute -right-4 -top-8 text-[120px] font-bold text-white/5 pointer-events-none font-serif transition-colors group-hover:text-[#7c3aed]/10">02</div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-[22px] font-bold text-white mb-2">
                      <span style={{color:'#7c3aed'}}>Workflow</span> Automation
                    </h3>
                  </div>
                  
                  <p className="text-[#a1a1aa] leading-relaxed flex-grow">
                    Automate your clinical pipelines, CRM syncs, and patient follow-ups directly into your existing dashboard.
                  </p>

                  <div className="mt-8">
                    <ul className="space-y-3 mb-6">
                      {["Multi-channel patient follow-up sequences", "Custom n8n workflow development", "EHR syncing and appointment logging"].map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px] text-[#a1a1aa]">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white opacity-30 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center w-full bg-white/10 text-white border border-white/5 px-6 py-3.5 rounded-[8px] text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-white/20 transition-colors"
                    >
                      BOOK A CALL →
                    </Link>
                  </div>
                </div>
              </div>
            </TiltCardWrapper>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="solution-card-anim h-full"
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, 
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <TiltCardWrapper className="hover:border-white/20 rounded-[16px] group">
              <div style={cardStyle}>
                <div className="absolute -right-4 -top-8 text-[120px] font-bold text-white/5 pointer-events-none font-serif transition-colors group-hover:text-[#16a34a]/10">03</div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-[22px] font-bold text-white mb-2">
                      <span style={{color:'#16a34a'}}>Calendar</span> Sync Engine
                    </h3>
                  </div>
                  
                  <p className="text-[#a1a1aa] leading-relaxed flex-grow">
                    Bi-directional Cal.com integration with deterministic availability checking. Zero double-bookings, guaranteed.
                  </p>

                  <div className="mt-8">
                    <ul className="space-y-3 mb-6">
                      {["Real-time availability checking", "Eliminates double-booking completely", "Works with existing clinic software"].map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px] text-[#a1a1aa]">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white opacity-30 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center w-full bg-white/10 text-white border border-white/5 px-6 py-3.5 rounded-[8px] text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-white/20 transition-colors"
                    >
                      BOOK A CALL →
                    </Link>
                  </div>
                </div>
              </div>
            </TiltCardWrapper>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            className="solution-card-anim h-full"
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, 
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <TiltCardWrapper className="hover:border-white/20 rounded-[16px] group">
              <div style={cardStyle}>
                <div className="absolute -right-4 -top-8 text-[120px] font-bold text-white/5 pointer-events-none font-serif transition-colors group-hover:text-[#ea580c]/10">04</div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-[22px] font-bold text-white mb-2">
                      <span style={{color:'#ea580c'}}>Real-Time</span> Analytics
                    </h3>
                  </div>
                  
                  <p className="text-[#a1a1aa] leading-relaxed flex-grow">
                    Full call transcripts, intent tagging, and actionable summaries pushed to your Slack or dashboard instantly.
                  </p>

                  <div className="mt-8">
                    <ul className="space-y-3 mb-6">
                      {["Sub-second latency processing", "Intent tagging and classification", "Slack and dashboard integrations"].map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px] text-[#a1a1aa]">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white opacity-30 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center w-full bg-white/10 text-white border border-white/5 px-6 py-3.5 rounded-[8px] text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-white/20 transition-colors"
                    >
                      BOOK A CALL →
                    </Link>
                  </div>
                </div>
              </div>
            </TiltCardWrapper>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
