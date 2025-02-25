import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import { Suspense } from 'react'
import { Computer } from '../components/Computer'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { useLanguageContext } from '../globals/ContextProvider'

export function Home() {
  const navigate = useNavigate()
  const { langData } = useLanguageContext()

  return (
    <div className='overflow-x-hidden' style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#060606', 
      position: 'relative',
      backgroundImage: 'url(./assets/cloud.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="flex flex-col-reverse md:flex-row h-full relative">
        {/* Navigation Buttons */}
        <div className="md:absolute md:left-1/4 md:top-1/2 md:transform md:-translate-y-1/2 space-y-2 z-10 mt-2 md:mt-0 flex flex-col items-center md:items-start">
          <motion.button
            onClick={() => navigate('/me')}
            className="block px-2 py-1 text-white rounded-lg text-xs md:text-sm w-40 md:px-4 md:py-2 attractive-button"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {langData.hero.viewMore}
          </motion.button>
          <motion.button
            onClick={() => navigate('/projects')}
            className="block px-2 py-1 text-white rounded-lg text-xs md:text-sm w-40 md:px-4 md:py-2 attractive-button"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Projects
          </motion.button>
          <motion.button
            onClick={() => navigate('/services')}
            className="block px-2 py-1 text-white rounded-lg text-xs md:text-sm w-40 md:px-4 md:py-2 attractive-button"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Services
          </motion.button>
          <motion.button
            onClick={() => navigate('/clients')}
            className="block px-2 py-1 text-white rounded-lg text-xs md:text-sm w-40 md:px-4 md:py-2 attractive-button"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Clients
          </motion.button>
        </div>

        {/* 3D Canvas */}
        <div className="w-full md:w-full h-[35vh]  md:h-full md:ml-72">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <Suspense fallback={null}>
              <Computer />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full pb-6">
        <div className="flex justify-center items-center space-x-6">
          <motion.a 
            href="https://facebook.com" 
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
            href="https://youtube.com" 
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