import { AboutMe } from '../components/AboutMe'
import { motion } from 'framer-motion'
import { useLanguageContext } from '../globals/ContextProvider'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";

export function Me() {
  const { langData } = useLanguageContext()
  const navigate = useNavigate()

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    viewport: { once: true, amount: 0.1 }
  }

  const leftVariants = {
    initial: { x: -50, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    },
    viewport: { once: true, amount: 0.1 }
  }

  const rightVariants = {
    initial: { x: 50, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    },
    viewport: { once: true, amount: 0.1 }
  }

  const topVariants = {
    initial: { y: -50, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    },
    viewport: { once: true, amount: 0.1 }
  }

  return (
    <div className="min-h-screen bg-[#060606] text-white overflow-x-hidden relative pb-4">
      <button onClick={() => navigate(-1)}
        className='absolute top-2 left-2 z-40 cursor-pointer'>
          <FiArrowLeft className="text-white text-2xl" />
      </button>
      {/* Video Section */}
      <div className="w-full max-w-none mx-auto h-[150px] md:h-[400px]">
        <video
          className="w-full h-[200px] md:h-[400px] object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./assets/edit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <AboutMe />
    </div>
  )
}