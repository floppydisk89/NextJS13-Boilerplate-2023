import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Framer.module.scss';

export default function Framer() {
  return (
    <div className={styles.framerContainer}>
      <motion.h1 animate={{ fontSize: 50, color: '#ff2994', x: 0, y: 200 }}>
        Framer motion example
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 100,
          mass: 0.4,
          damping: 4,
        }}
        whileHover={{ scale: 1.2 }}
      >
        Secondary title
      </motion.h2>
      <motion.button animate={{ scale: 1.5 }}>Animated Button</motion.button>
      <motion.h3
        transition={{
          delay: 1,
          x: { duration: 1 },
          default: { ease: 'linear' },
        }}
      >
        Stuff
      </motion.h3>
    </div>
  );
}
