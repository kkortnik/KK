import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 bg-white overflow-hidden" id="contact">
      
      {/* Image Grid (Instagram Style) */}
      <div className="grid grid-cols-2 md:grid-cols-5 h-64 md:h-80 w-full">
         {/* 1. Klementina Profile */}
         <div className="bg-gray-100 overflow-hidden group relative">
            <img src="https://lh3.googleusercontent.com/d/1AN6ZdCTLxhGQWTV-K5lEm1WzHaZgTKKx" alt="Klementina" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 object-top"/>
         </div>
         
         {/* 2. Munchies Matcha */}
         <div className="bg-gray-200 overflow-hidden">
            <img src="https://lh3.googleusercontent.com/d/1BK05kMeePNX1qCJ-dhVqXwviiZP8KkFI" alt="Munchies Matcha" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
         </div>
         
         {/* 3. Tike - Jordan */}
         <div className="bg-gray-300 overflow-hidden">
            <img src="https://lh3.googleusercontent.com/d/1MP9QTRgZH5vr9g4bJaTEu827EXzDh5kD" alt="Tike Jordan" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
         </div>
         
         {/* 4. Logo Typography (Replaces Circle Logo) */}
         <div className="bg-gray-100 overflow-hidden flex items-center justify-center relative group cursor-pointer hover:bg-gray-50 transition-colors duration-500">
            <div className="flex flex-col items-center transform transition-transform duration-500 group-hover:scale-110">
               <div className="flex items-baseline gap-1 relative">
                  {/* Decorative line left */}
                  <span className="text-[6px] font-bold tracking-widest absolute -left-10 top-1 text-gray-400 opacity-0 md:opacity-100">MMXXVI</span>
                  <div className="hidden md:block h-px w-8 bg-black absolute -left-9 top-2"></div>
                  
                  <h1 className="font-serif text-3xl md:text-4xl leading-none tracking-tighter text-black">212</h1>
                  
                  {/* Decorative line right */}
                  <div className="hidden md:block h-px w-8 bg-black absolute -right-9 bottom-2"></div>
               </div>
               <span className="text-[6px] md:text-[7px] font-bold uppercase tracking-[0.2em] mt-1 text-black">Creative Studio</span>
            </div>
         </div>
         
         {/* 5. Bloom Robbins (Project 3) */}
         <div className="bg-gray-100 overflow-hidden">
            <img src="https://lh3.googleusercontent.com/d/1aD3eV0UibScAvUNF64bX8NBlJPyw13wt" alt="Bloom Robbins" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
         </div>
      </div>

      {/* Big CTA Area */}
      <div className="py-32 relative flex justify-center items-center">
        {/* Background Waves */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <svg className="w-full h-full" preserveAspectRatio="none">
             <path d="M0,50 Q200,150 400,50 T800,50" stroke="black" fill="none" vectorEffect="non-scaling-stroke"/>
             <path d="M0,80 Q200,180 400,80 T800,80" stroke="black" fill="none" vectorEffect="non-scaling-stroke"/>
           </svg>
        </div>

        {/* Dotted Circle */}
        <div className="absolute w-[400px] h-[400px] border border-dotted border-gray-400 rounded-full animate-spin-slow" style={{animationDuration: '30s'}}></div>

        {/* Call Box CTA */}
        <a href="mailto:hello@klementinakortnik.com" className="relative z-10 block group">
          <div className="bg-white text-black w-48 h-56 flex flex-col items-center justify-center relative shadow-xl hover:-translate-y-2 transition-transform duration-300">
             <span className="font-serif text-4xl italic text-center leading-tight">Work<br/>with me</span>
             <ArrowUpRight size={48} className="absolute -bottom-6 -left-6 text-black" />
          </div>
        </a>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-100 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500">
         <p>© 2024 212 Creative Studio. All Rights Reserved.</p>
         <p>hello@klementinakortnik.com</p>
         <div className="flex gap-6 mt-4 md:mt-0 text-black">
           <a href="https://www.instagram.com/212studio.official/" target="_blank" rel="noopener noreferrer"><Instagram size={16}/></a>
         </div>
      </div>

    </footer>
  );
};

export default Footer;