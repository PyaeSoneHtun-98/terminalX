import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import { Suspense } from 'react'
import { Computer } from '../components/Computer'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useLanguageContext } from '../globals/ContextProvider'

export function Home() {
  const navigate = useNavigate()
  const { langData } = useLanguageContext()

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#060606', 
      position: 'relative',
      backgroundImage: 'url(./src/assets/cloud.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <Computer />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-0 left-0 w-full pb-20">
        <button
          onClick={() => navigate('/me')}
          className="block mx-auto mb-24 px-6 py-3 text-white rounded-lg attractive-button"
        >
          {langData.hero.viewMore}
        </button>
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
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaTwitter size={20} />
          </motion.a>
          <motion.a 
            href="mailto:contact@example.com" 
            className="text-white hover:text-yellow-500 transition-colors duration-300"
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