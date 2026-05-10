"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Demo", href: "#demo" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-[#f0f0f0]">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src='/mainlogo.png' alt='Nexus AI' width={140} height={40} className="h-8 w-auto object-contain filter invert opacity-90" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-normal font-sans text-[#6b7280] hover:text-[#1a1a2e] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#111111] text-white px-6 py-2.5 rounded-full text-xs font-semibold font-sans tracking-wide uppercase hover:bg-black transition-colors"
            >
              <span className="tracking-widest opacity-60">•••</span> Book a Call
            </Link>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#1a1a2e]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-b border-[#f0f0f0] bg-white py-4 px-6 flex flex-col gap-4 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#6b7280]"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#f0f0f0]">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full bg-[#111111] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wide uppercase"
            >
              <span className="tracking-widest opacity-60">•••</span> Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
