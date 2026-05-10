"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Word reveal for headline
    const words = gsap.utils.toArray('.hero-word');
    gsap.fromTo(words, 
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2
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

  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="pt-32 pb-8 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Top Badge */}
        <div className="hero-fade inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e5e7eb] mb-12">
          <div className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse"></div>
          <span className="text-[11px] font-medium tracking-[0.08em] text-[#6b7280] uppercase">
            AI Voice Receptionist
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-20">
          
          {/* Left Side Headline */}
          <div>
            <h1 className="text-[56px] md:text-[64px] leading-[1.05] text-[#1a1a2e] font-serif tracking-tight">
              {/* Splitting text for GSAP animation */}
              <span className="hero-word block" style={{ clipPath: "inset(0 0 0 0)" }}>Stop</span>
              <span className="hero-word block" style={{ clipPath: "inset(0 0 0 0)" }}>Missing Calls.</span>
              <span className="hero-word block" style={{ clipPath: "inset(0 0 0 0)" }}>Start Booking</span>
              <span className="hero-word block" style={{ clipPath: "inset(0 0 0 0)" }}>Patients.</span>
            </h1>
          </div>

          {/* Right Side Content */}
          <div className="lg:pt-4">
            <p className="hero-fade text-lg md:text-xl text-[#6b7280] mb-8 max-w-lg leading-relaxed">
              Never let a missed call become a missed patient. Nexus AI answers every call instantly, understands natural language, and books appointments directly to your calendar 24/7.
            </p>
            
            <div className="hero-fade flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-[#111111] text-white px-8 py-3.5 rounded-full text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-black transition-colors"
              >
                Book a Call <span className="tracking-widest opacity-60 ml-2">•••</span>
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center bg-white text-[#1a1a2e] border border-[#e5e7eb] px-8 py-3.5 rounded-full text-[13px] font-semibold tracking-[0.05em] uppercase hover:border-[#d1d5db] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="hero-fade grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#f0f0f0]">
          <div>
            <div className="text-3xl font-bold text-[#1a1a2e] font-serif mb-1">&lt; 1s</div>
            <div className="text-[11px] font-medium tracking-[0.08em] text-[#6b7280] uppercase">Latency</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#1a1a2e] font-serif mb-1">100%</div>
            <div className="text-[11px] font-medium tracking-[0.08em] text-[#6b7280] uppercase">Calendar Sync</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#1a1a2e] font-serif mb-1">24/7</div>
            <div className="text-[11px] font-medium tracking-[0.08em] text-[#6b7280] uppercase">Always On</div>
          </div>
        </div>

      </div>
    </section>
  );
}
