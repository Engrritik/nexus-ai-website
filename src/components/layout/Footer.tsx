import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-white border-t border-[#f0f0f0] overflow-hidden py-16 md:py-24">
      {/* Giant Watermark */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center leading-none"
        style={{
          fontSize: 'clamp(80px, 15vw, 200px)',
          color: '#f0f0f0',
          fontWeight: 900,
          textAlign: 'center',
          lineHeight: '0.8',
        }}
      >
        NexusAI
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center">
            <img src='/logo.png' alt='Nexus AI' className="h-8 w-auto object-contain filter invert opacity-80" />
          </div>

          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-[#6b7280] hover:text-[#1a1a2e] transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-[#111111] text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase hover:bg-black transition-colors"
            >
              Book a Call <span className="tracking-widest opacity-60 ml-2">•••</span>
            </Link>
          </div>
          
        </div>
        
        <div className="mt-12 text-center md:text-left text-sm text-[#9ca3af]">
          &copy; {new Date().getFullYear()} Nexus AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
