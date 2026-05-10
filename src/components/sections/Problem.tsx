"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { TrendingDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.problem-card');
    gsap.from(cards, {
      y: 24,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      }
    });

    gsap.from('.problem-header', {
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
  }, { scope: containerRef });

  return (
    <div className="w-full px-4 md:px-6 mt-16 mb-24" ref={containerRef}>
      <div className="bg-[#111111] rounded-[24px] py-16 px-6 md:px-12 max-w-[1200px] mx-auto overflow-hidden">
        
        <div className="problem-header text-center max-w-3xl mx-auto mb-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-[#1a1a1a] text-gray-300 text-sm font-medium">
            Stop losing money everyday
            <TrendingDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1 */}
          <div className="problem-card flex flex-col items-start text-left border border-white/5 bg-[#1e1e2e] h-full p-8 rounded-[16px] relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-[radial-gradient(rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[size:16px_16px] opacity-20" style={{ WebkitMaskImage: 'linear-gradient(to top, white, transparent)' }} />
            <div className="relative z-10 w-full">
              <h3 className="text-xl font-bold mb-4 text-white font-sans tracking-tight">Outdated Workflows</h3>
              <p className="text-[#9ca3af] leading-relaxed font-sans mb-8">
                Manual data entry and disjointed tools are slowing down your team's true potential.
              </p>
            </div>
          </div>

          {/* Card 2 (Center Highlighted) */}
          <div className="problem-card flex flex-col items-start text-left border border-white/10 bg-[#1e1e6e] h-full p-8 rounded-[16px] relative overflow-hidden group transform md:-translate-y-4 shadow-xl">
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-[radial-gradient(rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[size:16px_16px] opacity-30" style={{ WebkitMaskImage: 'linear-gradient(to top, white, transparent)' }} />
            <div className="relative z-10 w-full h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-white font-sans tracking-tight">AI-Powered<br/>Efficiency</h3>
              <p className="text-[#e2e8f0] leading-relaxed font-sans mb-8 flex-1">
                Automate repetitive tasks, sync your data seamlessly, and focus on what actually scales your business.
              </p>
              <div className="flex justify-start mt-auto pb-2">
                <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform">
                  Learn More <span className="text-black ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="problem-card flex flex-col items-start text-left border border-white/5 bg-[#1e1e2e] h-full p-8 rounded-[16px] relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-[radial-gradient(rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[size:16px_16px] opacity-20" style={{ WebkitMaskImage: 'linear-gradient(to top, white, transparent)' }} />
            <div className="relative z-10 w-full">
              <h3 className="text-xl font-bold mb-4 text-white font-sans tracking-tight">Missed Opportunities</h3>
              <p className="text-[#9ca3af] leading-relaxed font-sans mb-8">
                Without intelligent insights, you're leaving money on the table every single day.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
