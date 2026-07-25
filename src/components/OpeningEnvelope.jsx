import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const playCelebrationSound = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  if (ctx.state === 'suspended') {
    ctx.resume();
  }

  // 1. The POP!
  const popOsc = ctx.createOscillator();
  const popGain = ctx.createGain();
  popOsc.type = 'triangle';
  popOsc.frequency.setValueAtTime(800, ctx.currentTime);
  popOsc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
  popGain.gain.setValueAtTime(1, ctx.currentTime);
  popGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
  popOsc.connect(popGain);
  popGain.connect(ctx.destination);
  popOsc.start();
  popOsc.stop(ctx.currentTime + 0.1);

  // 2. The Confetti Shower (Noise)
  const bufferSize = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'bandpass';
  noiseFilter.frequency.value = 5000;
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0, ctx.currentTime);
  noiseGain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.05);
  noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(ctx.destination);
  noise.start();

  // 3. The Triumphant Chime (C Major Chord)
  const chord = [523.25, 659.25, 783.99, 1046.50];
  chord.forEach((freq, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05 + (index * 0.1));
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime + (index * 0.05));
    osc.stop(ctx.currentTime + 2.5);
  });
};

const OpeningEnvelope = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    
    try {
      playCelebrationSound();
      const bgMusic = document.getElementById('bg-music');
      if (bgMusic) {
        bgMusic.volume = 0.4;
        bgMusic.play().catch(e => console.log('BG Music playback failed', e));
      }
    } catch (e) {
      console.log('Audio playback failed', e);
    }
    
    // Confetti burst
    const duration = 2000;
    const end = Date.now() + duration;
    const colors = ['#FFFDD0', '#FFD1DC', '#D4AF37'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    setTimeout(() => {
      onOpen();
    }, 2000);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#fdfbf7] overflow-hidden"
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background Decorative Particles/Sparkles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[var(--color-gold)]"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Envelope / Curtain Reveal logic */}
      <motion.div 
        className="relative w-[90%] max-w-md p-2 md:p-3 perspective-[1000px] mx-auto"
      >
        {/* Left Door / Curtain */}
        <motion.div
          className="absolute left-0 top-0 w-1/2 h-full bg-[var(--color-pink-soft)] origin-left shadow-2xl border-r border-white/20"
          animate={{ 
            rotateY: isOpening ? -105 : 0,
            opacity: isOpening ? 0 : 1
          }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{ zIndex: 10 }}
        />
        {/* Right Door / Curtain */}
        <motion.div
          className="absolute right-0 top-0 w-1/2 h-full bg-[var(--color-pink-soft)] origin-right shadow-2xl border-l border-white/20"
          animate={{ 
            rotateY: isOpening ? 105 : 0,
            opacity: isOpening ? 0 : 1
          }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{ zIndex: 10 }}
        />

        {/* Center Invitation Card */}
        <motion.div 
          className="relative w-full bg-white rounded-xl shadow-inner p-6 md:p-10 flex flex-col items-center justify-center text-center border-4 border-double border-[var(--color-gold-light)]"
          style={{ zIndex: 20 }}
          animate={{
            scale: isOpening ? 1.2 : 1,
            y: isOpening ? -50 : 0,
            opacity: isOpening ? 0 : 1,
          }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
              className="flex justify-center mb-4 md:mb-6"
            >
              <img 
                src="/vedant-logo.jpeg" 
                alt="Vedant Enterprises Logo" 
                className="w-20 md:w-24 h-auto rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] border-2 border-[var(--color-gold-light)]"
              />
            </motion.div>

            <h3 className="text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] mb-2 md:mb-4 font-semibold">
              You're Invited
            </h3>
            <h1 className="text-3xl md:text-5xl font-serif text-[var(--color-chocolate)] mb-2 leading-tight">
              Grand Opening
            </h1>
            <div className="h-[1px] w-16 bg-[var(--color-gold)] mx-auto my-4 md:my-6"></div>
            <h2 className="text-lg md:text-2xl font-serif text-[var(--color-chocolate)] mb-4 md:mb-6">
              Vedant Enterprises
            </h2>
            <p className="text-xs md:text-sm text-gray-500 tracking-wider mb-6 md:mb-12">
              Cake Wholesale Material Store
            </p>
          </motion.div>

          {!isOpening && (
            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: ["0px 0px 10px rgba(212,175,55,0.4)", "0px 0px 25px rgba(212,175,55,0.8)", "0px 0px 10px rgba(212,175,55,0.4)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative px-8 py-3 md:py-4 bg-gradient-to-r from-[var(--color-chocolate)] to-[#6a3b22] text-[var(--color-cream)] rounded-full text-xs md:text-sm tracking-widest uppercase overflow-hidden group mt-4"
            >
              <span className="relative z-10 font-bold tracking-[0.2em] flex items-center gap-2">
                TAP TO OPEN
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </span>
              <motion.div 
                className="absolute inset-0 bg-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OpeningEnvelope;
