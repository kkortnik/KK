import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white relative">
      {/* Background decoration left */}
      <div className="absolute left-0 top-1/4 w-64 h-64 opacity-[0.03] pointer-events-none">
         <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M0 50 Q 50 0 100 50 T 200 50" stroke="black" fill="none" strokeWidth="2" />
            <path d="M0 60 Q 50 10 100 60 T 200 60" stroke="black" fill="none" strokeWidth="2" />
            <path d="M0 70 Q 50 20 100 70 T 200 70" stroke="black" fill="none" strokeWidth="2" />
         </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-center font-serif text-4xl mb-20">Education & Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Column 1 */}
          <div className="space-y-12">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-8">2014 - 2018</span>
            
            <div>
              <h3 className="font-serif text-2xl mb-2">Bachelor's Degree in CS</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Stanford University</p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-2">Machine Learning Cert</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide">DeepLearning.AI</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-12">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-8">2018 - 2021</span>
            
            <div>
              <h3 className="font-serif text-2xl mb-2">AI Engineer Internship</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide">OpenAI, SF</p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-2">Prompt Engineer</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Midjourney Inc.</p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-2">Lead AI Architect</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide">TechCorp Solutions</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-12">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-8">2022 - Present</span>
            
            <div>
              <h3 className="font-serif text-2xl mb-2">Head of Education</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Future Skills Academy</p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-2">Founder / Creator</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Klementina AI Studios</p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-2">Author of "The AI Age"</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Published 2023</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;