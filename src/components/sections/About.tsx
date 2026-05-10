"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useCustomGSAP } from "@/hooks/useGSAP";
import Image from "next/image";

export function About() {
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

    // Split reveal
    gsap.from('.about-photo', {
      x: -60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.about-card',
        start: "top 80%",
        once: true
      }
    });

    gsap.from('.about-text', {
      x: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.about-card',
        start: "top 80%",
        once: true
      }
    });

  }, [containerRef]);

  return (
    <section id="about" className="py-24 bg-white" ref={containerRef}>
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1000px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[#e5e7eb] bg-[#f8f8f8] text-[#6b7280] text-[11px] font-medium tracking-[0.08em] uppercase">
            The Founder
          </div>
          <h2 className="text-4xl md:text-[48px] font-bold mb-6 text-[#1a1a2e] font-serif tracking-tight">
            Built by someone who <br className="hidden md:block" />
            understands the problem
          </h2>
        </div>

        <div className="max-w-4xl mx-auto about-card">
          <div className="bg-white border border-[#e5e7eb] rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-sm">
            
            {/* Left side: Profile Photo */}
            <div className="about-photo md:w-2/5 relative h-64 md:h-auto border-b md:border-b-0 md:border-r border-[#e5e7eb]">
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
            <div className="about-text md:w-3/5 p-8 md:p-12 bg-[#f8f8f8]">
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
