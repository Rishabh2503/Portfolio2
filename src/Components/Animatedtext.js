import { motion } from 'framer-motion';
import React from 'react';

const quoteVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className='container flex items-center justify-center py-2 mx-auto sm:py-0 '>
      <motion.h1
        className={`inline-block text-dark font-bold capitalize text-[4vw] md:text-[5vw] ${className} dark:text-light`}
        variants={quoteVariants}
        initial='initial'
        animate='animate'
      >
        {text.split(' ').map((word, index) => (
          <motion.span key={word + '-' + index} className='inline-block' variants={wordVariants}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;