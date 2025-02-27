import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import { Suspense } from 'react'
import { Computer } from '../components/Computer'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { useLanguageContext } from '../globals/ContextProvider'

export function Home() {
  const navigate = useNavigate()
  const { langData } = useLanguageContext()

  return (
    <div className='overflow-x-hidden h-[100vh]' style={{ 
      width: '100vw', 
      backgroundColor: '#060606', 
      position: 'relative',
      backgroundImage: 'url(./assets/cloud.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="flex flex-col md:flex-row h-full relative">
        {/* 3D Canvas */}
        <div className="w-full h-[70vh] md:w-full md:h-full md:ml-72 order-1 md:order-2">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <Suspense fallback={null}>
              <Computer />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-1 md:gap-2 justify-center items-center md:justify-start md:items-start px-8 md:p-4 absolute left-1/2 md:left-1/4 top-1/2 md:transform -translate-x-1/2 -translate-y-1/5 md:-translate-y-1/2 md:space-y-4 z-10 order-2 md:order-1">
          {['me', 'projects', 'services', 'course', 'requirements'].map((route, index) => (
            <motion.button
              key={route}
              onClick={() => navigate(`/${route}`)}
              className="relative w-42 md:w-52 h-10 md:h-12 px-3 md:px-4 py-1 md:py-2 bg-white border-4 border-[#4A3423] rounded-none
                       font-pixel text-sm md:text-lg text-[#2C1810] uppercase tracking-wider
                       before:content-[''] before:absolute before:inset-0 before:bg-[#F5F5F5]
                       before:border-t-4 before:border-[#E0E0E0] before:transform before:translate-y-[-2px]
                       hover:before:translate-y-0 hover:translate-y-[2px]
                       active:before:translate-y-0 active:translate-y-[4px]
                       transition-all duration-100 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10 text-[#2C1810] font-bold">
                {langData.hero[route] || route}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-0 w-full pb-6">
        <div className="flex justify-center items-center space-x-6">
          <motion.a 
            href="https://www.facebook.com/share/15xC1pXdLY/?mibextid=LQQJ4d" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaFacebook size={20} />
          </motion.a>
          <motion.a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-pink-500 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaInstagram size={20} />
          </motion.a>
          <motion.a 
            href="https://youtube.com/@term1nalx?si=YFE4rSReNZbT7IJF" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-red-500 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaYoutube size={20} />
          </motion.a>
          <motion.a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaXTwitter size={20} />
          </motion.a>
          <motion.a 
            href="https://t.me/terminalxedit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaTelegram size={20} />
          </motion.a>
          <motion.a 
            href="mailto:contact@example.com" 
            className="text-white hover:text-green-500 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <MdEmail size={20} />
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Home