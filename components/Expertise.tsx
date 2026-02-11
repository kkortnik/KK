import React from 'react';
import { Bot, Code, Presentation, ArrowUpRight } from 'lucide-react';

const Expertise: React.FC = () => {
  const services = [
    {
      icon: <Bot size={32} className="text-gray-800" />,
      title: "AI Workflow Integration",
      description: "Custom strategies to implement LLMs and generative tools into your daily content creation pipeline.",
      link: "View Guide"
    },
    {
      icon: <Presentation size={32} className="text-gray-800" />,
      title: "Workshops & Training",
      description: "Interactive sessions for teams and individuals looking to master prompt engineering and AI ethics.",
      link: "Book Session"
    },
    {
      icon: <Code size={32} className="text-gray-800" />,
      title: "AI-Powered Web Dev",
      description: "Building high-performance websites integrated with AI agents and dynamic content generation.",
      link: "See Portfolio"
    }
  ];

  return (
    <section id="expertise" className="py-24 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h3 className="text-4xl md:text-5xl font-serif max-w-lg">
            Empowering creators to build the future.
          </h3>
          <p className="text-gray-500 max-w-xs mt-6 md:mt-0 text-right md:text-left">
            My approach combines technical depth with creative intuition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-200">
          {services.map((service, idx) => (
            <div key={idx} className="group border-r border-b border-gray-200 p-10 hover:bg-gray-50 transition-colors duration-300">
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
                {service.description}
              </p>
              <a href="#newsletter" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                {service.link} <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;