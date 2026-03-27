"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [pulseBorder, setPulseBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.getAttribute("id") || "";
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
        setPulseBorder(true);
        setTimeout(() => setPulseBorder(false), 1000);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Demo", href: "#demo" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b ${
        isScrolled
          ? "bg-black/85 backdrop-blur-[20px] saturate-180 " + (pulseBorder ? "border-teal shadow-[0_4px_20px_rgba(0,212,170,0.3)]" : "border-teal/10")
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-2">
        <Link href="/" className="flex items-center gap-2 group relative">
          <img src='/logo.png' alt='Nexus AI' width={140} height={40} className="relative z-10" style={{height: '40px', width: '140px', objectFit: 'contain'}} />
          <div className="absolute inset-0 bg-teal/30 blur-xl opacity-0 animate-[pulse-glow_10s_ease-in-out_infinite] z-0 pointer-events-none rounded-full" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-inter text-gray-300 hover:text-teal transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-2">
            <Button variant="ghost" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
            <Button className="bg-teal neon-box-shadow text-black border-none transition-all duration-300 hover:scale-105" asChild>
              <Link href="#contact">Book a Free 15-Min Demo</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-b border-white/10 bg-black/95 backdrop-blur-xl py-4 px-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white py-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
            <Button variant="outline" className="w-full" asChild>
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </Button>
            <Button className="w-full bg-teal neon-box-shadow text-black border-none transition-all duration-300 hover:scale-105" asChild>
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Book a Free 15-Min Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
