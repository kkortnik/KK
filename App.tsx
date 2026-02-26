import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Newsletter from './components/Newsletter';
import AiChat from './components/AiChat';
import Footer from './components/Footer';
import PortfolioPage from './components/PortfolioPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <PortfolioPage />
        <Expertise />
        <Experience />
        <Newsletter />
      </main>
      <Footer />
      <AiChat />
    </div>
  );
};

export default App;