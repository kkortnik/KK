import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of navbar
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
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 py-4 transition-all duration-300 border-b border-gray-100/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        
        {/* Left: Navigation */}
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase text-black">
          <button 
            onClick={() => scrollToSection('home')} 
            className="hover:text-brand-red transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('work')} 
            className="hover:text-brand-red transition-colors"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('expertise')} 
            className="hover:text-brand-red transition-colors"
          >
            Expertise
          </button>
        </div>

        {/* Center: Brand Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center group cursor-pointer" onClick={() => scrollToSection('home')}>
             <div className="flex items-baseline gap-2 relative">
                <span className="hidden md:block text-[8px] font-bold tracking-widest absolute -left-16 top-2">MMXXVI</span>
                <div className="hidden md:block h-px w-12 bg-black absolute -left-14 top-4"></div>
                <h1 className="font-serif text-5xl leading-none tracking-tighter">212</h1>
                <div className="hidden md:block h-px w-12 bg-black absolute -right-14 bottom-2"></div>
             </div>
             <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-1 ml-1">Creative Studio</span>
        </div>

        {/* Right: Socials */}
        <div className="hidden md:flex gap-5 items-center">
          <a href="https://www.instagram.com/212studio___/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-brand-red transition-colors"><Instagram size={16} /></a>
          <button onClick={() => scrollToSection('contact')} className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors">
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black ml-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full flex flex-col items-center py-10 gap-6 animate-in fade-in slide-in-from-top-5 shadow-xl h-screen">
          <button onClick={() => scrollToSection('home')} className="text-sm font-bold uppercase tracking-widest">Home</button>
          <button onClick={() => scrollToSection('work')} className="text-sm font-bold uppercase tracking-widest">Work</button>
          <button onClick={() => scrollToSection('expertise')} className="text-sm font-bold uppercase tracking-widest">Expertise</button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-bold uppercase tracking-widest">Contact</button>
          <a href="https://www.instagram.com/212studio___/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest mt-4 flex items-center gap-2"><Instagram size={16}/> Instagram</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;