"use client";

import { motion } from "framer-motion";
import { BackgroundScene } from "@/components/ui/BackgroundScene";
import { TiltCard } from "@/components/ui/TiltCard";

export function Solution() {
  const cards = [
    {
      titleColor: "text-[#00f0ff]",
      dotColor: "bg-[#00f0ff]/60",
      titleWord: "Inbound",
      titleRest: "Voice Receptionist",
      description: "24/7 autonomous booking & lead qualification. Natural language intent recognition with zero-hallucination architecture.",
      delay: 0
    },
    {
      titleColor: "text-[#7000ff]",
      dotColor: "bg-[#7000ff]/60",
      titleWord: "Custom",
      titleRest: "Engineering & Logic",
      description: "Tailored n8n workflows and custom webhook integrations. We build the plumbing that connects your voice engine to your actual business tools.",
      delay: 0.1
    },
    {
      titleColor: "text-[#00ffa3]",
      dotColor: "bg-[#00ffa3]/60",
      titleWord: "Seamless",
      titleRest: "Calendar Sync",
      description: "Bi-directional integration with Cal.com and existing clinic CRMs. Deterministic availability checking to completely eliminate double-booking.",
      delay: 0.2
    },
    {
      titleColor: "text-[#ff00a0]",
      dotColor: "bg-[#ff00a0]/60",
      titleWord: "Real-Time",
      titleRest: "Analytics & Routing",
      description: "Sub-second latency with full call transcripts, intent tagging, and actionable summaries pushed directly to your Slack or dashboard.",
      delay: 0.3
    }
  ];

  return (
    <section id="solutions" className="py-[100px] relative overflow-hidden bg-transparent">
      {/* Dynamic Background */}
      <BackgroundScene variant="swirl" color="#7000ff" count={800} />
      
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium tracking-wide">
            Specialized Solutions
          </div>
          <h2 className="text-[40px] md:text-5xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
            Intelligent Automation for<br />Modern Clinics.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: card.delay }}
              className="h-full"
            >
              <TiltCard>
                <div className="rounded-3xl border border-white/10 bg-[#0f0f15]/80 shadow-2xl p-8 md:p-10 relative overflow-hidden premium-glass-card h-full flex flex-col group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 flex flex-wrap gap-1 shrink-0 pt-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${card.dotColor}`} />
                      ))}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                        <span className={card.titleColor}>{card.titleWord}</span> {card.titleRest}
                      </h3>
                      <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 font-sans">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <a href="#contact" className="block w-full text-center py-3.5 bg-black text-white border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-mono tracking-widest text-xs uppercase rounded-xl">
                      Book A Call
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
