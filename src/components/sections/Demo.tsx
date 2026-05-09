"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo" className="py-[100px] relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] text-[11px] uppercase tracking-[0.08em] font-mono font-medium">
            The Proof
          </div>
          <h2 className="text-[48px] md:text-5xl font-bold mb-6 text-white font-sans tracking-tight">
            See the Architecture in <span className="text-[#00f0ff]">Action</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <div className="w-full relative rounded-[24px] overflow-hidden glass border border-white/10 shadow-[0_0_60px_rgba(112,0,255,0.15)] bg-[#0f0f15]/80 backdrop-blur-xl group">
          {isPlaying ? (
            <div className="w-full" style={{ aspectRatio: '16/9' }}>
              {/* Loom iframe placeholder */}
              <iframe 
                src="https://www.loom.com/embed/placeholder" 
                frameBorder="0" 
                allowFullScreen 
                className="w-full h-full"
              ></iframe>
            </div>
          ) : (
            <div 
              className="relative w-full cursor-pointer flex items-center justify-center bg-[#050505] overflow-hidden"
              style={{aspectRatio: '16/9'}}
              onClick={() => setIsPlaying(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-[#7000ff]/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <Image 
                src={"/thumbnail.png?v=" + new Date().getTime()} 
                alt="Nexus AI Demo Thumbnail" 
                fill
                unoptimized
                className="object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out z-0" 
              />
              
              <div className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center z-10 shadow-[0_0_40px_rgba(0,240,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-[#00f0ff] ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
          </div>
          <p className="mt-6 text-[13px] text-[#A1A1AA] tracking-wide font-sans">
            Watch Nexus AI handle a live patient booking in under 60 seconds.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
