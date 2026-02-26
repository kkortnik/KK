import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import PortfolioPage from './components/PortfolioPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PortfolioPage />
        <Expertise />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;