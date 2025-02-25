import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '../globals/ContextProvider';

export function Projects() {
  const { langData } = useLanguageContext();

  return (
    <div className="min-h-screen bg-[#060606] text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards will go here */}
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Project 1</h2>
            <p className="text-gray-300">Project description goes here</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;