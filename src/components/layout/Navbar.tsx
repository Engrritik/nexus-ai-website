"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out`}
        style={{
          background: isScrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid #f0f0f0' : '1px solid transparent'
        }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src='/mainfav.png' alt='Nexus AI Icon' className="h-8 w-auto object-contain" />
            <span className="text-xl font-bold text-[#1a1a2e] font-serif tracking-tight">Nexus AI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#solutions" className="text-sm font-medium text-[#6b7280] hover:text-[#1a1a2e] transition-colors">
              Solutions
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-[#6b7280] hover:text-[#1a1a2e] transition-colors">
              How it Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-[#6b7280] hover:text-[#1a1a2e] transition-colors">
              Pricing
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-[#111111] text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase hover:bg-black transition-colors"
            >
              Book a Call <span className="tracking-widest opacity-60 ml-2">•••</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#1a1a2e]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6">
          <div className="flex flex-col gap-6 text-center">
            <Link 
              href="#solutions" 
              className="text-lg font-bold text-[#1a1a2e]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-lg font-bold text-[#1a1a2e]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link 
              href="#pricing" 
              className="text-lg font-bold text-[#1a1a2e]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-[#111111] text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Call <span className="tracking-widest opacity-60 ml-2">•••</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
