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
    <section id="about" className="py-24 relative overflow-hidden bg-black/50 border-y border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-medium tracking-wide">
            The Founder
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Built by someone who <br className="hidden md:block" />
            <span className="gradient-text">understands the problem</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4 flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-teal/20 to-teal/50">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-black bg-black/80 relative">
                  <Image 
                    src="/ritik.jpeg" 
                    alt="Ritik Kumar - Founder" 
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-teal/20 blur-xl rounded-full -z-10" />
              </div>
            </motion.div>

            {/* Right side: Bio Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-8"
            >
              <Card className="p-8 md:p-10 border-teal/20">
                <div className="mb-6 pb-6 border-b border-white/10">
                  <h3 className="text-3xl font-bold text-white mb-2">Ritik Kumar</h3>
                  <p className="text-teal font-medium tracking-wide">Founder, Nexus AI</p>
                </div>

                <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-8">
                  <p>
                    I&apos;m a machine learning engineer from India who spent months researching why dental clinics lose patients. The answer was always the same — missed calls.
                  </p>
                  <p>
                    I built Nexus AI to solve exactly that. An AI voice receptionist that works 24/7, sounds human, and books patients directly into your calendar. No extra staff. No missed calls.
                  </p>
                  <p className="text-white/90 italic font-medium">
                    "I work directly with every clinic I onboard. You won&apos;t deal with a support ticket — you&apos;ll deal with me."
                  </p>
                </div>

                {/* Stat Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {stats.map((stat, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-black/50 border border-white/5"
                    >
                      <span className="text-teal font-bold text-xl mb-1">{stat.label}</span>
                      <span className="text-gray-500 text-sm">{stat.description}</span>
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
