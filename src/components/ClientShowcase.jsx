import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguageContext } from '../globals/ContextProvider'

export function ClientShowcase() {
  const { langData } = useLanguageContext()
  const [activeClient, setActiveClient] = useState(null)
  const channels = [
    {
      logo: 'https://yt3.googleusercontent.com/deRV5yzdapSi1UWFDeoTgnHy3jdje8PaFfVLsvTtXn5-VeZ-R48wmbsledA001h5e6ruDdeC1kI=s160-c-k-c0x00ffffff-no-rj',
      name: 'ICE ICE',
      youtubeUrl: 'https://youtube.com/@iceiceofficialyoutubechannel?si=GTOER-FHFU1kmD0H',
    },
    {
      logo: 'https://yt3.googleusercontent.com/yDTVe9LnEv_ufQi1PHITmPOUIilNTCC5nB-9m9y3ULYVb4rw98fN4Oh9yhGH6TlIS9LIJfpP7zk=s160-c-k-c0x00ffffff-no-rj',
      name: 'KAST',
      youtubeUrl: 'https://youtube.com/@kast_official?si=YJKM5ypOyDpudHWS',
    },
    {
      logo: 'https://yt3.googleusercontent.com/UEI4aBs9t9JhRbldOgJapJpGt6P7Uz10Y9N_2Aip9Fae1CbzCnERaw7spD0PZJHHXzUqr13I=s160-c-k-c0x00ffffff-no-rj',
      name: 'Gunn',
      youtubeUrl: 'https://www.youtube.com/channel/UC6OvLpTRIZnzYKqSpPb61tA',
    },
    {
      logo: 'https://yt3.googleusercontent.com/9ZOcsn1smJFMf-oJPUwGl02cwfPixUndlzUuEJ3zIr1cPdhsk3yIt6Ux3M167tjQfHbweqzY=s160-c-k-c0x00ffffff-no-rj',
      name: 'MLBB',
      youtubeUrl: 'https://youtube.com/@mobilelegendsbangbangchann6106?si=Lx-5TDAUYpPXcZxa',
    },
    {
      logo: 'https://yt3.ggpht.com/-NJkD_HV23C3SIgmOsQKYI0N3lzzk50NFTax7N9U5YBXpF5rPwMBSv2kvHupZ4H4IegRxtoUYw=s88-c-k-c0x00ffffff-no-rj',
      name: 'Mythic Seal',
      youtubeUrl: 'https://youtu.be/YPyjTo2Dk9g?si=1XT25rEtEfmlQBXc',
    },
    {
      logo: 'https://yt3.ggpht.com/UI1wZIJ4BDKlpMmKsEg7SSQ4aK-yDL83uk9CyTX24PbjTfuVy1JN0ywT-Ae_B8BGIZ_GJ14y=s88-c-k-c0x00ffffff-no-rj',
      name: 'OLD ERA',
      youtubeUrl: 'https://youtu.be/RkoMIFnEBfk?si=P7Nh4YtCquLd9iIi',
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
              <div className="-z-10 group-hover:z-10 absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white text-center mb-2">{channel.name}</h3>
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