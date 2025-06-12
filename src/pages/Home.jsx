import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import { Suspense } from 'react'
import { Computer } from '../components/Computer'
import { Room } from '../components/Room'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram, FaTiktok } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useLanguageContext } from '../globals/ContextProvider'

export function Home() {
  const navigate = useNavigate()
  const { langData } = useLanguageContext()

  return (
    <div className='overflow-x-hidden h-[100vh]' style={{ 
      width: '100vw', 
      position: 'relative',
    }}>
      <div className="flex flex-col md:flex-row h-full relative">
        {/* 3D Canvas */}
        <div className="w-full h-full order-1 md:order-2 ">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <Suspense fallback={null}>
              <Room />
              <Computer />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-3 md:gap-2 justify-center items-center md:justify-start md:items-start px-8 md:p-4 absolute left-1/2 md:left-1/4 top-[55%] md:transform -translate-x-1/2 -translate-y-1/5 md:-translate-y-1/2 md:space-y-4 z-10 order-2 md:order-1">
          {['me', 'projects', 'services', 'course', 'requirements'].map((route, index) => (
            <motion.button
            key={route}
            onClick={() => navigate(`/${route}`)}
            className="relative w-42 md:w-52 px-3 md:px-4 py-1 md:py-2 rounded-xl md:rounded-2xl cursor-pointer
                     font-pixel text-sm md:text-lg text-white uppercase tracking-wider
                     transition-all duration-300 hover:scale-105"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(5px) saturate(120%)',
              WebkitBackdropFilter: 'blur(20px) saturate(120%)',
              boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)'
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
              <span className="relative z-10 text-black font-bold">
                {langData.hero[route] || route}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-0 w-full pb-3 md:pb-6">
        <div className="flex justify-center items-center space-x-6">
          <motion.a 
            href="https://www.facebook.com/share/15xC1pXdLY/?mibextid=LQQJ4d" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black hover:text-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaFacebook size={20} />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/term2nalx?igsh=MXU1eTZlbnlueGR3dQ%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black hover:text-pink-500 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaInstagram size={20} />
          </motion.a>
          <motion.a 
            href="https://youtube.com/@term1nalx?si=YFE4rSReNZbT7IJF" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black hover:text-red-500 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaYoutube size={20} />
          </motion.a>
          <motion.a 
            href="https://www.tiktok.com/@terminqlx?_t=ZS-8uErswEjUME&_r=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black hover:text-red-300 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaTiktok size={20} />
          </motion.a>
          <motion.a 
            href="https://t.me/terminalxedit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaTelegram size={20} />
          </motion.a>
          <motion.a 
            href="mailto:terminaledge.x8@gmail.com" 
            className="text-black hover:text-green-500 transition-colors duration-300"
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