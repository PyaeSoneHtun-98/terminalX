import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '../globals/ContextProvider';

export function Services() {
  const { langData } = useLanguageContext();

  return (
    <div className="min-h-screen bg-[#060606] text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Service 1</h2>
            <p className="text-gray-300">Service description goes here</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;