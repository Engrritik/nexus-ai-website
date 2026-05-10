"use client";

import { useRef } from "react";
import Link from "next/link";
import { DotCluster } from "@/components/ui/DotCluster";
import { TiltCardWrapper } from "@/components/ui/TiltCardWrapper";
import { useCustomGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";

export function Solution() {
  const containerRef = useRef<HTMLDivElement>(null);

  useCustomGSAP(() => {
    // All H2 fade slide
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

    // Stagger reveal for cards
    const solutionCards = gsap.utils.toArray('.solution-card-anim');
    gsap.from(solutionCards, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      }
    });
  }, [containerRef]);

  // Card styles
  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    height: '100%',
    transition: 'border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
  };

  return (
    <section id="solutions" className="py-24 bg-[#f8f8f8]" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-[56px] font-bold text-[#1a1a2e] tracking-tight leading-tight">
            Custom AI Solutions, Tailored to Your Business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="solution-card-anim h-full">
            <TiltCardWrapper className="hover:border-[#d1d5db] rounded-[16px]">
              <div style={cardStyle}>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <DotCluster color="#00d4aa" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#1a1a2e] mb-2">
                      <span style={{color:'#00d4aa'}}>Inbound</span> AI Receptionist
                    </h3>
                  </div>
                </div>
                
                <p className="text-[#6b7280] leading-relaxed flex-grow">
                  Engage patients instantly, answer clinical inquiries, and resolve standard booking requests entirely on autopilot.
                </p>

                <div>
                  <ul className="space-y-3 mb-6">
                    {["24/7 autonomous booking and qualification", "Natural language intent recognition", "Real-time handoff to human agents"].map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[#6b7280]">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e] opacity-30 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center w-full bg-[#111111] text-white px-6 py-3.5 rounded-[8px] text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-black transition-colors"
                  >
                    BOOK A CALL →
                  </Link>
                </div>
              </div>
            </TiltCardWrapper>
          </div>

          {/* Card 2 */}
          <div className="solution-card-anim h-full">
            <TiltCardWrapper className="hover:border-[#d1d5db] rounded-[16px]">
              <div style={cardStyle}>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <DotCluster color="#7c3aed" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#1a1a2e] mb-2">
                      <span style={{color:'#7c3aed'}}>Workflow</span> Automation
                    </h3>
                  </div>
                </div>
                
                <p className="text-[#6b7280] leading-relaxed flex-grow">
                  Automate your clinical pipelines, CRM syncs, and patient follow-ups directly into your existing dashboard.
                </p>

                <div>
                  <ul className="space-y-3 mb-6">
                    {["Multi-channel patient follow-up sequences", "Custom n8n workflow development", "EHR syncing and appointment logging"].map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[#6b7280]">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e] opacity-30 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center w-full bg-[#111111] text-white px-6 py-3.5 rounded-[8px] text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-black transition-colors"
                  >
                    BOOK A CALL →
                  </Link>
                </div>
              </div>
            </TiltCardWrapper>
          </div>

          {/* Card 3 */}
          <div className="solution-card-anim h-full">
            <TiltCardWrapper className="hover:border-[#d1d5db] rounded-[16px]">
              <div style={cardStyle}>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <DotCluster color="#16a34a" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#1a1a2e] mb-2">
                      <span style={{color:'#16a34a'}}>Calendar</span> Sync Engine
                    </h3>
                  </div>
                </div>
                
                <p className="text-[#6b7280] leading-relaxed flex-grow">
                  Bi-directional Cal.com integration with deterministic availability checking. Zero double-bookings, guaranteed.
                </p>

                <div>
                  <ul className="space-y-3 mb-6">
                    {["Real-time availability checking", "Eliminates double-booking completely", "Works with existing clinic software"].map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[#6b7280]">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e] opacity-30 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center w-full bg-[#111111] text-white px-6 py-3.5 rounded-[8px] text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-black transition-colors"
                  >
                    BOOK A CALL →
                  </Link>
                </div>
              </div>
            </TiltCardWrapper>
          </div>

          {/* Card 4 */}
          <div className="solution-card-anim h-full">
            <TiltCardWrapper className="hover:border-[#d1d5db] rounded-[16px]">
              <div style={cardStyle}>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <DotCluster color="#ea580c" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#1a1a2e] mb-2">
                      <span style={{color:'#ea580c'}}>Real-Time</span> Analytics
                    </h3>
                  </div>
                </div>
                
                <p className="text-[#6b7280] leading-relaxed flex-grow">
                  Full call transcripts, intent tagging, and actionable summaries pushed to your Slack or dashboard instantly.
                </p>

                <div>
                  <ul className="space-y-3 mb-6">
                    {["Sub-second latency processing", "Intent tagging and classification", "Slack and dashboard integrations"].map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[#6b7280]">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e] opacity-30 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center w-full bg-[#111111] text-white px-6 py-3.5 rounded-[8px] text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-black transition-colors"
                  >
                    BOOK A CALL →
                  </Link>
                </div>
              </div>
            </TiltCardWrapper>
          </div>

        </div>

      </div>
    </section>
  );
}
