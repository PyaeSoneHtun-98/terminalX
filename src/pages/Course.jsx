import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { CourseSection } from '../components/CourseSection'
import { useLanguageContext } from '../globals/ContextProvider'
import { FiArrowLeft } from "react-icons/fi"
import { FaFacebook, FaTelegram } from 'react-icons/fa'
import { SiAdobepremierepro, SiAdobeaftereffects, SiAdobephotoshop, SiBlender } from 'react-icons/si'

export function Course() {
  const navigate = useNavigate()
  const { langData } = useLanguageContext()

  return (
    <div className="min-h-screen bg-black relative">
      <button onClick={() => navigate(-1)}
        className='absolute top-2 left-2 z-40 cursor-pointer'>
        <FiArrowLeft className="text-white text-2xl" />
      </button>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Course Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            🎮 {langData.course.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            {langData.course.subtitle}
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            {langData.course.description}
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="w-full px-4 h-px bg-gray-600"></div>
        </motion.div>

        {/* Who Should Attend */}
        <CourseSection
          icon="🔸"
          title={langData.course.whoShouldAttend.title}
          delay={0.4}
        >
          <ul className="space-y-3">
            {langData.course.whoShouldAttend.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-sm md:text-base text-gray-300 flex items-start gap-2"
              >
                <span className="text-white mt-1">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </CourseSection>

        {/* Course Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <p className="text-sm md:text-base text-gray-300 text-center max-w-3xl mx-auto">
            {langData.course.courseDescription}
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center mb-12"
        >
          <div className="w-full px-4 h-px bg-gray-600"></div>
        </motion.div>

        {/* What Will You Learn */}
        <CourseSection
          icon="🎓"
          title={langData.course.curriculum.title}
          delay={1.0}
        >
          <div className="grid grid-cols-2 gap-6">
            {langData.course.curriculum.items.map((item, index) => {
              const getIconAndColor = (itemName) => {
                if (itemName.includes('Premiere Pro')) return { icon: SiAdobepremierepro, color: 'text-purple-600' }
                if (itemName.includes('After Effects')) return { icon: SiAdobeaftereffects, color: 'text-purple-400' }
                if (itemName.includes('Photoshop')) return { icon: SiAdobephotoshop, color: 'text-blue-500' }
                if (itemName.includes('Blender')) return { icon: SiBlender, color: 'text-orange-500' }
                return { icon: null, color: '' }
              }

              const { icon: IconComponent, color } = getIconAndColor(item)

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  className=" rounded-lg p-6 transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col items-center space-y-3">
                    {IconComponent && <IconComponent className={`text-4xl ${color}`} />}
                    <span className="text-white font-semibold text-sm md:text-base text-center">{item}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </CourseSection>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center mb-12"
        >
          <div className="w-full px-4 h-px bg-gray-600"></div>
        </motion.div>

        {/* Requirements */}
        <CourseSection
          icon="🧰"
          title={langData.course.requirements.title}
          delay={1.5}
        >
          <ul className="space-y-3">
            {langData.course.requirements.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                className="text-sm md:text-base text-gray-300 flex items-start gap-2"
              >
                <span className="text-white mt-1">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </CourseSection>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex justify-center mb-12"
        >
          <div className="w-full px-4 h-px bg-gray-600"></div>
        </motion.div>

        {/* Course Logistics */}
        <div className="space-y-8">
          <CourseSection
            icon="📆"
            title={langData.course.logistics.duration}
            delay={1.9}
          />

          <CourseSection
            icon="📚"
            title={langData.course.logistics.schedule}
            delay={2.0}
          />

          <CourseSection
            icon="💻"
            title={langData.course.logistics.method}
            delay={2.1}
          >
            <div className="space-y-4 text-sm md:text-base text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                {langData.course.logistics.details}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.3 }}
              >
                {langData.course.logistics.assignments}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.4 }}
              >
                {langData.course.logistics.included}
              </motion.p>
            </div>
          </CourseSection>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex justify-center mb-12"
        >
          <div className="w-full px-4 h-px bg-gray-600"></div>
        </motion.div>

        {/* Pricing */}
        <CourseSection
          icon="💰"
          title={langData.course.pricing.title}
          delay={2.6}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.7 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-600 max-w-md mx-auto"
          >
            <div className="text-xl md:text-2xl font-bold text-white">
              150,000 Ks
            </div>
          </motion.div>
        </CourseSection>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="flex justify-center mb-12"
        >
          <div className="w-full px-4 h-px bg-gray-600"></div>
        </motion.div>

        {/* Contact */}
        <CourseSection
          icon="📩"
          title={langData.course.contact.title}
          delay={2.9}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.0 }}
            className="space-y-6"
          >
            {/* Inquire Now Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.a
                href="https://www.facebook.com/share/15xC1pXdLY/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full sm:w-auto px-6 py-3 rounded-xl cursor-pointer font-semibold text-sm md:text-base text-white uppercase tracking-wider transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                style={{
                  border: '1px solid rgba(59, 130, 246, 0.5)',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 16px 0 rgba(59, 130, 246, 0.2)'
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 12px 24px 0 rgba(59, 130, 246, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                delay={3.1}
              >
                <FaFacebook size={20} className="text-blue-400" />
                <span>{langData.course.contact.inquireNow}</span>
              </motion.a>

              <motion.a
                href="https://t.me/terminalxedit"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full sm:w-auto px-6 py-3 rounded-xl cursor-pointer font-semibold text-sm md:text-base text-white uppercase tracking-wider transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                style={{
                  border: '1px solid rgba(59, 130, 246, 0.5)',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 16px 0 rgba(59, 130, 246, 0.2)'
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 12px 24px 0 rgba(59, 130, 246, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                delay={3.2}
              >
                <FaTelegram size={20} className="text-blue-400" />
                <span>{langData.course.contact.inquireNow}</span>
              </motion.a>
            </div>
          </motion.div>
        </CourseSection>
      </div>

      <Footer />
    </div>
  )
}

export default Course