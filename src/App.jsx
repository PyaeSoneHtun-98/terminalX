
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaBlog, FaInfoCircle } from 'react-icons/fa';
import { FaYoutube, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import logoImage from './assets/logo.png';
import videosImage from './assets/VIDEOS.png';
import festivalImage from './assets/FESTIVAL.png';
import drinkImage from './assets/DRINK.png';

const Model = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-sky-200 flex relative overflow-hidden">
      {/* Navigation Menu */}
      <nav className="fixed left-10 top-10 z-10 flex flex-col items-center">
        <motion.img src={logoImage} whileHover={{ scale: 1.1 }}  alt="Logo" className="w-12" />
        <ul className="space-y-8 mt-8">
          <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
            <img src={videosImage} alt="Videos" className="w-32" />
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
            <img src={festivalImage} alt="Festival" className="w-32" />
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
            <img src={drinkImage} alt="Drink" className="w-32" />
          </motion.li>
        </ul>
      </nav>

      {/* 3D Canvas */}
      <div className="flex-1">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Model />
          <OrbitControls />
        </Canvas>
      </div>

      {/* Social Media Icons */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
        <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-white">
          <FaYoutube size={24} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-white">
          <FaInstagram size={24} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-white">
          <FaTwitter size={24} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-white">
          <FaTiktok size={24} />
        </motion.a>
      </div>
    </div>
  );
}

export default App;
