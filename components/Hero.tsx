import React, { useRef } from 'react';
import Ampersand from './Ampersand';
import { ArrowRight } from 'lucide-react';
import FadeInView from './FadeInView';
import MagneticButton from './MagneticButton';
import { motion, useScroll, useTransform } from 'motion/react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scroll = (id: string) => {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <section ref={containerRef} id="home" className="pt-32 pb-16 md:pt-48 md:pb-24 max-w-[1440px] mx-auto px-6 md:px-12 relative flex items-center min-h-[80vh] overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1 relative z-10">
          <FadeInView delay={0.1}>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-black leading-tight">
              Klementina<br/>Kortnik
            </h1>
          </FadeInView>
          
          <FadeInView delay={0.2}>
            <h2 className="text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] text-[#7A8B6A] font-sans mt-2">
              Turning AI into practical solutions that save time and create impact.
            </h2>
          </FadeInView>
          
          <FadeInView delay={0.3}>
            <div className="font-serif text-lg md:text-xl text-gray-800 leading-relaxed max-w-lg mx-auto lg:mx-0 mt-4 space-y-4">
               <p>
                 Hi, I'm Klementina.
               </p>
               <p>
                 I run the community for AI Universe. An early-stage AI education platform that's growing fast. <br className="hidden md:block"/>
                 I believe technology should simplify life, not make it more complicated. That's why I help individuals and businesses understand and use artificial intelligence in practical and meaningful ways. <br className="hidden md:block"/>
                 From everyday tasks to digital projects, content creation, and automation.
               </p>
               <p>
                 My goal is simple: less time wasted, more impact created.
               </p>
            </div>
          </FadeInView>
          
          <FadeInView delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-8 mt-8 justify-center lg:justify-start">
              <MagneticButton 
                onClick={() => scroll('contact')} 
                className="bg-[#7A8B6A] text-white px-8 py-4 rounded-sm font-bold text-xs tracking-[0.15em] hover:bg-[#687858] transition-colors whitespace-nowrap uppercase shadow-lg hover:shadow-xl"
              >
                Let's Work Together
              </MagneticButton>
              <button 
                onClick={() => scroll('expertise')} 
                className="text-[#7A8B6A] font-bold text-xs tracking-[0.15em] flex items-center gap-2 hover:opacity-70 transition-opacity uppercase group"
              >
                LEARN MORE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeInView>
        </div>

        {/* Right Column: Image */}
        <FadeInView direction="left" delay={0.2} className="flex justify-center order-1 lg:order-2 w-full">
           <div className="w-full max-w-[550px] aspect-[4/5] bg-gray-100 shadow-2xl overflow-hidden rounded-sm relative">
             <motion.img 
               style={{ y, scale }}
               src="https://lh3.googleusercontent.com/d/1AN6ZdCTLxhGQWTV-K5lEm1WzHaZgTKKx" 
               alt="Klementina Kortnik" 
               className="w-full h-[120%] -top-[10%] relative object-cover object-top"
             />
           </div>
        </FadeInView>

      </div>
    </section>
  );
};

export default Hero;