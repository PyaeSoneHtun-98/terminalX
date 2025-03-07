import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { FiArrowLeft } from "react-icons/fi";

export function Course() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black relative">
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
          <div className="relative mb-8">
            <motion.h1
              className="text-6xl md:text-8xl font-extrabold text-center relative z-10"
            >
              {"COMING SOON".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    ease: "easeOut" 
                  }}
                  className="inline-block mx-[1px] bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-yellow-400 to-green-600"
                  style={{
                    textShadow: "0 0 15px rgba(0,255,0,0.3), 0 0 20px rgba(0,255,0,0.2)"
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
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