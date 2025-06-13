import { ProjectCard } from '../components/ProjectCard'
import { motion } from 'framer-motion'
import { Carousel } from '../components/Carousel'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"
import { BeforeAfter } from '../components/BeforeAfter'
import { useLanguageContext } from '../globals/ContextProvider'

export function Projects() {
  const navigate = useNavigate()
  const { langData } = useLanguageContext()
  const projectsByCategory = {
    musicAndLyrics: [
      {
        title: 'Lyric Video Animation',
        description: 'Animated lyric video with dynamic typography',
        image: '/assets/logo.png',
        youtubeUrl: 'https://youtu.be/RkoMIFnEBfk',
        tags: ['Lyrics', 'Animation', 'Typography']
      },
      {
        title: 'Music Video Production',
        description: 'Professional music video with artistic direction',
        image: '/assets/logo.png',
        youtubeUrl: 'https://youtu.be/iq9HcvgWD8Q',
        tags: ['Music Video', 'Production', 'Artistic']
      },
      {
        title: 'Music Video Production',
        description: 'Professional music video with artistic direction',
        image: '/assets/logo.png',
        youtubeUrl: 'https://youtu.be/PLCHlqNsQKc',
        tags: ['Music Video', 'Production', 'Artistic']
      },
      {
        title: 'Music Video Production',
        description: 'Professional music video with artistic direction',
        image: '/assets/logo.png',
        youtubeUrl: 'https://youtu.be/6nrJi83cxZ8',
        tags: ['Music Video', 'Production', 'Artistic']
      },
      {
        title: 'Music Video Production',
        description: 'Professional music video with artistic direction',
        image: '/assets/logo.png',
        youtubeUrl: 'https://youtu.be/S-3fgCKY1DQ',
        tags: ['Music Video', 'Production', 'Artistic']
      },
    ],
    gaming: [
      {
        title: 'Gaming Highlights',
        description: 'Dynamic gaming montage with effects and synced editing',
        image: '/assets/Blank.png',
        youtubeUrl: 'https://youtu.be/lVAWSK3LR8U',
        tags: ['Gaming', 'Montage', 'Effects']
      },
      {
        title: 'Gaming Highlights',
        description: 'Dynamic gaming montage with effects and synced editing',
        image: '/assets/Blank.png',
        youtubeUrl: 'https://youtu.be/6rWF9es1wss',
        tags: ['Gaming', 'Montage', 'Effects']
      },
      
    ],
    documentaries: [
      {
        title: 'Travel Vlog',
        description: 'Engaging travel vlog with cinematic elements',
        image: '/assets/cloud.jpg',
        youtubeUrl: 'https://youtu.be/mGiBTbxCUgU',
        tags: ['Vlog', 'Travel', 'Cinematic']
      },
      {
        title: 'Documentary: Myanmar Culture',
        description: 'Cultural documentary showcasing Myanmar traditions',
        image: '/assets/Dee.png',
        youtubeUrl: 'https://youtu.be/0ZoOiiw5wdY',
        tags: ['Documentary', 'Culture', 'Storytelling']
      },
      {
        title: 'Documentary: Local Stories',
        description: 'Documentary highlighting local perspectives and stories',
        image: '/assets/ice.png',
        youtubeUrl: 'https://youtu.be/hlLhxgE9xxk',
        tags: ['Documentary', 'Local Stories', 'Cinematography']
      }
    ],
    creativeEdits: [
      {
        title: 'Personal Edit Showcase',
        description: 'Creative personal edits with dynamic transitions and effects',
        image: '/assets/Blank.png',
        youtubeUrl: 'https://youtu.be/6RrEFgfeRZk',
        tags: ['Personal Edit', 'Creative', 'Transitions']
      },
      {
        title: 'Personal Style Edit',
        description: 'Stylized personal content with unique visual approach',
        image: '/assets/cloud.jpg',
        youtubeUrl: 'https://youtu.be/pGoc4ZL9I8E',
        tags: ['Style Edit', 'Visual Effects', 'Creative']
      },
      {
        title: 'Creative Music Edit',
        description: 'Creative edit combining music and visual elements',
        image: '/assets/ice.png',
        youtubeUrl: 'https://youtu.be/3aTZFb7hopo',
        tags: ['Music', 'Creative Edit', 'Visual']
      },
      {
        title: 'Stylized Lyric Video',
        description: 'Stylized lyric video with creative visual effects',
        image: '/assets/Blank.png',
        youtubeUrl: 'https://youtu.be/uRxyxgrxKEw',
        tags: ['Lyrics', 'Style', 'Effects']
      }
    ],
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
        <div className="relative mb-16">
          <motion.h1
            className="text-5xl text-white font-extrabold text-center mb-2 relative z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {langData.hero.projects_cooked}
          </motion.h1>
        </div>

        {/* Music & Lyrics Section */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-white text-center">Music & Lyrics</h2>
          <Carousel
            items={projectsByCategory.musicAndLyrics.map((project, index) => (
              <div key={index} className="px-4">
                <ProjectCard {...project} />
              </div>
            ))}
          />
        </motion.section>

        {/* Gaming Section */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-white text-center">Gaming Edits</h2>
          <Carousel
            items={projectsByCategory.gaming.map((project, index) => (
              <div key={index} className="px-4">
                <ProjectCard {...project} />
              </div>
            ))}
          />
        </motion.section>

        {/* Documentaries Section */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-white text-center">Documentaries</h2>
          <Carousel
            items={projectsByCategory.documentaries.map((project, index) => (
              <div key={index} className="px-4">
                <ProjectCard {...project} />
              </div>
            ))}
          />
        </motion.section>

        {/* Creative Edits Section */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-white text-center">Creative Edits</h2>
          <Carousel
            items={projectsByCategory.creativeEdits.map((project, index) => (
              <div key={index} className="px-4">
                <ProjectCard {...project} />
              </div>
            ))}
          />
        </motion.section>

        {/* Thumbnail Sample Section */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-white flex justify-center">Thumbnail Samples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <BeforeAfter
              beforeImage="/assets/before_1.png"
              afterImage="/assets/after_1.png"
            />
            <BeforeAfter
              beforeImage="/assets/before_2.png"
              afterImage="/assets/after_2.png"
            />
            <BeforeAfter
              beforeImage="/assets/before_3.png"
              afterImage="/assets/after_3.png"
            />
            <BeforeAfter
              beforeImage="/assets/before_4.jpg"
              afterImage="/assets/after_4.png"
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}