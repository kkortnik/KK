import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-32 max-w-4xl mx-auto px-6 text-center">
       <blockquote className="font-serif text-3xl md:text-4xl leading-relaxed text-black mb-12">
         “Klementina was a real pleasure to work with and we look forward to working with her again. She's definitely the kind of creator you can trust with a project from start to finish. Great services & Recommended!”
       </blockquote>
       
       <div className="mb-6">
         <h4 className="font-bold text-lg">Jurgen Kloop</h4>
         <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Product Management at Google Inc</p>
       </div>

       <div className="flex justify-center gap-3">
         <button className="w-3 h-3 rounded-full bg-brand-red"></button>
         <button className="w-3 h-3 rounded-full border border-black hover:bg-black"></button>
         <button className="w-3 h-3 rounded-full border border-black hover:bg-black"></button>
       </div>
    </section>
  );
};

export default Testimonial;