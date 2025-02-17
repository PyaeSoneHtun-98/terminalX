import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Lemon3D from './Lemon3D';

const VideoPage = ({ isOpen, onClose }) => {
  const pageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      className={`fixed top-0 right-0 w-full h-full bg-white z-50 ${!isOpen && 'pointer-events-none'}`}
      variants={pageVariants}
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      style={{ perspective: '1000px' }}
    >
      <div className="p-6 h-full flex flex-col overflow-hidden">
        <motion.button
          variants={itemVariants}
          onClick={onClose}
          className="flex items-center text-xl font-semibold mb-4 hover:text-yellow-400 transition-colors z-10"
        >
          <FaArrowLeft className="mr-2" /> BACK
        </motion.button>
      
        <div className="flex gap-4 h-[calc(100%-4rem)] overflow-hidden">
          <motion.div 
            variants={itemVariants}
            className="flex-1 flex flex-col min-w-0"
          >
            <div className="relative h-[70vh] bg-black rounded-lg overflow-hidden">
              <Lemon3D videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" />
            </div>
            <div className="mt-4">
              <motion.h1 
                variants={itemVariants}
                className="text-2xl font-bold mb-2 truncate"
              >
                Video Title
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-gray-600"
              >
                1M views • 1 month ago
              </motion.p>
            </div>
          </motion.div>
      
          <motion.div 
            variants={itemVariants}
            className="w-[400px] flex-shrink-0 overflow-hidden flex flex-col"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-xl font-semibold mb-4"
            >
              Up Next
            </motion.h2>
            <div className="overflow-y-auto flex-1 pr-2 space-y-3">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors group"
                >
                  <div className="w-40 aspect-video bg-gray-200 flex-shrink-0 rounded-md overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium line-clamp-2 text-sm">{video.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
                    <p className="text-sm text-gray-600">{video.views} • {video.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoPage;