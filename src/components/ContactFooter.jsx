import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactFooter = () => {
  return (
    <footer className="relative pt-32 pb-10 bg-[var(--color-chocolate)] text-[var(--color-cream-white)] overflow-hidden">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[var(--color-cream-white)]"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <h2 className="text-3xl font-serif mb-6 text-[var(--color-gold)]">Vedant Enterprises</h2>
            <p className="text-gray-300 max-w-md font-light leading-relaxed mb-8">
              "We warmly invite you and your family to celebrate our new beginning. Join us in our journey of bringing premium bakery ingredients to your doorstep."
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/thevedant_enterprises" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-chocolate)] transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.facebook.com/vedantvml/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-chocolate)] transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.youtube.com/@VedantEnterprisesnashik" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-chocolate)] transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-serif mb-6 border-b border-white/20 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:9607515883" className="flex items-center gap-3 text-gray-300 hover:text-[var(--color-gold)] transition-colors group">
                  <Phone size={18} className="group-hover:scale-110 transition-transform" />
                  <span>9607515883 / 9028005819</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919607515883" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-[var(--color-gold)] transition-colors group">
                  <FaWhatsapp size={18} className="group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-serif mb-6 border-b border-white/20 pb-2 inline-block">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Vedant Enterprises,<br/>Waghmare Mala,<br/>Swami Janardan Nagar,<br/>Opposite SBI Bank, Makhmalabad Road,<br/>Panchvati 422003</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:text-left gap-2">
            <p className="text-sm text-gray-400 font-light">
              © {new Date().getFullYear()} Vedant Enterprises. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 font-light">
              Digitally baked with magic by <a href="tel:9049261203" className="text-[var(--color-gold)] hover:text-white transition-colors font-medium">HiSwaratechlabs</a> (9049261203)
            </p>
          </div>
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            className="text-sm text-[var(--color-gold)] hover:text-white transition-colors"
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
