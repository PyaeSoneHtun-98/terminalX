import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguageContext } from '../globals/ContextProvider'

export function ClientShowcase() {
  const { langData } = useLanguageContext()
  const [activeClient, setActiveClient] = useState(null)
  const channels = [
    {
      logo: '/assets/channel1.png',
      name: 'Channel 1',
      youtubeUrl: 'https://youtube.com/channel1',
      subscribers: '1.2M Subscribers'
    },
    {
      logo: '/assets/channel2.png',
      name: 'Channel 2',
      youtubeUrl: 'https://youtube.com/channel2',
      subscribers: '850K Subscribers'
    },
    {
      logo: '/assets/channel3.png',
      name: 'Channel 3',
      youtubeUrl: 'https://youtube.com/channel3',
      subscribers: '2M Subscribers'
    },
    {
      logo: '/assets/channel4.png',
      name: 'Channel 4',
      youtubeUrl: 'https://youtube.com/channel4',
      subscribers: '500K Subscribers'
    },
    {
      logo: '/assets/channel5.png',
      name: 'Channel 5',
      youtubeUrl: 'https://youtube.com/channel5',
      subscribers: '1.5M Subscribers'
    },
    {
      logo: '/assets/channel6.png',
      name: 'Channel 6',
      youtubeUrl: 'https://youtube.com/channel6',
      subscribers: '750K Subscribers'
    }
  ]

  const handleChannelClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="w-full pb-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">{langData.clients.title}</h2>
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {channels.map((channel, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer max-w-[120px] mx-auto w-full"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleChannelClick(channel.youtubeUrl)}
            role="link"
            tabIndex={0}
            aria-label={`Visit ${channel.name}'s YouTube channel`}
            onKeyPress={(e) => e.key === 'Enter' && handleChannelClick(channel.youtubeUrl)}
          >
            <div className="relative w-full pb-[100%] rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-red-600 transition-colors duration-300">
              <img
                src={channel.logo}
                alt={`${channel.name} Channel Logo`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white text-center mb-2">{channel.name}</h3>
                  <p className="text-sm text-gray-300 text-center">{channel.subscribers}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ClientShowcase