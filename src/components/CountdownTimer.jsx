import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const CountdownTimer = () => {
  const [targetDate] = useState(() => {
    // July 29, 12:30 PM (Assuming current year is 2026 based on context)
    return new Date('2026-07-29T12:30:00');
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        if (!isFinished) {
          setIsFinished(true);
          triggerConfetti();
        }
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, [targetDate, isFinished]);

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-serif text-[var(--color-chocolate)] mb-8">
            {isFinished ? "We Are Open!" : "Grand Opening In"}
          </h3>
          
          {!isFinished && (
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/50 backdrop-blur-md border border-white rounded-2xl flex items-center justify-center shadow-lg mb-2 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-3xl md:text-4xl font-serif text-[var(--color-chocolate)] relative z-10">
                      {value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
