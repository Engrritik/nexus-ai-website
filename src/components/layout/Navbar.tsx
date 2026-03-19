"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-teal p-2 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,212,170,0.5)] transition-shadow">
            <PhoneCall className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Nexus<span className="text-teal">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <Button variant="ghost" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
            <Button asChild>
              <a href="mailto:ritikksaklani@gmail.com?subject=Free%20Trial%20Request">Start Free Trial</a>
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
            <Button className="w-full" asChild>
              <a href="mailto:ritikksaklani@gmail.com?subject=Free%20Trial%20Request" onClick={() => setMobileMenuOpen(false)}>Start Free Trial</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
