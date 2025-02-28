import { useState } from 'react'
import { motion } from 'framer-motion'
import { CiShare1 } from "react-icons/ci"

export function ProjectCard({ title, description, image, videoUrl, projectUrl, tags, youtubeUrl }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (youtubeUrl) {
      window.open(youtubeUrl, '_blank')
    } else if (projectUrl) {
      window.open(projectUrl, '_blank')
    } else if (videoUrl) {
      window.open(videoUrl, '_blank')
    }
  }

  return (
    <motion.div
      className="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl"
      whileHover={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative aspect-video sm:aspect-video">
        {youtubeUrl ? (
          <iframe
            src={`${youtubeUrl.replace('youtu.be/', 'youtube.com/embed/')}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&rel=0&playlist=${youtubeUrl.split('/').pop()}&iv_load_policy=3&fs=0&disablekb=1`}
            className="w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : videoUrl ? (
          <video
            src={videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="pt-3 px-3 pb-2 flex flex-col h-full">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-1 sm:mb-2 overflow-y-auto">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-blue-500 text-white whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
        {(videoUrl || projectUrl || youtubeUrl) && (
          <div
            onClick={handleClick}
            className="mt-auto"
          >
            <button
              className="hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200 w-full justify-center border border-white/20 shadow-lg"
            >
              <CiShare1 className="text-base" />
              View Project
            </button>
            <div className="flex sm:hidden gap-2 pt-2 px2 w-full items-center cursor-pointer hover:text-white/80 group justify-center">
              <CiShare1 className="text-white text-sm group-hover:text-white/80" />
              <span className="text-white group-hover:text-white/80 text-xs">
                View Project
              </span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}