import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Expertise from './components/Expertise';
import Newsletter from './components/Newsletter';
import AiChat from './components/AiChat';
import Footer from './components/Footer';
import PortfolioPage from './components/PortfolioPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'portfolio'>('home');

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <Skills />
            {/* Projects section removed from landing page as requested */}
            <Expertise />
            <Newsletter />
          </>
        ) : (
          <PortfolioPage />
        )}
      </main>
      <Footer />
      <AiChat />
    </div>
  );
};

export default App;