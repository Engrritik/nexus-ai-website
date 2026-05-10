"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.about-content', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      }
    });
  }, { scope: containerRef });

  return (
    <section id="about" className="py-24 bg-white" ref={containerRef}>
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1000px]">
        <div className="about-content text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[#e5e7eb] bg-[#f8f8f8] text-[#6b7280] text-[11px] font-medium tracking-[0.08em] uppercase">
            The Founder
          </div>
          <h2 className="text-4xl md:text-[48px] font-bold mb-6 text-[#1a1a2e] font-serif tracking-tight">
            Built by someone who <br className="hidden md:block" />
            understands the problem
          </h2>
        </div>

        <div className="about-content max-w-4xl mx-auto">
          <div className="bg-white border border-[#e5e7eb] rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-sm">
            
            {/* Left side: Profile Photo */}
            <div className="md:w-2/5 relative h-64 md:h-auto border-b md:border-b-0 md:border-r border-[#e5e7eb]">
              <Image 
                src="/ritik.jpeg" 
                alt="Ritik Kumar - Founder" 
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            {/* Right side: Bio Card */}
            <div className="md:w-3/5 p-8 md:p-12 bg-[#f8f8f8]">
              <div className="mb-6 pb-6 border-b border-[#e5e7eb]">
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">Ritik Kumar</h3>
                <p className="text-[#6b7280] font-medium text-sm">Founder, Nexus AI</p>
              </div>

              <div className="space-y-6 text-[#6b7280] text-[15px] leading-relaxed">
                <p>
                  I provide 24/7 technical oversight to ensure your AI Agent never misses a beat. I work directly with every clinic to guarantee a sub-1-second response time and seamless practice management integration.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
