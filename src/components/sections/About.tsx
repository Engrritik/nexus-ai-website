"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

export function About() {
  const stats = [
    { label: "110+", description: "Cold emails sent to dental owners" },
    { label: "52%", description: "Open rate across all campaigns" },
    { label: "1 Mission", description: "Zero missed calls for dental clinics" }
  ];

  return (
    <section id="about" className="py-[100px] relative overflow-hidden bg-slate-50">
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#3182CE]/30 bg-[#3182CE]/10 text-[#3182CE] text-sm font-medium tracking-wide">
            The Founder
          </div>
          <h2 className="text-[48px] md:text-5xl font-bold mb-6 text-[#1A365D]">
            Built by someone who <br className="hidden md:block" />
            <span className="text-[#3182CE]">understands the problem</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:col-span-4 h-full"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image 
                    src="/ritik.jpeg" 
                    alt="Ritik Kumar - Founder" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-[#3182CE]/10 blur-xl rounded-2xl -z-10" />
              </div>
            </motion.div>

            {/* Right side: Bio Card */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:col-span-8 h-full"
            >  
              <Card className="p-8 md:p-10 border-[#3182CE]/20 bg-white shadow-xl">
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h3 className="text-3xl font-bold text-[#1A365D] mb-2">Ritik Kumar</h3>
                  <p className="text-[#3182CE] font-medium tracking-wide">Founder, Nexus AI</p>
                </div>

                <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-8">
                  <p>
                    I provide 24/7 technical oversight to ensure your AI Agent never misses a beat. I work directly with every clinic to guarantee a sub-1-second response time and seamless practice management integration.
                  </p>
                </div>

                {/* Stat Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {stats.map((stat, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-slate-50 border border-gray-100"
                    >
                      <span className="text-[#3182CE] font-bold text-xl mb-1">{stat.label}</span>
                      <span className="text-gray-600 text-sm">{stat.description}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
