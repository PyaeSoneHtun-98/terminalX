import { motion } from 'framer-motion';
import { useLanguageContext } from '../globals/ContextProvider';
import { ClientShowcase } from '../components/ClientShowcase';
import SwipeCards from '../components/SwipeCard';

export function Services() {
  const { langData } = useLanguageContext();

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
        duration: 0.8
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
        duration: 0.8
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
        duration: 0.8
      }
    },
    viewport: { once: true, amount: 0.1 }
  }

  return (
    <div className="min-h-screen bg-[#060606] text-white overflow-x-hidden relative pb-4">
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

          {/* Digital Marketing */}
          <motion.div variants={rightVariants} className="space-y-2 md:space-y-4">
            <h3 className="text-md md:text-xl font-semibold text-center border-b border-white pb-2">{langData.services.animation.title}</h3>
            <ul className="space-y-1 md:space-y-2">
              {langData.services.animation.items.map((item, index) => (
                <li key={index} className="text-center text-xs md:text-base">- {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Client Reviews Section */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-12"
          >
            {langData.reviews.title}
          </motion.h2>
          <SwipeCards />
        </motion.div>

        {/* Client Showcase Section */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16"
        >
          <ClientShowcase />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Services;