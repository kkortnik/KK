import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';
import PortfolioPage from './components/PortfolioPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Skills />
          </>
        )}
        {currentPage === 'portfolio' && (
          <PortfolioPage />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;