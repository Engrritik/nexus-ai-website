"use client";

import { motion } from "framer-motion";

export function Demo() {
  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-medium tracking-wide">
            Interactive Demo
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            See Nexus AI book a real dental appointment <span className="gradient-text">in 2 minutes</span>
          </h2>
          <p className="text-lg text-gray-400">
            Listen to a recording of our AI agent seamlessly qualifying a patient and finding an open calendar slot.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl bg-black"
        >
          {/* 16:9 Aspect Ratio Container for responsive iframe */}
          <div className="relative pt-[56.25%] w-full h-0">
            <iframe 
              src="https://drive.google.com/file/d/14WDNO3bo6qC_tlUTi6EDOWLd8fcL7TzD/preview" 
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; encrypted-media" 
              allowFullScreen
              title="Nexus AI Demo"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
