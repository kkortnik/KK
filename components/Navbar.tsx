import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-[600px] transition-all duration-300">
        <div className="bg-white/90 backdrop-blur-xl pl-6 pr-2 py-2 rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-between md:gap-8">
          
          {/* Brand */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="font-bold text-lg tracking-tight text-brand-black hover:opacity-70 transition-opacity"
          >
            Klementina.
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            <button 
              onClick={() => scrollToSection('work')} 
              className="px-5 py-2 text-sm font-medium text-gray-500 hover:text-black transition-colors rounded-full hover:bg-gray-100/50"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('expertise')} 
              className="px-5 py-2 text-sm font-medium text-gray-500 hover:text-black transition-colors rounded-full hover:bg-gray-100/50"
            >
              Services
            </button>
          </div>

          <div className="flex items-center gap-3">
             {/* CTA */}
             <button 
               onClick={() => scrollToSection('contact')} 
               className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-lg"
             >
               Let's Talk
             </button>

             {/* Mobile Toggle */}
             <button className="md:hidden p-2 text-black" onClick={() => setIsOpen(!isOpen)}>
               {isOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-4 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-100 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-top-2">
            <button onClick={() => scrollToSection('home')} className="text-base font-medium text-gray-800 py-2">Home</button>
            <button onClick={() => scrollToSection('work')} className="text-base font-medium text-gray-800 py-2">Work</button>
            <button onClick={() => scrollToSection('expertise')} className="text-base font-medium text-gray-800 py-2">Services</button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;