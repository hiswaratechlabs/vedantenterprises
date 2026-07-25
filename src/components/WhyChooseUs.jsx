import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Tag, ThumbsUp, Package, Truck, HeartHandshake } from 'lucide-react';

const features = [
  { title: 'Premium Quality', icon: ShieldCheck, desc: 'Highest grade ingredients for perfect bakes.' },
  { title: 'Wholesale Price', icon: Tag, desc: 'Competitive pricing for bulk purchases.' },
  { title: 'Trusted Products', icon: ThumbsUp, desc: 'Verified and certified bakery essentials.' },
  { title: 'Fresh Stock', icon: Package, desc: 'Regularly updated inventory for freshness.' },
  { title: 'Bulk Orders', icon: Truck, desc: 'Seamless handling of large-scale orders.' },
  { title: 'Best Service', icon: HeartHandshake, desc: 'Dedicated support for our baking community.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-pink-light)] relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-chocolate)] mb-4">Why Choose Us</h2>
          <div className="h-1 w-20 bg-[var(--color-gold)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-md text-[var(--color-gold)]">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-serif text-[var(--color-chocolate)] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
