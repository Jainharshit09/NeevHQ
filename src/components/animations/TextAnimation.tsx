import { motion } from 'framer-motion';

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export function AnimatedText({ text, className }: { text: string, className?: string }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          className={`inline-block ${className}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
}