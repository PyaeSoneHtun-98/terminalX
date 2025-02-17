
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaBlog, FaInfoCircle } from 'react-icons/fa';
import { FaYoutube, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { useState } from 'react';
import VideoPage from './components/VideoPage';
import logoImage from './assets/logo.png';
import videosImage from './assets/VIDEOS.png';
import festivalImage from './assets/FESTIVAL.png';
import drinkImage from './assets/DRINK.png';

const Model = () => {
  const [isVideoPageOpen] = useState(false);
  
  return (
    <group>
      {/* Outer Lemon Shape */}
      <motion.mesh
        animate={{
          scale: isVideoPageOpen ? 0 : 1,
          rotateY: isVideoPageOpen ? Math.PI : 0
        }}
        transition={{ duration: 1 }}
      >
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#FFD700" roughness={0.3} metalness={0.2} transparent opacity={0.5} />
      </motion.mesh>

      {/* Inner Milk Box */}
      <motion.mesh
        position={[0, 0, 0]}
        scale={[0.9, 1.1, 0.9]}
        animate={{
          scale: isVideoPageOpen ? [0, 0, 0] : [0.9, 1.1, 0.9],
          rotateY: isVideoPageOpen ? Math.PI : 0
        }}
        transition={{ duration: 1 }}
      >
        <boxGeometry args={[1.5, 2, 1.5]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.05} metalness={0.8} />
        <Text
          position={[0, 0, 0.8]}
          fontSize={0.3}
          color="#000000"
          anchorX="center"
          anchorY="middle"
        >
          100% REAL
        </Text>
      </motion.mesh>
    </group>
  );

};

function App() {
  const [isVideoPageOpen, setIsVideoPageOpen] = useState(false);

  const mainContentVariants = {
    normal: { 
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    },
    hidden: { 
      scale: 0.9,
      filter: 'blur(5px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-sky-200 flex relative overflow-hidden">
      <motion.nav 
        className="fixed left-30 top-50 z-10 flex flex-col items-center"
        animate={isVideoPageOpen ? 'hidden' : 'normal'}
        variants={mainContentVariants}
      >
        <motion.img src={logoImage} whileHover={{ scale: 1.1 }}  alt="Logo" className="w-12" />
        <ul className="space-y-8 mt-8">
          <motion.li 
            whileHover={{ scale: 1.1 }} 
            className="cursor-pointer"
            onClick={() => setIsVideoPageOpen(true)}
          >
            <img src={videosImage} alt="Videos" className="w-32" />
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
            <img src={festivalImage} alt="Festival" className="w-36" />
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
            <img src={drinkImage} alt="Drink" className="w-32" />
          </motion.li>
        </ul>
      </motion.nav>

      <motion.div 
        className="flex-1 pl-48"
        animate={isVideoPageOpen ? 'hidden' : 'normal'}
        variants={mainContentVariants}
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Model isVideoPageOpen={isVideoPageOpen} />
          <OrbitControls />
        </Canvas>
      </motion.div>

      <motion.div 
        className="fixed bottom-7 left-1/2 transform -translate-x-1/2 flex gap-4"
        animate={isVideoPageOpen ? 'hidden' : 'normal'}
        variants={mainContentVariants}
      >
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-white">
          <FaYoutube size={24} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-white">
          <FaInstagram size={24} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-white">
          <FaTwitter size={24} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-white">
          <FaTiktok size={24} />
        </motion.a>
      </motion.div>

      <VideoPage isOpen={isVideoPageOpen} onClose={() => setIsVideoPageOpen(false)} />
    </div>
  );
}

export default App;
