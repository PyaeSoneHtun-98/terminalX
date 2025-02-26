import { ProjectCard } from '../components/ProjectCard'
import { motion } from 'framer-motion'
import { Carousel } from '../components/Carousel'

export function Projects() {
  const projects = [
    {
      title: 'Video Edit Showcase',
      description: 'A dynamic video editing project demonstrating transitions and effects',
      image: '/assets/Blank.png',
      videoUrl: '/assets/edit.mp4',
      tags: ['Video Editing', 'After Effects', 'Motion Graphics']
    },
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
      title: 'Corporate Video Production',
      description: 'Professional corporate video production and editing',
      image: '/assets/Dee.png',
      videoUrl: '/assets/edit.mp4',
      tags: ['Corporate', 'Production', 'Editing']
    },
    {
      title: '3D Animation Showcase',
      description: 'Impressive 3D animations and character modeling',
      image: '/assets/logo.png',
      videoUrl: '/assets/edit.mp4',
      tags: ['3D Animation', 'Modeling', 'Cinema 4D']
    },
    {
      title: 'Social Media Content',
      description: 'Engaging social media video content and animations',
      image: '/assets/Blank.png',
      videoUrl: '/assets/edit.mp4',
      tags: ['Social Media', 'Content Creation', 'Animation']
    }
  ]

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          My Projects
        </motion.h1>
        
        <Carousel
          items={projects.map((project, index) => (
            <div key={index} className="px-4">
              <ProjectCard {...project} />
            </div>
          ))}
        />
      </div>
    </div>
  );
}