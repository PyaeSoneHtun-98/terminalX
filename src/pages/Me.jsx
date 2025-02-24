import { ClientShowcase } from '../components/ClientShowcase'
import { AboutMe } from '../components/AboutMe'
import { motion } from 'framer-motion'
import SwipeCards from '../components/SwipeCard'
import { useLanguageContext } from '../globals/ContextProvider'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";

export function Me() {
  const { langData } = useLanguageContext()
  const navigate = useNavigate()

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    viewport: { once: true, amount: 0.1 }
  }

  const leftVariants = {
    initial: { x: -50, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    viewport: { once: true, amount: 0.1 }
  }

  const rightVariants = {
    initial: { x: 50, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    viewport: { once: true, amount: 0.1 }
  }

  const topVariants = {
    initial: { y: -50, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    viewport: { once: true, amount: 0.1 }
  }

  return (
    <div className="min-h-screen bg-[#060606] text-white">
      <button onClick={() => navigate(-1)}
        className='absolute top-2 left-2 z-50 cursor-pointer'>
          <FiArrowLeft className="text-white text-2xl" />
      </button>
      {/* Video Section */}
      <div className="w-full max-w-none mx-auto h-[150px] md:h-[400px]">
        <video
          className="w-full h-[200px] md:h-[400px] object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./assets/edit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <AboutMe />

      {/* Services Section */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto px-2 lg:px-4 py-4 lg:py-16"
      >
        <motion.h2
          variants={itemVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="text-4xl font-bold text-center mb-6 lg:mb-16"
        >
          {langData.services.title}
        </motion.h2>

        <div className="grid grid-cols-3 gap-2 md:gap-8">
          {/* Brand Identity */}
          <motion.div variants={leftVariants} className="space-y-2 md:space-y-4">
            <h3 className="text-md md:text-xl font-semibold text-center border-b border-white pb-2">{langData.services.brandIdentity.title}</h3>
            <ul className="space-y-1 md:space-y-2">
              {langData.services.brandIdentity.items.map((item, index) => (
                <li key={index} className="text-center text-xs md:text-base">- {item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Video Production */}
          <motion.div variants={topVariants} className="space-y-2 md:space-y-4">
            <h3 className="text-md md:text-xl font-semibold text-center border-b border-white pb-2">{langData.services.videoProduction.title}</h3>
            <ul className="space-y-1 md:space-y-2">
              {langData.services.videoProduction.items.map((item, index) => (
                <li key={index} className="text-center text-xs md:text-base">- {item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Animation/VFX */}
          <motion.div variants={rightVariants} className="space-y-2 md:space-y-4">
            <h3 className="text-md md:text-xl font-semibold text-center border-b border-white pb-2">{langData.services.animation.title}</h3>
            <ul className="space-y-1 md:space-y-2">
              {langData.services.animation.items.map((item, index) => (
                <li key={index} className="text-center text-xs md:text-base">- {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Get in Touch Button */}
        {/* <motion.div 
          variants={itemVariants}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 text-white rounded-lg text-lg font-semibold attractive-button">
            {langData.services.getInTouch}
          </button>
        </motion.div> */}
      </motion.div>

      {/* Reviews Section */}
      <div className="pt-4 bg-[#060606]">
        <motion.h2
          variants={itemVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          {langData.reviews.title}
        </motion.h2>
        <SwipeCards />
      </div>

      <ClientShowcase />
    </div>
  )
}