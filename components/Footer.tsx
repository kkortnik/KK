import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white overflow-hidden" id="contact">
      
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
      <div className="border-t border-gray-100 py-8 px-6 md:px-12 flex justify-center items-center">
         <div className="text-black">
           <a href="https://www.instagram.com/212studio___/" target="_blank" rel="noopener noreferrer"><Instagram size={16}/></a>
         </div>
      </div>

    </footer>
  );
};

export default Footer;