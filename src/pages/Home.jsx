import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BackgroundAnimation from '../components/BackgroundAnimation';
import IntroSection from '../components/IntroSection';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleExploreVision = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080B16] text-white selection:bg-indigo-500/30 selection:text-sky-200">
      {/* Canvas & Ambient Glow Background */}
      <BackgroundAnimation />

      {/* Main Content Overlay */}
      <div className="relative z-10">
        <Navbar onOpenContact={handleOpenContact} />
        
        <main>
          <Hero
            onExploreVision={handleExploreVision}
            onLetTalk={handleOpenContact}
          />
          <IntroSection />
        </main>

        <Footer onOpenContact={handleOpenContact} />
      </div>

      {/* Interactive Contact Drawer Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
};

export default Home;
