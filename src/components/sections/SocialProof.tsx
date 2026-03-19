"use client";

import { motion } from "framer-motion";

export function SocialProof() {
  const cities = ["Houston", "Dallas", "Atlanta", "Phoenix", "Denver", "Las Vegas"];

  return (
    <section className="py-12 border-b border-white/5 bg-[#030303]">
      <div className="container mx-auto px-6 overflow-hidden">
        <p className="text-center text-gray-500 text-sm tracking-widest uppercase mb-8 font-medium">
          Trusted by top-rated dental clinics across
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 opacity-70">
          {cities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center text-xl md:text-2xl font-bold text-gray-600 uppercase tracking-wider"
            >
              {city}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
