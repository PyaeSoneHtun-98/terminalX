import { motion } from "framer-motion";
import { useLanguageContext } from "../globals/ContextProvider";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import SpringModal from "../components/Modal";
import React, { useState } from 'react';

export function Requirements() {
  const { langData } = useLanguageContext();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

    const modalData = {
    title: langData.modal.title,
    imageSrc: "./assets/cloud.jpg",
    languages: ["Brief", "Timeline", "Budget"],
    description: langData.modal.description,
    demoLink: "mailto:pyaesonehtun969@gmail.com"
  };

  // Animation variants for container
  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for items
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    viewport: { once: true, amount: 0.1 },
  };

  // Breaking Bad style text animation
  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.03 } },
  };

  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  // Function to create animated text with Breaking Bad style
  const AnimatedText = ({ text, className }) => {
    return (
      <motion.span
        className={className}
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        {Array.from(text).map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative pb-4">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-40 cursor-pointer p-2 rounded-full hover:bg-black/50 transition-all duration-300"
      >
        <FiArrowLeft className="text-white text-2xl" />
      </button>

      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto px-4 lg:px-8 py-8 lg:py-16 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold block mb-4">
            {langData.requirements?.title || "Requirements"}
          </h2>
          <div className="h-1 w-32 bg-white mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {langData.requirements?.items?.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-green-900/30 shadow-lg hover:shadow-green-900/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          )) || (
            <div className="col-span-full text-center text-gray-300">
              Requirements content will be available soon.
            </div>
          )}
        </motion.div>
      </motion.div>
      <div className="flex justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-2 attractive-button rounded-lg cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {langData.about.startProject}
      </motion.button></div>
      <SpringModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalData={modalData}
      />
    </div>
  );
}

export default Requirements;
