"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function Demo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(() => {
    gsap.from('.demo-content', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      }
    });
  }, { scope: containerRef });

  return (
    <section id="demo" className="py-24 bg-[#f8f8f8]" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1000px] demo-content">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-[48px] font-bold text-[#1a1a2e] font-serif tracking-tight">
            See It In Action
          </h2>
        </div>

        <div className="bg-white border border-[#e5e7eb] rounded-[24px] p-4 md:p-6 shadow-sm overflow-hidden">
          <div className="w-full relative rounded-[16px] overflow-hidden bg-[#111111] border border-[#e5e7eb] group">
            {isPlaying ? (
              <div className="w-full" style={{ aspectRatio: '16/9' }}>
                <iframe 
                  src="https://www.loom.com/embed/placeholder" 
                  frameBorder="0" 
                  allowFullScreen 
                  className="w-full h-full"
                ></iframe>
              </div>
            ) : (
              <div 
                className="relative w-full cursor-pointer flex items-center justify-center overflow-hidden"
                style={{aspectRatio: '16/9'}}
                onClick={() => setIsPlaying(true)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                
                <Image 
                  src="/thumbnail.png" 
                  alt="Nexus AI Demo Thumbnail" 
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0" 
                />
                
                <div className="w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#1a1a2e] ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          <p className="mt-6 text-center text-[14px] text-[#6b7280]">
            Watch Nexus AI handle a live patient booking in under 60 seconds.
          </p>
        </div>

      </div>
    </section>
  );
}
