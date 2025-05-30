import React from 'react'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full absolute bottom-1 left-0 flex justify-center"
    >
      <div className="container mx-auto">
        <p className="text-center text-gray-400 text-[8px] md:text-[10px] ">
        Designed by PyaeSoneHtun
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer