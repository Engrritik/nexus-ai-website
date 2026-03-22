"use client";

import { Card } from "@/components/ui/Card";
import { Clock, CalendarCheck, UserCheck } from "lucide-react";
import { FadeAndRiseReveal } from "@/components/ui/FadeAndRiseReveal";
import { BackgroundScene } from "@/components/ui/BackgroundScene";

export function Solution() {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <BackgroundScene variant="rise" color="#00d4aa" count={800} />
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <FadeAndRiseReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-medium tracking-wide">
            The Solution
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Nexus AI answers every call. <br className="hidden md:block" />
            <span className="gradient-text">Books every patient.</span>
          </h2>
          <p className="text-lg text-gray-400">
            Our intelligent voice agent sounds like a human and handles your front desk operations effortlessly.
          </p>
        </FadeAndRiseReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FadeAndRiseReveal delay={0.1}>
            <Card className="h-full hover:border-teal/30 transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-6 text-teal group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Answers 24/7</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether it&apos;s 2 AM on a Sunday or during the lunchtime rush, Nexus AI picks up on the first ring, every single time.
              </p>
            </Card>
          </FadeAndRiseReveal>

          <FadeAndRiseReveal delay={0.2}>
            <Card className="h-full hover:border-teal/30 transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-6 text-teal group-hover:scale-110 transition-transform">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Qualifies Patients</h3>
              <p className="text-gray-400 leading-relaxed">
                Asks the right questions to understand patient needs, verifies insurance types, and filters out spam calls intelligently.
              </p>
            </Card>
          </FadeAndRiseReveal>

          <FadeAndRiseReveal delay={0.3}>
            <Card className="h-full hover:border-teal/30 transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-6 text-teal group-hover:scale-110 transition-transform">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Books Directly</h3>
              <p className="text-gray-400 leading-relaxed">
                Integrates seamlessly with your existing practice management software to schedule appointments directly into your calendar.
              </p>
            </Card>
          </FadeAndRiseReveal>
        </div>
      </div>
    </section>
  );
}
