"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";
import { HeroScene } from "./HeroScene";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <HeroScene />
      
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

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
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Your Dental Clinic Answers Every Call. <br className="hidden md:block" />
            <span className="gradient-text">Even At 2AM.</span>
          </h1>
          
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

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
    </section>
  );
}
