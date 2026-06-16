import React from 'react';
import Ampersand from './Ampersand';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-24 max-w-[1440px] mx-auto px-6 md:px-12 relative">
      
      {/* Title Section */}
      <div className="text-center mb-16 md:mb-24">
        <h1 className="font-serif text-5xl md:text-7xl text-black leading-tight">
          Klementina Kortnik
        </h1>
      </div>

      {/* Main Grid: 2 Columns Centered */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Info */}
        <div className="lg:col-span-5 lg:col-start-2 flex flex-col gap-12 text-center lg:text-left order-2 lg:order-1">
          
          <div>
            <h6 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Biography</h6>
            <div className="font-serif text-lg leading-relaxed text-black space-y-4">
               <p>
                 Hi, I'm Klementina.
               </p>
               <p>
                 I'm passionate about helping people and businesses unlock the potential of artificial intelligence. Whether it's streamlining workflows, creating engaging content, or implementing smart automation, I focus on turning complex technology into practical solutions that deliver real results.
               </p>
               <p>
                 My mission is simple: help you work smarter, save time, and create more value.
               </p>
            </div>
          </div>

          <div>
            <h6 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Services</h6>
            <ul className="font-serif text-lg text-black space-y-2">
              <li><strong className="font-medium">AI Commercials</strong> – AI-generated visuals and campaigns for brands</li>
              <li><strong className="font-medium">AI Content Creation</strong> – social, visual <Ampersand /> branded AI content</li>
              <li><strong className="font-medium">AI Education</strong> – workshops, mentoring <Ampersand /> AI training</li>
              <li><strong className="font-medium">Web <Ampersand /> AI-powered Experiences</strong> – websites enhanced with AI</li>
            </ul>
          </div>

        </div>

        {/* Right Column: Arched Image */}
        <div className="lg:col-span-5 lg:col-start-8 flex justify-center order-1 lg:order-2 relative">
           {/* Background Wave Graphic */}
           <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-full -z-10 opacity-5" viewBox="0 0 200 200">
             <path fill="#000" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.6C61,43.7,51.1,53.1,39.8,60.6C28.5,68.1,15.8,73.8,2.4,69.6C-11,65.4,-25.1,51.3,-38.4,40.6C-51.7,29.9,-64.2,22.6,-71.3,11.8C-78.4,1,-80.1,-13.3,-74.6,-25.8C-69.1,-38.3,-56.4,-49,-43.3,-56.6C-30.2,-64.2,-16.7,-68.7,-1.5,-66.1C13.7,-63.5,27.4,-53.8,30.5,-83.6" transform="translate(100 100)" />
           </svg>

           <div className="arch-mask overflow-hidden w-full max-w-[450px] aspect-[3/4] bg-gray-100 shadow-2xl relative">
             <img 
               src="https://lh3.googleusercontent.com/d/1AN6ZdCTLxhGQWTV-K5lEm1WzHaZgTKKx" 
               alt="Klementina Kortnik" 
               className="w-full h-full object-cover object-top"
             />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;