import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiAdobepremierepro, 
  SiAdobeaftereffects, 
  SiAdobephotoshop, 
  SiBlender, 
  SiAdobeillustrator, 
  SiCinema4D 
} from 'react-icons/si';
import SpringModal from './Modal';
import { useLanguageContext } from '../globals/ContextProvider';

export function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { langData } = useLanguageContext();

  // Track if animation has already run
  const [hasAnimated, setHasAnimated] = useState(false);

  const modalData = {
    title: langData.modal.title,
    imageSrc: "./assets/cloud.jpg",
    languages: ["Brief", "Timeline", "Budget"],
    description: langData.modal.description,
    demoLink: "mailto:pyaesonehtun969@gmail.com"
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const tools = [
    { icon: SiAdobepremierepro, name: 'Premiere Pro', color: 'text-purple-600' },
    { icon: SiAdobeaftereffects, name: 'After Effects', color: 'text-purple-400' },
    { icon: SiAdobephotoshop, name: 'Photoshop', color: 'text-blue-500' },
    { icon: SiBlender, name: 'Blender', color: 'text-orange-500' },
    { icon: SiAdobeillustrator, name: 'Illustrator', color: 'text-orange-400' },
    { icon: SiCinema4D, name: 'Cinema 4D', color: 'text-blue-400' }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate={hasAnimated ? "animate" : undefined} // Ensures animation runs only once
      onViewportEnter={() => setHasAnimated(true)} // Marks animation as completed
      viewport={{ once: true }} // Prevents re-triggering
      className="w-full py-16 bg-[#060606]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          {langData.about.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* About Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">{langData.about.subtitle}</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {langData.about.description}
            </p>
          </motion.div>

          {/* Tools & Skills */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">{langData.about.tools}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <tool.icon className={`text-4xl ${tool.color}`} />
                  <span className="text-gray-300 text-sm text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <SpringModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalData={modalData}
      />
    </motion.div>
  );
}

export default AboutMe;
