"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { DotCluster } from "@/components/ui/DotCluster";

gsap.registerPlugin(ScrollTrigger);

export function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.pricing-header', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        once: true
      }
    });

    const pricingCards = gsap.utils.toArray('.pricing-card');
    gsap.from(pricingCards, {
      y: 24,
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
    <section id="pricing" className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1000px]">
        
        <div className="pricing-header text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-[56px] font-bold text-[#1a1a2e] font-serif tracking-tight">
            Custom AI Solutions,<br />Tailored to Your Clinic
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card 1: Inbound */}
          <div className="pricing-card bg-white border border-[#e5e7eb] rounded-[16px] p-8 md:p-10 card-hover flex flex-col shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="mt-1">
                <DotCluster color="#8b5cf6" size={8} />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-[#1a1a2e] mb-2"><span className="text-[#8b5cf6]">Inbound</span> AI Receptionist</h3>
                <p className="text-[#6b7280] leading-relaxed">
                  Engage patients instantly, answer clinical inquiries, and resolve standard booking requests entirely on autopilot.
                </p>
              </div>
            </div>

            <div className="mt-4 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#8b5cf6] shrink-0 mt-0.5" />
                  <span className="text-[#6b7280] text-[15px]">24/7 autonomous lead qualification & support.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#8b5cf6] shrink-0 mt-0.5" />
                  <span className="text-[#6b7280] text-[15px]">Natural language intent recognition and routing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#8b5cf6] shrink-0 mt-0.5" />
                  <span className="text-[#6b7280] text-[15px]">Real-time handoff to human agents when needed.</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center w-full bg-[#111111] text-white px-6 py-3.5 rounded-[8px] text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-black transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </div>

          {/* Card 2: Custom Engineering */}
          <div className="pricing-card bg-white border border-[#e5e7eb] rounded-[16px] p-8 md:p-10 card-hover flex flex-col shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="mt-1">
                <DotCluster color="#00d4aa" size={8} />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-[#1a1a2e] mb-2"><span className="text-[#00d4aa]">Automated</span> Workflow Engineering</h3>
                <p className="text-[#6b7280] leading-relaxed">
                  Automate your clinical pipelines, CRM syncs, and securely handle patient data directly into your existing dashboard.
                </p>
              </div>
            </div>

            <div className="mt-4 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00d4aa] shrink-0 mt-0.5" />
                  <span className="text-[#6b7280] text-[15px]">Multi-channel intelligent patient follow-ups.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00d4aa] shrink-0 mt-0.5" />
                  <span className="text-[#6b7280] text-[15px]">Custom logic builder for deterministic booking checks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00d4aa] shrink-0 mt-0.5" />
                  <span className="text-[#6b7280] text-[15px]">Automated EHR syncing and appointment logging.</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center w-full bg-[#111111] text-white px-6 py-3.5 rounded-[8px] text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-black transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
