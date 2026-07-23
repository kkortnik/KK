import React from 'react';
import FadeInView from './FadeInView';

const Newsletter: React.FC = () => {
  return (
    <section id="newsletter" className="py-32 bg-[#7A8B6A] text-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-white/20 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-white/20 rounded-full blur-[100px] opacity-20"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 flex justify-center items-center text-center">
        <FadeInView direction="up">
          <h3 className="text-5xl md:text-8xl font-serif leading-tight">
            Stay ahead of <br /> <span className="italic text-white/80">the algorithm.</span>
          </h3>
        </FadeInView>
      </div>
    </section>
  );
};

export default Newsletter;