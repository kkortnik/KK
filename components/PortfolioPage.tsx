import React, { useEffect } from 'react';
import { Play } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
  className?: string; // For grid spans
}

const PortfolioPage: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Atmospheric Dreams",
      category: "AI Commercial",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2560&auto=format&fit=crop",
      link: "#",
      className: "md:col-span-2 aspect-video md:aspect-[2.4/1]"
    },
    {
      title: "Munchies Matcha",
      category: "Brand Identity",
      image: "https://lh3.googleusercontent.com/d/1BK05kMeePNX1qCJ-dhVqXwviiZP8KkFI",
      link: "https://www.instagram.com/p/DT28v6bjMX8/",
      className: "md:col-span-1 aspect-square md:aspect-[16/9]"
    },
    {
      title: "Tike - Jordan",
      category: "SaaS Product",
      image: "https://lh3.googleusercontent.com/d/1MP9QTRgZH5vr9g4bJaTEu827EXzDh5kD",
      link: "https://www.instagram.com/p/DT03bp0DKcW/",
      className: "md:col-span-1 aspect-square md:aspect-[16/9]"
    },
    {
      title: "Bloom Robbins",
      category: "Product Design",
      image: "https://lh3.googleusercontent.com/d/1aD3eV0UibScAvUNF64bX8NBlJPyw13wt",
      link: "https://www.instagram.com/p/DT77gJtjDRU/",
      className: "md:col-span-2 aspect-video md:aspect-[2.4/1]"
    },
    {
      title: "Neon Cyberpunk",
      category: "AI Art Direction",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
      link: "#",
      className: "md:col-span-1 aspect-square md:aspect-[4/3]"
    },
    {
      title: "Fashion Editorial",
      category: "AI Photography",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
      link: "#",
      className: "md:col-span-1 aspect-square md:aspect-[4/3]"
    },
    {
      title: "Future Concepts",
      category: "Generative Art",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1908&auto=format&fit=crop",
      link: "#",
      className: "md:col-span-1 aspect-square md:aspect-[16/9]"
    },
    {
      title: "Digital Vogue",
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
      link: "#",
      className: "md:col-span-1 aspect-square md:aspect-[16/9]"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const cards = document.querySelectorAll('.project-card-animate');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-20 min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[2px] bg-white">
        {projects.map((project, idx) => (
          <a 
            key={idx} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`
              project-card-animate 
              relative group overflow-hidden cursor-pointer bg-gray-100 
              opacity-0 translate-y-12
              transition-all duration-700 ease-out
              ${project.className || 'md:col-span-1 aspect-video'}
            `}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Image Layer - Scales up on hover */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110" 
            />
            
            {/* Overlay Layer - Darkens on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 ease-out" />
            
            {/* Center Play Button - Fade & Scale In */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
               <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center">
                  <Play className="text-white fill-white ml-1" size={24} />
               </div>
            </div>

            {/* Content Layer - Slides up from bottom */}
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75">
              <h3 className="text-white font-serif text-4xl md:text-5xl italic leading-none mb-2 drop-shadow-lg">
                {project.title}
              </h3>
              <p className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
                {project.category}
              </p>
            </div>
            
          </a>
        ))}
      </div>
      
      <div className="py-2 bg-white"></div>
    </section>
  );
};

export default PortfolioPage;