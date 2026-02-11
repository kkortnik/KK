import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-center font-serif text-4xl mb-16">My Latest Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <a href="https://www.instagram.com/p/DT28v6bjMX8/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
            <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden relative">
              <img src="https://lh3.googleusercontent.com/d/1BK05kMeePNX1qCJ-dhVqXwviiZP8KkFI" alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">UI/UX + AI</span>
            <h3 className="font-serif text-2xl mt-2 group-hover:text-brand-red transition-colors">Munchies Matcha set</h3>
          </a>

          <a href="https://www.instagram.com/p/DT03bp0DKcW/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block mt-0 lg:mt-16">
            <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden relative">
              <img src="https://lh3.googleusercontent.com/d/1MP9QTRgZH5vr9g4bJaTEu827EXzDh5kD" alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">SaaS Product</span>
            <h3 className="font-serif text-2xl mt-2 group-hover:text-brand-red transition-colors">Tike - Jordan</h3>
          </a>

          <a href="https://www.instagram.com/p/DT77gJtjDRU/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
            <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden relative">
              <img src="https://lh3.googleusercontent.com/d/1aD3eV0UibScAvUNF64bX8NBlJPyw13wt" alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Product Design</span>
            <h3 className="font-serif text-2xl mt-2 group-hover:text-brand-red transition-colors">Bloom Robbins</h3>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Projects;