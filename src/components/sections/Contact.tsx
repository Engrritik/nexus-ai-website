"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCustomGSAP } from "@/hooks/useGSAP";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useCustomGSAP(() => {
    gsap.from('.contact-form', {
      x: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      }
    });
  }, [containerRef]);

  return (
    <section id="contact" className="py-24 bg-[#f8f8f8]" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 max-w-[1100px] mx-auto items-center">
          
          <div className="contact-text">
            <motion.h2 
              className="text-4xl md:text-[56px] font-bold mb-6 text-[#1a1a2e] leading-tight font-serif tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Ready to stop <br/>
              missing patients?
            </motion.h2>
            <p className="text-lg text-[#6b7280] mb-12 leading-relaxed">
              Drop your details below and we'll be in touch to schedule your free 15-min demo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-[#1a1a2e]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#6b7280] uppercase tracking-[0.08em] mb-1">Email</p>
                  <a href="mailto:hello@nexus-ai.com" className="text-lg text-[#1a1a2e] font-medium hover:text-[#00d4aa] transition-colors">
                    hello@nexus-ai.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="bg-white border border-[#e5e7eb] shadow-sm rounded-[24px] p-8 md:p-10">
              <form action="https://formspree.io/f/myknoypk" method="POST" className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[13px] font-bold text-[#1a1a2e]">Full Name</label>
                    <input name="name" required type="text" id="name" className="w-full bg-[#f8f8f8] border border-[#e5e7eb] rounded-xl px-4 py-3.5 text-[#1a1a2e] focus:outline-none focus:border-[#1a1a2e] transition-colors placeholder:text-[#9ca3af] text-[15px]" placeholder="Dr. John Smith" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="clinic" className="text-[13px] font-bold text-[#1a1a2e]">Clinic Name</label>
                    <input name="clinic" required type="text" id="clinic" className="w-full bg-[#f8f8f8] border border-[#e5e7eb] rounded-xl px-4 py-3.5 text-[#1a1a2e] focus:outline-none focus:border-[#1a1a2e] transition-colors placeholder:text-[#9ca3af] text-[15px]" placeholder="Smile Dental" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[13px] font-bold text-[#1a1a2e]">Email Address</label>
                  <input name="email" required type="email" id="email" className="w-full bg-[#f8f8f8] border border-[#e5e7eb] rounded-xl px-4 py-3.5 text-[#1a1a2e] focus:outline-none focus:border-[#1a1a2e] transition-colors placeholder:text-[#9ca3af] text-[15px]" placeholder="john@smiledental.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[13px] font-bold text-[#1a1a2e]">Phone Number</label>
                    <input name="phone" required type="tel" id="phone" className="w-full bg-[#f8f8f8] border border-[#e5e7eb] rounded-xl px-4 py-3.5 text-[#1a1a2e] focus:outline-none focus:border-[#1a1a2e] transition-colors placeholder:text-[#9ca3af] text-[15px]" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="software" className="text-[13px] font-bold text-[#1a1a2e]">Scheduling Software</label>
                    <input name="software" required type="text" id="software" className="w-full bg-[#f8f8f8] border border-[#e5e7eb] rounded-xl px-4 py-3.5 text-[#1a1a2e] focus:outline-none focus:border-[#1a1a2e] transition-colors placeholder:text-[#9ca3af] text-[15px]" placeholder="Dentrix, Cal.com, etc." />
                  </div>
                </div>
                
                <div className="pt-2">
                  <button type="submit" className="w-full flex items-center justify-center bg-[#111111] text-white px-8 py-4 rounded-xl text-[14px] font-bold tracking-wide uppercase hover:bg-black transition-colors">
                    Book a Technical Review <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
