import { ClientShowcase } from '../components/ClientShowcase'
import { AboutMe } from '../components/AboutMe'
import { motion } from 'framer-motion'
import SwipeCards from '../components/SwipeCard'

export function Me() {
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
    <div className="min-h-screen bg-[#111827] text-white">
      {/* Video Section */}
      <div className="w-full max-w-none mx-auto h-[150px] md:h-[400px]">
        <video
          className="w-full h-[150px] md:h-[400px] object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./src/assets/edit.mp4" type="video/mp4" />
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
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <motion.h2 
          variants={itemVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          SERVICES
        </motion.h2>
        
        <div className="grid grid-cols-3 gap-2 md:gap-8">
          {/* Brand Identity */}
          <motion.div variants={leftVariants} className="space-y-2 md:space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-center border-b border-white pb-2">BRAND IDENTITY</h3>
            <ul className="space-y-1 md:space-y-2">
              <li className="text-center text-sm md:text-base">- Logo Design</li>
              <li className="text-center text-sm md:text-base">- Identity Build</li>
              <li className="text-center text-sm md:text-base">- Creative Direction</li>
              <li className="text-center text-sm md:text-base">- Social Design</li>
            </ul>
          </motion.div>

          {/* Video Production */}
          <motion.div variants={topVariants} className="space-y-2 md:space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-center border-b border-white pb-2">VIDEO PRODUCTION</h3>
            <ul className="space-y-1 md:space-y-2">
              <li className="text-center text-sm md:text-base">- Marketing Videos</li>
              <li className="text-center text-sm md:text-base">- Television Ads</li>
              <li className="text-center text-sm md:text-base">- Documentaries</li>
              <li className="text-center text-sm md:text-base">- Short Film</li>
            </ul>
          </motion.div>

          {/* Animation/VFX */}
          <motion.div variants={rightVariants} className="space-y-2 md:space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-center border-b border-white pb-2">ANIMATION / VFX</h3>
            <ul className="space-y-1 md:space-y-2">
              <li className="text-center text-sm md:text-base">- 2D Animation</li>
              <li className="text-center text-sm md:text-base">- 3D Animation</li>
              <li className="text-center text-sm md:text-base">- Compositing</li>
            </ul>
          </motion.div>
        </div>

        {/* Get in Touch Button */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 text-white rounded-lg text-lg font-semibold attractive-button">
            Get in Touch
          </button>
        </motion.div>
      </motion.div>

      {/* Reviews Section */}
      <div className="pt-4 bg-[#111827]">
        <motion.h2
          variants={itemVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          CLIENT REVIEWS
        </motion.h2>
        <SwipeCards />
      </div>

      <ClientShowcase />
    </div>
  )
}