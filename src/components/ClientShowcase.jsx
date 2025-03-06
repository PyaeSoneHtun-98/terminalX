import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguageContext } from '../globals/ContextProvider'

export function ClientShowcase() {
  const { langData } = useLanguageContext()
  const [activeClient, setActiveClient] = useState(null)
  const clients = [
    {
      logo: '/assets/logo.png',
      name: 'Client 1',
      testimonial: 'Amazing service and outstanding results!'
    },
    {
      logo: '/assets/logo.png',
      name: 'Client 2',
      testimonial: 'Exceeded our expectations in every way.'
    },
    {
      logo: '/assets/logo.png',
      name: 'Client 3',
      testimonial: 'Innovative solutions that transformed our business.'
    },
    {
      logo: '/assets/logo.png',
      name: 'Client 4',
      testimonial: 'Professional team with exceptional skills.'
    },
    {
      logo: '/assets/logo.png',
      name: 'Client 5',
      testimonial: 'Outstanding partnership and great results.'
    },
    {
      logo: '/assets/logo.png',
      name: 'Client 6',
      testimonial: 'Highly recommended for any business needs.'
    }
  ]

  const handleClientClick = (index) => {
    setActiveClient(activeClient === index ? null : index)
  }

  return (
    <div className="w-full pb-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">{langData.clients.title}</h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 rounded-lg p-4 sm:p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleClientClick(index)}
            onHoverStart={() => setActiveClient(index)}
            onHoverEnd={() => setActiveClient(null)}
            role="button"
            tabIndex={0}
            aria-expanded={activeClient === index}
            aria-label={`View testimonial from ${client.name}`}
            onKeyPress={(e) => e.key === 'Enter' && handleClientClick(index)}
          >
            <img
              src={client.logo}
              alt={`${client.name} Logo`}
              className="h-16 sm:h-24 w-auto mx-auto object-contain mb-2 sm:mb-4"
              loading="lazy"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeClient === index ? 1 : 0 }}
              className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-90 p-3 sm:p-6 rounded-lg"
              role="region"
              aria-label={`Testimonial from ${client.name}`}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{client.name}</h3>
              <p className="text-sm sm:text-base text-gray-300 text-center">"{client.testimonial}"</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ClientShowcase