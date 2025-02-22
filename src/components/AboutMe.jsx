import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SiAdobepremierepro, SiAdobeaftereffects, SiAdobephotoshop, SiBlender, SiAdobeillustrator, SiCinema4D } from 'react-icons/si'
import SpringModal from './Modal'

export function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalData = {
    title: "Project Requirements",
    imageSrc: "./src/assets/cloud.jpg",
    languages: ["Brief", "Timeline", "Budget"],
    description: "To start your project, please provide:\n\n• Clear project objectives and goals\n• Timeline expectations\n• Budget range\n• Reference materials (if any)\n\nI'll review your requirements and respond within 24 hours.",
    demoLink: "mailto:contact@example.com"
  }

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: true, amount: 0.1 }
  }

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    viewport: { once: true, amount: 0.1 }
  }

  const tools = [
    { icon: SiAdobepremierepro, name: 'Adobe Premiere Pro', color: 'text-purple-600' },
    { icon: SiAdobeaftereffects, name: 'After Effects', color: 'text-purple-400' },
    { icon: SiAdobephotoshop, name: 'Photoshop', color: 'text-blue-500' },
    { icon: SiBlender, name: 'Blender', color: 'text-orange-500' },
    { icon: SiAdobeillustrator, name: 'Illustrator', color: 'text-orange-400' },
    { icon: SiCinema4D, name: 'Cinema 4D', color: 'text-blue-400' }
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="whileInView"
      className="w-full py-16 bg-[#1a2436]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          ABOUT ME
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* About Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Working With Me</h3>
            <p className="text-gray-300 leading-relaxed">
              Ready to bring your vision to life? I offer a streamlined collaboration process that ensures your project's success.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Start Your Project
            </motion.button>
          </motion.div>

          {/* Tools & Skills */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Tools & Software</h3>
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
  )
}

export default AboutMe