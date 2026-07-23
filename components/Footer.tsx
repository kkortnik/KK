import React from 'react';
import { Instagram, ArrowUpLeft, Linkedin } from 'lucide-react';
import FadeInView from './FadeInView';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white overflow-hidden" id="contact">
      
      <div className="py-24 md:py-32 max-w-[1440px] mx-auto px-6 md:px-12 relative">
        {/* Background Waves */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <svg className="w-full h-full" preserveAspectRatio="none">
             <path d="M0,50 Q200,150 400,50 T800,50" stroke="black" fill="none" vectorEffect="non-scaling-stroke"/>
             <path d="M0,80 Q200,180 400,80 T800,80" stroke="black" fill="none" vectorEffect="non-scaling-stroke"/>
           </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0">
          
          {/* Left Side: Contact Info */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
             <FadeInView direction="up">
               <div className="space-y-1">
                 <p className="font-sans text-lg font-medium text-black">Klementina Kortnik</p>
                 <p className="font-sans text-gray-500">Ljubljana, Slovenia</p>
               </div>
             </FadeInView>
             
             <FadeInView direction="up" delay={0.1}>
               <a href="mailto:hello@klementinakortnik.com" className="font-serif text-2xl md:text-3xl text-black hover:opacity-70 transition-opacity">
                 hello@klementinakortnik.com
               </a>
             </FadeInView>

             <FadeInView direction="up" delay={0.2}>
               <div className="pt-2 flex gap-4">
                 <a href="https://www.instagram.com/212studio___/" target="_blank" rel="noopener noreferrer" className="inline-block text-black hover:opacity-70 transition-opacity">
                   <Instagram size={24}/>
                 </a>
                 <a href="https://www.linkedin.com/in/klementina-kortnik-312aa43aa" target="_blank" rel="noopener noreferrer" className="inline-block text-black hover:opacity-70 transition-opacity">
                   <Linkedin size={24}/>
                 </a>
               </div>
             </FadeInView>
          </div>

          {/* Right Side: Work with me */}
          <div className="flex-1 flex justify-center md:justify-end items-center">
             <FadeInView direction="left" delay={0.3}>
               <a href="mailto:hello@klementinakortnik.com" className="group flex items-end gap-2">
                  <span className="font-serif text-5xl md:text-7xl italic text-black group-hover:opacity-70 transition-opacity leading-tight">
                    Let's Work<br/>Together
                  </span>
                  <ArrowUpLeft size={32} className="mb-2 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300" />
               </a>
             </FadeInView>
          </div>

        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-100 w-full"></div>

    </footer>
  );
};

export default Footer;