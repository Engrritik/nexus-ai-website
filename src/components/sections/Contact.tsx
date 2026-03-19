"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowRight, Linkedin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle"|"loading"|"success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate form submission
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to stop <br/>
              <span className="text-teal">missing patients?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Drop your details below and we&apos;ll be in touch to schedule your free setup and 14-day trial.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full border border-teal/20 bg-teal/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:ritikksaklani@gmail.com" className="text-lg hover:text-white transition-colors">
                    ritikksaklani@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full border border-teal/20 bg-teal/5 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">LinkedIn</p>
                  <a href="https://linkedin.com/in/ritiksak" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-white transition-colors">
                    linkedin.com/in/ritiksak
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-teal/20 text-teal flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-gray-400">We&apos;ll be in touch with you shortly.</p>
                  <Button className="mt-8" onClick={() => setStatus("idle")}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                      <input required type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all placeholder:text-gray-600" placeholder="Dr. John Smith" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="clinic" className="text-sm font-medium text-gray-300">Clinic Name</label>
                      <input required type="text" id="clinic" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all placeholder:text-gray-600" placeholder="Smile Dental" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                    <input required type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all placeholder:text-gray-600" placeholder="john@smiledental.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                    <input required type="tel" id="phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all placeholder:text-gray-600" placeholder="(555) 123-4567" />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full text-lg mt-4 disabled:opacity-70" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : (
                      <>
                        Get Started <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

// Just for the success state above
function Check(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
