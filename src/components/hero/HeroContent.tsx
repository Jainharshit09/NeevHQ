import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedText } from '../animations/TextAnimation';

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="z-10"
    >
      <h1 className="text-6xl font-bold text-gray-900 mb-6 flex flex-col">
        <AnimatedText text="Transform" className="inline-block" />
        <span className="flex items-center gap-2">
          <AnimatedText
            text="Healthcare"
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
          />
          <AnimatedText text="with AI" />
        </span>
      </h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl text-gray-600 mb-8"
      >
        Empowering healthcare professionals with cutting-edge AI and diagnostic tools.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
      >
        Get Started <ArrowRight size={20} />
      </motion.button>
    </motion.div>
  );
}