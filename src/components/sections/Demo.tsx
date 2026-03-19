"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-medium tracking-wide">
            Interactive Demo
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            See Nexus AI book a real dental appointment <span className="gradient-text">in 2 minutes</span>
          </h2>
          <p className="text-lg text-gray-400">
            Listen to a recording of our AI agent seamlessly qualifying a patient and finding an open calendar slot.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl bg-black"
        >
          {isPlaying ? (
            <iframe src='https://drive.google.com/file/d/14WDNO3bo6qC_tlUTi6EDOWLd8fcL7TzD/preview' width='100%' style={{aspectRatio: '16/9', borderRadius: '12px', border: 'none'}} allow='autoplay'></iframe>
          ) : (
            <div 
              className="relative w-full cursor-pointer group flex items-center justify-center bg-black overflow-hidden"
              style={{aspectRatio: '16/9', borderRadius: '12px'}}
              onClick={() => setIsPlaying(true)}
            >
              <Image 
                src="/tumb.png" 
                alt="Nexus AI Demo Thumbnail" 
                fill 
                className="object-cover opacity-70 group-hover:scale-105 transition-all duration-700 ease-out z-0" 
              />
              
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-0"></div>
              
              <div className="w-20 h-20 bg-teal/90 rounded-full flex items-center justify-center z-10 shadow-[0_0_40px_rgba(0,212,170,0.5)] group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              <div className="absolute bottom-6 left-8 z-10">
                <p className="font-semibold text-lg text-white mb-1">Nexus AI Automatic Booking Demo</p>
                <p className="hidden md:block text-sm text-gray-400">Click to watch the live call playback</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
