import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cookie, Star, Circle, Triangle } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Sparkles, color: 'text-yellow-400', size: 24, top: '10%', left: '10%', duration: 15 },
    { Icon: Cookie, color: 'text-amber-700', size: 32, top: '20%', left: '80%', duration: 20 },
    { Icon: Star, color: 'text-pink-400', size: 20, top: '40%', left: '15%', duration: 18 },
    { Icon: Circle, color: 'text-blue-300', size: 16, top: '60%', left: '85%', duration: 25 },
    { Icon: Triangle, color: 'text-green-300', size: 20, top: '80%', left: '20%', duration: 22 },
    { Icon: Sparkles, color: 'text-purple-400', size: 28, top: '75%', left: '75%', duration: 17 },
    { Icon: Cookie, color: 'text-yellow-600', size: 24, top: '30%', left: '50%', duration: 24 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className={`absolute ${el.color} opacity-30`}
          style={{ top: el.top, left: el.left }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <el.Icon size={el.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
