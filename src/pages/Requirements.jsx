import { motion } from 'framer-motion';
import { useLanguageContext } from '../globals/ContextProvider';

export function Requirements() {
  const { langData } = useLanguageContext();

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

  return (
    <div className="min-h-screen bg-[#060606] text-white overflow-x-hidden relative pb-4">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto px-2 lg:px-4 py-4 lg:py-16"
      >
        <motion.h2
          variants={itemVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="text-4xl font-bold text-center mb-6 lg:mb-16"
        >
          {langData.requirements?.title || 'Requirements'}
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {langData.requirements?.items?.map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          )) || (
            <div className="col-span-full text-center text-gray-300">
              Requirements content will be available soon.
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Requirements;