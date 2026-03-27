"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowRight, Linkedin } from "lucide-react";
import { BackgroundScene } from "@/components/ui/BackgroundScene";

export function Contact() {
  return (
    <section id="contact" className="py-[100px] relative overflow-hidden bg-transparent">
      <BackgroundScene variant="swirl" color="#00ffa3" count={400} />
      <div className="container mx-auto px-6 relative z-10">
        {/* Form elements mapped structurally identical to requirement */}
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-bricolage font-bold mb-6 text-white leading-[1.05] tracking-[-0.03em]">
              Ready to stop <br/>
              <span className="text-teal">missing patients?</span>
            </h2>
            <p className="text-xl text-[#A1A1AA] mb-10 leading-[1.7] font-inter">
              Drop your details below and we'll be in touch to schedule your free 15-min demo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full border border-teal/20 bg-teal/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1 font-mono font-medium text-[11px] tracking-[0.08em]">Email</p>
                  <a href="mailto:ritikksaklani@gmail.com" className="text-lg text-white hover:text-teal transition-colors font-inter">
                    ritikksaklani@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form bounded wrapper without delay applying the background glassmorphism instantly */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="glass bg-black/40 border border-white/10 shadow-xl rounded-3xl p-8 backdrop-blur-xl glow-card">
              <form action="https://formspree.io/f/myknoypk" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }} className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#A1A1AA]">Full Name</label>
                    <input name="name" required type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all placeholder:text-gray-500 font-inter" placeholder="Dr. John Smith" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="space-y-2">
                    <label htmlFor="clinic" className="text-sm font-medium text-[#A1A1AA]">Clinic Name</label>
                    <input name="clinic" required type="text" id="clinic" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all placeholder:text-gray-500 font-inter" placeholder="Smile Dental" />
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }} className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#A1A1AA]">Email Address</label>
                  <input name="email" required type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all placeholder:text-gray-500 font-inter" placeholder="john@smiledental.com" />
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.24 }} className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-[#A1A1AA]">Phone Number</label>
                    <input name="phone" required type="tel" id="phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all placeholder:text-gray-500 font-inter" placeholder="(555) 123-4567" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.30 }} className="space-y-2">
                    <label htmlFor="software" className="text-sm font-medium text-[#A1A1AA]">Current Scheduling Software</label>
                    <input name="software" required type="text" id="software" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all placeholder:text-gray-500 font-inter" placeholder="e.g., Dentrix, Open Dental, Cal.com" />
                  </motion.div>
                </div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.32 }}>
                  <Button type="submit" size="lg" className="w-full text-lg mt-4 h-14 bg-teal neon-box-shadow text-black border-none transition-all duration-300 hover:scale-[1.02]">
                    Book a Free 15-Min Demo <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
