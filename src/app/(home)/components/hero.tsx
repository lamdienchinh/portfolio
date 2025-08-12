'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

import chinh from '@/assets/imgs/chinh.jpg';
import { WordPullUp } from '@/components/ui/word-pull-up';
import ContactList from './contact-list';
import Skill from './skill';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = document.getElementById('profile-image');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = (y - centerY) / 20;
    const rotateYValue = (centerX - x) / 20;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const resetRotation = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      ref={containerRef}
      className="relative lg:mt-[-80px] flex flex-col justify-center py-16 md:py-24 container"
      id="introduction"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10" />

      <motion.div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1 pt-4"
        >
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <span className="animate-pulse mr-2 text-primary">●</span>
            Available for work
          </div>

          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold my-6">
            <div>
              <WordPullUp words="Hey there !" className="text-primary" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <WordPullUp words="I'm Lam Dien Chinh" />
              <WordPullUp
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600 dark:from-primary dark:via-blue-400 dark:to-purple-500"
                words="Frontend Developer"
              />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-lg sm:text-xl mb-8 text-muted-foreground leading-relaxed"
          >
            Crafting <span className="text-primary font-medium">beautiful</span>{' '}
            & <span className="text-blue-500 font-medium">intuitive</span>{' '}
            digital experiences with modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8"
          >
            <ContactList />
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: 'spring',
            stiffness: 100,
          }}
          className="relative flex justify-center order-1 lg:order-2"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetRotation}
        >
          {/* Decorative elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 to-purple-600/40 rounded-full opacity-70 blur-2xl animate-pulse -z-10" />

          {/* Image with 3D effect */}
          <div
            id="profile-image"
            className="relative bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-1.5 rounded-full shadow-xl"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.1s ease-out',
              maxWidth: 'min(100%, 400px)',
            }}
          >
            <div className="overflow-hidden rounded-full">
              <Image
                className="aspect-square object-cover"
                src={chinh}
                alt="Chinh"
                priority
                width={400}
                height={400}
              />
            </div>

            {/* Decorative circles - simplified and more subtle */}
            <motion.div
              className="absolute top-5 -right-4 w-6 h-6 bg-blue-500/80 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-2 right-10 w-4 h-4 bg-purple-500/80 rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -left-4 top-1/2 w-8 h-8 bg-primary/80 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: 'easeInOut',
              }}
            />

            {/* Status indicator */}
            <div className="absolute bottom-10 -right-4 bg-card rounded-full p-2 shadow-md border border-border">
              <div className="flex items-center gap-2 px-3 py-1">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Online</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="w-full mt-16 md:mt-24"
      >
        <div className="space-y-3">
          <div className="relative">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <Skill />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
