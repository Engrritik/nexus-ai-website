"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const headlineP1 = "Your Dental Clinic Answers Every Call.".split("");
  const headlineP2 = "Even At 2AM.".split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Gradient overlay to ensure text readability against the new global neural background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-medium tracking-wide">
            The #1 AI Receptionist for US Dental Clinics
          </div>
          <div className="relative overflow-hidden inline-block w-full">
            <div className="absolute inset-0 z-20 animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent w-[50%] h-[200%] pointer-events-none mix-blend-overlay -skew-x-12 translate-x-[-200%]"></div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              <span>
                {headlineP1.map((char, index) => (
                  <motion.span
                    key={`p1-${index}`}
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: index * 0.02, duration: 0.6, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <br className="hidden md:block" />
              <span className="gradient-text animate-pulse-neon inline-block mt-2">
                {headlineP2.map((char, index) => (
                  <motion.span
                    key={`p2-${index}`}
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: (headlineP1.length + index) * 0.02, duration: 0.6, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nexus AI is an AI voice receptionist that answers missed calls, qualifies patients and books appointments automatically — <span className="text-white font-medium">24/7.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button size="lg" className="w-full sm:w-auto text-base" asChild>
              <a href="mailto:ritikksaklani@gmail.com?subject=Free%20Trial%20Request">Start Free Trial</a>
            </Button>
            <Button size="lg" variant="glass" className="w-full sm:w-auto text-base gap-2" asChild>
              <Link href="#demo">
                <Play className="w-4 h-4" /> Watch 2-Min Demo
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient orb is removed as NeuralBackground handles global dynamic lighting implicitly now */}
    </section>
  );
}
