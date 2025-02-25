import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '../globals/ContextProvider';
import { ClientShowcase } from '../components/ClientShowcase';

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
        <h1 className="text-4xl font-bold mb-8">Clients</h1>
        <ClientShowcase />
      </motion.div>
    </div>
  );
}

export default Clients;