import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import OpeningEnvelope from './components/OpeningEnvelope';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import WhyChooseUs from './components/WhyChooseUs';
import OpeningDetails from './components/OpeningDetails';
import CountdownTimer from './components/CountdownTimer';
import Gallery from './components/Gallery';
import ContactFooter from './components/ContactFooter';
import FloatingElements from './components/FloatingElements';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (isOpened) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [isOpened]);

  return (
    <div className="relative w-full min-h-screen bg-cream-white overflow-hidden">
      <audio id="bg-music" loop preload="auto">
        {/* Safari/iOS does not support .ogg, so we use a reliable .mp3 source */}
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence mode="wait">
        {!isOpened && (
          <OpeningEnvelope key="envelope" onOpen={() => setIsOpened(true)} />
        )}
      </AnimatePresence>

      {isOpened && (
        <main className="relative z-10 w-full">
          <FloatingElements />
          <HeroSection />
          <OpeningDetails />
          <CountdownTimer />
          <ProductsSection />
          <WhyChooseUs />
          <Gallery />
          <ContactFooter />
        </main>
      )}
    </div>
  );
}

export default App;
