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
                <div className="h-[100px] w-full mb-4 relative flex items-center justify-center">
                  <div className="absolute anim-float-1" style={{ top: '20px', left: '10%' }}>
                    <div className="w-[36px] h-[36px] bg-[#3b82f6] rounded-[8px] flex items-center justify-center text-white font-bold text-lg shadow-sm">C</div>
                  </div>
                  <div className="absolute anim-float-2" style={{ top: '50px', left: '30%' }}>
                    <div className="w-[36px] h-[36px] bg-[#a855f7] rounded-[8px] flex items-center justify-center text-white font-bold text-lg shadow-sm">S</div>
                  </div>
                  <div className="absolute anim-float-3" style={{ top: '10px', left: '50%' }}>
                    <div className="w-[36px] h-[36px] bg-[#f97316] rounded-[8px] flex items-center justify-center text-white font-bold text-lg shadow-sm">n</div>
                  </div>
                  <div className="absolute anim-float-4" style={{ top: '60px', left: '70%' }}>
                    <div className="w-[36px] h-[36px] bg-[#1a1a2e] rounded-[8px] flex items-center justify-center text-white font-bold text-lg shadow-sm">N</div>
                  </div>
                  <div className="absolute anim-float-5" style={{ top: '25px', left: '85%' }}>
                    <div className="w-[36px] h-[36px] bg-[#22c55e] rounded-[8px] flex items-center justify-center text-white font-bold text-lg shadow-sm">W</div>
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
