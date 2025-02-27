import { ProjectCard } from '../components/ProjectCard'
import { motion } from 'framer-motion'
import { Carousel } from '../components/Carousel'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"

export function Projects() {
  const navigate = useNavigate()
  const projectsByCategory = {
    videoEditing: [
      {
        title: 'Video Edit Showcase',
        description: 'A dynamic video editing project demonstrating transitions and effects',
        image: '/assets/Blank.png',
        videoUrl: '/assets/edit.mp4',
        tags: ['Video Editing', 'After Effects', 'Motion Graphics']
      },
      {
        title: 'Corporate Video Production',
        description: 'Professional corporate video production and editing',
        image: '/assets/Dee.png',
        videoUrl: '/assets/edit.mp4',
        tags: ['Corporate', 'Production', 'Editing']
      },
      {
        title: 'Event Cinematography',
        description: 'Professional event coverage with cinematic style and emotional depth',
        image: '/assets/cloud.jpg',
        videoUrl: '/assets/edit.mp4',
        tags: ['Events', 'Cinematography', 'Live Production']
      }
    ],
    motionGraphics: [
      {
        title: 'Motion Graphics Portfolio',
        description: 'Creative motion graphics and animations for digital media',
        image: '/assets/ice.png',
        videoUrl: '/assets/edit.mp4',
        tags: ['Motion Graphics', 'Animation', 'Design']
      },
      {
        title: 'Visual Effects Project',
        description: 'Stunning visual effects and compositing work',
        image: '/assets/cloud.jpg',
        videoUrl: '/assets/edit.mp4',
        tags: ['VFX', 'Compositing', 'After Effects']
      },
      {
        title: 'Social Media Content',
        description: 'Engaging social media video content and animations',
        image: '/assets/Blank.png',
        videoUrl: '/assets/edit.mp4',
        tags: ['Social Media', 'Content Creation', 'Animation']
      }
    ],
    animation3D: [
      {
        title: '3D Animation Showcase',
        description: 'Impressive 3D animations and character modeling',
        image: '/assets/logo.png',
        videoUrl: '/assets/edit.mp4',
        tags: ['3D Animation', 'Modeling', 'Cinema 4D']
      },
      {
        title: 'Commercial Advertisement',
        description: 'High-impact commercial video production with compelling storytelling',
        image: '/assets/logo.png',
        videoUrl: '/assets/edit.mp4',
        tags: ['Commercial', 'Advertising', 'Storytelling']
      }
    ]
  }

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 relative">
      <button onClick={() => navigate(-1)} className='absolute top-2 left-2 z-40 cursor-pointer'>
        <FiArrowLeft className="text-white text-2xl" />
      </button>
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          My Projects
        </motion.h1>
        
        {/* Video Editing Section */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-white text-center">Video Editing</h2>
          <Carousel
            items={projectsByCategory.videoEditing.map((project, index) => (
              <div key={index} className="px-4">
                <ProjectCard {...project} />
              </div>
            ))}
          />
        </motion.section>

        {/* Motion Graphics Section */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-white text-center">Motion Graphics & VFX</h2>
          <Carousel
            items={projectsByCategory.motionGraphics.map((project, index) => (
              <div key={index} className="px-4">
                <ProjectCard {...project} />
              </div>
            ))}
          />
        </motion.section>

        {/* 3D Animation Section */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-white text-center">3D Animation</h2>
          <Carousel
            items={projectsByCategory.animation3D.map((project, index) => (
              <div key={index} className="px-4">
                <ProjectCard {...project} />
              </div>
            ))}
          />
        </motion.section>
      </div>
    </div>
  );
}