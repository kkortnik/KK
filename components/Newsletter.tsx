import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'submitting'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-24 bg-black text-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-gray-800 rounded-full blur-[100px] opacity-20"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <span className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4 block">
            Weekly Intelligence
          </span>
          <h3 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Stay ahead of <br/> <span className="italic text-gray-400">the algorithm.</span>
          </h3>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Join 12,000+ creators receiving my weekly deep dives on AI tools, prompt engineering, and web development strategies.
          </p>
        </div>

        <div className="bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-sm">
          {status === 'success' ? (
            <div className="text-center py-12 animate-in fade-in">
              <h4 className="text-3xl font-serif mb-4">Welcome aboard!</h4>
              <p className="text-gray-400">Check your inbox for the welcome kit.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-sm underline">Reset</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="klementina@example.com" 
                  className="w-full bg-transparent border-b border-gray-600 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-gray-700"
                />
              </div>
              
              <div className="flex items-center gap-4">
                 <input type="checkbox" id="consent" className="w-4 h-4 rounded border-gray-600 bg-transparent" />
                 <label htmlFor="consent" className="text-xs text-gray-500">
                    I agree to receive emails about AI and Web Development. Unsubscribe anytime.
                 </label>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors mt-4 flex justify-center items-center"
              >
                {status === 'submitting' ? 'Processing...' : 'Get Access Now'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Newsletter;