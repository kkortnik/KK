import React from 'react';
import { Bot, Sparkles, Brain, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'ChatGPT', percent: '98%', icon: <Bot size={28} /> },
    { name: 'Higgsfield', percent: '95%', icon: <Sparkles size={28} /> },
    { name: 'Midjourney', percent: '92%', icon: <Palette size={28} /> },
    { name: 'Google AI Studio', percent: '93%', icon: <Brain size={28} /> },
  ];

  return (
    <section className="py-24 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-center font-serif text-4xl mb-16">My Advantage</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-32 h-32 rounded-full bg-brand-gray flex items-center justify-center mb-6 relative hover:shadow-lg transition-all duration-300">
                <div className="text-gray-800 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                {/* Simulated Progress Ring */}
                <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-200" />
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" className="text-black" strokeDasharray="300" strokeDashoffset={300 - (parseInt(skill.percent) / 100 * 300)} />
                </svg>
              </div>
              <span className="font-serif text-3xl font-bold mb-1">{skill.percent}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;