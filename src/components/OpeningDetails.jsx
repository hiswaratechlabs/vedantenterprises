import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Map } from 'lucide-react';

const OpeningDetails = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full bg-white rounded-3xl p-8 md:p-14 shadow-[0_20px_50px_rgba(74,37,17,0.1)] relative overflow-hidden border-8 border-double border-[var(--color-pink-soft)]"
      >
        {/* Decorative corner pieces */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[var(--color-gold)] opacity-50"></div>
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[var(--color-gold)] opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[var(--color-gold)] opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[var(--color-gold)] opacity-50"></div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-chocolate)] mb-4">Grand Opening Details</h2>
          <p className="text-gray-500 tracking-widest uppercase text-sm">You are warmly invited</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="mt-1 p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-gold)]">
              <Calendar size={24} />
            </div>
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Date</h4>
              <p className="text-lg font-medium text-[var(--color-chocolate)]">29 July</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-gold)]">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Time</h4>
              <p className="text-lg font-medium text-[var(--color-chocolate)]">12:30 PM Onwards</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-gold)]">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</h4>
              <p className="text-lg font-medium text-[var(--color-chocolate)]">Vedant Enterprises</p>
              <p className="text-gray-500 text-sm mt-1">Waghmare Mala, Swami Janardan Nagar, Opposite SBI Bank, Makhamalabad Road, Panchvati 422003</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-gold)]">
              <User size={24} />
            </div>
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Hosted By</h4>
              <p className="text-lg font-medium text-[var(--color-chocolate)]">Mrs. Madhuri Lahamge</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Vedant+Enterprises+Waghmare+mala+swami+Janardan+nagar+opposite+sbi+bank+makhamlbad+road+panchvati+422003" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-pink-soft)] text-[var(--color-chocolate)] rounded-full font-medium hover:bg-[var(--color-gold)] hover:text-white transition-colors duration-300"
          >
            <Map size={18} />
            Open in Google Maps
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default OpeningDetails;
