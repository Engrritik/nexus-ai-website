"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useCustomGSAP } from "@/hooks/useGSAP";
import { motion } from "framer-motion";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const darkCardRef = useRef<HTMLDivElement>(null);
  
  useCustomGSAP(() => {
    // Word reveal for headline
    const words = gsap.utils.toArray('.hero-word');
    gsap.fromTo(words, 
      { clipPath: "inset(0 100% 0 0)", opacity: 0 },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.3
      }
    );

    // Fade in right side content
    gsap.from('.hero-fade', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      delay: 0.8
    });

    // Dark Card slide up
    if (darkCardRef.current) {
      gsap.from(darkCardRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: darkCardRef.current,
          start: "top 80%", // 20% visible
          once: true
        }
      });
    }

  }, [heroRef]);

  return (
    <section ref={heroRef} className="pt-32 pb-8 bg-transparent relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Top Badge */}
        <div className="hero-fade inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse"></div>
          <span className="text-[11px] font-medium tracking-[0.08em] text-[#a1a1aa] uppercase">
            AI Voice Receptionist
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-20">
          
          {/* Left Side Headline */}
          <div>
            <h1 className="text-[56px] md:text-[64px] leading-[1.05] text-white font-serif tracking-tight">
              <motion.span 
                className="block"
                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Stop Missing Calls.
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Start Booking Patients.
              </motion.span>
            </h1>
          </div>

          {/* Right Side Content */}
          <div className="lg:pt-4">
            <p className="hero-fade text-lg md:text-xl text-[#a1a1aa] mb-8 max-w-lg leading-relaxed">
              Never let a missed call become a missed patient. Nexus AI answers every call instantly, understands natural language, and books appointments directly to your calendar 24/7.
            </p>
            
            <div className="hero-fade flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-black px-8 py-3.5 rounded-full text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-gray-200 transition-colors"
              >
                Book a Call <span className="tracking-widest opacity-60 ml-2">•••</span>
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center bg-transparent text-white border border-white/20 px-8 py-3.5 rounded-full text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="hero-fade hero-stats flex items-center justify-between pt-12 border-t border-white/10">
          <div>
            <div className="text-3xl font-bold text-white font-serif mb-1">
              &lt; 1s
            </div>
            <div className="text-[11px] font-medium tracking-[0.08em] text-[#a1a1aa] uppercase">Latency</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white font-serif mb-1">
              100%
            </div>
            <div className="text-[11px] font-medium tracking-[0.08em] text-[#a1a1aa] uppercase">Calendar Sync Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white font-serif mb-1">
              24/7
            </div>
            <div className="text-[11px] font-medium tracking-[0.08em] text-[#a1a1aa] uppercase">Always On</div>
          </div>
        </div>

      </div>

      {/* Dark Rounded Card Section built-in to the Hero Bottom */}
      <div ref={darkCardRef} className="w-full px-4 md:px-6 mt-20 mb-12 relative z-10">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] py-16 px-6 md:px-12 max-w-[1200px] mx-auto overflow-hidden">
          
          <div className="text-center max-w-3xl mx-auto mb-12 flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium">
              Stop losing money everyday
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Card 1 */}
            <div className="flex flex-col items-start text-left border border-white/5 bg-white/5 backdrop-blur-sm h-full p-8 rounded-[16px] relative overflow-hidden group">
              <div className="absolute -right-4 -top-8 text-[120px] font-bold text-white/5 pointer-events-none font-serif">01</div>
              <div className="relative z-10 w-full">
                <h3 className="text-xl font-bold mb-4 text-white font-serif tracking-tight">Outdated Workflows</h3>
                <p className="text-[#a1a1aa] leading-relaxed font-sans mb-8">
                  Manual data entry and disjointed tools are slowing down your team's true potential.
                </p>
              </div>
            </div>

            {/* Card 2 (Center Highlighted) */}
            <div className="flex flex-col items-start text-left border border-[#00d4aa]/30 bg-[#00d4aa]/10 backdrop-blur-sm h-full p-8 rounded-[16px] relative overflow-hidden group transform md:-translate-y-4 shadow-2xl">
              <div className="absolute -right-4 -top-8 text-[120px] font-bold text-[#00d4aa]/10 pointer-events-none font-serif">02</div>
              <div className="relative z-10 w-full h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4 text-white font-serif tracking-tight">AI-Powered<br/>Efficiency</h3>
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
            <div className="flex flex-col items-start text-left border border-white/5 bg-white/5 backdrop-blur-sm h-full p-8 rounded-[16px] relative overflow-hidden group">
              <div className="absolute -right-4 -top-8 text-[120px] font-bold text-white/5 pointer-events-none font-serif">03</div>
              <div className="relative z-10 w-full">
                <h3 className="text-xl font-bold mb-4 text-white font-serif tracking-tight">Missed Opportunities</h3>
                <p className="text-[#a1a1aa] leading-relaxed font-sans mb-8">
                  Without intelligent insights, you're leaving money on the table every single day.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
