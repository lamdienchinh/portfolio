'use client';

import { cn } from '@/lib/utils';
import type { Variants } from 'motion/react';
import { motion } from 'motion/react';

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: WordPullUpProps) {
  return (
    <motion.span
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        'font-display font-bold tracking-[-0.02em] drop-shadow-sm',
        className,
      )}
    >
      {words.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: 'inline-block', paddingRight: '8px' }}
        >
          {word === '' ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.span>
  );
}
