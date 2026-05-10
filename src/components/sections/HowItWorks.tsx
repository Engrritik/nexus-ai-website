"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Phone, User, Bot, MessageSquare, Activity, Zap, Calendar, Slack, Workflow, BarChart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.workflow-header', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        once: true
      }
    });

    const workflowCards = gsap.utils.toArray('.workflow-card');
    gsap.from(workflowCards, {
      y: 24,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      }
    });
  }, { scope: containerRef });

  return (
    <section id="how-it-works" className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1000px]">
        
        <div className="workflow-header text-center mb-16">
          <h2 className="text-4xl md:text-[56px] font-bold text-[#1a1a2e] font-serif tracking-tight">
            Fully Automated Workflow
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="workflow-card relative bg-white border border-[#e5e7eb] rounded-[16px] p-8 card-hover overflow-hidden">
            <div className="absolute inset-0 bg-dotted-pattern opacity-40 z-0"></div>
            <div className="relative z-10">
              <div className="h-16 flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#f8f8f8] border border-[#e5e7eb] flex items-center justify-center shadow-sm">
                  <User className="w-5 h-5 text-[#6b7280]" />
                </div>
                <div className="w-8 h-[2px] bg-[#e5e7eb] rounded-full"></div>
                <div className="w-10 h-10 rounded-full bg-[#f8f8f8] border border-[#e5e7eb] flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-[#6b7280]" />
                </div>
                <div className="w-8 h-[2px] bg-[#e5e7eb] rounded-full"></div>
                <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center shadow-md">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Patient Calls After Hours</h3>
              <p className="text-[#6b7280] leading-relaxed">
                The AI receptionist answers instantly and understands patient needs through natural conversation.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="workflow-card relative bg-white border border-[#e5e7eb] rounded-[16px] p-8 card-hover overflow-hidden">
            <div className="absolute inset-0 bg-dotted-pattern opacity-40 z-0"></div>
            <div className="absolute top-6 right-6 z-20">
              <div className="bg-[#f3e8ff] border border-[#d8b4fe] text-[#7e22ce] text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9333ea] animate-pulse"></div>
                0:22
              </div>
            </div>
            <div className="relative z-10">
              <div className="h-16 flex items-center gap-4 mb-6">
                <div className="p-2.5 rounded-xl bg-[#f8f8f8] border border-[#e5e7eb]">
                  <MessageSquare className="w-6 h-6 text-[#6b7280]" />
                </div>
                <div className="p-2.5 rounded-xl bg-[#f8f8f8] border border-[#e5e7eb]">
                  <Activity className="w-6 h-6 text-[#6b7280]" />
                </div>
                <div className="p-2.5 rounded-xl bg-[#111111] shadow-md">
                  <Zap className="w-6 h-6 text-[#facc15]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Intelligent Intent Routing</h3>
              <p className="text-[#6b7280] leading-relaxed">
                Calls are smartly routed — appointments get scheduled, inquiries answered, emergencies escalated.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="workflow-card relative bg-white border border-[#e5e7eb] rounded-[16px] p-8 card-hover overflow-hidden">
            <div className="absolute inset-0 bg-dotted-pattern opacity-40 z-0"></div>
            <div className="relative z-10">
              <div className="h-16 flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center shadow-sm">
                  <Calendar className="w-6 h-6 text-[#16a34a]" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#fefce8] border border-[#fef08a] flex items-center justify-center shadow-sm">
                  <Slack className="w-6 h-6 text-[#ca8a04]" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center shadow-sm">
                  <Workflow className="w-6 h-6 text-[#2563eb]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Seamless Integration</h3>
              <p className="text-[#6b7280] leading-relaxed">
                All interactions sync with your calendar, update your CRM, and provide key insights automatically.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="workflow-card relative bg-white border border-[#e5e7eb] rounded-[16px] p-8 card-hover overflow-hidden">
            <div className="absolute inset-0 bg-dotted-pattern opacity-40 z-0"></div>
            <div className="relative z-10">
              <div className="h-16 flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-[#f3e8ff] rounded-xl opacity-50"></div>
                  <div className="p-3 bg-white rounded-lg border border-[#e5e7eb] relative z-10">
                    <BarChart className="w-6 h-6 text-[#6b7280]" />
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#e5e7eb] shadow-sm relative z-10">
                  <User className="w-6 h-6 text-[#1a1a2e]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Continuous Improvement</h3>
              <p className="text-[#6b7280] leading-relaxed">
                Your AI agent keeps improving with ongoing call analysis, feedback loops, and monthly optimizations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
