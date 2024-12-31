import { motion } from 'framer-motion';

export default function MissionStatement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto py-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Empowering Healthcare Through Technology
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed">
        At Neev, we're dedicated to transforming healthcare delivery through 
        innovative AI solutions. Our platform significantly reduces administrative 
        burden, allowing healthcare professionals to focus on what matters most - 
        patient care.
      </p>
    </motion.div>
  );
}