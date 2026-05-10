'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
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
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1a1a2e] mb-12">
          Questions you may have
        </h2>
        
        <div className="flex flex-col gap-2">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="faq-item bg-white border border-[#e5e7eb] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="p-5 md:px-6 flex justify-between items-center">
                  <h3 className="font-medium text-[#1a1a2e]">{faq.question}</h3>
                  <div className="flex-shrink-0 ml-4 relative w-6 h-6 flex items-center justify-center">
                    <div className={`absolute w-4 h-[2px] bg-[#6b7280] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></div>
                    <div className={`absolute w-4 h-[2px] bg-[#6b7280] transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-90'}`}></div>
                  </div>
                </div>
                
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="pb-5 px-5 md:px-6 text-[#6b7280]">
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
