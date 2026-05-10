"use client";

import { useRef } from "react";
import { TiltCardWrapper } from "@/components/ui/TiltCardWrapper";
import { useCustomGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";

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

    // Workflow Cards - stagger from sides
    const leftCards = gsap.utils.toArray('.workflow-card-left');
    const rightCards = gsap.utils.toArray('.workflow-card-right');
    
    gsap.from(leftCards, {
      x: -40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      }
    });

    gsap.from(rightCards, {
      x: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
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
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes phoneShake {
          0%, 100% { transform: rotate(0deg); }
          5%, 15%, 25%, 35% { transform: rotate(10deg); }
          10%, 20%, 30% { transform: rotate(-10deg); }
          40% { transform: rotate(0deg); }
        }
        .anim-phone {
          display: inline-block;
          animation: phoneShake 3s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes pulseWave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.5); }
        }
        .anim-wave {
          display: inline-block;
          animation: pulseWave 1s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .anim-float-1 { animation: floatUp 3s ease-in-out infinite; }
        .anim-float-2 { animation: floatUp 3.5s ease-in-out infinite 0.5s; }
        .anim-float-3 { animation: floatUp 2.8s ease-in-out infinite 1s; }
        .anim-float-4 { animation: floatUp 3.2s ease-in-out infinite 1.5s; }
        .anim-float-5 { animation: floatUp 3.6s ease-in-out infinite 0.2s; }
        
        @keyframes visualizer {
          0%, 100% { height: 10px; }
          50% { height: 40px; }
        }
        .anim-bar-1 { animation: visualizer 1.2s ease-in-out infinite 0.1s; }
        .anim-bar-2 { animation: visualizer 1.2s ease-in-out infinite 0.3s; }
        .anim-bar-3 { animation: visualizer 1.2s ease-in-out infinite 0.5s; }
        .anim-bar-4 { animation: visualizer 1.2s ease-in-out infinite 0.2s; }
        .anim-bar-5 { animation: visualizer 1.2s ease-in-out infinite 0.4s; }
      `}} />
      <div className="container mx-auto px-6 md:px-12 max-w-[1000px]">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[56px] font-bold text-[#1a1a2e] font-serif tracking-tight">
            Fully Automated Workflow
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="workflow-card-left h-full">
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
                  <div className="text-[48px] anim-phone leading-none filter drop-shadow-md">
                    📞
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Patient Calls After Hours</h3>
                <p className="text-[#6b7280] leading-relaxed">
                  The AI receptionist answers instantly and understands patient needs through natural conversation.
                </p>
              </div>
            </TiltCardWrapper>
          </div>

          {/* Card 2 */}
          <div className="workflow-card-right h-full">
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
                  <div className="w-12 h-12 bg-white rounded-[12px] shadow-sm border border-[#f0f0f0] flex items-center justify-center text-xl">
                    💬
                  </div>
                  <div className="w-12 h-12 bg-white rounded-[12px] shadow-sm border border-[#f0f0f0] flex items-center justify-center text-xl anim-wave text-[#00d4aa]">
                    ≋
                  </div>
                  <div className="w-12 h-12 bg-white rounded-[12px] shadow-sm border border-[#f0f0f0] flex items-center justify-center text-xl">
                    ⚡
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Intelligent Intent Routing</h3>
                <p className="text-[#6b7280] leading-relaxed">
                  Calls are smartly routed — appointments scheduled, inquiries answered, emergencies escalated instantly.
                </p>
              </div>
            </TiltCardWrapper>
          </div>

          {/* Card 3 */}
          <div className="workflow-card-left h-full">
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
                    <div className="anim-float-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" className="text-[#a1a1aa] hover:text-[#1a1a2e] transition-colors duration-300">
                        <circle cx="18" cy="18" r="3"></circle>
                        <circle cx="6" cy="6" r="3"></circle>
                        <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                        <path d="M11 18H8a2 2 0 0 1-2-2V9"></path>
                      </svg>
                    </div>
                    <div className="anim-float-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" className="text-[#a1a1aa] hover:text-[#1a1a2e] transition-colors duration-300">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                        <path d="M8 14h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 18h.01"></path>
                        <path d="M12 18h.01"></path>
                        <path d="M16 18h.01"></path>
                      </svg>
                    </div>
                    <div className="anim-float-3">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" className="text-[#a1a1aa] hover:text-[#1a1a2e] transition-colors duration-300">
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1 2.521-2.52A2.528 2.528 0 0 1 13.877 5.042a2.527 2.527 0 0 1-2.521 2.52H8.834v-2.52zM8.834 6.313a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.835a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.835a2.527 2.527 0 0 1-2.522 2.52h-2.522v-2.52zM17.688 8.835a2.527 2.527 0 0 1-2.523 2.52 2.527 2.527 0 0 1-2.52-2.52V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.313zM15.165 18.958a2.528 2.528 0 0 1-2.523 2.522A2.528 2.528 0 0 1 10.12 18.958a2.527 2.527 0 0 1 2.52-2.522h2.523v2.522zM15.165 17.687a2.527 2.527 0 0 1-2.523-2.522 2.527 2.527 0 0 1 2.523-2.521h6.313A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.521h-6.313z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Seamless Integration</h3>
                <p className="text-[#6b7280] leading-relaxed">
                  All interactions sync with your calendar, update your CRM, and provide actionable insights automatically.
                </p>
              </div>
            </TiltCardWrapper>
          </div>

          {/* Card 4 */}
          <div className="workflow-card-right h-full">
            <TiltCardWrapper className="bg-white border border-[#e5e7eb] rounded-[16px] overflow-hidden">
              <div 
                className="absolute inset-0 z-0 opacity-50" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }}
              />
              <div className="relative z-10 p-[28px] h-full flex flex-col">
                <div className="h-[100px] w-full mb-4 flex items-center justify-center gap-1.5 h-full">
                  <div className="w-3 bg-[#00d4aa] rounded-full anim-bar-1"></div>
                  <div className="w-3 bg-[#00d4aa] rounded-full anim-bar-2"></div>
                  <div className="w-3 bg-[#00d4aa] rounded-full anim-bar-3"></div>
                  <div className="w-3 bg-[#00d4aa] rounded-full anim-bar-4"></div>
                  <div className="w-3 bg-[#00d4aa] rounded-full anim-bar-5"></div>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Continuous Improvement</h3>
                <p className="text-[#6b7280] leading-relaxed">
                  Your AI agent keeps improving with ongoing call analysis, feedback loops, and monthly optimizations.
                </p>
              </div>
            </TiltCardWrapper>
          </div>

        </div>

      </div>
    </section>
  );
}
