import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useLanguageContext } from '../globals/ContextProvider'

export function ClientShowcase() {
  const { langData } = useLanguageContext()

  return (
    <div className="w-full overflow-hidden py-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">{langData.clients.title}</h2>
      <div className="relative w-full overflow-hidden bg-[#060606] py-2 border-y-2 border-white">
        <div className="flex space-x-8 animate-scroll whitespace-nowrap">
          {[...Array(6)].map((_, index) => (
            <img
              key={index}
              src="./src/assets/logo.png"
              alt="Client Logo"
              className="h-20 w-auto object-contain"
            />
          ))}
          {[...Array(6)].map((_, index) => (
            <img
              key={`duplicate-${index}`}
              src="./src/assets/logo.png"
              alt="Client Logo"
              className="h-20 w-auto object-contain"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center space-x-6 mt-12">
        <motion.a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-blue-500 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaFacebook size={20} />
        </motion.a>
        <motion.a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-pink-500 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaInstagram size={20} />
        </motion.a>
        <motion.a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-red-500 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaYoutube size={20} />
        </motion.a>
        <motion.a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-blue-400 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaTwitter size={20} />
        </motion.a>
        <motion.a 
          href="mailto:contact@example.com" 
          className="text-white hover:text-orange-500 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <MdEmail size={20} />
        </motion.a>
      </div>
    </div>
  )
}

export default ClientShowcase