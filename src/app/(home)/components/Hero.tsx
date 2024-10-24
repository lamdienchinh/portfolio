'use client';
import { WordPullUp } from '@/components/ui/word-pull-up';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Facebook, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'GraphQL',
  'Node.js',
];

export default function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex(prevIndex => (prevIndex + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="flex items-start container text-gray-900 dark:text-gray-100"
      id="introduction"
    >
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <div>
              <WordPullUp words="Xin chào !" />
            </div>
            <div>
              <span className="">
                <WordPullUp words="Tôi là" />
                <WordPullUp
                  className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-100"
                  words="Frontend Developer"
                />
              </span>
            </div>
          </div>
          <p className="text-xl sm:text-2xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
            Chuyên tạo ra những trải nghiệm web đột phá với
          </p>
        </motion.div>

        <motion.div
          className="text-3xl md:text-4xl font-bold mb-12 h-12 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSkillIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block text-gray-800 dark:text-white"
            >
              {skills[currentSkillIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-150 ease-in-out"
          >
            Xem Dự Án <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
          >
            Liên Hệ
          </Link>
        </motion.div>

        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://www.facebook.com/profile.php?id=100011284771532&locale=vi_VN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition duration-150 ease-in-out"
          >
            <Facebook className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://github.com/lamdienchinh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition duration-150 ease-in-out"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/lamdienchinh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition duration-150 ease-in-out"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:lamdienchinhtd9a2@example.com"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition duration-150 ease-in-out"
          >
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
