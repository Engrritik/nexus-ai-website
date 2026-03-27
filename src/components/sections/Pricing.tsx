"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BackgroundScene } from "@/components/ui/BackgroundScene";

export function Pricing() {
  const features = [
    "24/7 AI Voice Receptionist",
    "Natural, human-like conversations",
    "Intelligent patient qualification",
    "Direct calendar booking integration",
    "Emergency call routing",
    "Customizable clinic knowledge base",
    "Call recordings and analytics dashboard"
  ];

  return (
    <section id="pricing" className="py-[100px] relative overflow-hidden bg-slate-50 border-y border-gray-200">
      {/* Dynamic Background */}
      <BackgroundScene variant="wave" color="#00d4aa" count={800} />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#3182CE]/30 bg-[#3182CE]/10 text-[#3182CE] text-sm font-medium tracking-wide">
            Simple Pricing
          </div>
          <h2 className="text-[48px] md:text-5xl font-bold mb-6 text-[#1A365D]">
            Pay only if it captures <br className="hidden md:block" />
            <span className="text-[#3182CE]">patients you were missing</span>
          </h2>
          <p className="text-lg text-gray-600">
            One powerful plan. All features included. No hidden fees.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-3xl border border-gray-200 bg-white shadow-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Ribbon */}
            <div className="absolute top-6 -right-12 bg-[#3182CE] text-white text-sm font-bold tracking-wider py-1.5 px-14 rotate-45">
              15-MIN DEMO
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[#1A365D]">Agency License</h3>
                <p className="text-gray-600 mb-8 pb-8 border-b border-gray-100">
                  Fully managed setup and continuous optimization for your clinic.
                </p>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-[#1A365D]">$300</span>
                  <span className="text-gray-500">/ month</span>
                </div>
                <div className="text-[#3182CE] font-medium mb-8">
                  + $3,000 one-time setup fee
                </div>

                <Button size="lg" className="w-full text-lg mb-4 bg-[#3182CE] hover:bg-[#2b6cb0] text-white border-none" asChild>
                  <a href="#contact">Book a Free 15-Min Demo</a>
                </Button>
                <p className="text-xs text-center text-gray-500">
                  Cancel anytime. Dedicated technical oversight included.
                </p>
              </div>

              <div className="md:pl-8 md:border-l border-gray-200">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-6">
                  Everything Included
                </p>
                <ul className="space-y-4">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#3182CE]/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#3182CE] font-bold" />
                      </div>
                      <span className="text-gray-700 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
