import React from 'react'
import { motion } from 'framer-motion'

export const CourseSection = ({ icon, title, children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`mb-8 md:mb-12 ${className}`}
    >
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <span>{icon}</span>
        {title}
      </h3>
      {children}
    </motion.div>
  )
}

export default CourseSection