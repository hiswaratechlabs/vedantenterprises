import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Droplet, Box, Sparkles, ChefHat, Palette, Gift, Beaker, Cloud } from 'lucide-react';

const products = [
  { name: 'Cake Premix', icon: Cake, color: 'text-pink-500', bg: 'bg-pink-100' },
  { name: 'Chocolate Compound', icon: Droplet, color: 'text-yellow-700', bg: 'bg-yellow-100' },
  { name: 'Whipping Cream', icon: Cloud, color: 'text-blue-500', bg: 'bg-blue-100' },
  { name: 'Cake Moulds', icon: Box, color: 'text-purple-500', bg: 'bg-purple-100' },
  { name: 'Baking Tools', icon: ChefHat, color: 'text-gray-600', bg: 'bg-gray-100' },
  { name: 'Food Colors', icon: Palette, color: 'text-red-500', bg: 'bg-red-100' },
  { name: 'Cake Boxes', icon: Gift, color: 'text-orange-500', bg: 'bg-orange-100' },
  { name: 'Sprinkles', icon: Sparkles, color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { name: 'Fondant', icon: Cake, color: 'text-teal-500', bg: 'bg-teal-100' },
  { name: 'Essence', icon: Beaker, color: 'text-indigo-500', bg: 'bg-indigo-100' },
];



const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const ProductsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-chocolate)] mb-4">Premium Bakery Ingredients</h2>
          <p className="text-lg text-gray-600">Everything you need to create magical bakes.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer relative overflow-hidden group"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${product.bg} ${product.color} group-hover:scale-110 transition-transform duration-300`}>
                <product.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-[var(--color-chocolate)] font-medium text-lg leading-tight">
                {product.name}
              </h3>
              {/* Animated border on hover */}
              <div className="absolute inset-0 border-2 border-[var(--color-gold)] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
