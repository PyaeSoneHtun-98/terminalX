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
            className="relative bg-gray-800 rounded-lg p-6 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleClientClick(index)}
            onHoverStart={() => setActiveClient(index)}
            onHoverEnd={() => setActiveClient(null)}
          >
            <img
              src={client.logo}
              alt={`${client.name} Logo`}
              className="h-24 w-auto mx-auto object-contain mb-4"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeClient === index ? 1 : 0 }}
              className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-90 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
              <p className="text-gray-300 text-center">"{client.testimonial}"</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ClientShowcase