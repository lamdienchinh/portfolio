'use client';
import { motion } from 'motion/react';

export default function AboutMeHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="text-center relative"
    >
      <div className="inline-block relative">
        <h1 className="text-6xl font-bold text-primary">About Me</h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="h-1 bg-primary rounded-full mt-4"
        />
        <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
        <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
      </div>

      <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
        Discover my background, skills, and achievements. I'm passionate about
        creating exceptional digital experiences through innovative solutions.
      </p>
    </motion.div>
  );
}
