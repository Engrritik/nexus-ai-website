export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src='/logo.png' alt='Nexus AI' style={{height: '32px', width: 'auto', background: 'transparent', mixBlendMode: 'screen'}} />
        </div>
        
        <p className="text-sm text-gray-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} Nexus AI. All rights reserved. <br className="md:hidden" />
          Designed for dental clinics across the US.
        </p>

        <div className="flex items-center gap-6">
          <a href="mailto:ritikksaklani@gmail.com" className="text-gray-400 hover:text-teal transition-colors text-sm">
            ritikksaklani@gmail.com
          </a>
          <a href="https://linkedin.com/in/ritiksak" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal transition-colors text-sm">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
