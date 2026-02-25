import React from 'react';

interface ProjectProps {
  index: string;
  title: string;
  role: string;
  year: string;
  description: string;
  stack: string[];
  videoId: string;
  videoDuration: string;
  orientation?: 'landscape' | 'portrait';
}

const ProjectSection: React.FC<ProjectProps> = ({ 
  index, 
  title, 
  role, 
  year, 
  description, 
  stack, 
  videoId, 
  videoDuration,
  orientation = 'landscape'
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 lg:mb-48 border-b border-gray-100 pb-24 last:border-0 last:pb-0">
    
    {/* Left Column: Context (Sticky) */}
    <div className="lg:col-span-4 lg:sticky lg:top-32 self-start flex flex-col">
       <div className="mb-12">
          <div className="flex gap-2 items-center mb-4">
             <span className="w-2 h-2 bg-brand-red rounded-full"></span>
             <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Portfolio {index}</span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl leading-none mb-6 text-brand-black">
            {title}<span className="text-gray-200">.</span>
          </h1>
          <div className="flex flex-col gap-1 text-[10px] font-bold tracking-widest uppercase text-gray-500 font-sans">
             <span>Role: {role}</span>
             <span>Year: {year}</span>
          </div>
       </div>

       <div className="space-y-10 max-w-sm">
          <p className="font-serif text-xl leading-relaxed text-gray-800">
            {description}
          </p>
          
          <div className="border-t border-gray-100 pt-8">
             <span className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">The Stack</span>
             <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-gray-600 font-medium">
                {stack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
             </ul>
          </div>
       </div>
    </div>

    {/* Right Column: Visuals */}
    <div className={`lg:col-span-8 flex justify-center ${orientation === 'portrait' ? 'lg:justify-center' : 'lg:justify-start'}`}>
       <div className={`w-full ${orientation === 'portrait' ? 'max-w-md' : ''}`}>
          <div className={`${orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-video'} w-full bg-black relative shadow-lg`}>
            <iframe 
              src={`https://fast.wistia.net/embed/iframe/${videoId}?seo=false&videoFoam=true&autoPlay=true&muted=true&endVideoBehavior=loop&playerColor=1a1a1a`}
              title={`${title} Video`}
              allow="autoplay; fullscreen" 
              allowTransparency={true} 
              frameBorder="0" 
              scrolling="no" 
              className="w-full h-full absolute inset-0" 
              name="wistia_embed"
            ></iframe>
          </div>
          <div className="mt-6 flex justify-between items-baseline border-b border-gray-100 pb-4">
             <span className="text-xs font-bold tracking-widest uppercase text-black">{index} — Main Film</span>
             <span className="text-[10px] font-mono text-gray-400">{videoDuration}</span>
          </div>
       </div>
    </div>
  </div>
);

const PortfolioPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-white pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <ProjectSection 
          index="01"
          title="Tike"
          role="AI Director"
          year="2026"
          description="Evoking 'timeless cool' through a hybrid AI workflow. We blended high-fidelity product shots with atmospheric European city vibes to maintain the Tike legacy."
          stack={['Midjourney v6', 'Runway Gen-2', 'Topaz Video AI']}
          videoId="qxevwxu345"
          videoDuration="00:24"
          orientation="landscape"
        />

        <ProjectSection 
          index="02"
          title="Munchies"
          role="Creative Director"
          year="2026"
          description="A sensory exploration of ritual and calm. Visualizing the texture and tranquility of the perfect matcha pour using generative fluid dynamics and hyper-real styling."
          stack={['Midjourney v6', 'Luma Dream Machine', 'After Effects']}
          videoId="nbf170kr0p"
          videoDuration="00:15"
          orientation="landscape"
        />

        <ProjectSection 
          index="03"
          title="Bloom Robbins"
          role="AI Visual Lead"
          year="2026"
          description="Transforming hair care into visual poetry. We utilized generative video to simulate impossible hair textures and volume, creating a campaign that feels both magical and tangible."
          stack={['Midjourney v6', 'Runway Gen-3', 'Magnific AI']}
          videoId="t0kqblofz7"
          videoDuration="00:18"
          orientation="portrait"
        />

        <ProjectSection 
          index="04"
          title="Actinia"
          role="AI Commercial Lead"
          year="2026"
          description="Redefining automotive luxury through generative motion. We created a surreal, high-speed environment where light and geometry interact with the vehicle's form, pushing the boundaries of automotive advertising."
          stack={['Midjourney v6', 'Runway Gen-3 Alpha', 'DaVinci Resolve']}
          videoId="5wv6ia13g2"
          videoDuration="00:22"
          orientation="landscape"
        />

      </div>
    </section>
  );
};

export default PortfolioPage;