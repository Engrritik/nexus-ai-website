"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useCustomGSAP } from "@/hooks/useGSAP";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What exactly does Nexus AI do?",
    answer: "Nexus AI provides an autonomous voice receptionist for dental clinics. It answers calls instantly, understands patient needs, answers common questions, and directly books appointments into your existing calendar system."
  },
  {
    question: "How do you ensure the AI doesn't mess up a patient conversation?",
    answer: "Our AI is strictly prompt-engineered and guardrailed specifically for dental practices. It follows your specific scripts and protocols. If a query falls outside its allowed parameters, it gracefully routes the call to a human staff member."
  },
  {
    question: "Do I need to change my phone system or calendar software?",
    answer: "No. Nexus AI integrates seamlessly with your existing VoIP systems and practice management software (like Dentrix, Eaglesoft, or Open Dental) via simple call forwarding and API/webhook integrations."
  },
  {
    question: "How much does this cost?",
    answer: "We offer flat-rate monthly plans based on your call volume, starting at a fraction of the cost of a full-time receptionist. Book a call with us to get a custom quote tailored to your clinic's needs."
  },
  {
    question: "How fast will I see results?",
    answer: "Most clinics see a 20-30% increase in booked appointments within the first week of deployment, simply by capturing the calls they were previously missing after hours or during busy periods."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useCustomGSAP(() => {
    gsap.from('.faq-item', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      }
    });
  }, [containerRef]);

  return (
    <section ref={containerRef} className="py-24 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-[56px] font-bold text-center text-white mb-12 font-serif tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Questions you may have
        </motion.h2>
        
        <div className="flex flex-col gap-2">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="faq-item bg-white/5 border border-white/10 rounded-[16px] overflow-hidden cursor-pointer hover:border-[#00d4aa]/30 transition-colors backdrop-blur-sm"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="p-5 md:px-6 flex justify-between items-center bg-transparent">
                  <h3 className="font-bold text-white text-[16px]">{faq.question}</h3>
                  <div className="flex-shrink-0 ml-4 relative w-6 h-6 flex items-center justify-center">
                    <div 
                      className="absolute w-4 h-[2px] bg-white transition-transform"
                      style={{ 
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
                      }}
                    />
                    <div 
                      className="absolute w-4 h-[2px] bg-white transition-transform"
                      style={{ 
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(90deg)',
                        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
                      }}
                    />
                  </div>
                </div>
                
                <div 
                  className="overflow-hidden"
                  style={{ 
                    maxHeight: isOpen ? '500px' : '0px', 
                    opacity: isOpen ? 1 : 0,
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div className="pb-5 pt-4 px-5 md:px-6 text-[#a1a1aa] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
