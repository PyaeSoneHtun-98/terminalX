import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '../globals/ContextProvider';
import { ClientShowcase } from '../components/ClientShowcase';
import SwipeCards from '../components/SwipeCard';

export function Clients() {
  const { langData } = useLanguageContext();

  return (
    <div className="min-h-screen bg-[#060606] text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">{langData.nav.clients}</h1>
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">{langData.reviews.title}</h2>
          <SwipeCards />
        </div>

        <ClientShowcase />
      </motion.div>
    </div>
  );
}

export default Clients;