import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { FiArrowLeft } from "react-icons/fi";

export function Course() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black relative">
      {/* <motion.button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 px-6 py-2 rounded-lg backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Back
      </motion.button> */}
      <button onClick={() => navigate(-1)}
        className='absolute top-2 left-2 z-40 cursor-pointer'>
          <FiArrowLeft className="text-white text-2xl" />
      </button>
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl md:text-8xl h-32 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
            animate={{ 
              backgroundPosition: ['0%', '100%'],
              transition: {
                duration: 8,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
          >
            Coming Soon
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-xl md:text-2xl text-gray-400"
          >
            Get ready for an amazing learning experience
          </motion.p>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Course