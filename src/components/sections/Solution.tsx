"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DotCluster } from "@/components/ui/DotCluster";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function Solution() {
  const containerRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      titleWord: "Inbound",
      titleColor: "text-[#00d4aa]",
      titleRest: "AI Receptionist",
      dotColor: "#00d4aa",
      description: "Answer every call instantly, qualify patients, and book appointments directly to your calendar — fully autonomous, 24/7.",
      bullets: [
        "24/7 autonomous booking & qualification",
        "Natural language intent recognition",
        "Real-time handoff to human agents when needed"
      ],
      fullWidth: false
    },
    {
      titleWord: "Outbound",
      titleColor: "text-[#8b5cf6]",
      titleRest: "AI Solutions",
      dotColor: "#8b5cf6",
      description: "Automate your follow-up sequences and re-engagement campaigns. Never let a warm lead go cold again.",
      bullets: [
        "Automated follow-up sequences",
        "Custom knowledge base for personalization",
        "CRM sync and lead tracking"
      ],
      fullWidth: false
    },
    {
      titleWord: "Calendar",
      titleColor: "text-[#10b981]",
      titleRest: "Sync Engine",
      dotColor: "#10b981",
      description: "Bi-directional Cal.com integration with deterministic availability checking. Zero double-bookings, guaranteed.",
      bullets: [
        "Real-time Cal.com availability checking",
        "Eliminates double-booking completely",
        "Works with existing clinic scheduling software"
      ],
      fullWidth: false
    },
    {
      titleWord: "Real-Time",
      titleColor: "text-[#f97316]",
      titleRest: "Analytics",
      dotColor: "#f97316",
      description: "Full call transcripts, intent tagging, and actionable summaries pushed to your Slack or dashboard instantly.",
      bullets: [
        "Sub-second latency call processing",
        "Intent tagging and classification",
        "Slack and dashboard integrations"
      ],
      fullWidth: false
    },
    {
      titleWord: "Custom",
      titleColor: "text-[#ef4444]",
      titleRest: "AI Engineering",
      dotColor: "#ef4444",
      description: "Tailored n8n workflows and custom webhook integrations. We build the exact automation your clinic needs.",
      bullets: [
        "Custom n8n workflow development",
        "Webhook and API integrations",
        "Ongoing optimization and maintenance"
      ],
      fullWidth: true
    }
  ];

  useGSAP(() => {
    gsap.from('.solution-header', {
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

    const solutionCards = gsap.utils.toArray('.solution-card');
    gsap.from(solutionCards, {
      y: 24,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      }
    });
  }, { scope: containerRef });

  return (
    <section id="solutions" className="py-24 bg-[#f8f8f8]" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        
        <div className="solution-header text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-[56px] font-bold text-[#1a1a2e] font-serif tracking-tight leading-tight">
            Custom AI Solutions, Tailored to Your Business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`solution-card bg-white border border-[#e5e7eb] rounded-[16px] p-8 md:p-10 card-hover flex flex-col ${card.fullWidth ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="mt-1">
                  <DotCluster color={card.dotColor} size={8} />
                </div>
                <div>
                  <h3 className="text-[22px] font-bold text-[#1a1a2e] mb-3">
                    <span className={card.titleColor}>{card.titleWord}</span> {card.titleRest}
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 mb-8">
                <ul className="space-y-3">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#6b7280]">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e] opacity-30 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center w-full bg-[#111111] text-white px-6 py-3.5 rounded-[8px] text-[13px] font-semibold tracking-[0.05em] uppercase hover:bg-black transition-colors"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
