'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      setIsAnimating(false);
    }, 300);
  };

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 focus:outline-none"
      aria-label="Toggle theme"
      disabled={isAnimating}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}  
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          {!isDark ? (
            <MoonIcon className="text-yellow-300" />
          ) : (
            <SunIcon className="text-orange-500" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
