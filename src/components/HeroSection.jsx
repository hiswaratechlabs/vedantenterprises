import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, PhoneCall } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center mb-6"
          >
            <img 
              src="/vedant-logo.jpeg" 
              alt="Vedant Enterprises Logo" 
              className="w-32 md:w-40 h-auto rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] border-4 border-white"
            />
          </motion.div>

          <h3 className="text-[var(--color-gold)] uppercase tracking-[0.2em] font-semibold mb-4 flex items-center justify-center gap-3">
            <Utensils size={18} />
            Premium Quality Products
            <Utensils size={18} />
          </h3>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--color-chocolate)] mb-6">
            Vedant<br />Enterprises
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Serving Bakers with Premium Quality Ingredients & Essentials
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a 
            href="tel:9607515883"
            className="group relative px-8 py-4 bg-[var(--color-chocolate)] text-[var(--color-cream-white)] rounded-full text-lg tracking-wider overflow-hidden shadow-lg transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <PhoneCall size={20} />
              Call Now
            </span>
            <div className="absolute inset-0 bg-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <a 
            href="https://vedantwholesale.com/" 
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-transparent text-[var(--color-chocolate)] border border-[var(--color-chocolate)] rounded-full text-lg tracking-wider hover:bg-[var(--color-pink-soft)] transition-colors duration-300"
          >
            Visit Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
